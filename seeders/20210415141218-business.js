'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    {
      userId: DataTypes.INTEGER,
      address: DataTypes.STRING,
      name: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      image: DataTypes.TEXT,
      description: DataTypes.TEXT
    }
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
