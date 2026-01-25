import { IconPhone, IconDatabase, IconWallet, IconRocket, IconRocketOff, IconRefresh, IconGraph, IconBrandOpenai, IconBrandSlack, IconCircle, IconBell } from "@tabler/icons-react"

import { FeatureCard } from "../useCases/usecasecards"
import { Card } from "../features/card"
import { IconCard } from "@/app/section/features/card3/iconCard"
import { Fbadge } from "@/app/section/features/badge"
import { Balls } from "@/app/section/features/balls"
import { cn } from "@/app/lib/utils"
import { Topsvg } from "@/app/section/benefits/svgs/svgs"




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
                <div className="h-[50%] flex justify-center items-center px-6 relative">

                    <div className=" flex justify-between w-full items-center relative">
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

                    <div className="absolute bottom-0">
                        <Fbadge varient="blue">connected</Fbadge>
                    </div>
                </div>

                <div className="h-[50%] relative overflow-hidden ">
                    <div className="absolute h-[90%] w-full -right-16 -bottom-2 bg-neutral-200/50 rounded-md shadow-md">
                        <div className="bg-white px-4 py-6.5 border border-neutral-300/50 rounded-tl-md flex  gap-40 items-center">

                            <Balls ballSize="p-1" />
                            <Notification title="Meeting Created" />

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
                                        <Slider />
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


        </Card>
    </div>
}



const Slider = ({ sliderlength }: { sliderlength?: string }) => {
    return <div className="">
        <div className=" rounded-2xl  bg-neutral-50 p-0.75 relative">
            <div className={cn("rounded-2xl bg-neutral-300 p-0.75 absolute inset-0 right-30", sliderlength)}>


            </div>

        </div>

    </div>
}


const Notification = ({
    title
}: {
    title: string
}) => {
    return <div className="flex">
        <div className="px-1.5 py-1 flex items-center gap-1 border border-neutral-200 shadow-md rounded-sm">
            <IconBell className="size-3 text-neutral-500" />
            <h1 className="text-xs text-neutral-400">{title}</h1>
        </div>

    </div>
}