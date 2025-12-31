import { IconPhone } from "@tabler/icons-react"
import { Subheading } from "../subheading"

export const FeatureCard = ({ icon, title, subheading }: { icon: React.ReactNode, title: string, subheading: string }) => {
    return <div className="flex">
        <div className="flex flex-col gap-6 rounded-xl bg-neutral-50 p-6 [--pattern-fg:var(--color-gray-950)]/5 hover:bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed hover:bg-white hover:ring ring-neutral-200 transition-all duration-300">
            {icon}
            <div className="flex flex-col gap-3">
                <h1 className="text-xl">{title}</h1>
                <Subheading className="text-left">
                    {subheading}
                </Subheading>
            </div>

        </div>

    </div>
}