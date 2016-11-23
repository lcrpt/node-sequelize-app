module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    name: DataTypes.STRING,
    isbn: DataTypes.INTEGER,
    publication_date: DataTypes.DATE,
    description: DataTypes.TEXT,
    author_id: DataTypes.INTEGER
  }, {
    underscored: true,
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Book;
};
