'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.createTable('users', { 
        id:{
          allowNull: false,
          autoIncrement: true,
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        username: {
          allowNull: false,
          type: Sequelize.STRING,
          // field: 'user_name',
        },
        role: {
          allowNull: false,
          type: Sequelize.STRING,
          field: 'role',
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING,
          field: 'email',
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING,
          field: 'password',
        },
       });
     
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.dropTable('users');
     
  }
};
