const Content = require("./Content");
const Review = require("./Review");
const User = require("./User");
const Resort = require("./Resort");

User.hasMany(Resort, {
  foreignKey: "user_id",
});

Resort.belongsTo(User, {
  foreignKey: "user_id",
});

Review.belongsTo(User, {
  foreignKey: "user_id",
});

Review.belongsTo(Resort, {
  foreignKey: "resort_id",
});

User.hasMany(Review, {
  foreignKey: "user_id",
});

Resort.hasMany(Review, {
  foreignKey: "resort_id",
});

module.exports = { Content, Review, User, Resort };
