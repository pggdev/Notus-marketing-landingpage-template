import { cn } from "../lib/utils"

interface button {
    children: React.ReactNode,
    className?: string,
    varient: "primary" | "secondary"
}



export const Btn = ({ children, className, varient }: button) => {
    return <div>

        {varient === "primary" && <button className={cn("bg-black rounded-xl text-white font-sm px-6 py-2", className)}>{children}</button>}
        {varient === "secondary" && <button className={cn("bg-neutral-100 border border-neutral-200 rounded-xl text-black font-sm px-6 py-2", className)}>{children}</button>}



    </div>
}