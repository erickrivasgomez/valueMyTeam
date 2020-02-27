'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [
      {
        name: 'In-House US',
        description: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nearshore',
        description: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Offshore',
        description: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});
  }
};
