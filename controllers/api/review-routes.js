const router = require("express").Router();
const { Review, User, Resort } = require("../../models");

router.get("/", (req, res) => {
  Review.findAll({
    attributes: ["id", "review_text", "user_id", "resort_id", "created_at"],
    order:[['created_at', 'DESC']],
    include: [
      {
        model: Resort,
        attributes: ['id', 'resort_title', 'resort_content', 'user_id'],
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
    .then((the_powder_project_db) => res.json(the_powder_project_db))
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
    .then((the_powder_project_db) => res.json(the_powder_project_db))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post("/", (req, res) => {
  Review.create({
    // will want to change to review_text once it's also changed in review.js
    review_text: req.body.review_text,
    user_id: req.body.user_id,
    resort_id: req.body.resort_id,
    // content_id: req.body.content_id
  })
    .then((the_powder_project_db) => res.json(the_powder_project_db))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Review.destroy({
    where: { id: req.params.id },
  })
    .then((the_powder_project_db) => res.json(the_powder_project_db))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
