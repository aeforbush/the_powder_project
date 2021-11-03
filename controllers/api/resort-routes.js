const router = require("express").Router();
const { Resort, User, Review } = require("../../models");
const chalk = require("chalk");

// get all Resort content
router.get("/", (req, res) => {
  Resort.findAll({
    attributes: ["id", "resort_title", "resort_content", "annual_snowfall"],
    include: [
      {
        model: Review,
        attributes: ["id", "review_text", "user_id", "resort_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      // {
      //   model: User,
      //   attributes: ["username"],
      // },
    ],
  })
    .then((dbResortData) => {
      res.json(dbResortData);
    })
    .catch((err) => {
      console.log(chalk.greenBright(err));
      res.status(500).json(err);
    });
});

// get Resort by id
router.get("/:id", (req, res) => {
  Resort.findOne({
    where: {
      id: req.params.id,
    },
      attributes: ["id", "resort_title", "resort_content", "annual_snowfall"],
      include: [
        {
          model: Review,
          attributes: ["id", "review_text", "user_id", "resort_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        // {
        //   model: User,
        //   attributes: ["username"],
        // },
      ],
    })
      .then((dbResortData) => {
        res.json(dbResortData);
      })
      .catch((err) => {
        console.log(chalk.greenBright(err));
        res.status(500).json(err);
      });
  });



module.exports = router;
