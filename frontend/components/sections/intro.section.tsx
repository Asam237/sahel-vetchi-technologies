import Link from "next/link"
import { AiOutlineCode, AiOutlineCheck, AiOutlineUser } from "react-icons/ai"
import { useCookies } from "react-cookie"
import Image from "next/image"
import { Banner } from "../../data/icons"

export const Intro = () => {

    const cookie: any = Object.values(useCookies(["qwer"]))[0]
    const token = cookie?.qwer?.token

    return (
        <section className={`text-md`}>
            <div className="flex flex-col lg:flex-row">
                <div className="flex justify-center items-center md:items-start flex-col text-center w-full lg:w-1/2">
                    <h1 className="text-2xl lg:text-6xl text-blue-700 font-bold leading-tight text-center md:text-start">
                        Powerful inventory management
                    </h1>
                    <p className="leading-7 font-semibold max-w-md text-gray-500 mt-6 text-center md:text-start">Whether you have a brick & mortar or an online business, Stock&Buy helps you manage your inventory, orders, customers and suppliers in one place.</p>
                    <div className="mt-10 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                        <Link href={"/register"} className="bg-blue-700 text-base h-12 w-64 lg:w-52 rounded-lg text-white flex justify-center items-center hover:shadow-2xl">
                            <AiOutlineCheck size={24} className="mr-2" />  Signup For Free
                        </Link>
                        {
                            typeof token !== "undefined" ?
                                <Link href={"/dashboard"} className="border-gray-900 border h-12 w-64 lg:w-52 rounded-lg text-gray-900 flex justify-center items-center hover:shadow-md hover:shadow-gray-400 text-base">
                                    <AiOutlineCode size={24} className="mr-2" />
                                    Your dashboard
                                </Link> :
                                <Link href={"/login"} className="border-gray-900 border h-12 w-64 lg:w-52 rounded-lg text-gray-900 flex justify-center items-center hover:shadow-md hover:shadow-gray-400 text-base">
                                    <AiOutlineUser size={24} className="mr-2" />
                                    Or Login
                                </Link>

                        }
                    </div>
                </div>
                <div className=" w-full flex justify-center items-center md:w-1/2 mt-10 md:mt-0">
                    <Image src={Banner} alt="image" className="w-32 md:w-80 h-auto" />
                </div>
            </div>
        </section>
    )
}