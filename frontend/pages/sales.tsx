import { Poppins } from "@next/font/google";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useCookies } from "react-cookie";
import { Footer } from "../components/commons/footer.common";
import { Header } from "../components/commons/header.common";
import { ItemsProduct } from "../components/commons/itemsProduct.common";
import { getAllProduct } from "./api";

const poppins = Poppins({ weight: "400", subsets: ['latin'] })

export default function Sales() {
    const [cookie, removeCookie]: any = useCookies(["qwer"])
    const token = cookie?.qwer?.token

    const { isLoading, error, data } = useQuery({
        queryKey: ["products"],
        queryFn: () => getAllProduct(token)
    })

    const products = data?.data || []

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
                    <div className='grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid gap-x-4 gap-y-10'>
                        {
                            products.map((item: any, index: any) => {
                                if (item.sale === true) {
                                    return <ItemsProduct key={index} _id={item._id} descriptionItem={item.description} nameItem={item.title} prixAchatItem={item.prixAchat} createdAt={item.createdAt} saleLab={true} />
                                }
                            })
                        }

                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}