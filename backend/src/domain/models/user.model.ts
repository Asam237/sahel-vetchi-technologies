import mongoose from "mongoose";

const userSchema: mongoose.Schema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
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
  phone: {
    type: String,
  },
  adress: {
    type: String,
  },
  userType: {
    type: String,
    enum: ["ADMIN_ROOT", "ADMIN_ORG", "METIER_ORG"],
    default: "METIER_ORG",
  },
  isLocked: {
    type: Boolean,
    default: false,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const UserModel = mongoose.model("User", userSchema);

export { UserModel };
