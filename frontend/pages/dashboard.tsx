import { Poppins } from "@next/font/google";
import Head from "next/head";
import { Footer } from "../components/commons/footer.common";
import { Header } from "../components/commons/header.common";

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
            <main className='px-4 md:px-0'>
                <div className={`${poppins.className}`}>
                    <Header />
                </div>
            </main>
            <Footer />
        </>
    )
}