const Content = require('./Content');
const Review = require('./Review');
const User = require('./User');

User.hasMany(Content, {
  foreignKey: 'user_id'
});
  
Content.belongsTo(User, {
  foreignKey: 'user_id'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});
  
Review.belongsTo(Content, {
  foreignKey: 'content_id'
});
  
User.hasMany(Review, {
  foreignKey: 'user_id'
});
  
Content.hasMany(Review, {
  foreignKey: 'content_id'
});

module.exports = { Content, Review, User };