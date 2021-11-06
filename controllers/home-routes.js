// res.render() can accept a second argument, an object, which includes all the data to be passed in
const router = require("express").Router();
const { Content, Resort, Review, User } = require("../models");
const chalk = require("chalk");

router.get("/", (req, res) => {
  console.log(chalk.blueBright(req.session));
  Content.findAll({}).then((dbContentData) => {
    // console.log(dbContentData[0].content);
    res.render("homepage", {
      // .content matches the model
      content: dbContentData[0].content,
      title: dbContentData[0].title,
    });
  });
});

router.get("/resorts", (req, res) => {
  Resort.findAll({
    attributes: ["id", "resort_title", "resort_content", "annual_snowfall", "url"],
    include: [
      {
        model: Review,
        attributes: ["id", "review_text", "user_id", "resort_id", "created_at"],
        include: {
          model: User,
          attributes: ["username", "id"],
        },
      },
    ],
  })
    .then((dbResortData) => {
      const resorts = dbResortData.map((resort) => resort.get({ plain: true }));

      res.render("resorts", {
        resorts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(chalk.greenBright(err));
      res.status(500).json(err);
    });
});

router.get("/resorts/:id", (req, res) => {
  Resort.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "resort_title", "resort_content", "annual_snowfall", "url"],
    include: [
      {
        model: Review,
        attributes: ["id", "review_text", "user_id", "resort_id", "created_at"],
        include: {
          model: User,
          attributes: ["username", "id"],
        },
      },
      {
        model: User,
        attributes: ["username", "id"],
      },
    ],
  })
    .then((dbResortData) => {
      if (!dbResortData) {
        res.status(404).json({ message: "No resort found with this id" });
        return;
      }
      // serialize the data
      const resort = dbResortData.get({ plain: true });
      // pass data to template
      res.render("resorts", {
        resort,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(chalk.greenBright(err));
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  console.log(chalk.blueBright("Success!"));
  if (req.session.loggedIn) {
    res.redirect("/resorts/1");
    return;
  }

  res.render("login");
});

module.exports = router;
