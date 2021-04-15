'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('businesses', [{
      name: 'Nixta Taqueria',
      address: '2512 E 12th St, Austin, TX 78702',
      category: 'Restaurant',
      phoneNumber: '512-555-5555',
      image: 'https://i0.wp.com/tribeza.com/wp-content/uploads/2019/12/nixta.-mackenzie-smith-kelley049.jpg?resize=700%2C500&ssl=1',
      description: 'TACOS CHINGONES ARE HERE.',
      createdAt: new Date(),
      updatedAt: new Date()
  },
]);
},

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
