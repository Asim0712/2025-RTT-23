import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        trim: true,
        minlength: [3, "Username must be atleast 3 characters"]

    },
      email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,                       // Converts email to lowercase
    match: [/.+\@.+\..+/, 'Please enter a valid email address'] // Regex for email format
  },
    age: {
        type: Number,
        min: [18, "Must be 18 years old"],
        max: 120
    },
    isVerified: Boolean,
    role: {
        type: String,
        enum: {
            values: ['user', 'admin'],            // The value must be one of these strings
            message: '{VALUE} is not a supported role'
        },
        default: 'user'
    },
      createdAt: {
    type: Date,
    default: () => Date.now(),              // Sets the value to the current date/time
    immutable: true                         // Cannot be changed after creation
  }

});
// create usermodel for the User collection
export default mongoose.model("User" , userSchema)
