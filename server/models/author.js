export default (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    underscored: true,
    classMethods: {
      associate: (models) => {

      }
    }
  });

  return Author;
};
