// res.render() can accept a second argument, an object, which includes all the data to be passed in
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage', {
        id: 1,
        post_url: "https://thepowderproject.com/guide/",
        title: 'The Powder Project',
        created_at: new Date(),
        vote_count: 10,
        comments: [{}, {}],
        user: {
            username: 'test_user'
        }
    });
});

module.exports = router;