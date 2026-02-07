import ServicesDetail from "@/app/components/services/services-detail";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | UsherTech",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/home/services/services_1.png"
                heading="Our Services"
                desc="Comprehensive <span>construction technology</span> solutions designed to optimize your workflows and drive measurable results." />
            <ServicesDetail />
        </main>
    );
}
