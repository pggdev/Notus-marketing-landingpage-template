import { cn } from "@/app/lib/utils"

export const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {

    return <div className={cn("h-80 relative", className)}>

        {children}
    </div>
}