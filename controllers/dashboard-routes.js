const router = require("express").Router();
const sequelize = require("../config/connection");
const { Review, User, Resort } = require("../models");
const chalk = require("chalk");

router.get("/", (req, res) => {
  Review.findAll({
    where: {
      user_id: req.session.user.user_id,
    },
    attributes: ["id", "review_text", "created_at"],
    include: [
      {
        model: Resort,
        attributes: ["id", "resort_title", "resort_content"],
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
    .then((dbReviewData) => {
      // serialize data before passing to template
      const reviews = dbReviewData.map((review) => review.get({ plain: true }));
      res.render("dashboard", { reviews, loggedIn: true });
    })
    .catch((err) => {
      console.log(chalk.greenBright(err));
      res.status(500).json(err);
    });
});

module.exports = router;