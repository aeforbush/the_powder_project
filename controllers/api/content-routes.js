const router = require("express").Router();
const { Content } = require("../../models");

const chalk = require("chalk");

// get all Content
router.get("/", (req, res) => {
  Content.findAll({
    attributes: ["id", "title", "content"],
  })
    .then((dbContentData) => {
      res.json(dbContentData);
    })
    .catch((err) => {
      console.log(chalk.greenBright(err));
      res.status(500).json(err);
    });
});

// get Content by id
router.get("/:id", (req, res) => {
  Content.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "content"],
  })
    .then((dbContentData) => {
      if (!dbContentData) {
        res
          .status(404)
          .json({ message: "No content block found with this id" });
        return;
      }
      res.json(dbContentData);
    })
    .catch((err) => {
      console.log(chalk.greenBright(err));
      res.status(500).json(err);
    });
});

module.exports = router;
