import { cn } from "../lib/utils"

export const Subheading = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return <div className={cn("max-w-lg text-neutral-500 text-[16px] text-center", className)}>
        {children}

    </div>
}