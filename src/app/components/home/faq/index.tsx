
"use client";

import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/accordian";


function Faq() {
    const [faqData, setFaqData] = useState<any>(null);
    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const res = await fetch('/api/page-data')
                    if (!res.ok) throw new Error('Failed to fetch')
                    const data = await res.json()
                    setFaqData(data?.faqData)
                } catch (error) {
                    console.error('Error fetching services:', error)
                }
            }
            fetchData()
        }, [])
    return (
        <section className="bg-secondary py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-20">
                        <div className="flex flex-col gap-14 xl:gap-24">
                            <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                                <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                                    <span className="bg-primary py-1.5 px-2.5 text-base font-medium rounded-full dark:text-secondary">05</span>
                                    <div className="h-px w-16 bg-white/12"/>
                                    <p className="text-base font-medium text-secondary bg-white py-1.5 px-4 rounded-full">FAQs</p>
                                </div>
                                <div className="flex flex-col gap-11">
                                    <div className="flex flex-col gap-5 ">
                                        <h2 className="text-white group-hover:text-primary 2xl:w-full max-w-3xl">Frequently Asked Questions</h2>
                                        <p className="max-w-2xl text-white/70">Got questions about our construction technology solutions? We've compiled answers to common questions about integration, support, implementation, and more.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-end">
                                <Accordion type="single" collapsible className="flex flex-col 2xl:max-w-5xl w-full ">
                                    {faqData?.data?.map((item:any, index:any) => (
                                        <AccordionItem
                                            key={index}
                                            value={`item-${index}`}
                                        >
                                            <AccordionTrigger >
                                                <h4 className="text-white">{item.faq_que}</h4>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <p className="text-white">{item.faq_ans}</p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
