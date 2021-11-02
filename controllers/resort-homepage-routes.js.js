const router = require("express").Router();
const { Review, User, Resort } = require("../models");
const chalk = require("chalk");

router.get("/", (req, res) => {
  Resort.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "resort_title", "resort_content", "annual_snowfall"],
    include: [
      {
        model: Review,
        attributes: ["id", "review_text", "user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: "username",
      },
    ],
  })
    .then((dbResortData) => {
      // serialize data before passing to template
      // const resorts = dbResortData.map((review) => review.get({ plain: true }));
      res.render("resorts", { resorts, loggedIn: true });
    })
    .catch((err) => {
      console.log(chalk.greenBright(err));
      res.status(500).json(err);
    });
});

module.exports = router;