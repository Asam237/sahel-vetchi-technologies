import Link from "next/link";
import { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { HiOutlineEyeOff } from "react-icons/hi"
import { ItemType } from "../../types";
// import { Modal } from "./modal.common";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { destroyLink, updateLink } from "../../pages/api";

export const Items = ({ _id, nameItem, descriptionItem, urlItem, path, createdAt, publicLink, reportItem }: ItemType) => {

    const [deleteLinkModal, setDeleteLinkModal] = useState(false)
    const [reportLinkModal, setReportLinkModal] = useState(false)
    const [editLinkModal, setEditLinkModal] = useState(false)
    const [name, setName] = useState(nameItem)
    const [description, setDescription] = useState(descriptionItem)
    const [url, setUrl] = useState(urlItem)
    const data: any = { name, description, url }
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
            <div className="px-4 py-2 border rounded-md shadow-lg hover:shadow-2xl">
                <div className="h-56">
                    <h4 className="text-xl">{name}</h4>
                    <p className="text-sm py-4 leading-loose line-clamp-4">{description}</p>
                    <p className="leading-loose truncate">
                        <Link target={"_blank"} className="text-clip text-sm text-blue-600 font-semibold underline truncate underline-offset-4 hover:text-blue-800" href={""}>{url}</Link>
                    </p>
                </div>
                <p className="italic text-xs py-4 text-gray-500">{new Date(createdAt).toDateString()}</p>
                <div>
                    <hr className="my-3" />
                    <div className="flex justify-between items-center">
                        <AiFillEdit className="cursor-pointer" size={24} onClick={handleEditLinkBtn} color="gray" />
                        <AiFillDelete className="cursor-pointer" onClick={handleDeleteLink} size={24} color="red" />
                    </div>
                </div>
            </div>
        </>
    )
}