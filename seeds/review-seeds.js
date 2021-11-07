const { Review } = require('../models');

const reviewData = [{
        review_text: "Greatest snow on earth!",
        user_id: 1,
        resort_id: 1
        
    },
    {
        review_text: "Great family vacation spot!",
        user_id: 5,
        resort_id: 2
       
    },
    {
        review_text: "One of Utah's hidden gems!",
        user_id: 3,
        resort_id: 3
      
    },
    {
        review_text: "We love this resort!!",
        user_id: 8,
        resort_id: 4
      
    },
    {
        review_text: "Everyone should go to this resort!",
        user_id: 9,
        resort_id: 5
      
    },
    {
        review_text: "I don't know why you wouldn't want to go to this resort!",
        user_id: 2,
        resort_id: 3
      
    },
    {
        review_text: "Need an amazing vacation? You should go to this resort!",
        user_id: 4,
        resort_id: 4
      
    },
    {
        review_text: "I wrote this review so you would go to this resort!",
        user_id: 7,
        resort_id: 2
      
    },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;