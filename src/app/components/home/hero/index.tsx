"use client";

import Image from "next/image";
import Link from "next/link";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function HeroSection() {
    return (
        <ParallaxProvider>
            <Parallax speed={-25}>
                <section className="relative flex items-end text-white bg-black h-full min-h-screen">
                    {/* Background Video */}
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        loop
                        autoPlay
                        muted
                        playsInline
                    >
                        <source src="/video/banner-video.mp4" type="video/mp4" />
                    </video>

                    {/* Overlay to improve text readability */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Content */}
                    <div className="relative z-10 container text-left">
                        <div className="flex flex-col gap-6 Xxl:pb-20 pb-10">
                            <div className="flex items-start gap-2 md:gap-6">
                                <div className="w-11 h-11 flex-shrink-0">
                                    <Image
                                        src={"/images/Icon/primary-leaf.svg"}
                                        alt="icon"
                                        width={44}
                                        height={44}
                                        className="animate-spin"
                                    />
                                </div>
                                <p className="text-white/70 max-w-md">
                                    We build <span className="text-primary">AI-powered automation</span>, mobile apps, and consulting solutions that optimize construction workflows and drive measurable results.
                                </p>
                            </div>
                            <div className="flex flex-col lg:flex-row items-start lg:items-end gap-4">
                                <h1 className="large-heading">UsherTech</h1>
                                <div>
                                    <Link href="/about" aria-label="Go to About page">
                                    <div className="bg-primary rounded-full p-1.5 pl-8 cursor-pointer inline-block">
                                        <Image
                                        src="/images/Icon/arrow-icon.svg"
                                        alt="icon"
                                        width={52}
                                        height={52}
                                        />
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Parallax>
        </ParallaxProvider>
    );
}

export default HeroSection;
