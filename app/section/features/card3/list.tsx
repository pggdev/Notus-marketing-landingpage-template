import { IconPhone } from "@tabler/icons-react"

export const CIconList = ({ icon, title }: { icon: React.ReactNode, title: string }) => {
    return <div className="flex gap-1 items-center">
        {icon}
        <h1 className="text-sm">{title}</h1>

    </div>
}