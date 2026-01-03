'use client'

import { Btn } from "../btn"
import { Container } from "../containerbox"
import { Pricingfeatures } from "./pricingfeature"
import { cn } from "@/app/lib/utils"
import { useState } from "react"


const Pricingsection = () => {
    const [selectedTab, setSelectedTab] = useState<'monthly' | 'yearly'>('monthly')
    return <div>
        <Pricinggrid selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <Pricingtoggle selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

    </div>
}



export const Pricinggrid = ({ selectedTab, setSelectedTab }: { selectedTab: "monthly" | "yearly", setSelectedTab: React.Dispatch<React.SetStateAction<'monthly' | 'yearly'>>; }) => {
    return <div>
        <div className="border-b border-neutral-200">
            <Container className="border-x border-neutral-200">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-neutral-200">

                    <div>
                        <div className="px-8 py-12 flex flex-col gap-6">
                            <div>
                                <h1 className="text-[22px]">Growth</h1>
                                <h1 className="text-neutral-500 text-md">Early stage teams</h1>
                            </div>


                            {selectedTab === "monthly" && <h1 className="text-[28px] ">$8 <span className="text-sm">/seat</span></h1>}
                            {selectedTab === "yearly" && <h1 className="text-[28px] ">$80 <span className="text-sm">/seat</span></h1>}


                            <Btn varient="secondary" className="w-full bg-white"> Start Building</Btn>

                        </div>
                    </div>
                    <div>
                        <div className="px-8 py-12 flex flex-col gap-6">
                            <div>
                                <h1 className="text-[22px]">Scale</h1>
                                <h1 className="text-neutral-500 text-md">Fast moving startups</h1>
                            </div>


                            {selectedTab === "monthly" && <h1 className="text-[28px] ">$12 <span className="text-sm">/seat</span></h1>}
                            {selectedTab === "yearly" && <h1 className="text-[28px] ">$120 <span className="text-sm">/seat</span></h1>}


                            <Btn varient="primary" className="w-full bg-primary"> Start for free</Btn>

                        </div>
                    </div>

                    <div>
                        <div className="px-8 py-12 flex flex-col gap-6">
                            <div>
                                <h1 className="text-[22px]">Enterprise</h1>
                                <h1 className="text-neutral-500 text-md">Large Enterprises</h1>
                            </div>


                            {selectedTab === "monthly" && <h1 className="text-[28px] ">$25 <span className="text-sm">/seat</span></h1>}
                            {selectedTab === "yearly" && <h1 className="text-[28px] ">$250 <span className="text-sm">/seat</span></h1>}


                            <Btn varient="secondary" className="w-full bg-white"> Contact Sales</Btn>

                        </div>
                    </div>


                </div>
            </Container>
        </div>

        <div>
            <Pricingfeatures />
        </div>

    </div>
}




export const Pricingtoggle = ({ selectedTab, setSelectedTab }: { selectedTab: "monthly" | "yearly", setSelectedTab: React.Dispatch<React.SetStateAction<'monthly' | 'yearly'>>; }) => {



    return <div>

        <div className="w-85">
            <div className="w-full rounded-xl px-2 py-2.5 bg-neutral-50 grid grid-cols-2 items-center justify-between relative [--pattern-fg:var(--color-gray-950)]/5 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed ">

                <div className={cn(" bg-white w-[50%] h-[67%] absolute z-0 rounded-lg ring ring-neutral-200 shadow-sm  ",

                    selectedTab === "monthly" && "left-[calc(0px+8px)]",
                    selectedTab === "yearly" && "right-[calc(0px+8px)]",
                    "transition-all duration-300 ease-in"
                )}>
                </div>

                <div className="flex justify-center z-20 cursor-pointer" onClick={() => setSelectedTab('monthly')}>
                    <h1>Monthly</h1>
                </div>
                <div className="flex justify-center items-center z-20 gap-2 cursor-pointer" onClick={() => setSelectedTab('yearly')}>
                    Yearly
                    <div className="flex gap-1 items-center rounded-xl px-2 py-[4px] bg-red-50">
                        <h2 className="text-red-500 text-xs">save</h2>
                        <h2 className="text-red-500 text-xs">20%</h2>

                    </div>
                </div>



            </div>


        </div>

    </div >
}