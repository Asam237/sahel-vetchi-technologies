import Image from "next/image";
import { Control, Management } from "../../data/icons";
import { ItemDesc } from "../../types";

export const ItemsDescComponent = ({ description, items, picture, title, myswitch }: ItemDesc) => {
    if (myswitch === true) {
        return (
            <div className="flex flex-col-reverse md:flex-row mb-10 md:mb-36">
                <div className="w-full md:w-3/5 md:mr-24">
                    <div>
                        <h3 className="text-2xl md:text-4xl md:max-w-3xl text-blue-700 font-bold leading-tight text-center md:text-justify mt-6">
                            {title}
                        </h3>
                        <p className="leading-6 md:max-w-2xl text-gray-600 mt-4 text-center md:text-justify font-semibold">{description}</p>
                        <ul className="mt-4 hidden md:flex flex-col">
                            {
                                items.map((item: any, index) => {
                                    return (
                                        <li key={index} className="leading-6 text-gray-600 text-sm text-start md:text-justify"><span>&minus; </span>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-2/5 flex justify-center items-center md:justify-start">
                    <Image src={picture} alt="pic" className="w-32 md:w-60 h-auto" />
                </div>
            </div>

        )
    }
    else {
        return (
            <div className="flex flex-col md:flex-row mb-10 md:mb-36">
                <div className="w-full md:w-2/5 flex justify-center items-center md:justify-end">
                    <Image src={picture} alt="pic" className="w-32 md:w-60 h-auto md:mr-24" />
                </div>
                <div className="w-full md:w-3/5">
                    <div>
                        <h3 className="text-2xl md:text-4xl md:max-w-3xl text-blue-700 font-bold leading-tight text-center md:text-justify mt-6">
                            {title}
                        </h3>
                        <p className="leading-6 md:max-w-2xl text-gray-600 mt-4 text-center md:text-justify font-semibold">{description}</p>
                        <ul className="mt-4 hidden md:flex flex-col">
                            {
                                items.map((item: any, index) => {
                                    return (
                                        <li key={index} className="leading-6 text-gray-600 text-sm text-start md:text-justify"><span>&minus; </span>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}