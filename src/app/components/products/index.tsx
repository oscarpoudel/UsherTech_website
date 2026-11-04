import { getAllProducts } from "@/lib/products";
import Link from "next/link";

const ProductList = () => {
    type Product = {
        title: string;
        slug: string;
        description?: string;
        category?: string;
        pricing?: string;
        price?: string;
        status?: string;
        link?: string;
        github?: string;
        tags?: string[];
        techStack?: string[];
        coverImage: string;
    };

    const products: Product[] = getAllProducts([
        "title", "slug", "description", "category", "pricing", "price", "status", "link", "github", "tags", "techStack", "coverImage"
    ]);

    return (
        <section className="dark:bg-darkblack py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {products.map((product, index) => {
                            return (
                                <div key={index} className="flex flex-col gap-5 group">
                                    <div className="relative">
                                        <Link href={`/products/${product.slug}`}>
                                            <img src={product.coverImage} alt={product.title} className="w-full rounded-2xl object-cover" />
                                        </Link>
                                        <span className="absolute top-4 left-4 bg-primary text-secondary text-sm font-bold py-1 px-3 rounded-full">
                                            {product.status || product.pricing || "Free"}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-start justify-between gap-4">
                                            <Link href={`/products/${product.slug}`}>
                                                <h3 className="hover:text-primary transition-colors">{product.title}</h3>
                                            </Link>
                                            {product.category && (
                                                <p className="text-sm text-secondary/60 dark:text-white/60 whitespace-nowrap">{product.category}</p>
                                            )}
                                        </div>
                                        {product.description && (
                                            <p className="text-secondary/70 dark:text-white/70">{product.description}</p>
                                        )}
                                        <div className="flex flex-wrap gap-3">
                                            {(product.tags || []).map((value, i) => {
                                                return (
                                                    <p key={i} className="text-base hover:bg-primary border border-secondary/12 dark:border-white/12 dark:hover:text-secondary w-fit py-1 px-4 rounded-full">{value}</p>
                                                )
                                            })}
                                        </div>
                                        <div className="flex flex-wrap gap-3 pt-2">
                                            {product.link && (
                                                <a href={product.link} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 bg-primary hover:bg-secondary dark:border dark:border-primary dark:hover:border dark:hover:border-white/30 text-secondary hover:text-white dark:text-secondary dark:hover:text-white text-base font-bold rounded-full py-2 px-5 transition-all duration-500 ease-in-out">
                                                    Open product
                                                </a>
                                            )}
                                            <Link href={`/products/${product.slug}`} className="flex justify-center items-center gap-2 border border-secondary/20 dark:border-white/20 text-secondary dark:text-white text-base font-bold rounded-full py-2 px-5 hover:bg-secondary/10 dark:hover:bg-white/10 transition-all duration-500 ease-in-out">
                                                Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductList;
