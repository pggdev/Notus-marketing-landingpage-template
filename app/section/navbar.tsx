'use client'

import Link from "next/link"
import { Btn } from "../components/btn"
import { Container } from "../components/containerbox"
import { ThemeBtn } from "../components/themeBtn"
import { IconCross, IconMenu, IconMobiledata, IconX } from "@tabler/icons-react"
import { useState } from "react"


const navitems = [
    {
        title: "Princing",
        href: "/pricing"
    },
    {
        title: "About",
        href: "/about"
    }, {
        title: "Careers",
        href: "/careers"
    }, {
        title: "Blog",
        href: "/blog"
    },

]




export const Navbar = () => {
    return <div className="border-b border-neutral-200">
        <Container >
            <div className="hidden md:flex justify-between items-center px-2 py-4  ">
                <div className="text-2xl text-black ">Notus</div>

                <div className="flex gap-8">
                    {navitems.map((items, index) =>
                        <Link href={items.href} key={index} className="font-md text-neutral-400" >{items.title}</Link>
                    )}
                </div>

                <div className="flex gap-4 items-center">
                    <Btn varient="primary">Start Building</Btn>
                </div>

            </div>
        </Container>
        <MobileNav />
    </div>
}


const MobileNav = () => {

    const [isOpen, setisOpen] = useState(false)


    return <div>
        <Container>
            <div className="md:hidden flex justify-between items-center px-2 py-4  ">
                <div className="text-2xl text-black ">Notus</div>

                {/* <div className="flex flex-col gap-8">
                    {navitems.map((items, index) =>
                        <Link href={items.href} key={index} className="font-md text-neutral-400" >{items.title}</Link>
                    )}
                </div> */}

                {isOpen === false && <div onClick={() => setisOpen(true)}>
                    <IconMenu />
                </div>
                }


                {isOpen === true && <div onClick={() => setisOpen(false)}>
                    <IconX />
                </div>
                }

            </div>
            {isOpen && <div className="flex flex-col gap-4 px-3">
                {navitems.map((items, index) =>
                    <Link href={items.href} key={index} className="font-md text-neutral-400" >{items.title}</Link>
                )}


                <div className="flex justify-center pb-10">
                    <Btn varient="primary" className="text-xs">Start Building</Btn>
                </div>
            </div>






            }



        </Container>

    </div>
}