
import Image from "next/image"
import { Subheading } from "../subheading"
import { motion } from "motion/react"


export const TestimonialPhoto = ({ image }: { image: string }) => {
    return <motion.div

        className="rounded-lg h-100 w-100 relative">

        <Image
            src={image}
            alt="testimonial"
            fill
            objectFit="cover"
            className="rounded-xl"


        />

    </motion.div>
}


export const TestimonialText = ({ desc, name, designation, logo }: { desc: string, name: string, designation: string, logo: string }) => {
    return <div className="flex flex-col justify-between h-full px-3 py-2">
        <div>
            <div className="h-10 w-40 relative">
                <Image
                    src={logo}
                    alt="testimonial"
                    fill
                    objectFit="cover"
                    className="rounded-xl "


                />



            </div>
            <Subheading className="text-left text-black text-xl leading-8 mt-7">
                {desc}
            </Subheading>
        </div>
        <div>
            <h1 className="font-bold text-md">{name}</h1>
            <h1 className="text-neutral-400 text-sm mt-1">{designation}</h1>
        </div>

    </div >
}


export const Percentage = ({ title, subheading }: { title: string, subheading: string }) => {
    return <div className="h-full flex flex-col justify-end">
        <div className="px-4 py-3">
            <h1 className="font-bold text-6xl">
                {title}
            </h1>

            <h1 className="text-neutral-600 text-sm mt-1">{subheading}</h1>

        </div>



    </div>
}


