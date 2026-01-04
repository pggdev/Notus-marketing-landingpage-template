import { Container } from "@/app/components/containerbox"
import Image from "next/image"


export const Dashboard = () => {
    return <div>
        <div className="border-t border-neutral-200">
            <Container className="border-x border-neutral-200">
                <div className="p-8 bg-neutral-100">
                    <Image
                        src={'/dashboard.webp'}
                        alt="dashboard_image"
                        height={10000}
                        width={10000}



                    />

                </div>
            </Container>
        </div>
    </div>
}