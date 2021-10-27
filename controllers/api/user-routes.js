// creating CRUD operation routes that work with the User model
const router = require("express").Router();
const { User } = require("../../models");
const chalk = require("chalk");

// GET/api/users
router.get("/", (req, res) => {
  // findAll is one of the model class methods
  // querying all of the users from the user table in the db || SELECT * FROM
  User.findAll({
    attributes: {exclude: ['password']}
  })
    .then((dbUserdata) => res.json(dbUserdata))
    .catch((err) => {
      console.log(chalk.blue(err));
    });
});

// GET/api/users/1
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ['password']},
    // where option = SELECT * FROM users WHERE id = 1
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserdata) => {
      if (!dbUserdata) {
        // 404 = wrong piece of data looked for
        res.status(404).json({ message: "no user found with this id" });
        return;
      }
      res.json(dbUserdata);
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
    //   (username, email, password)
    //   VALUES('username', 'email', 'password')
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserdata) => res.json(dbUserdata))
    .catch((err) => {
      console.log(chalk.blue(err));
      // 500 = internal server error
      res.status(500).json(err);
    });
});

// POST/api/users
router.post('/login', (req, res) => {
  console.log(chalk.blue("request received"))
  User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(dbUserdata => {
    if (!dbUserdata) {
      res.status(400).json({message: "No user found with that email address"});
      return;
    }
    res.json({user: dbUserdata});
    // verify user
  })
})

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
    .then((dbUserdata) => {
      if (!dbUserdata[0]) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserdata);
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
    .then((dbUserdata) => {
      if (!dbUserdata) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserdata);
    })
    .catch((err) => {
      console.log(chalk.blue(err));
      res.status(500).json(err);
    });
});

module.exports = router;