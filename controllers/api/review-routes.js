const router = require("express").Router();
const { Review, User, Resort } = require("../../models");

router.get("/", (req, res) => {
  Review.findAll({
    attributes: ["id", "review_text", "user_id", "resort_id", "created_at"],
    order:[['created_at', 'DESC']],
    include: [
      {
        model: Resort,
        attributes: ['id', 'resort_title', 'resort_content', 'annual_snowfall', 'user_id'],
        include: {
          model: User, 
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.get("/:id", (req, res) => {
  Review.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "review_text", "resort_id", "user_id"],
  })
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post("/", (req, res) => {
  // check session
  if (req.session) {
  Review.create({
    // will want to change to review_text once it's also changed in review.js
    review_text: req.body.review_text,
    resort_id: req.body.resort_id,
    user_id: req.session.user_id,
  
  })
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
  }
});

router.delete("/:id", (req, res) => {
  Review.destroy({
    where: { id: req.params.id },
  })
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
