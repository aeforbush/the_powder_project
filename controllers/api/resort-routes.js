const router = require("express").Router();
const { Resort } = require("../../models");
const chalk = require("chalk");

// get all Resort content
router.get("/", (req, res) => {
  Resort.findAll({
    where: {
      attributes: ["id", "resort_title", "resort_content"],
    },
  })
    .then((dbResortData) => {
      res.json(dbResortData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all Resort content
// router.get("/", (req, res) => {
//     Resort.findAll({
//       attributes: ["id", "resort_title", "resort_content"],
//       include: [
//         {
//           model: Review,
//           attributes: [
//             "id",
//             "review_text",
//             "user_id",
//             "content_id",
//           ],
//           include: {
//             model: User,
//             attributes: ["username"],
//           },
//         },
//       ],
//     })
//       .then((dbResortData) => {
//         res.json(dbResortData);
//       })
//       .catch((err) => {
//         console.log(chalk.greenBright(err));
//         res.status(500).json(err);
//       });
//   });

// get Content by id
// router.get("/:id", (req, res) => {
//   Resort.findOne({
//     where: {
//       id: req.params.id,
//     },
//     attributes: ["id", "resort_title", "resort_content"],
//     include: [
//       {
//         model: Review,
//         attributes: ["id", "review_text", "user_id", "content_id"],
//         include: {
//           model: User,
//           attributes: ["username"],
//         },
//       },
//     ],
//   })
//     .then((dbResortData) => {
//       if (!dbResortData) {
//         res
//           .status(404)
//           .json({ message: "No content block found with this id" });
//         return;
//       }
//       res.json(dbResortData);
//     })
//     .catch((err) => {
//       console.log(chalk.greenBright(err));
//       res.status(500).json(err);
//     });
// });

module.exports = router;
