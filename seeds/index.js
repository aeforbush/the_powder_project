const chalk = require('chalk');
const seedUsers = require('./user-seeds');
const seedContent = require('./content-seeds');
const seedReviews = require('./review-seeds');
const seedResort = require('./resort-seeds')


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log(chalk.redBright('--------------'));
  
  await seedUsers();
  console.log(chalk.redBright('--------------'));

  await seedContent();
  console.log(chalk.redBright('--------------'));

  await seedReviews();
  console.log(chalk.redBright('--------------'));

  await seedResort();
  console.log(chalk.redBright('---------------'));



  process.exit(0);
};

seedAll();