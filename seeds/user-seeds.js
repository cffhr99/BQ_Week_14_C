const { User } = require('../models');

const userData = [
    {
        username: "user1",
        email: "user1@mail.com",
        password: "password1"
    },
    {
      username: "user2",
      email: "user2@mail.com",
      password: "password2"
    },
    {
      username: "user3",
      email: "user2@mail.com",
      password: "password2"
    },
    {
      username: "user4",
      email: "user4@mail.com",
      password: "password4"
    },
    {
      username: "user5",
      email: "user5@mail.com",
      password: "password5"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
