var models = require('./server/models/');

models.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection successful');
  })
  .catch((error) => {
    console.log("Error creating connection:", error);
  });
