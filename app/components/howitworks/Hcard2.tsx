import { IconBrandOpenai, IconRuler3 } from "@tabler/icons-react"
import { Fbadge } from "@/app/section/features/badge"
import { Subheading } from "../subheading"
import { IconCard } from "@/app/section/features/card3/iconCard"
import { Card } from "../features/card"
import { motion } from "motion/react"


const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: -10,
        filter: "blur(8px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.4
        }
    },
};


export const Hcard2 = () => {
    return <motion.div

        className="">
        <motion.div

            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className=" h-110 flex items-center relative">

            <motion.div
                variants={itemVariants}

                className="w-80 h-75 absolute -left-15 ">
                <div className="w-full h-full rounded-xl shadow-md bg-white px-3.5 border border-neutral-200 ">

                    <div className="absolute -right-5 -top-5">
                        <IconCard icon={<IconBrandOpenai className="size-7" />} className="p-4 shadow-xl" />
                    </div>
                    <div className="py-20 mask-l-from-0 pl-15 ">
                        <div className=" flex items-center gap-2 pb-2 border-b border-neutral-300 ">
                            <IconRuler3 className="size-4" />
                            <h1 className="text-sm"> Task</h1>
                        </div>

                        <div className="pt-5">
                            <Subheading className="text-left text-[13px]"> Write the first and second rule of it using Claude and ChatGPT.</Subheading>

                        </div>

                        <div className="flex flex-col gap-2 pt-5">
                            <div className="w-[40%] bg-neutral-200 p-2 rounded-xl"></div>
                            <div className="w-[60%] bg-neutral-200 p-2 rounded-xl"></div>
                        </div>

                    </div>
                </div>
            </motion.div>





            <motion.div

                variants={itemVariants}

                className="w-80 h-75 absolute -right-15  ">
                <div className="w-full h-full rounded-xl shadow-md bg-white px-3.5 border border-neutral-200 ">

                    <div className="absolute -left-5 -top-5">
                        <IconCard icon={<IconBrandOpenai className="size-7" />} className="p-4 shadow-xl" />
                    </div>
                    <div className="py-20 mask-r-from-0 pr-15 ">
                        <div className=" flex items-center gap-2 pb-2 border-b border-neutral-300 ">
                            <IconRuler3 className="size-4" />
                            <h1 className="text-sm"> Task</h1>
                        </div>



                        <div className="flex flex-col gap-2 pt-4">
                            <div className="flex  justify-between">



                                <div className="flex gap-2 items-center">
                                    <IconBrandOpenai className="text-primary size-3.5" />
                                    <h1 className="text-sm">Claude 4 Opus</h1>
                                </div>
                                <div>
                                    <Fbadge varient="blue" className="bg-red-50 ">Unaviable</Fbadge>
                                </div>





                            </div>
                            <div className="flex  justify-between">



                                <div className="flex gap-2 items-center">
                                    <IconBrandOpenai className="text-primary size-3.5" />
                                    <h1 className="text-sm">Claude 4 Opus</h1>
                                </div>
                                <div>
                                    <Fbadge varient="blue" className="bg-red-50 ">Unaviable</Fbadge>
                                </div>





                            </div>

                        </div>
                        <div className="flex flex-col gap-2 pt-5">
                            <div className="w-[70%] bg-neutral-200 p-2 rounded-xl"></div>
                            <div className="w-[50%] bg-neutral-200 p-2 rounded-xl"></div>
                            <div className="w-[40%] bg-neutral-200 p-2 rounded-xl"></div>
                        </div>

                    </div>
                </div>
            </motion.div>




        </motion.div>

    </motion.div>
}