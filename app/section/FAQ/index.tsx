import { Btn } from "@/app/components/btn"
import { Container } from "@/app/components/containerbox"
import { Subheading } from "@/app/components/subheading"
import { Faqgrid } from "@/app/components/faq/faqgrid"
export const Faqs = () => {
    return <div className="border-y border-neutral-200">
        <Container className="border-b border-neutral-200">
            <div className="divide-x divide-neutral-200 border-x border-neutral-200">
                <div className="py-17 flex flex-col justify-center items-center  gap-4">
                    <h1 className="text-primary text-[16px] font-[450]">FAQs</h1>
                    <h1 className="text-black text-4xl font-sm font-sans">Frequently Asked Questions</h1>
                    <Subheading className=" text-neutral-400 max-w-lg">
                        Find all your doubts and questions in one place. Still couldn't find what you're looking for?
                    </Subheading>

                    <div className="flex items-center gap-4">
                        <Btn varient="primary" className="bg-black">Read Docs</Btn>
                        <Btn varient="secondary" className="bg-white">Contact Us</Btn>

                    </div>
                </div>
            </div>

        </Container>

        <Container>

            <Faqgrid />
        </Container>

    </div>

}