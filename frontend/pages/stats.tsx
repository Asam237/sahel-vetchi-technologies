import { Poppins } from "@next/font/google";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { BiTrash } from "react-icons/bi";
import { Footer } from "../components/commons/footer.common";
import { Header } from "../components/commons/header.common";
import { Items } from "../components/commons/items.commont";
import { getAllProduct } from "./api";

const poppins = Poppins({ weight: "400", subsets: ['latin'] })

export default function Stats() {

    const [cookie, removeCookie]: any = useCookies(["qwer"])
    const token = cookie?.qwer?.token

    const { isLoading, error, data } = useQuery({
        queryKey: ["products"],
        queryFn: () => getAllProduct(token)
    })


    const products = data?.data || []
    let countSold = 0;
    let countAvailable = 0;
    products.forEach((item: any) => {
        if (item?.sale === true) {
            countSold += 1
        }
        if (item?.sale === false) {
            countAvailable += 1
        }
    });

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
                    <div className='grid-cols-1 sm:grid-cols-2 grid gap-x-4 gap-y-10'>
                        <div className="px-8 py-8 border rounded-md shadow-lg hover:shadow-2xl">
                            <h1 className="text-3xl text-blue-700 font-semibold leading-tight text-center">Products Sold</h1>
                            <h1 className="text-4xl md:text-6xl text-blue-700 font-bold leading-tight text-center mt-4">{countSold}</h1>
                        </div>
                        <div className="px-8 py-4 border rounded-md shadow-lg hover:shadow-2xl">
                            <h1 className="text-3xl text-blue-700 font-semibold leading-tight text-center">Available Products</h1>
                            <h1 className="text-4xl md:text-6xl text-blue-700 font-bold leading-tight text-center mt-4">{countAvailable}</h1>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}