const { Resort } = require("../models");

const resortData = [
  {
    resort_title: "Alta Ski Area",
    resort_content:
      '"Come for the skiing. Stay for the skiing."  Alta Ski Areas marketing tagline is spot on and has lured skiers from all over the world to settle in Utah so they can regularly experience the mountains pristine snow conditions.  A strict skier only mountain, Alta isnt the biggest mountain, nor does it have the most lifts.  In fact, the six lifts at Alta are strategically placed to preserve pristine power areas.  The snow here is better than any other location in the Western Hemisphere with an average annual snow fall of 545.',
      annual_snowfall: "Annual snowfall: 545 inches"
  },
  {
    resort_title: "Snowbird",
    resort_content: "As you wind up Little Cottonwood Canyon, you'll find some of the greatest snow on earth at Snowbird. Snowbird is located just under Alta, and the two have won multiple awards throughout the years for having the best snow in the country! Snowbird experiences a weather phenomenon known as The Great Salt Lake effect. Due to its salinity the lake never freezes, it also reduces moisture in the vapor moving across the lake, the lower layers of air are heated up by the lake water. This causes it to pick up water vapor and rise through the colder air above, thus freezing and falling later on as snow, creating what's locally known as The Greatest Snow on Earth.",
    annual_snowfall: "Annual snowfall: 500 inches"
  },
  {
    resort_title: "Powder Mountain",
    resort_content: "With over 8,400 acres and 150 trails, Powder Mountain is considered the largest ski resort in the entire nation! Skiiers and snowboarders alike enjoy these vast mountain ranges with little congregation from others.",
    annual_snowfall: "Annual snowfall: 350 inches"
  },
  {
    resort_title: "Brighton",
    resort_content: 'Brighton is most known for their incredibly high quality snow. It is located in Big Cottonwood Canyon, and it was the first ski resort opened in Utah!',
    annual_snowfall: "Annual snowfall: 500 inches"
  },
  {
    resort_title: "Deer Valley",
    resort_content: "lorem ipsum",
    annual_snowfall: "Annual snowfall: inches"
  }
];

const seedResort = () => Resort.bulkCreate(resortData);

module.exports = seedResort;

