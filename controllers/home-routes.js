// res.render() can accept a second argument, an object, which includes all the data to be passed in
const router = require("express").Router();
const { Content, Resort } = require("../models");
const chalk = require('chalk');


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

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/", (req, res) => {
  Resort.findAll({}).then((dbResortData) => {
    console.log(dbResortData[0].resort_content);
    res.render("resorts", {
      resort_content: dbResortData[0].resort_content,
      resort_title: dbResortData[0].resort_title,
    });
  });
});

module.exports = router;
