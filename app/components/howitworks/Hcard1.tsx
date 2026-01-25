import { InrCard1 } from "@/app/section/features/openAicard"
import { Card } from "../features/card"
import { IconBrandAdobe, IconBrandMeta, IconBrandOpenai } from "@tabler/icons-react"
import { Fbadge } from "@/app/section/features/badge"
import { motion } from "motion/react"


const Carditems = [

    {
        icon: <IconBrandOpenai className="size-4 " />,
        title: "Open Ai"

    },

]


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


export const Hcard1 = () => {
    return <div>

        <Card className="h-110">

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="h-full flex justify-center items-center ">

                <motion.div
                    variants={itemVariants}

                    className="flex justify-center absolute top-15">
                    <InrCard1 icon={<IconBrandOpenai className="size-4" />} title={"Open AI"} desc="GPT5 " badge={<Fbadge varient="blue">Connected</Fbadge >} />

                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className=" grid grid-cols-3 gap-2 px-1 pt-25">
                    <motion.div
                        variants={itemVariants}
                        className=" mx-auto">
                        <InrCard1 icon={<IconBrandAdobe className="size-4 text-primary" />} title={"Anthorpic"} desc="Claude 4 " badge={<Fbadge varient="red">Generator</Fbadge >} />
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className=" mx-auto">
                        <InrCard1 icon={<IconBrandMeta className="size-4 text-blue-500" />} title={"Meta"} desc="llama 2" badge={<Fbadge varient="blue">Text Generator</Fbadge >} />
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className=" mx-auto">
                        <InrCard1 icon={<IconBrandOpenai className="size-4" />} title={"Open AI"} desc="GPT5 " badge={<Fbadge varient="blue">Code Generator</Fbadge >} />
                    </motion.div>
                </motion.div>




            </motion.div>

        </Card >

    </div >



}