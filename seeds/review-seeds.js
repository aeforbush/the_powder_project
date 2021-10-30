const { Review } = require('../models');

const reviewData = [{
        review_text: "Lorem ipsum dolor sit amet",
        user_id: 1,
        
    },
    {
        review_text: "consectetur adipiscing elit",
        user_id: 2,
       
    },
    {
        review_text: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        user_id: 3,
      
    }
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;