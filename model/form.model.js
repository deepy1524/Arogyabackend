const mongoose = require("mongoose");
const FormSchema = new mongoose.Schema({
  name: {
    type: String,
   
  },
  number: {
    type: Number,
  },
  address: {
    type: String,
  },
});

const FormModel = mongoose.model("form", FormSchema);

module.exports = FormModel;
