import Head from 'next/head'
import { Footer } from '../components/commons/footer.common'
import { AiOutlineStock } from "react-icons/ai"
import { Poppins } from "@next/font/google"
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from "next/router"
import { useCookies } from 'react-cookie'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { authLogin } from './api'

const poppins = Poppins({ weight: "400", subsets: ['latin'] })

export default function Login() {


    const router = useRouter()
    const [cookies, setCookies] = useCookies(["qwer"])
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = useState(false)
    const [password, setPassword] = useState("")
    const data = { email, password }
    const queryClient = useQueryClient()
    const authMutation = useMutation({
        mutationFn: authLogin,
        mutationKey: ["auth"],
        onError: () => {
            setProgress(false)
            setLoading(true)
            router.push("/login")
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ["auth"]
            })
            setProgress(false)
            await myauth(data)
            router.push("/dashboard")
        }
    })
    const handlerAuth = async (e: any) => {
        e.preventDefault()
        setProgress(true)
        await authMutation.mutate(data)

    }
    const myauth = async (data: any) => {
        const auth = await authLogin(data)
        const user: any = auth?.data
        setCookies("qwer", user, { secure: true })
    }

    return (
        <>
            <Head>
                <title>Vetchi Smart Stock  |  Login</title>
                <meta name="description" content="Save Link" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <main className={`py-16 ${poppins.className}`}>
                    <div className="container mx-auto">
                        <div className='flex flex-col justify-center items-center'>
                            <AiOutlineStock size={60} />
                            <h1 className="text-base lg:text-2xl text-gray-900 font-medium leading-tight py-4">
                                Sign in to  Vetchi Smart Stock
                            </h1>
                            <form onSubmit={handlerAuth}>
                                <div className='max-w-sm bg-gray-50 px-8 py-6 border'>
                                    <div>
                                        <p className='text-base py-1'>Email</p>
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className='px-2 rounded-md py-2 bg-white border md:w-[22rem]' />
                                    </div>
                                    <div className='mt-4'>
                                        <div className='flex justify-between items-center py-1'>
                                            <p className='text-base'>Password</p>
                                            <Link href={""} className='text-xs text-blue-500'>Forgot password?</Link>
                                        </div>
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className='px-2 rounded-md py-2 bg-white border lg:w-[22rem]' />
                                    </div>
                                    <div className='mt-4 flex justify-center items-center'>
                                        <button type='submit' className='text-base text-white bg-blue-700 rounded-md py-3 w-full'>
                                            {progress ? 'chargement...' : 'connexion'}
                                        </button>
                                    </div>
                                    {loading && (
                                        <div className='pt-4'>
                                            <p className='text-sm text-red-600 font-medium text-center'>Informations incorrectes</p>
                                        </div>
                                    )}
                                </div>
                                <div className='max-w-sm p-4 mt-6'>
                                    <div className='flex justify-center items-center'>
                                        <p className='text-sm py-1 text-center'>New to SaveLink ? <Link className='text-blue-500 font-medium' href={"/register"}>Create account.</Link></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
                <Footer />
            </div >
        </>
    )
}
