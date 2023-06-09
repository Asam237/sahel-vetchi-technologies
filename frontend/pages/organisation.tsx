import { Poppins } from "@next/font/google";
import { useMutation } from "@tanstack/react-query";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { AiOutlineStock } from "react-icons/ai";
import { Footer } from "../components/commons/footer.common";
import { Header } from "../components/commons/header.common";
import { createOrganisation } from "./api";

const poppins = Poppins({ weight: "400", subsets: ['latin'] })

export default function Organisation() {

    const [loading, setLoading] = useState(false)
    const [cookie, removeCookie]: any = useCookies(["userId"])
    const userId = cookie.userId
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [adress, setAdress] = useState("")
    const [code, setCode] = useState("")
    const newOrganisation: any = { fullname, email, code, userId, phone, adress }

    const router = useRouter()
    const mutationKey = ["organisation"]

    const createOrganisationMutation = useMutation({
        mutationKey,
        mutationFn: createOrganisation,
        onSuccess: () => {
            setLoading(false)
            router.push("/organisation")
        },
        onError: () => {
            setLoading(false)
            router.push("/dashboard")
        }
    })

    const handlerAddOrganisation = (e: any) => {
        e.preventDefault()
        setLoading(true)
        createOrganisationMutation.mutate(newOrganisation)
    }

    return (
        <>
            <Head>
                <title>Vetchi Smart Stock</title>
                <meta name="description" content="Top mangas apps" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='px-4 md:px-0'>
                <div className='flex flex-col justify-center items-center'>
                    <AiOutlineStock size={60} />
                    <h1 className="text-base lg:text-2xl text-gray-900 font-medium leading-tight py-4">
                        Create Your Organisation
                    </h1>
                    <form onSubmit={handlerAddOrganisation}>
                        <div className='max-w-3xl bg-gray-50 px-8 py-6 border'>
                            <div>
                                <p className='text-base py-1'>Email address</p>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} className='px-2 rounded-md py-2 bg-white border md:w-[22rem]' />
                            </div>
                            <div className='mt-4'>
                                <p className='text-base py-1'>Full name</p>
                                <input type="text" onChange={(e) => setFullname(e.target.value)} className='px-2 rounded-md py-2 bg-white border md:w-[22rem]' />
                            </div>
                            <div className='mt-4'>
                                <p className='text-base py-1'>Phone</p>
                                <input type="text" onChange={(e) => setPhone(e.target.value)} className='px-2 rounded-md py-2 bg-white border md:w-[22rem]' />
                            </div>
                            <div className='mt-4'>
                                <p className='text-base py-1'>Adress</p>
                                <input type="text" onChange={(e) => setAdress(e.target.value)} className='px-2 rounded-md py-2 bg-white border md:w-[22rem]' />
                            </div>
                            <div className='mt-4'>
                                <p className='text-base py-1'>Code</p>
                                <input type="text" onChange={(e) => setCode(e.target.value)} className='px-2 rounded-md py-2 bg-white border md:w-[22rem]' />
                            </div>
                            <div className='mt-4 flex justify-center items-center'>
                                <button type='submit' className='text-base text-white bg-blue-700 rounded-md py-3 w-full'>Create</button>
                            </div>
                        </div>
                    </form>
                </div>

            </main>
            <Footer />
        </>
    )
}