const sequelize = require('../config/connection');
const { User, Jobs } = require('../models');

const userData = require('./userData.json');
const jobsData = require('./JobsData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const job of jobsData) {
    await Jobs.create({
      ...job,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
