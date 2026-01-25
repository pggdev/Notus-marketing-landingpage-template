"use client"

import { BenGrid } from "@/app/components/benefits/benefitsgrid"
import { Container } from "@/app/components/containerbox"
import { Card } from "@/app/components/features/card"
import { Subheading } from "@/app/components/subheading"
import { Grid } from "@/app/components/useCases/grid"
import { IconLocation, IconPhone } from "@tabler/icons-react"
import { start } from "node:repl"
import { useState, useRef, useEffect } from "react"
import { Card3 } from "../features/card3"
import { Hcard1 } from "@/app/components/howitworks/Hcard1"
import { cn } from "@/app/lib/utils"
import { Hcard2 } from "@/app/components/howitworks/Hcard2"
import { Hcard3 } from "@/app/components/howitworks/Hcard3"



const Tabsitems = [
    {
        icon: < IconLocation className="size-4 rotate-270" />,
        heading: "Design your workflow",
        desc: "Drag and drop interface to create, connect, and configure agents into logical workflows",
        component: <Hcard1 />

    },
    {
        icon: < IconPhone className="size-4 rotate-270" />,
        heading: "Design your workflow",
        desc: "Drag and drop interface to create, connect, and configure agents into logical workflows",
        component: <Hcard2 />

    },
    {
        icon: < IconLocation className="size-4 rotate-270" />,
        heading: "Design your workflow",
        desc: "Drag and drop interface to create, connect, and configure agents into logical workflows",
        component: <Hcard3 />

    },
]




export const Integrate = () => {

    const intervalRef = useRef<NodeJS.Timeout>(null)
    const currentIndexRef = useRef(0)
    const [selectedTab, setSelectedTab] = useState(Tabsitems[0])


    const startAutoplay = () => {
        stopAutoplay();

        intervalRef.current = setInterval(() => {
            currentIndexRef.current = (currentIndexRef.current + 1) % Tabsitems.length;
            setSelectedTab(Tabsitems[currentIndexRef.current])
        }, 5000)

    }


    const stopAutoplay = () => {
        if (intervalRef.current) {
            clearTimeout(intervalRef.current);
            intervalRef.current = null;
        }

    }

    useEffect(() => {
        startAutoplay()

        return () => stopAutoplay()

    }, [])



    return <div className="border-t border-neutral-200">

        <Container className="py-15 px-8 border-x border-b border-neutral-200">
            <div className="flex flex-col justify-center items-center gap-6 ">

                <h1 className="text-primary text-sm font-medium"> How it Works</h1>
                <h1 className="text-black text-4xl font-sm font-sans">Integrates easily</h1>
                <Subheading className="max-w-lg text-neutral-500 text-md">
                    We empower developers and technical teams to create, simulate, and manage AI-driven workflows visually
                </Subheading>

            </div>

        </Container>

        <Container className="border-x border-neutral-200">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-neutral-200">
                <div>
                    <Card className="h-110">
                        <div className="h-full">
                            <div>

                                {Tabsitems.map((items, index) => <div key={index} className={cn("border-b border-neutral-200 cursor-pointer hover:bg-neutral-50 ",


                                )} onClick={() => setSelectedTab(items)}>
                                    <div className="px-15 py-9" >
                                        <div className="flex gap-2 items-center">
                                            {items.icon}
                                            <h1 className="text-md ">{items.heading}</h1>

                                        </div>
                                        <Subheading className="text-left text-sm mt-2.5 ">
                                            {items.desc}
                                        </Subheading>
                                    </div>

                                </div>)
                                }
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="-z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:10px_10px] mask-radial-from-50%">


                    {selectedTab.component}



                </div>

            </div>


        </Container >

    </div >
}
