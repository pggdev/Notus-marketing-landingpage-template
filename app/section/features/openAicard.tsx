import { IconBrandOpenai } from "@tabler/icons-react"
import { Fbadge } from "./badge"
import { cn } from "@/app/lib/utils"

export const InrCard1 = ({ className, icon, title, desc, badge }: { className?: string, icon: React.ReactNode, title: string, desc: string, badge: React.ReactNode }) => {
    return <div>
        <div className={cn("w-50 shrink-0 ", className)}>
            <div className=" bg-white rounded-lg border border-neutral-200 ">

                <div className="divide-y divide-neutral-200">
                    <div className="flex justify-between px-3 py-4">
                        <div className="flex items-center gap-2">
                            {icon}
                            <h1 className="text-sm ">{title}</h1>

                        </div>
                        <h2 className="text-xs font-mono text-neutral-500">{desc}</h2>

                    </div>
                    <div className="px-3 py-4">
                        {badge}
                    </div>
                </div>

            </div>

        </div>







    </div>


}