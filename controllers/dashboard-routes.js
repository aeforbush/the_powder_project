const router = require("express").Router();
const { Review, User, Resort } = require("../models");
const chalk = require("chalk");

router.get("/", (req, res) => {
  Resort.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "resort_title", "resort_content"],
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
      const reviews = dbResortData.map((review) => review.get({ plain: true }));
      res.render("dashboard", { reviews, loggedIn: true });
    })
    .catch((err) => {
      console.log(chalk.greenBright(err));
      res.status(500).json(err);
    });
});

module.exports = router;