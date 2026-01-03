'use client'

import { Container } from "@/app/components/containerbox"
import { Pricinggrid } from "@/app/components/pricing/pricinggrid"
import { Pricingtoggle } from "@/app/components/pricing/pricinggrid"
import { useState } from "react"




export const Pricing = () => {
    const [selectedTab, setSelectedTab] = useState<'monthly' | 'yearly'>('monthly')

    return <div>
        <div className="border-b border-neutral-200">
            <Container className="py-10 px-8 border-x border-neutral-200 ">
                <div className="flex flex-col justify-center items-center gap-7">

                    <h1 className="text-primary text-sm font-medium">Pricing</h1>
                    <h1 className="text-black text-4xl font-sm font-sans">Simple and Feasible Pricing</h1>
                    <Pricingtoggle selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                </div>

            </Container>
        </div>

        <div>
            <Pricinggrid selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </div>

    </div>
}

