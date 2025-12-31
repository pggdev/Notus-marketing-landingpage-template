import { cn } from "@/app/lib/utils"
import { Icon123 } from "@tabler/icons-react"

export const IconCard = ({ icon, className }: { icon: React.ReactNode, className?: string }) => {
    return <div className="flex">
        <div className={cn("bg-white shadow-xs border border-neutral-200 rounded-md flex justify-center items-center p-3", className)}>
            {icon}
        </div>
    </div>
}