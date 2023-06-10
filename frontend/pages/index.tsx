import Head from 'next/head'
import { Poppins } from "@next/font/google"
import { Footer } from '../components/commons/footer.common'
import { Header } from '../components/commons/header.common'
import { Intro } from '../components/sections/intro.section'
import Link from 'next/link'
import { AiOutlineCheck } from 'react-icons/ai'
import { ItemsDescComponent } from '../components/commons/itemsDesc.common'
import { itemsDesc } from '../data/itemDesc'
import { ItemDesc } from '../types'
import { Control, Management, Sale } from '../data/icons'
import { useCookies } from 'react-cookie'
import { useRouter } from "next/router"
import { useEffect } from 'react'

const poppins = Poppins({ weight: "400", subsets: ['latin'] })

export default function Home() {
  const [cookie, removeCookie]: any = useCookies(["qwer"])
  const token = cookie?.qwer?.token
  const router = useRouter()

  useEffect(() => {
    if (token) {
      router.replace("/dashboard")
    }
  }, [])


  if (token) {
    return (<div className='h-screen flex justify-center items-center'>
      <p className='text-xl text-gray-800'>Loading...</p>
    </div>)
  } else {
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
            <main className='py-16 md:py-40'>
              <div className="container mx-auto">
                <Intro />
                <div className='py-16 md:py-40'>
                  <div className="flex justify-center items-center flex-col text-center w-full">
                    <h1 className="text-2xl md:text-4xl md:max-w-3xl text-blue-700 font-bold leading-tight text-center">
                      Benefits
                    </h1>
                    <p className="leading-7 md:max-w-4xl text-gray-600 mt-6 text-center text-xl font-semibold">Simple, yet powerful set of tools built for growing businesses</p>
                  </div>
                </div>
                <ItemsDescComponent description="Manage all your products in one central place. Stock&Buy offers a rich set of features to capture each and every details about your products." items={["Manage simple and variable products", "Inbound and outbound inventory tracking", "Native support for Bundles (kits)", "And more..."]} picture={Management} title="Complete inventory management" myswitch={false} />
                <ItemsDescComponent description="Improved inventory control through automatic stock level updates whenever sales and purchases are made. Stock&Buy helps you manage your inventory across multiple warehouses, and in multiple currencies." items={["Purchase inventory in multiple currencies", "Accurate landed cost tracking", "Stock transfer inventory across locations", "And more..."]} picture={Control} title="Powerful stock control processes" myswitch={true} />
                <ItemsDescComponent description="Stock&Buy makes it easy to track and fulfill orders. All your orders, inventory, supplier and customer data synced and fully integrated on one system. Manage invoices, shipments and payments in multiple locations and currencies" items={["Pull all your sales channels together", "Synchronize your orders with your inventory", "Track your COGS as orders flow in", "And more..."]} picture={Sale} title="Your sales in one place" myswitch={false} />
                <ItemsDescComponent description="Lost in tracking your bill of materials in a spreadsheet? Search no more. Stock&Buy was designed from the group up to help you accurately track your manufacturing workflows." items={["Manage your Bills Of Materials", "Run assembly and disassembly production orders", "Automated Inventory tracking of your BOM and raw materials", "And more..."]} picture={Management} title="Manufacturing workflows" myswitch={true} />
                <div className='py-16 md:py-40'>
                  <div className="flex justify-center items-center flex-col text-center w-full">
                    <h1 className="text-2xl md:text-4xl md:max-w-3xl text-blue-700 font-bold leading-tight text-center">
                      The backbone for your business
                    </h1>
                    <p className="font-semibold leading-7 md:max-w-4xl text-xl text-gray-600 mt-6 text-center">Whether you have a brick & mortar or an online business, Stock&Buy helps you manage your inventory, orders, customers and suppliers in one place.</p>
                  </div>
                </div>
                <figure className="max-w-screen-md mx-auto text-center">
                  <svg aria-hidden="true" className="w-8 md:w-12 h-8 md:h-12 mx-auto mb-3 text-blue-700" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                  <blockquote>
                    <p className="text-base md:text-2xl font-medium text-gray-900 dark:text-white">
                      …the answer to many inventory and accounting challenges I faced with a slightly complicated type of product…Now I am able to quite easily control the inventory of the packages even if the item is sold individually or in multiple other packages on the website.
                    </p>
                  </blockquote>
                  <div className="flex items-center justify-center mt-6 space-x-3">
                    <div className="flex items-center">
                      <p className="font-medium text-gray-400">Anonymous</p>
                    </div>
                  </div>
                </figure>
              </div>
            </main>
            <Footer />
          </div>
        </main>
      </>
    )
  }
}
