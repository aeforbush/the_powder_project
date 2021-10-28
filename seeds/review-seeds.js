const { Review } = require('../models');

const reviewData = [{
        comment_text: "Lorem ipsum dolor sit amet",
        user_id: 1,
        content_id: 1
    },
    {
        comment_text: "consectetur adipiscing elit",
        user_id: 2,
        content_id: 2
    },
    {
        comment_text: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        user_id: 3,
        content_id: 3
    }
];

const seedReviews = () => Comment.bulkCreate(reviewData);

module.exports = seedReviews;