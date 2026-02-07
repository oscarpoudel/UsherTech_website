import Contact from "@/app/components/home/contact";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact | UsherTech",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/contact/banner/contact-banner.png"
                heading="Get in Touch"
                desc="Ready to <span>transform your workflows</span>? Contact us—we're here to help." />
            <Contact contactdataNumber="01"/>
        </main>
    );
};
