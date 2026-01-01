import { IconPhone, IconRouteSquare, IconChartBarPopular, IconTruck, IconDatabase, IconWallet } from "@tabler/icons-react"
import { FeatureCard } from "./usecasecards"


const gridOne = [
    {
        icon: <IconRouteSquare className="text-primary size-6 rotate-90" />,
        title: "DevOps",
        subheading: "Visually orchestrate autonomous agents without writing boilerplate code"
    },
    {
        icon: <IconChartBarPopular className="text-primary size-6" />,
        title: "SalesOps ",
        subheading: "Visually orchestrate autonomous agents without writing boilerplate code"
    },
    {
        icon: <IconTruck className="text-primary size-6" />,
        title: "Supply Chain",
        subheading: "Visually orchestrate autonomous agents without writing boilerplate code"
    },

]


const gridTwo = [
    {
        icon: <IconPhone className="text-primary size-6 " />,
        title: "Customer Support ",
        subheading: "Visually orchestrate autonomous agents without writing boilerplate code"
    },
    {
        icon: <IconDatabase className="text-primary size-6" />,
        title: "DataOps ",
        subheading: "Visually orchestrate autonomous agents without writing boilerplate code"
    },
    {
        icon: <IconWallet className="text-primary size-6" />,
        title: "FinOps",
        subheading: "Visually orchestrate autonomous agents without writing boilerplate code"
    },

]


export const Grid = () => {
    return <div>

        <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {gridOne.map((items, index) => <FeatureCard varient={"pattern"} key={index} icon={items.icon} title={items.title} subheading={items.subheading} />)}


            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {gridTwo.map((items, index) => <FeatureCard varient={"pattern"} key={index} icon={items.icon} title={items.title} subheading={items.subheading} />)}


            </div>

        </div>
    </div>
}

