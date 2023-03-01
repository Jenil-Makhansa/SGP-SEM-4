const mongoose = require("mongoose");
// mongoose.connect('mongodb+srv://Meet:meet123@cluster0.7zmf7n2.mongodb.net/?retryWrites=true&w=majority', { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
//     // useCreateIndex: true
//  })
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
