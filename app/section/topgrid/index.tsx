import { Container } from "@/app/components/containerbox"
import Image from "next/image"

const Logos = [
    {
        href: "/logos/l1.png"
    },
    {
        href: "/logos/l1.png"
    },

    {
        href: "/logos/l1.png"
    },
    {
        href: "/logos/l1.png"
    },
    {
        href: "/logos/l1.png"
    },
    {
        href: "/logos/l1.png"
    },
    {
        href: "/logos/l1.png"
    },
    {
        href: "/logos/l1.png"
    },

]

export const Topgrid = () => {
    return <div>
        <div className="border-t border-neutral-200">
            <Container className="border-x border-neutral-200">
                <div>
                    <div className="py-10">
                        <h1 className="font-mono text-xs text-neutral-500 text-center tracking-tight">
                            TRUSTED BY FAST GROWING STARTUPS
                        </h1>
                    </div>
                    <Grid />
                </div>
            </Container>
        </div>
    </div>
}

const Grid = () => {
    return <div>
        <div className="grid grid-cols-1 md:grid-cols-4 border-t border-neutral-200 divide-x divide-neutral-200">



            {Logos.map(() => <div className="py-10 flex justify-center items-center border-b border-neutral-200">
                <div className="">
                    <Image
                        src={"/logos/l1.png"}
                        alt={"logo1"}
                        height={100}
                        width={100}

                    />
                </div>

            </div>)}





        </div>

    </div>
}