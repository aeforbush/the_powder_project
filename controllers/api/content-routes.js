const router = require("express").Router();
const { Content  } = require("../../models");

const chalk = require("chalk");


// get all Content
router.get("/", (req, res) => {
  Content.findAll({
    attributes: ["id", "title", "content"],
    // include: [
    //   {
    //     model: Review,
    //     attributes: [
    //       "id",
    //       "review_text",
    //       "user_id",
    //       "content_id",
    //     ],
    //     include: {
    //       model: User,
    //       attributes: ["username"],
    //     },
    //   },
    // ],
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
    // include: [
    //   {
    //     model: Review,
    //     attributes: [
    //       "id",
    //       "review_text",
    //       "user_id",
    //       "content_id",  
    //     ],
    //     include: {
    //       model: User,
    //       attributes: ["username"],
    //     },
    //   },
    // ],
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

// // add content
// // how to create this so only the author(s) of the site can add a content block???
// router.post("/", withAuth, (req, res) => {
//   // this will make a new content block { title, content, user_id }
//   Content.create({
//     title: req.body.title,
//     content: req.body.content,
//   })
//     .then((dbContentData) => {
//       res.json(dbContentData);
//     })
//     .catch((err) => {
//       console.log(chalk.greenBright(err));
//       res.status(500).json(err);
//     });
// });

// // update content (author(s) only )
// router.put("/:id", withAuth, (req, res) => {
//   console.log(chalk.redBright("This id is", req.params.id));
//   Content.update(
//     {
//       title: req.body.title,
//       content: req.body.content,
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     }
//   )
//     .then((dbContentData) => {
//       if (!dbContentData) {
//         res
//           .status(404)
//           .json({ message: "No content block found with this id" });
//         return;
//       }
//       res.json(dbContentData);
//     })
//     .catch((err) => {
//       console.log(chalk.greenBright(err));
//       res.json(err);
//     });
// });

// // remove content (author(s) only) author_id?
// router.delete("/:id", withAuth, (req, res) => {
//   Content.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbContentData) => {
//       if (!dbContentData) {
//         res
//           .status(404)
//           .json({ message: "No content block found with this id" });
//         return;
//       }
//       res.json(dbContentData);
//     })
//     .catch((err) => {
//       console.log(chalk.greenBright(err));
//       res.status(500).json(err);
//     });
// });

module.exports = router;
