import Link from "next/link"
import { Btn } from "../components/btn"
import { Container } from "../components/containerbox"
import { ThemeBtn } from "../components/themeBtn"


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
            <div className="flex justify-between items-center px-2 py-4  ">
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
    </div>
} 