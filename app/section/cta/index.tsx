import { Container } from "@/app/components/containerbox"
import { Card } from "@/app/components/features/card"
import { cn } from "@/app/lib/utils"
import { IconCard } from "../features/card3/iconCard"
import { IconBrandMeta, IconBrandOpenai, IconBrandSlack, IconBrandSuperhuman } from "@tabler/icons-react"
import { Btn } from "@/app/components/btn"

export const Cta = () => {
    return <div>

        <Container >
            <div className="border-x border-neutral-200">
                <Card className="h-120 relative">

                    <Rings />


                </Card>


            </div>
        </Container>


    </div>
}



const Rings = () => {
    return <div className=" h-full overflow-hidden">
        < Ring className="absolute -top-150 " />






    </div >


}



const Ring = ({ className, }: { className?: string, }) => {
    return <div className="p-10 relative w-full h-full  flex justify-center items-center">
        <div className={cn("size-80 bg-neutral-300/75 rounded-full absolute inset-0 m-auto border border-neutral-200 z-10 flex justify-center items-center ", className)}>
            <IconCard icon={<IconBrandOpenai />} className="animate-orbit [--translate-position:150px] [--duration:8s] p-4.5 z-40" />
            <IconCard icon={<IconBrandMeta className="text-blue-400" />} className="animate-orbit [--translate-position:150px] [--duration:10s] p-4.5 z-40" />


        </div>
        <div className={cn("size-130 bg-neutral-200/75 rounded-full absolute inset-0 m-auto border border-neutral-200 z-9 flex justify-center items-center", className)}>
            <IconCard icon={<IconBrandSlack />} className="animate-orbit [--translate-position:260px] [--duration:11s] p-4.5 z-40" />
            <IconCard icon={<IconBrandSuperhuman />} className="animate-orbit [--translate-position:260px] [--duration:12s] p-4.5 z-40" />

        </div>
        <div className={cn("size-170 bg-neutral-100/75 rounded-full absolute inset-0 m-auto border border-neutral-200 z-8 flex justify-center items-center ", className)}>
            <IconCard icon={<IconBrandOpenai />} className="animate-reverse [--translate-position:330px] [--duration:13s] p-4.5 z-40" />
            <IconCard icon={<IconBrandOpenai />} className="animate-orbit [--translate-position:330px] [--duration:15s] p-4.5 z-40" />


        </div>

        <div className="z-40 flex flex-col items-center gap-4">
            <h1 className="text-[55px] text-center leading-16">Connecte your Current Stack <br /> and Start Automating</h1>
            <Btn varient="primary" className="bg-black">Start Building for free</Btn>
        </div>




    </div >






}