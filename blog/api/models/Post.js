const mongoose = require("mongoose");
// mongoose.connect('mongodb+srv://Meet:meet123@cluster0.7zmf7n2.mongodb.net/?retryWrites=true&w=majority', { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
//     // useCreateIndex: true
//  })
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
