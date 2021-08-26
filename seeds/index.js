const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n----- DATABASE -----\n');
  
  await seedUsers();
    console.log('\n----- USERS  -----\n');
  
  await seedPosts();
    console.log('\n----- POSTS -----\n');

  await seedComments();
    console.log('\n----- COMMENTS  -----\n');

  process.exit(0);
};

seedAll();
