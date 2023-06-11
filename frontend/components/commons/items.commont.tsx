import Link from "next/link";
import { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { FiShoppingBag, FiShoppingCart } from "react-icons/fi"
import { AiFillShopping } from "react-icons/ai"
import { ItemProductType, ItemType } from "../../types";
// import { Modal } from "./modal.common";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { destroyLink, updateLink } from "../../pages/api";

export const Items = ({ _id, nameItem, descriptionItem, prixAchatItem, prixGrosItem, createdAt, organisation, prixVenteItem }: ItemProductType) => {

    const [deleteLinkModal, setDeleteLinkModal] = useState(false)
    const [reportLinkModal, setReportLinkModal] = useState(false)
    const [editLinkModal, setEditLinkModal] = useState(false)
    const [name, setName] = useState(nameItem)
    const [description, setDescription] = useState(descriptionItem)
    const [prixAchat, setPrixAchat] = useState(prixAchatItem)
    const [prixGros, setPrixGros] = useState(prixGrosItem)
    const [prixVente, setPrixVente] = useState(prixVenteItem)
    const data: any = { name, description, prixAchat, prixGros, prixVente }
    const clientQuery = useQueryClient()

    // const deleteLinkMutation = useMutation({
    //     mutationFn: destroyLink,
    //     onSuccess: () => {
    //         clientQuery.invalidateQueries({ queryKey: ['links'] })
    //     }
    // })

    const handleDestroyLink = async () => {
        // deleteLinkMutation.mutate(_id)
        setDeleteLinkModal(false)
    }

    const handleEditLink = async (e: any) => {
        e.preventDefault()
        // const edit = await updateLink(_id, data)
        // if (edit.status === 200) {
        //     await updateLink(_id, data)
        //     setEditLinkModal(false)
        // }
    }

    const handleReportLink = async (e: any) => {
        // e.preventDefault()
        // let report = true
        // const myreport = await updateLink(_id, { report })
        // if (myreport.status === 200) {
        //     await updateLink(_id, { report })
        // }
    }

    const handleCancel = () => {
        setEditLinkModal(false)
        setDeleteLinkModal(false)
    }

    const handleEditLinkBtn = () => {
        setEditLinkModal(true)
    }

    const handleReportlLink = () => {
        setReportLinkModal(true)
    }

    const handleDeleteLink = () => {
        setDeleteLinkModal(true)
    }

    return (
        <>
            <div className="px-8 py-4 border rounded-md shadow-lg hover:shadow-2xl">
                <div className="h-72">
                    <div className="flex flex-col justify-center items-start">
                        <AiFillShopping size={60} className="text-gray-600" />
                        <h4 className="text-xl mt-4 font-bold">{name}</h4>
                        <p className="text-sm mt-2 line-clamp-4">{description}</p>
                        <p className="text-sm underline underline-offset-4 my-2 text-red-400 font-semibold">
                            {prixAchat}
                        </p>
                    </div>
                    <div>
                        <hr className="my-3" />
                        <div className="flex justify-between items-center">
                            <p className="italic text-xs text-gray-500">{new Date(createdAt).toDateString()}</p>
                            <div className="flex space-x-6">
                                <AiFillEdit className="cursor-pointer" onClick={handleDeleteLink} size={24} color="gray" />
                                <FiShoppingCart className="cursor-pointer" onClick={handleDeleteLink} size={24} color="gray" />
                                <AiFillDelete className="cursor-pointer" onClick={handleDeleteLink} size={24} color="red" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}