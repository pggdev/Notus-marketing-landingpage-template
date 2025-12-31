import { IconBrandOpenai } from "@tabler/icons-react"
import { Fbadge } from "./badge"
import { cn } from "@/app/lib/utils"

export const InrCard1 = ({ className }: { className?: string }) => {
    return <div className={cn("p1 flex flex-col divide-y divide-neutral-200 border border-neutral-200 rounded-lg shadow-md max-w-43 w-full bg-white ", className)}>

        <div className="flex justify-between p-2 items-center">
            <div className="flex gap-2.5 items-center">

                <IconBrandOpenai className="size-4" />
                <h1 className="text-sm">Open AI</h1>


            </div>
            <h1 className="text-neutral-400 text-xs font-mono">GPT 5</h1>

        </div>
        <div className=" p-2 mt-[0.5px]">
            <Fbadge varient="blue">connected </Fbadge >
        </div>



    </div>
}