import { Poppins } from "@next/font/google";
import Head from "next/head";
import { Footer } from "../components/commons/footer.common";
import { Header } from "../components/commons/header.common";
import { BiStoreAlt, BiStats } from "react-icons/bi"
import { HiShoppingBag, HiUserAdd } from "react-icons/hi"
import Link from "next/link";

const poppins = Poppins({ weight: "400", subsets: ['latin'] })

export default function Dashboard() {
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
                <div className="py-16">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row justify-center md:space-x-20 space-y-10 md:space-y-0">
                            <Link href={"/products"} className="w-full md:w-1/4 h-44 md:h-60 border flex justify-center items-center bg-gray-200 rounded-xl">
                                <BiStoreAlt size={100} className="text-orange-500 hover:translate-y-1 hover:scale-110 duration-300 cursor-pointer" />
                            </Link>
                            <Link href={"/sales"} className="w-full md:w-1/4 h-44 md:h-60 border flex justify-center items-center bg-gray-200 rounded-xl">
                                <HiShoppingBag className="text-pink-500 hover:translate-y-1 hover:scale-110 duration-300 cursor-pointer" size={100} />
                            </Link>
                        </div>
                        <div className="flex justify-center items-center mt-10 md:mt-20">
                            <Link href={"/stats"} className="w-full md:w-1/4 h-44 md:h-60 border flex justify-center items-center bg-gray-200 rounded-xl">
                                <BiStats size={100} className="text-blue-600 hover:translate-y-1 hover:scale-110 duration-300 cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}