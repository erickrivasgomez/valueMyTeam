'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let rlt_prices = [
      [65.00, 30.00, 70.00, 25.00, 70.00],
      [70.00, 38.00, 75.00, 28.00, 75.00],
      [75.00, 46.00, 85.00, 30.00, 85.00],
      [95.00, 55.00, 100.00, 40.00, 100.00],
      [110.00, 75.00, 125.00, 55.00, 125.00],
      [70.00, 34.00, 70.00, 26.00, 70.00],
    ]

    let precios = []

    for (let index = 1; index <= rlt_prices.length; index++) {
      for (let i2 = 1; i2 <= rlt_prices[1].length; i2++) {

        const valor = rlt_prices[index -1][i2 -1];

        let precio = {
          ResourceId: index,
          Location_typeId: i2,
          price: valor,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
        precios.push(precio)
      }

    }

    return queryInterface.bulkInsert('Resource_location_types', precios)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Resource_location_types', null, {});
  }
};
