import { cn } from "@/app/lib/utils"

interface button {
    varient: "red" | "green" | "blue" | "yellow" | "neutral",
    children: React.ReactNode,
    className?: string,

}


export const Fbadge = ({ varient, children, className }: button) => {
    return <div className="flex">
        <div>
            {varient === "blue" && <button className={cn("border border-blue-400 bg-blue-50 rounded-sm text-sm px-2 py-[0.5px] text-blue-500", className)}>{children}</button>}
            {varient === "green" && <button className={cn("border border-green-400 bg-green-100 rounded-sm text-sm px-2 py-[0.5px] text-green-500", className)}>{children}</button>}
            {varient === "yellow" && <button className={cn("border border-yellow-400 bg-yellow-100 rounded-sm text-sm px-2 py-[0.5px] text-yellow-500", className)}>{children}</button>}
            {varient === "red" && <button className={cn("border border-red-400 bg-red-100 rounded-sm text-sm px-2 py-[0.5px] text-red-500", className)}>{children}</button>}
            {varient === "neutral" && <button className={cn(" bg-neutral-100 rounded-sm text-sm px-2 py-[0.5px] text-black", className)}>{children}</button>}
        </div>

    </div>
}