'use strict';
export default (sequelize, DataTypes) => {
  const Resource = sequelize.define('Resource', {
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Resource.associate = function(models) {
    // associations can be defined here
  };
  return Resource;
};