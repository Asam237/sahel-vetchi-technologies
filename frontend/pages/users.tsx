import { Poppins } from "@next/font/google";
import Head from "next/head";
import Link from "next/link";
import { BiTrash } from "react-icons/bi";
import { Footer } from "../components/commons/footer.common";
import { Header } from "../components/commons/header.common";
import { Items } from "../components/commons/items.commont";

const poppins = Poppins({ weight: "400", subsets: ['latin'] })

export default function User() {
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
                        <Link href={'/register'} className="font-semibold text-base">
                            Add Product
                        </Link>
                    </div>
                    <div className='grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid gap-x-4 gap-y-10'>
                        <Items _id={""} descriptionItem={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"} nameItem={"Prado 2015"} prixAchatItem={"25 000 000 FCFA"} createdAt={"create"} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}