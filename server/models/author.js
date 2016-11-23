module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    underscored: true,
    classMethods: {
      associate: (models) => {
        Author.hasMany(models.Book, {
          onDelete: 'cascade',
        });
      },
    },
  });

  return Author;
};
