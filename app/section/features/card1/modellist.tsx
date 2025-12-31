import { IconBrandCloudflare, IconBrandMeta, IconBrandOpenai } from "@tabler/icons-react"
import { Fbadge } from "../badge"


export const Modellist = () => {
    return <div className="flex flex-col gap-5 ">
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <IconBrandOpenai className="text-orange-400 size-5" />
                <h1 className="text-md">Claude 4 Opus</h1>
            </div>
            <div>
                <Fbadge varient="red" className="bg-red-50">Unaviable</Fbadge>
            </div>

        </div>
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <IconBrandOpenai className="size-5" />
                <h1 className="text-md">ChatGPT</h1>
            </div>
            <div>
                <Fbadge varient="green" className="">Connected</Fbadge>
            </div>

        </div>
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <IconBrandMeta className="text-blue-500 size-5" />
                <h1 className="text-md">Llama 3.2</h1>
            </div>
            <div>
                <Fbadge varient="yellow" className="bg-yellow-50">waiting</Fbadge>
            </div>

        </div>



    </div>
}