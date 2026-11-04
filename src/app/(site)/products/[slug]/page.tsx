import Herobanner from "@/app/components/shared/hero-banner";
import { getProductBySlug } from "@/lib/products";
import markdownToHtml from "@/lib/markdownToHtml";
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const product = getProductBySlug(slug, ["title", "description"]);

    return {
        title: `${product.title || "Product"} | UsherTech`,
    };
}

export default async function Post({ params }: Props) {
    const { slug } = await params;
    const product = getProductBySlug(slug, [
        "title", "description", "category", "pricing", "price", "status", "link", "github", "website", "tags", "techStack", "coverImage", "content"
    ]);

    const content = await markdownToHtml(product.content || "");

    return (
        <>
            <section>
                <div>
                    <Herobanner
                        bannerimage={product.coverImage}
                        heading={product.title}
                        desc={product.description} />
                </div>
                <div className="dark:bg-darkblack">
                    <div className="container">
                        <div className="flex flex-col gap-12 md:gap-24 py-20 xl:py-40">
                            <div className="flex flex-col gap-10">
                                <div>
                                    <Link href="/products" className="group flex gap-3 items-center w-fit bg-primary hover:bg-secondary dark:border dark:border-primary dark:hover:border dark:hover:border-white/30 rounded-full transition-all duration-500 ease-in-out">
                                        <Image src={"/images/Icon/back-btn.svg"} alt="Image" width={42} height={42} className="group-hover:translate-x-16.5 transform transition-transform duration-500 ease-in-out" />
                                        <span className="pr-4 text-lg font-bold text-secondary group-hover:text-white group-hover:-translate-x-10 transform transition-transform duration-500 ease-in-out">Back</span>
                                    </Link>
                                </div>
                                <div className="flex flex-col md:flex-row gap-5 lg:gap-10 flex-wrap">
                                    {product.category && (
                                        <div className="flex flex-col gap-2 border-b md:border-b-0 md:border-r border-secondary/12 dark:border-white/12 pb-5 md:pr-5 lg:pr-10">
                                            <span className="text-base text-secondary/70 dark:text-white/70">Category</span>
                                            <p className="font-medium">{product.category}</p>
                                        </div>
                                    )}
                                    <div className="flex flex-col gap-2 border-b md:border-b-0 md:border-r border-secondary/12 dark:border-white/12 pb-5 md:pr-5 lg:pr-10">
                                        <span className="text-base text-secondary/70 dark:text-white/70">Pricing</span>
                                        <p className="font-medium">{product.price || product.pricing || "Free"}</p>
                                    </div>
                                    {product.techStack && (
                                        <div className="flex flex-col gap-2 border-b md:border-b-0 md:border-r border-secondary/12 dark:border-white/12 pb-5 md:pr-5 lg:pr-10">
                                            <span className="text-base text-secondary/70 dark:text-white/70">Tech stack</span>
                                            <p className="font-medium">{product.techStack.join(", ")}</p>
                                        </div>
                                    )}
                                    {product.tags && (
                                        <div className="flex flex-col gap-2">
                                            <span className="text-base text-secondary/70 dark:text-white/70">Tags</span>
                                            <p className="font-medium">{product.tags.join(", ")}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                                    <div className="flex items-center gap-4 md:gap-8 w-full max-w-xl">
                                        <h2 className="text-4xl lg:text-5xl xl:text-56">Description</h2>
                                    </div>
                                    <div className="flex flex-col gap-11">
                                        <div className="project-descp flex flex-col gap-5">
                                            <div dangerouslySetInnerHTML={{ __html: content }}></div>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            {product.link && (
                                                <a href={product.link} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 bg-primary hover:bg-secondary dark:border dark:border-primary dark:hover:border dark:hover:border-white/30 text-secondary hover:text-white dark:text-secondary dark:hover:text-white text-base font-bold rounded-full py-2.5 px-6 transition-all duration-500 ease-in-out">
                                                    Open product
                                                </a>
                                            )}
                                            {product.github && product.github !== product.link && (
                                                <a href={product.github} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 border border-secondary/20 dark:border-white/20 text-secondary dark:text-white text-base font-bold rounded-full py-2.5 px-6 hover:bg-secondary/10 dark:hover:bg-white/10 transition-all duration-500 ease-in-out">
                                                    Source code
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
