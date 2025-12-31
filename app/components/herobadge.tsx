import { IconStarFilled, IconReload } from "@tabler/icons-react"
export const Herobadge = () => {
    return <div className="flex gap-2">


        <div className="flex items-center gap-2 pr-4 border-r border-neutral-400">
            <IconReload className="size-5" />
            <div className="flex gap-1">
                <IconStarFilled className="size-3.5" />
                <IconStarFilled className="size-3.5" />
                <IconStarFilled className="size-3.5" />
                <IconStarFilled className="size-3.5" />
                <IconStarFilled className="size-3.5" />

            </div>
        </div>

        <h1 className="text-sm text-neutral-500">Innovative AI solution 2025 by  <span className="font-bold text-xl text-black pl-2">Gartner</span></h1>
    </div>
}