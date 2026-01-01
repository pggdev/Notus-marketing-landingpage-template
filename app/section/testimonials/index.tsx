'use client'


import { BenGrid } from "@/app/components/benefits/benefitsgrid"
import { Container } from "@/app/components/containerbox"
import { Subheading } from "@/app/components/subheading"
import { Grid } from "@/app/components/useCases/grid"
import Image from "next/image"
import { useState } from "react"
import { TestimonialPhoto, TestimonialText, Percentage } from "@/app/components/testimonials/testimonialcardelements"
import { motion } from "motion/react"



const Logos = [
    {
        href: "/logos/l1.png",
        image: "/t1.webp",
        desc: "The automation capabilities are incredible. Our deployment pipeline went from manual chaos to seamless orchestration. We can focus on building features instead of managing infrastructure.",
        name: "James Fincher",
        designation: "CEO, Aceternity",
        subheading: "CEO",
        title: "3x"


    },
    {
        href: "/logos/l2.png",
        image: "/t2.webp",
        desc: "The automation capabilities are incredible. Our deployment pipeline went from manual chaos to seamless orchestration. We can focus on building features instead of managing infrastructure.",
        name: "James Fincher",
        designation: "CEO, Aceternity",
        subheading: "CEO",
        title: "8x"

    },
    {
        href: "/logos/l3.png",
        image: "/t3.webp",
        desc: "The automation capabilities are incredible. Our deployment pipeline went from manual chaos to seamless orchestration. We can focus on building features instead of managing infrastructure.",
        name: "James Fincher",
        designation: "CEO, Aceternity",
        subheading: "CEO",
        title: "15 Mins"

    },
    {
        href: "/logos/l4.png",
        image: "/t4.webp",
        desc: "The automation capabilities are incredible. Our deployment pipeline went from manual chaos to seamless orchestration. We can focus on building features instead of managing infrastructure.",
        name: "James Fincher",
        designation: "CEO, Aceternity",
        subheading: "CEO",
        title: "100%"

    },
    {
        href: "/logos/l5.png",
        image: "/t5.webp",
        desc: "The automation capabilities are incredible. Our deployment pipeline went from manual chaos to seamless orchestration. We can focus on building features instead of managing infrastructure.",
        name: "James Fincher",
        designation: "CEO, Aceternity",
        subheading: "CEO",
        title: "90%x"

    },
    {
        href: "/logos/l6.png",
        image: "/t6.webp",
        desc: "The automation capabilities are incredible. Our deployment pipeline went from manual chaos to seamless orchestration. We can focus on building features instead of managing infrastructure.",
        name: "James Fincher",
        designation: "CEO, Aceternity",
        subheading: "CEO",
        title: "3x"

    },
    {
        href: "/logos/l7.png",
        image: "/t7.webp",
        desc: "The automation capabilities are incredible. Our deployment pipeline went from manual chaos to seamless orchestration. We can focus on building features instead of managing infrastructure.",
        name: "James Fincher",
        designation: "CEO, Aceternity",
        subheading: "CEO",
        title: "3x"

    },
    {
        href: "/logos/l8.png",
        image: "/t8.webp",
        desc: "The automation capabilities are incredible. Our deployment pipeline went from manual chaos to seamless orchestration. We can focus on building features instead of managing infrastructure.",
        name: "James Fincher",
        designation: "CEO, Aceternity",
        subheading: "CEO",
        title: "3x"

    },

]

export const Testimonials = () => {

    const [isSelectedTab, setisSelectedTab] = useState(Logos[0])



    return <div className="border-b border-neutral-200">

        <div className="border-b border-neutral-200">
            <Container className="py-8 px-8 border-x border-neutral-200">


                <h1 className="font-mono text-xs text-center mt-13">TRUSTED BY FAST GROWING STARTUPS</h1>

            </Container>
        </div>
        <div className="border-b border-neutral-200">
            <Container className=" border-x border-neutral-200">

                <TestimonialGrid



                    image={isSelectedTab.image}
                    logo={isSelectedTab.href}
                    desc={isSelectedTab.desc}
                    name={isSelectedTab.name}
                    title={isSelectedTab.title}
                    designation={isSelectedTab.designation}
                    subheading={isSelectedTab.subheading}

                />


                <div className="grid grid-cols-1 md:grid-cols-4 divide-x divide-neutral-200 ">

                    {Logos.map((items, index) => <div onClick={() => setisSelectedTab(items)} key={index} className="px-8 py-12 flex justify-center items-center border-b border-t border-neutral-100 hover:bg-neutral-50">


                        <div className="h-8 w-28 relative">
                            <Image
                                src={items.href}
                                alt="testimonial"
                                fill
                                objectFit="cover"
                                className="rounded-xl text-neutral-500"


                            />



                        </div>
                    </div>)}





                </div>


            </Container>
        </div>
    </div>
}




const TestimonialGrid = ({ image, logo, desc, title, subheading, name, designation }: { image: string, logo: string, desc: string, title: string, subheading: string, name: string, designation: string }) => {
    return <motion.div

        key={logo}


        initial={{
            opacity: 0,
            scale: 0.9
        }}

        animate={{
            opacity: 1,
            scale: 1

        }}
        transition={{
            duration: 0.3,
            ease: "easeOut"

        }}

        className="bg-neutral-50">
        <div className="grid grid-cols-12  ">
            <div className="col-span-4 flex justify-center py-4">

                <TestimonialPhoto image={image} />

            </div>
            <div className="py-1 pl-8 col-span-5 border-r border-neutral-200">
                <TestimonialText logo={logo} desc={desc} name={name} designation={designation} />
            </div>
            <div className="col-span-3">
                <Percentage title={title} subheading={subheading} />

            </div>


        </div>
    </motion.div >
}




