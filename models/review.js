'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.review.belongsTo(models.business)
      models.review.belongsTo(models.user)
      // define association here
    }
  };
  review.init({
    userId: DataTypes.INTEGER,
    businessId: DataTypes.INTEGER,
    headline: DataTypes.TEXT,
    comment: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};