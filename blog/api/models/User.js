const mongoose = require("mongoose");
// mongoose.connect('mongodb+srv://Meet:meet123@cluster0.7zmf7n2.mongodb.net/?retryWrites=true&w=majority', { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
//     // useCreateIndex: true
//  })
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
