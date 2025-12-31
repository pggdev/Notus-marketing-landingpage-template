import { IconBrandCloudflare, IconBrandNextcloud, IconBrandNotion, IconBrandOpenai, IconBrandSlack, IconBrandSupabase, IconList, IconPhone } from "@tabler/icons-react"
import { IconCard } from "./iconCard"
import { CIconList } from "./list"
import { Fbadge } from "../badge"

export const Card3 = () => {
    return <div className=" hidden lg:grid grid-cols-2  max-w-[85%]  mx-auto  h-full ">


        <div className="absolute inset-0 -left-10 top-[50%] w-full -z-10 ">
            <svg width="100%" height="1" viewBox="0 0 565 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0.5H56005yu" stroke="#CFCFCF" />
            </svg>

        </div>







        <div className="flex justify-between items-center ">
            <div className="flex flex-col gap-10">
                <CIconList icon={<IconPhone className="size-4" />} title={"Customer Support"} />
                <CIconList icon={<IconPhone className="size-4" />} title={"Customer Support"} />
                <CIconList icon={<IconPhone className="size-4" />} title={"Customer Support"} />

            </div>

            <div className="">
                <IconCard icon={<IconBrandNotion />} className="p-4" />
            </div>

        </div>
        <div className="flex justify-center items-center relative">
            <IconCard icon={<IconBrandNotion className="size-6" />} className="p-2.5 absolute top-0 left-92" />


            <div className="flex justify-between w-full items-center max-w-[60%] absolute right-0">

                <Fbadge varient="blue" className="text-xs">connected</Fbadge>
                <IconCard icon={<IconBrandNotion className="size-6" />} className="p-2.5" />
                <IconCard icon={<IconBrandNotion className="size-6" />} className="p-2.5 mt-3" />



            </div>


            <div className="h-full max-h-[75%] absolute left-56 z-10 flex flex-col justify-between p-2">
                <div>

                    <IconCard icon={<IconBrandNotion className="size-6" />} className="p-2.5" />


                </div>
                <div>


                    <IconCard icon={<IconBrandCloudflare className="size-6" />} className="p-2.5" />


                </div>
            </div>







        </div>




    </div >
}