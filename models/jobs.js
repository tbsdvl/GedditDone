const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Jobs extends Model {}

Jobs.init(
  {
    id: {
      
    },
    jobtitle: {
      
    },
    company: {
        
    }, 
    city: {
       
    }, 
    state: {
       
    }, 
    description: {
       
    }, 
    salary: {
       
    }, 
    user_id: {
       
    }, 
    },
  
  
    
    
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'job',
  });


module.exports = Jobs;
