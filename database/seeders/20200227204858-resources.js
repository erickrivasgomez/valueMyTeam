'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Resources', [
      {
        name: 'Junior Developer',
        description: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Middle Developer',
        description: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Senior Developer',
        description: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Technical Lead',
        description: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Engagement Manager',
        description: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'QA Engineer',
        description: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Resources', null, {});
  }
};
