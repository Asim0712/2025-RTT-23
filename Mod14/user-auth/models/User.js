import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const { Schema } = mongoose;

 
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});
 



  //=========Midleware for password hashing=========
  userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
 
  next();
});
 
// Method to compare password
userSchema.methods.isCorrectPassword = async function (password) {
return bcrypt.compare(password, this.password);
}



// create usermodel for the User collection
export default mongoose.model("User" , userSchema)
