import mongoose from "mongoose";

const productSchema: mongoose.Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    prixAchat: {
        type: String,
        required: true
    },
    prixGros: {
        type: String,
        required: true
    },
    prixVente: {
        type: String,
        required: true
    },
    organisation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organisation"
    },
    sale: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const ProductModel = mongoose.model("Product", productSchema)

export { ProductModel }