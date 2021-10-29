const router = require('express').Router();
const { Review } = require('../../models');

router.get('/', (req, res) => {

});

router.post('/', (req, res) => {
    Review.create({
        // will want to change to review_text once it's also changed in review.js
        review_text: req.body.reviewtext,
        user_id: req.body.user_id,
        content_id: req.body.content_id
    })
    .then(the_powder_project_db => res.json(the_powder_project_db))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {

});

module.exports = router;