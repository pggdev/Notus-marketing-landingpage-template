import { div } from "motion/react-client"
import { Card } from "../features/card"
import { IconRoute } from "@tabler/icons-react"
import { motion } from "motion/react"
export const Hcard3 = () => {
    return <div>

        <Card className="h-110 overflow-hidden">

            <motion.div

                animate={{
                    y: ["0%", "-50%"]
                }}

                transition={{
                    duration: 20,
                    repeat: Infinity
                }}

                className="h-full flex flex-col gap-4 items-center justify-center">
                <InnerBlock />
                <InnerBlock />
                <InnerBlock />
                <InnerBlock />
                <InnerBlock />
                <InnerBlock />
                <InnerBlock />


            </motion.div>

        </Card >


    </div >
}



const InnerBlock = () => {
    return <motion.div



        className=" w-[70%] bg-primary/75 mx-auto rounded-[18px] p-4" >
        <div className="flex justify-between items-center">

            <div className="flex items-center gap-2">
                <div className="bg-green-100 rounded-md p-1.5 ">
                    <IconRoute className="size-3.5 rotate-90 " />


                </div>
                <h1>
                    deploy-prod-ap-223
                </h1>
            </div>


            <div className="flex items-center gap-2 ">
                <h2 className="text-sm">
                    45 Mins ago
                </h2>
                <div className="rounded-full p-[0.2px] size-1 bg-neutral-200"></div>

                <div className="text-[13px]">
                    feature/auth
                </div>
            </div>

        </div>



    </motion.div >

}