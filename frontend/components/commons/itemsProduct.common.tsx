import Link from "next/link";
import { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { FiShoppingBag, FiShoppingCart } from "react-icons/fi"
import { AiFillShopping } from "react-icons/ai"
import { ItemProductType, ItemType } from "../../types";
// import { Modal } from "./modal.common";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Modal } from "./modal.common";
import { saleProduct } from "../../pages/api";

export const ItemsProduct = ({ _id, nameItem, descriptionItem, prixAchatItem, prixGrosItem, createdAt, organisation, prixVenteItem }: ItemProductType) => {

    const [saleModal, setSaleModal] = useState(false)
    const [name, setName] = useState(nameItem)
    const [description, setDescription] = useState(descriptionItem)
    const [prixAchat, setPrixAchat] = useState(prixAchatItem)
    const [prixGros, setPrixGros] = useState(prixGrosItem)
    const [prixVente, setPrixVente] = useState(prixVenteItem)
    const data: any = { name, description, prixAchat, prixGros, prixVente }
    const clientQuery = useQueryClient()

    const handleSale = async (e: any) => {
        setSaleModal(true)
    }

    const sales = async (e: any) => {
        console.log("Hello HERE !!!")
        e.preventDefault()
        await saleProduct(_id, { sale: true })
        setSaleModal(false)
    }

    const handleCancel = () => {
        setSaleModal(false)
    }


    return (
        <>
            <div className="px-8 py-4 border rounded-md shadow-lg hover:shadow-2xl">
                <div className="h-56">
                    <div className="flex flex-col justify-center items-start">
                        <AiFillShopping size={60} className="text-gray-600" />
                        <h4 className="text-xl mt-4 font-bold">{name}</h4>
                        <p className="text-sm mt-2 line-clamp-4">{description}</p>
                        <p className="text-sm underline underline-offset-4 my-2 text-red-400 font-semibold">
                            {prixAchat} FCFA
                        </p>
                    </div>
                    <div>
                        <hr className="my-3" />
                        <div className="flex justify-between items-center">
                            <p className="italic text-xs text-gray-500">{new Date(createdAt).toDateString()}</p>
                            <div className="flex space-x-6">
                                <AiFillEdit className="cursor-pointer" size={24} color="gray" />
                                <FiShoppingCart className="cursor-pointer" onClick={handleSale} size={24} color="gray" />
                                <AiFillDelete className="cursor-pointer" size={24} color="red" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                saleModal && (
                    <Modal
                        onClose={() => setSaleModal(false)}
                        title="Sell this product "
                    >
                        <div>
                            <h4>Sell this product </h4>
                            <div className="flex flex-row space-x-4 items-center justify-end my-6">
                                <div className="flex justify-center items-center border px-4 py-2 rounded-md border-black w-28">
                                    <button onClick={handleCancel} className="font-semibold text-sm">
                                        Cancel
                                    </button>
                                </div>
                                <button onClick={sales} className="bg-blue-700 px-4 py-2 w-28 rounded-lg text-white flex justify-center items-center">
                                    Sell
                                </button>
                            </div>
                        </div>
                    </Modal>
                )
            }
        </>
    )
}