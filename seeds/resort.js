const { Resort } = require("../models");

const resortData = [
  {
    title: "Alta Ski Area",
    content:
      '"Come for the skiing. Stay for the skiing."  Alta Ski Areas marketing tagline is spot on and has lured skiers from all over the world to settle in Utah so they can regularly experience the mountains pristine snow conditions.  A strict skier only mountain, Alta isnt the biggest mountain, nor does it have the most lifts.  In fact, the six lifts at Alta are strategically placed to preserve pristine power areas.  The snow here is better than any other location in the Western Hemisphere with an average annual snow fall of 545.',
    // author_id?
    // how to add apostophes?
  },
  {
    title: "Snowbird",
    content: "Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.",
  },
  {
    title: "Powder Mountain",
    content: "Ut etiam sit amet nisl purus in mollis.",
  },
];

const seedResort = () => Resort.bulkCreate(resortData);

module.exports = seedResort;