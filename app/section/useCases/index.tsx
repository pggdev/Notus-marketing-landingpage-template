import { Container } from "@/app/components/containerbox"
import { Subheading } from "@/app/components/subheading"
import { Grid } from "@/app/components/useCases/grid"
export const UseCases = () => {
    return <div className=" border-b border-neutral-200">

        <Container className=" py-10 px-8 border-x border-neutral-200">
            <div className="flex flex-col justify-center items-center gap-6 ">

                <h1 className="text-primary text-sm font-medium">Use Cases</h1>
                <h1 className="text-black text-4xl font-sm font-sans">Across Various Industries</h1>
                <Subheading className="max-w-lg text-neutral-500 text-md">
                    We empower developers and technical teams to create, simulate, and manage AI-driven workflows visually
                </Subheading>
            </div>

            <div className="pt-10">
                <Grid />
            </div>
        </Container>
    </div>
}