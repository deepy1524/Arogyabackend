const express = require("express");
const FormModel = require("../model/form.model");

const app = express.Router();

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
app.get("/", (req, res) => {
  // We want to return an array of all the lists that belong to the authenticated user
  FormModel.find({})
    .then((form) => {
      res.send(form);
    })
    .catch((e) => {
      res.send(e);
    });
});

app.post("/", async (req, res) => {
  let name = req.body.name;
  let number = req.body.number;
  let address = req.body.address;

  let formprint = new FormModel({
    name,
    number,
    address,
  });
  formprint.save().then((sprintdoc) => {
    res.send(sprintdoc);
  });
});

// app.delete("/:id", (req, res) => {
//   OrderModel.findOneAndRemove({
//     _id: req.params.id,
//   }).then((removedSprintDoc) => {
//     res.send(removedSprintDoc);
//   });
// });

module.exports = app;
