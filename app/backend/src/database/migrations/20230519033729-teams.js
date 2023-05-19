'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('teams', { 
      id:{
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      teamName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'team_name',
      },
      
    });
     
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('teams');
   
  }
};
