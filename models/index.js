const User = require('./User');
const Jobs = require('./Jobs');


User.hasMany(Jobs, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Jobs.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  module.exports = { User, Jobs };
