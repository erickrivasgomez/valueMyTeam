'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Resource_location_types', // name of Source model
      'ResourceId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Resources', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Resource_location_types', // name of Source model
      'ResourceId' // key we want to remove
    );
  }
};
