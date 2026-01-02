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


export const Hcard1 = () => {
    return <div>

        <Card className="h-110">

            <div className="h-full flex justify-center items-center ">

                <div className="flex justify-center absolute top-15">
                    <InrCard1 icon={<IconBrandOpenai className="size-4" />} title={"Open AI"} desc="GPT5 " badge={<Fbadge varient="blue">Connected</Fbadge >} />

                </div>

                <div className=" grid grid-cols-3 gap-2 px-1 pt-25">
                    <div className=" mx-auto">


                        <InrCard1 icon={<IconBrandAdobe className="size-4 text-primary" />} title={"Anthorpic"} desc="Claude 4 " badge={<Fbadge varient="red">Generator</Fbadge >} />


                    </div>
                    <div className=" mx-auto">


                        <InrCard1 icon={<IconBrandMeta className="size-4 text-blue-500" />} title={"Meta"} desc="llama 2" badge={<Fbadge varient="blue">Text Generator</Fbadge >} />


                    </div>
                    <div className=" mx-auto">


                        <InrCard1 icon={<IconBrandOpenai className="size-4" />} title={"Open AI"} desc="GPT5 " badge={<Fbadge varient="blue">Code Generator</Fbadge >} />


                    </div>


                </div>




            </div>

        </Card >

    </div >



}