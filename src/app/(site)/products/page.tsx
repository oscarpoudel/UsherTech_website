import ProductList from "@/app/components/products";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Products | UsherTech",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/projects/banner/projects-banner.png"
                heading="Products"
                desc="Free tools and products by <span>UsherTech</span> — open-source and ready to use. Built for construction, engineering, and feasibility teams." />
            <ProductList />
        </main>
    );
};
