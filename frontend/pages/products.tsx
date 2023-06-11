import { Poppins } from "@next/font/google";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Footer } from "../components/commons/footer.common";
import { Header } from "../components/commons/header.common";
import { ItemsProduct } from "../components/commons/itemsProduct.common";
import { Modal } from "../components/commons/modal.common";
import { getAllProduct } from "./api";

const poppins = Poppins({ weight: "400", subsets: ['latin'] })

export default function Product() {

    const [addProductModal, setAddProductModal] = useState(false)
    const [cookie, removeCookie]: any = useCookies(["qwer"])
    const token = cookie?.qwer?.token
    const organisation = cookie?.qwer?.user
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [prixAchat, setPrixAchat] = useState("")
    const [prixGros, setPrixGros] = useState("")
    const [prixVente, setPrixVente] = useState("")

    const { isLoading, error, data } = useQuery({
        queryKey: ["products"],
        queryFn: () => getAllProduct(token)
    })

    const products = data?.data || []

    const handleAddProduct = () => {
        setAddProductModal(true)
    }

    const handleCancel = () => {
        setAddProductModal(false)
    }

    return (
        <>
            <Head>
                <title>Vetchi Smart Stock</title>
                <meta name="description" content="Top mangas apps" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`px-4 md:px-0 ${poppins.className}`}>
                <Header />
                <div className='py-16 container'>
                    <div className="flex bg-blue-700 text-white justify-center items-center px-6 py-3 rounded-md w-60 mb-10">
                        <div onClick={() => handleAddProduct()} className="font-semibold text-base cursor-pointer">
                            Add Product
                        </div>
                    </div>
                    <div className='grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid gap-x-4 gap-y-10'>
                        {
                            products.map((item: any, index: any) => {
                                if (item.sale === false) {
                                    return <ItemsProduct key={index} _id={item._id} descriptionItem={item.description} nameItem={item.title} prixAchatItem={item.prixAchat} createdAt={item.createdAt} />
                                }
                            })
                        }

                    </div>
                </div>
            </main>
            <Footer />
            {
                addProductModal && (
                    <Modal
                        onClose={() => setAddProductModal(false)}
                        title="Add New Product"
                    >
                        <form>
                            <div>
                                <p className='text-sm py-1'>Title</p>
                                <input type="text" className='px-6 rounded-md py-1 bg-white border w-full' onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                <p className='text-sm py-1'>Purchase Price</p>
                                <input type="text" className='px-6 rounded-md py-1 bg-white border w-full' onChange={(e) => setPrixAchat(e.target.value)} />
                            </div>
                            <div>
                                <p className='text-sm py-1'>Selling Price</p>
                                <input type="text" className='px-6 rounded-md py-1 bg-white border w-full' onChange={(e) => setPrixVente(e.target.value)} />
                            </div>
                            <div>
                                <p className='text-sm py-1'>Wholesale Price</p>
                                <input type="text" className='px-6 rounded-md py-1 bg-white border w-full' onChange={(e) => setPrixGros(e.target.value)} />
                            </div>
                            <div>
                                <p className='text-sm py-1 mt-4'>Description</p>
                                <textarea cols={3} rows={4} className='px-6 rounded-md py-1 bg-white border w-full' onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div className="flex flex-row space-x-4 items-center justify-end my-6">
                                <div className="flex justify-center items-center border px-4 py-2 rounded-md border-black w-28">
                                    <button onClick={handleCancel} className="font-semibold text-sm">
                                        Cancel
                                    </button>
                                </div>
                                <button type="submit" className="bg-blue-700 px-4 py-2 w-28 rounded-lg text-white flex justify-center items-center">
                                    Add
                                </button>
                            </div>
                        </form>
                    </Modal>
                )
            }
        </>
    )
}



