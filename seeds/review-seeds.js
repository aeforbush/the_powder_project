const { Review } = require('../models');

const reviewData = [{
        review_text: "Greatest snow on earth!",
        user_id: 1,
        resort_id: 1
        
    },
    {
        review_text: "Great family vacation spot!",
        user_id: 2,
        resort_id: 2
       
    },
    {
        review_text: "One of Utah's hidden gems!",
        user_id: 3,
        resort_id: 3
      
    }
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;