const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Model = require("../model/model");
var Db = require("mongodb").Db;
var Server = require("mongodb").Server;
var MongoClient = require("mongodb").MongoClient;
// const connection = mongoose.connect(
//   "mongodb://localhost:27017/Effy-Assignment"
// );
// var db = new Db("Effy-Assignment", new Server("localhost", 27017));

// var collection1 = connection.collection("companyDetails");

// GET APIs - Get all data from database
router.get("/get/Companies", async (req, res) => {
  // res.send("Get all Companies");
  try {
    const data = await Model.Company.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/get/Users", async (req, res) => {
  // res.send("Get all Users");
  try {
    const data = await Model.User.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET APIs  based on ID - Get data from database based on specific ID
router.get("/get/Company/:id", async (req, res) => {
  // res.send("Get a Company by ID");
  try {
    const data = await Model.Company.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/get/User/:id", async (req, res) => {
  // res.send("Get a User by ID");
  try {
    const data = await Model.User.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//POST API - Creates a new record
router.post("/post/Company", async (req, res) => {
  // res.send("Create a new company");
  const data = new Model.Company({
    companyName: req.body.companyName,
    companyAddress: req.body.companyAddress,
    location: req.body.location,
  });

  // data.save((err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.status(200).json(data);
  //   }
  // });

  try {
    // const saveData = await db.collection("companyDetails", (collection) => {
    //   collection.insert(data);
    // });

    const saveData = await data.save();
    // const saveData = await connection.companyDetails.insert(data);
    res.status(200).json(saveData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/post/User", async (req, res) => {
  // res.send("Create a new user");
  const data = new Model.User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    designation: req.body.designation,
    dateOfBirth: req.body.dateOfBirth,
    active: req.body.active,
  });

  try {
    const saveData = await data.save();
    // const saveData = await connection.companyDetails.insert(data);
    res.status(200).json(saveData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//UPDATE API
router.patch("/update/Company/:id", async (req, res) => {
  // res.send("Update a company by ID");
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.Company.findByIdAndUpdate(
      id,
      updatedData,
      options
    );

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/update/User/:id", async (req, res) => {
  // res.send("Update a user by ID");
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.User.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Add / remove users to / from a company
// router.patch("/update/User/:id", (req, res) => {
//   res.send("Update a user by ID");
// });

//Deactivate a user (sets to active=false)
router.patch("/update/UserStatus/:id", async (req, res) => {
  // res.send("Update a user status by ID");
  try {
    const id = req.params.id;
    // const updatedStatus = req.body.active;
    const updatedStatus = { active: req.body.active };
    const options = { new: true };

    const result = await Model.User.findByIdAndUpdate(
      id,
      updatedStatus,
      options
    );

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//DELETE APIs
router.delete("/delete/Company/:id", async (req, res) => {
  // res.send("Delete a company by ID");
  try {
    const id = req.params.id;
    const data = await Model.Company.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: `Document with ${data._id} has been deleted.` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/delete/User/:id", async (req, res) => {
  // res.send("Delete a user by ID");
  try {
    const id = req.params.id;
    const data = await Model.User.findByIdAndDelete(id);
    res.send(`Document with ${data._id} has been deleted.`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
