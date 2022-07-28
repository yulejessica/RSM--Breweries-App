const mongoose = require("mongoose");

//create connection
mongoose
  .connect(
    "mongodb://localhost/breweries",
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log("database connected sucessfully!");
  })
  .catch(() => {
    mongoose.set("useCreateIndex", true);
  });
//   mongoose.connection.db.dropDatabase();


const BrewerySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zipcode: {
    type: Number,
  },
  website: {
    type: String,
  }
})
const Brewery = mongoose.model("breweries", BrewerySchema);

module.exports.User = Brewery;
