'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Location_types', [
      {
        name: 'In-House US',
        locationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Off-site',
        locationId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'On-site',
        locationId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Off-site',
        locationId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'On-site',
        locationId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Location_types', null, {});
  }
};
