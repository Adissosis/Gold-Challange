var DataTypes = require("sequelize").DataTypes;
var _admin = require("./admin");
var _user = require("./user");

function initModels(sequelize) {
  var admin = _admin(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    admin,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
