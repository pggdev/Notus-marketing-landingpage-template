import { Container } from "../containerbox"
import { Card } from "../features/card"
import { IconCircleCheck } from "@tabler/icons-react"



const Growth = [
    {
        icon: <IconCircleCheck className="size-4" />,
        heading: "Up to 5 active agents"
    },
    {
        icon: <IconCircleCheck className="size-4" />,
        heading: "Up to 5 active agents"
    },
    {
        icon: <IconCircleCheck className="size-4" />,
        heading: "Up to 5 active agents"
    },
    {
        icon: <IconCircleCheck className="size-4" />,
        heading: "Up to 5 active agents"
    },
    {
        icon: <IconCircleCheck className="size-4" />,
        heading: "Up to 5 active agents"
    },
    {
        icon: <IconCircleCheck className="size-4" />,
        heading: "Up to 5 active agents"
    },
    {
        icon: <IconCircleCheck className="size-4" />,
        heading: "Up to 5 active agents"
    },
    {
        icon: <IconCircleCheck className="size-4" />,
        heading: "Up to 5 active agents"
    },
]




export const Pricingfeatures = () => {
    return <div className="border-b border-neutral-200">
        <Container>
            <div>
                <div className="hidden md:grid grid-cols-3 border-x border-neutral-200 divide-x divide-neutral-200">
                    <Card className="h-115">
                        <div className="h-full">

                            <div className="p-10">
                                {Growth.map((items, index) => <Feature key={index} icon={items.icon} heading={items.heading} />)}

                            </div>



                        </div>
                    </Card>
                    <Card className="h-115">
                        <div className="h-full ">

                            <div className="p-10">
                                {Growth.map((items, index) => <Feature icon={items.icon} heading={items.heading} />)}

                            </div>



                        </div>
                    </Card>
                    <Card className="h-115">
                        <div className="h-full">

                            <div className="p-10">
                                {Growth.map((items, index) => <Feature icon={items.icon} heading={items.heading} />)}

                            </div>



                        </div>
                    </Card>
                </div>

            </div >
        </Container >
    </div >
}


const Feature = ({ icon, heading }: { icon: React.ReactNode, heading: string }) => {
    return <div className="py-2.5">

        <div className="flex items-center gap-1">
            {icon}
            <h1>{heading}</h1>

        </div>
    </div>
}