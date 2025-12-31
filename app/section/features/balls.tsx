import { cn } from "@/app/lib/utils"

export const Balls = ({ ballSize }: { ballSize?: string }) => {
    return <div className={cn("flex gap-1")}>
        <div className={cn("p-1.5 rounded-full size-2 bg-red-400", ballSize)}></div>
        <div className={cn("p-1.5 rounded-full size-2 bg-yellow-400", ballSize)}></div>
        <div className={cn("p-1.5 rounded-full size-2 bg-green-400", ballSize)}></div>


    </div>
}