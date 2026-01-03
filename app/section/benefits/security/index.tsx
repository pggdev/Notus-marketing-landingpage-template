import { Btn } from "@/app/components/btn"
import { Container } from "@/app/components/containerbox"
import { Card } from "@/app/components/features/card"
import { Subheading } from "@/app/components/subheading"
import Image from "next/image"
import { Balls } from "../../features/balls"

export const Security = () => {
    return <div>

        <div className="border-b border-neutral-200">
            <Container className="py-8 px-8 border-x border-neutral-200">


                <h1 className="font-mono text-xs text-center mt-13 text-neutral-500">FOR SECURITY FIRST TEAMS</h1>

            </Container>
        </div>

        <div>
            <Container>
                <Card className="h-65">
                    <div className="h-full bg-neutral-50 grid grid-cols-1 md:grid-cols-2 border-x border-neutral-200">
                        <div className=" flex flex-col gap-4 py-12 px-10">
                            <h1 className="text-4xl ">
                                Scale securly with confidence
                            </h1>
                            <Subheading className="text-left text-[16px] max-w-xl">
                                Our AI assistant is designed with enterprise-grade security practices and compliant with global data protection standards.
                            </Subheading>

                            <Btn varient="primary" className="bg-black">Start for free</Btn>


                        </div>

                        <div className="flex justify-center items-center">
                            <div className="flex items-center gap-10">
                                <div className="flex flex-col  items-center gap-4">
                                    <Image
                                        src={"/law.png"}
                                        alt="law"
                                        height={70}
                                        width={70}


                                    />

                                    <div className="flex gap-2 items-center">
                                        <div className={("p-1.5 rounded-full size-1.5 bg-neutral-400")}></div>
                                        <h1 className="text-neutral-400 font-medium text-[15px]">CCPA</h1>
                                    </div>


                                </div>
                                <div className="flex flex-col  items-center gap-4">
                                    <Image
                                        src={"/gdpr.png"}
                                        alt="law"
                                        height={70}
                                        width={70}


                                    />

                                    <div className="flex gap-2 items-center">
                                        <div className={("p-1.5 rounded-full size-1.5 bg-neutral-400")}></div>
                                        <h1 className="text-neutral-400 font-medium text-[15px]">CCPA</h1>
                                    </div>


                                </div>
                                <div className="flex flex-col justify-center gap-4">
                                    <Image
                                        src={"/badge.png"}
                                        alt="law"
                                        height={70}
                                        width={70}


                                    />

                                    <div className="flex justify-center gap-2 items-center">
                                        <div className={("p-1.5 rounded-full size-1.5 bg-neutral-400")}></div>
                                        <h1 className="text-neutral-400 font-medium text-[15px]">CCPA</h1>
                                    </div>


                                </div>



                            </div>
                        </div>


                    </div>


                </Card>

            </Container>
        </div>
    </div>
}