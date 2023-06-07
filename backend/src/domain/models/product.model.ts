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
})

const ProductModel = mongoose.model("Product", productSchema)

export { ProductModel }