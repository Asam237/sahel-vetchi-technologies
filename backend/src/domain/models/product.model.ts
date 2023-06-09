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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
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
const productUpdateParams: string[] = ["title", "description", "prixAchat", "prixGros", "prixVente", "sale"]

export { ProductModel, productUpdateParams }