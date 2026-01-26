'use client'

import { IconPhone, IconDatabase, IconWallet, IconRocket, IconRocketOff, IconRefresh, IconGraph, IconBrandOpenai, IconBrandSlack, IconCircle, IconBell } from "@tabler/icons-react"

import { FeatureCard } from "../useCases/usecasecards"
import { Card } from "../features/card"
import { IconCard } from "@/app/section/features/card3/iconCard"
import { Fbadge } from "@/app/section/features/badge"
import { Balls } from "@/app/section/features/balls"
import { cn } from "@/app/lib/utils"
import { Bottomsvg, Topsvg } from "@/app/section/benefits/svgs/svgs"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"




const gridOne = [
    {
        icon: <IconRocket className="text-primary size-6 " />,
        title: "Launch Faster ",
        subheading: "Visually orchestrate autonomous agents without writing boilerplate code"
    },
    {
        icon: <IconRefresh className="text-primary size-6" />,
        title: "DataOps ",
        subheading: "Visually orchestrate autonomous agents without writing boilerplate code"
    },
    {
        icon: <IconGraph className="text-primary size-6" />,
        title: "FinOps",
        subheading: "Visually orchestrate autonomous agents without writing boilerplate code"
    },

]


export const BenGrid = () => {
    return <div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="flex flex-col gap-5">

                {gridOne.map((items, index) => <FeatureCard varient={"normal"} key={index} icon={items.icon} title={items.title} subheading={items.subheading} />)}

            </div>
            <div className="">
                <Midcard />


            </div>
            <div className="flex flex-col gap-5">

                {gridOne.map((items, index) => <FeatureCard varient="normal" key={index} icon={items.icon} title={items.title} subheading={items.subheading} />)}

            </div>

        </div>



    </div>
}



const Midcard = () => {
    return <div>
        <Card className="h-148">
            <div className="bg-neutral-50 rounded-xl h-full" >
                <div className={cn("h-[50%] flex justify-center items-center px-6 relative",
                    " bg-neutral-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:10px_10px] mask-radial-from-20%  "
                )}>
                    <div className="absolute -bottom-10">
                        <Bottomsvg />
                    </div>

                    <div className=" flex justify-between w-full items-center relative ">
                        <div className="z-10">
                            <IconCard icon={<IconBrandOpenai />} className="shadow-md" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><Topsvg /></div>
                        <div className=" size-17 z-10 rounded-md p-px flex justify-center items-center overflow-hidden relative z-10">

                            <div className="w-full h-full absolute inset-0 [background-image:conic-gradient(from_0deg_at_50%_50%,transparent_0deg,#3b82f6_72deg,transparent_108deg)] scale-[1.4] animate-spin [animation-duration:1.5s]"></div>
                            <div className="w-full h-full absolute inset-0 [background-image:conic-gradient(from_0deg_at_50%_50%,transparent_0deg,#f17463_72deg,transparent_108deg)] scale-[1.4] animate-spin [animation-delay:0.75s] [animation-duration:1.5s]"></div>
                            <IconCard icon={<IconCircle />} className=" p-5 rounded-[3px] z-20 " />


                        </div>
                        <div className="z-10">
                            <IconCard icon={<IconBrandSlack />} className="shadow-md" />
                        </div>
                    </div>

                    <div className=" absolute bottom-0  ">

                        <div className="w-full h-full flex flex-col justify-center items-center">
                            <Fbadge varient="blue" >connected</Fbadge>

                        </div>
                    </div>
                </div>

                <div className="h-[50%] relative overflow-hidden ">
                    <div className="absolute h-[90%] w-full -right-16 -bottom-2 bg-neutral-200/50 rounded-md shadow-md">
                        <div className="bg-white px-4 py-6.5 border border-neutral-300/50 rounded-tl-md flex  gap-40 items-center">

                            <Balls ballSize="p-1" />
                            <Notification />

                        </div>

                        <div className="absolute w-full bg-white h-full -right-15">
                            <div className="px-4 pt-6">
                                <h1 className="text-sm font-bold">Dashboard</h1>

                                <div className="flex flex-col gap-4 mt-5 mask-b-from-0">
                                    <div className="flex flex-col gap-0.5">
                                        <h1 className=" text-neutral-400 text-sm pb-1">API Calls</h1>
                                        <Slider />
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <h1 className=" text-neutral-400 text-sm pb-1">Success Rate</h1>
                                        <Slider delay={0.1} />
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <h1 className=" text-neutral-400 text-sm pb-1">Workflows</h1>
                                        <Slider />
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                </div>


            </div>


        </Card >
    </div >
}



const Slider = ({ sliderlength, delay }: { sliderlength?: string, delay?: number }) => {
    return <div className="">
        <div className=" rounded-2xl  bg-neutral-50 p-0.75 relative">
            <motion.div

                initial={{ width: "0%" }}
                whileInView={{ width: "60%" }}
                transition={{
                    duration: 1.4,
                    ease: "linear",
                    delay: delay
                }}

                className={cn("rounded-2xl bg-neutral-300 p-0.75 absolute inset-0 right-30", sliderlength)}>


            </motion.div>

        </div>

    </div >
}



const NOTIFICATION_TEXTS = [
    "Meeting Created",
    "Workflow Started",
    "Data Synced",
    "Task Completed",
];


const Notification = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % NOTIFICATION_TEXTS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex h-7 items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.div

                    key={index}
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                    className="px-1.5 py-1 flex items-center gap-1 border border-neutral-200 shadow-md rounded-sm bg-white overflow-hidden min-w-[120px]"
                >
                    <IconBell className="size-3 text-neutral-500 shrink-0" />
                    <h1 className="text-xs text-neutral-400 whitespace-nowrap">
                        {NOTIFICATION_TEXTS[index]}
                    </h1>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};