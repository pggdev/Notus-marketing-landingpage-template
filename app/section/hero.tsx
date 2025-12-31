import { Btn } from "../components/btn"
import { Container } from "../components/containerbox"
import { Herobadge } from "../components/herobadge"
import { Subheading } from "../components/subheading"

export const Hero = () => {
    return <div className=" ">
        <Container className="my-auto relative">
            <div className="absolute h-full w-px bg-neutral-200"></div>
            <div className="absolute right-0 h-full w-px bg-neutral-200"></div>
            <div className="flex flex-col gap-4 justify-center items-center pt-28 pb-23  ">

                <h1 className="text-sm font-normal text-primary">For fast moving engineering teams</h1>
                <h1 className="text-6xl font-normal text-black font-sans text-center tracking-tight leading-15">Manage and simulate <br /> agentic <span className="text-primary">workflows</span></h1>
                <Subheading className="mt-2">We empower developers and technical teams to create, simulate, and manage AI-driven workflows visually</Subheading>

                <div className="flex gap-3 mt-2 ">
                    <Btn varient="primary">Start Building</Btn>
                    <Btn varient="secondary" className="bg-white">View Pricing</Btn>
                </div>

                <div className="mt-10">

                    <Herobadge />

                </div>

            </div>
        </Container>
    </div>
}