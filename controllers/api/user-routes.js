// creating CRUD operation routes that work with the User model
const router = require("express").Router();
const { User, Resort, Review } = require("../../models");
const chalk = require("chalk");

// GET/api/users
router.get("/", (req, res) => {
  // findAll is one of the model class methods
  // querying all of the users from the user table in the db || SELECT * FROM
  User.findAll({
    attributes: { exclude: ["password"] },  
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(chalk.blue(err));
    });
});

// GET/api/users/1
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    // where option = SELECT * FROM users WHERE id = 1
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Resort,
        attributes: ['id', 'resort_title', 'resort_content', 'annual_snowfall'],
      },
      {
        model: Review,
        attributes: ['id', 'review_text', 'created_at' ],
        include: {
          model: Resort,
          attributes: ['resort_title']
        }
      }
    ]
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        // 404 = wrong piece of data looked for
        res.status(404).json({ message: "no user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(chalk.blue(err));
      res.status(500).json(err);
    });
});

// POST/api/users
router.post("/", (req, res) => {
  // expects username, email and password
  User.create({
    // passsing in key/value, values comes from req.body
    // SQL looks like INSERT INTO users
    // VALUES('username', 'email', 'password')
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id - dbUserData.user_id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
       
      });
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(chalk.blue(err));
      // 500 = internal server error
      res.status(500).json(err);
    });
});

// POST/api/users
router.post("/login", (req, res) => {
  console.log(chalk.blue(req.body.password));
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "No user found with that email address" });
      return;
    }
    // verify user || pass in plaintext password as an argument
    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password" });
      return;
    }

    req.session.save(() => {
      req.session.user_id - dbUserData.user_id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
     
      res.json(dbUserData);
    });
    });
  });


router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// PUT/api/users/1
router.put("/:id", (req, res) => {
  // SQL funcs = UPDATE, SET, WHERE
  // expects {username, email and password} and combines parameters for creating data and looking up data
  // // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead which passes in the data
  User.update(req.body, {
    individualHooks: true,
    where: {
      // indicates where exactly the new data is to be used
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(chalk.blue(err));
    });
});

// DELETE/api/users/1
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(chalk.blue(err));
      res.status(500).json(err);
    });
});

module.exports = router;
