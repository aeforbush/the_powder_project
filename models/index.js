const Content = require("./Content");
const Review = require("./Review");
const User = require("./User");
const Resort = require("./Resort");

Review.belongsTo(User, {
  foreignKey: "user_id",
});

Review.belongsTo(Resort, {
  foreignKey: "content_id",
});

User.hasMany(Review, {
  foreignKey: "user_id",
});

Resort.hasMany(Review, {
  foreignKey: "content_id",
});

module.exports = { Content, Review, User };
