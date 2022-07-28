const {Brewery} = require("../database/db.js");

exports.findAll = () => {
  return Brewery.find({});
};

exports.createOne = () => {
  return Brewery.create();
};

exports.update = () => {
  return Brewery.findOneAndUpdate()
}

exports.delete = (id) => {
  return Brewery.deleteOne();
};
