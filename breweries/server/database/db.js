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
    required: true,
    unique: true,
    trim: true
  },
  breweryID: {
    type: Number,
    required: true,
    unique: true
  },
  breweryType: {
    type: String,
    required: true
  },
  street: {
    type: String,
    trim: true,
    default: ""
  },
  address2: {
    type: String,
    default: ""
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  zipcode: {
    type: String,
    default: ""
  },
  longtitue: {
    type: String,
    default: ""
  },
  latitude: {
    type: String,
    default: ""
  },
  websiteUrl: {
    type: String,
    default: ""
  }
})
const Brewery = mongoose.model("breweries", BrewerySchema);

module.exports.User = Brewery;
