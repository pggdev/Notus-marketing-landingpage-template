import { Btn } from "@/app/components/btn"
import { Container } from "@/app/components/containerbox"

import { Send } from 'lucide-react';

const Products = [
    {
        title: "Agent Builder"
    },
    {
        title: "Simulation"
    },
    {
        title: "Integrations"
    },
    {
        title: "Multi Agent"
    },
    {
        title: "Workflow API"
    },
]


const Company = [
    {
        title: "Agent Builder"
    },
    {
        title: "Simulation"
    },
    {
        title: "Integrations"
    },
    {
        title: "Multi Agent"
    },
    {
        title: "Workflow API"
    },
]


const Legal = [
    {
        title: "Privacy Policy"
    },
    {
        title: "Terms of Service"
    },
    {
        title: "Cookie Policy"
    },

]

export const Footer = () => {
    return <div>

        <div className="border-y border-neutral-200">
            <Container className="py-10">

                <div className="grid grid-cols-1 md:grid-cols-12 px-4">
                    <div className="col-span-4 ">

                        <div className="flex flex-col gap-3.5 py-10">
                            <h1 className="text-[25px]">Notus</h1>
                            <h2 className="text-neutral-500">Manage and simulate agentic workflows </h2>
                            <Btn varient="primary" className="bg-black"> Start building</Btn>
                        </div>

                    </div>
                    <div className="col-span-5">

                        <Footergrid />


                    </div>
                    <div className="py-10 col-span-3">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-neutral-500 text[14px]-">
                                Newsletter
                            </h1>

                            <EmailSubscription />

                            <h1 className="text-neutral-500 text-[14px]">
                                Get the latest product news and behind the scenes updates.
                            </h1>


                        </div>
                    </div>
                </div>
            </Container>

        </div>
    </div>
}




const Footergrid = () => {
    return <div>

        <div className="grid grid-cols-1 md:grid-cols-3 py-10">


            <div className="flex flex-col gap-4 ">
                <h1 className="text-neutral-500 text-[14px]">Products</h1>
                {Products.map((items, index) => <h2 className="text-[13.5px] text-neutral-700">{items.title}</h2>)}


            </div>

            <div className="hidden md:flex flex-col gap-4 ">
                <h1 className="text-neutral-500 text-[14px]">Company</h1>
                {Products.map((items, index) => <h2 className="text-[13.5px] text-neutral-700">{items.title}</h2>)}


            </div>

            <div className="flex flex-col gap-4">
                <h1 className="text-neutral-500 text-[14px]">Legal</h1>
                {Legal.map((items, index) => <h2 className="text-[13.5px] text-neutral-700">{items.title}</h2>)}


            </div>

        </div>

    </div >
}


export const EmailSubscription = () => {
    return <div>

        <div className="flex justify-between px-2 py-1 rounded-xl bg-neutral-100 border border-neutral-300 w-70  ">

            <input type="email" placeholder="Your Email" className="outline-none placeholder:text-sm w-full" />
            <button className="bg-black p-2 rounded-lg">
                <Send className="size-4 text-white" />

            </button>


        </div>

    </div>
}
