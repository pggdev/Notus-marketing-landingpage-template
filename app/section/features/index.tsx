import { Container } from "@/app/components/containerbox"
import { Subheading } from "@/app/components/subheading"
import { IconBrain, IconRuler3, IconFingerprint, IconRefresh, IconRouteSquare } from "@tabler/icons-react"
import { Card } from "@/app/components/features/card"
import { InrCard1 } from "./openAicard"
import { Balls } from "./balls"
import { Fbadge } from "./badge"
import { Modellist } from "./card1/modellist"
import { Card3 } from "./card3"

export const Feature = () => {
    return <div className="border-y border-neutral-200 ">

        <Container>
            <div className="divide-x divide-neutral-200 border-x border-neutral-200">
                <div className="py-17 flex flex-col justify-center items-center  gap-4">
                    <h1 className="text-primary text-sm font-medium">Features</h1>
                    <h1 className="text-black text-4xl font-sm font-sans">Built for Agentic Intelligence</h1>
                    <Subheading className="max-w-xl text-neutral-400">
                        Build, test and deploy AI agents with a powerful visual interface designed for technical teams
                    </Subheading>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-neutral-200 border-y border-x border-neutral-200">

                <div className="">

                    <div className="flex flex-col py-8 px-8 gap-3">
                        <div className="flex gap-2 items-center">
                            <IconBrain className="size-5" />
                            <h1 className="text-xl ">LLM Model Selector</h1>
                        </div>

                        <Subheading className="text-left">
                            Track real-time activity of agents with detailed records of triggers, tools used, outcomes, and timestamps.
                        </Subheading>
                    </div>

                    <Card className="">
                        <div className="max-w-[75%] h-[85%] absolute bottom-0 inset-x-0 mx-auto w-full border-t border-neutral-100 shadow-xl rounded-t-xl ">

                            <div className="py-4 px-4">
                                <Balls />

                                <div className="mt-12 flex items-center gap-2 pb-2 border-b border-neutral-300">
                                    <IconRuler3 className="size-4" />
                                    <h1 className="text-sm"> All Models</h1>
                                    <Fbadge varient="neutral" className="font-light " >69,420</Fbadge >

                                </div>
                                <div className="mt-4">
                                    <Modellist />


                                </div>



                            </div>



                        </div>

                        <InrCard1 className="absolute right-10" />


                    </Card>


                </div>
                <div>

                    <div className="flex flex-col py-8 px-8 gap-3">
                        <div className="flex gap-2 items-center">
                            <IconBrain className="size-5" />
                            <h1 className="text-xl ">LLM Model Selector</h1>
                        </div>

                        <Subheading className="text-left">
                            Track real-time activity of agents with detailed records of triggers, tools used, outcomes, and timestamps.
                        </Subheading>
                    </div>

                    <Card className="">
                        <div className="">

                        </div>
                    </Card>


                </div>

            </div>

            <div className=" border-x border-neutral-200">

                <div className="flex flex-col py-8 px-8 gap-3">
                    <div className="flex gap-2 items-center">
                        <IconBrain className="size-5" />
                        <h1 className="text-xl ">Native Tool Integration</h1>
                    </div>

                    <Subheading className="text-left max-w-3xl">
                        Track real-time activity of agents with detailed records of triggers, tools used, outcomes, and timestamps.
                    </Subheading>
                </div>

                <Card className="">

                    <Card3 />


                </Card>


                <div className="py-10 grid grid-cols-1 md:grid-cols-3">
                    <div className="px-8 py-4">

                        <div className="flex gap-1.5 items-center ">
                            <IconFingerprint className="size-5 font-light" />
                            <h1 className="text-lg ">
                                One Click Auth
                            </h1>

                        </div>

                        <Subheading className="text-left mt-3 max-w-[90%]">A drag-and-drop interface to create, connect, and configure agents into logical workflows</Subheading>
                    </div>
                    <div className="px-8 py-4">

                        <div className="flex gap-1.5 items-center ">
                            <IconRefresh className="size-5 font-light" />
                            <h1 className="text-lg ">
                                Real Time sync
                            </h1>

                        </div>

                        <Subheading className="text-left mt-3 max-w-[90%]">Agents operate independently and coordinate tasks to complete complex all goals</Subheading>
                    </div>
                    <div className="px-8 py-4">

                        <div className="flex gap-1.5 items-center ">
                            <IconRouteSquare className="size-5 font-light rotate-90" />
                            <h1 className="text-lg ">
                                Custom connected SDK
                            </h1>

                        </div>

                        <Subheading className="text-left mt-3 max-w-[90%]">Run agent workflows in a sandbox to preview behavior, debug logic, and test interactions</Subheading>
                    </div>

                </div>



            </div>




        </Container >

    </div >
}