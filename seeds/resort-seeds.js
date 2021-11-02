const { Resort } = require("../models");

const resortData = [
  {
    resort_title: "Alta Ski Area",
    resort_content:
      '"Come for the skiing. Stay for the skiing."  Alta Ski Areas marketing tagline is spot on and has lured skiers from all over the world to settle in Utah so they can regularly experience the mountains pristine snow conditions.  A strict skier only mountain, Alta isnt the biggest mountain, nor does it have the most lifts.  In fact, the six lifts at Alta are strategically placed to preserve pristine power areas.  The snow here is better than any other location in the Western Hemisphere with an average annual snow fall of 545.',
      annual_snowfall: "545 inches"
  },
  {
    resort_title: "Snowbird",
    resort_content: "As you wind up Little Cottonwood Canyon, you'll find some of the greatest snow on earth at Snowbird. Snowbird is located just under Alta, and the two have won multiple awards throughout the years for having the best snow in the country!",
    annual_snowfall: "500 inches"
  },
  {
    resort_title: "Powder Mountain",
    resort_content: "With over 8,400 acres and 150 trails, Powder Mountain is considered the largest ski resort in the entire nation! Skiiers and snowboarders alike enjoy these vast mountain ranges with little congregation from others.",
    annual_snowfall: "350 inches"
  },
];

const seedResort = () => Resort.bulkCreate(resortData);

module.exports = seedResort;

