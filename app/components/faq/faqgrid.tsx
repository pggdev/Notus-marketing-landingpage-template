'use client'

import { IconChevronRight } from "@tabler/icons-react"
import { useState } from "react"
import { Subheading } from "../subheading"
import { cn } from "@/app/lib/utils"
const FAQs = [
    {
        heading: "What exactly does this platform do?",
        desc: " Our platform lets you design, deploy, and manage AI-powered agentic workflows that can combine both automated (AI) and manual steps. These workflows connect to your existing tools (like Slack, Notion, or Google Sheets) and use AI agents to complete tasks. "
    },
    {
        heading: "What tools and services can i integrate?",
        desc: " Our platform lets you design, deploy, and manage AI-powered agentic workflows that can combine both automated (AI) and manual steps. These workflows connect to your existing tools (like Slack, Notion, or Google Sheets) and use AI agents to complete tasks. "
    },
    {
        heading: "Is my data secure when using AI agents?",
        desc: " Our platform lets you design, deploy, and manage AI-powered agentic workflows that can combine both automated (AI) and manual steps. These workflows connect to your existing tools (like Slack, Notion, or Google Sheets) and use AI agents to complete tasks. "
    },
    {
        heading: "Can I test workflows before they go live?",
        desc: " Our platform lets you design, deploy, and manage AI-powered agentic workflows that can combine both automated (AI) and manual steps. These workflows connect to your existing tools (like Slack, Notion, or Google Sheets) and use AI agents to complete tasks. "
    },
    {
        heading: "What are the difference between automated and manual steps?",
        desc: " Our platform lets you design, deploy, and manage AI-powered agentic workflows that can combine both automated (AI) and manual steps. These workflows connect to your existing tools (like Slack, Notion, or Google Sheets) and use AI agents to complete tasks. "
    },


]


export const Faqgrid = () => {
    return <div>
        <div className="flex flex-col ">
            {FAQs.map((items, index) => <Faqcard key={index} heading={items.heading} desc={items.desc} />)}


        </div>

    </div>
}


const Faqcard = ({ heading, desc }: { heading?: string, desc?: string }) => {
    const [isOpen, setisOpen] = useState<true | false>(false)
    return <div>
        <div className="px-10 py-6 flex flex-col  border-x border-b border-neutral-200 " >

            <div className="flex justify-between items-center">
                <h1 className="text-md"> {heading}</h1>

                <div onClick={() => setisOpen(c => !c)}>
                    <div className={cn("bg-white shadow-md rounded-md p-1 ring ring-neutral-200 ", isOpen && "rotate-180")}><IconChevronRight className="size-5 rotate-90" /></div>
                </div>
            </div>

            {isOpen && <div className="mt-6">
                <Subheading className="max-w-6xl text-left">
                    {desc}
                </Subheading>
            </div>}
        </div>
    </div>
}