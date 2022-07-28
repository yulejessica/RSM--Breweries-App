const express = require('express');
const breweries = require("./controllers/breweries.js");

const router = express.Router();

router.get("/topics", breweries.getAll);
router.post("/create", breweries.createOne);
router.put("/update", breweries.update);
router.delete("/delete", breweries.delete);


module.exports = router;