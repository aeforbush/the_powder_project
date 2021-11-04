const { Resort } = require("../models");

const resortData = [
  {
    resort_title: "Alta Ski Area",
    resort_content:
      '"Come for the skiing. Stay for the skiing."  Alta Ski Areas marketing tagline is spot on and has lured skiers from all over the world to settle in Utah so they can regularly experience the mountains pristine snow conditions.  A strict skier only mountain, Alta isnt the biggest mountain, nor does it have the most lifts.  In fact, the six lifts at Alta are strategically placed to preserve pristine power areas.  The snow here is better than any other location in the Western Hemisphere.',
    annual_snowfall: "545 inches",
    url: "https://res.cloudinary.com/altaskiarea/image/upload/f_auto,q_auto/v1571689211/resources/Maps/2019-20TrailMap.pdf"
  },
  {
    resort_title: "Snowbird",
    resort_content:
      "As you wind up Little Cottonwood Canyon, you'll find some of the greatest snow on earth at Snowbird. Snowbird is located just under Alta, and the two have won multiple awards throughout the years for having the best snow in the country! Snowbird experiences a weather phenomenon known as The Great Salt Lake effect. Due to its salinity the lake never freezes, it also reduces moisture in the vapor moving across the lake, the lower layers of air are heated up by the lake water. This causes it to pick up water vapor and rise through the colder air above, thus freezing and falling later on as snow, creating what's locally known as The Greatest Snow on Earth.",
    annual_snowfall: "500 inches",
    url: "https://res.cloudinary.com/liftopia/image/upload/c_fit,d_defaults:default_logo_1.png,f_auto,h_980,q_auto,w_980/v1/production/trail_maps/b45d084c2ad69658a44a359e1f950913.jpg"
  },
  {
    resort_title: "Powder Mountain",
    resort_content:
      "With over 8,400 acres and 150 trails, Powder Mountain is considered the largest ski resort in the entire nation! Skiiers and snowboarders alike enjoy these vast mountain ranges with little congregation from others. There is a strict limit on daily passes sold each day, so you can count on having these slopes almost all to yourself. Powder Mountain provides a relaxed experience for anyone who visits!",
    annual_snowfall: "350 inches",
    url: "https://res.cloudinary.com/liftopia/image/upload/c_fit,d_defaults:default_logo_1.png,f_auto,h_980,q_auto,w_980/v1/production/trail_maps/285e1c5e1f61e6612698d93ae547542d.jpg"
  },
  {
    resort_title: "Brighton",
    resort_content:
      "Brighton is most known for their incredibly high quality snow. It is located in Big Cottonwood Canyon, and it was the first ski resort opened in Utah! Brighton claims to be a no-frills resort, and is also known for its extensive backcountry skiing access, along with this, Brighton has some of the most extensive night skiing in the Western U.S. Overall, Brighton is a local favorite, that provides an affordable, exciting experience every time you visit the resort!",
    annual_snowfall: "500 inches",
    url: "https://brightonresort.com/documents/Orphaned%20Documents/ZMAP_WEB_compressed.jpg"
  },
  {
    resort_title: "Deer Valley",
    resort_content: "Deer Valley Resort is located in Park City, and it's known as being one of the top ski resorts in North America! These ranges were used in the 2002 Winter Olympics to host multiple events. It also became the first American venue to host World Cup events twice! Deer Valley offers a variety of amenities to keep their guests as happy as can be. If you are looking for endless forms of entertainment, Deer Valley is the resort to visit!",
    annual_snowfall: "300 inches",
    url: "https://www.skiutah.com/members/deer-valley/trailmaps/picturewithconversions/trailmap"
  }
];

const seedResort = () => Resort.bulkCreate(resortData);

module.exports = seedResort;
