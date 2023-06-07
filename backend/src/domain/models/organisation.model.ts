import mongoose from "mongoose";

const organisationSchema: mongoose.Schema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    adress: {
        type: String,
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    isRoot: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
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
})

const OrganisationModel = mongoose.model("Organisation", organisationSchema)

export { OrganisationModel }