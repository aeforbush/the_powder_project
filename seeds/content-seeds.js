const { Content } = require("../models");

const contentData = [
  {
    title: "The Powder Project Mission",
    content:
      "A monster storm is in the futurecast and you have time on the books to slip away, grab first chair and blissfully cruise those first tracks in some fresh POW, but where?  At The Powder Project our goal is to help you find your next rippin powder day.  Our research provides winter sport enthusiasts with essential information about snow quality and depth at Utah's most highly rated Mountain Resorts.  Get your gear ready for an awesome adventure!",
  },
];

const seedContent = () => Content.bulkCreate(contentData);

module.exports = seedContent;
