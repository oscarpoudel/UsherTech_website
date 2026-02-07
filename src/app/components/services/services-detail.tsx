"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function ServicesDetail() {
    const [servicesData, setServicesData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setServicesData(data?.servicesData);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className="py-20 md:py-40 dark:bg-darkblack">
            <div className="container">
                <div className="flex flex-col gap-16">
                    {servicesData?.data?.map((service: any, index: any) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'} gap-8 xl:gap-16 items-center`}>
                            {/* Image */}
                            <div className="w-full xl:max-w-lg h-80 overflow-hidden rounded-lg">
                                <Image
                                    src={service.image}
                                    alt={service.heading}
                                    width={500}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="w-full flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="h-1 w-12 bg-primary dark:bg-white" />
                                    <h3 className="text-secondary dark:text-white font-medium">Service {service.id}</h3>
                                </div>
                                <h2 className="text-secondary dark:text-white max-w-xl">{service.heading}</h2>
                                <p className="text-secondary/70 dark:text-white/70 max-w-2xl leading-relaxed">
                                    {service.descp}
                                </p>

                                {/* Benefits based on service */}
                                <div className="pt-4">
                                    <h4 className="text-secondary dark:text-white mb-4 font-medium">Key Features:</h4>
                                    <ul className="flex flex-col gap-3">
                                        {service.id === 1 && (
                                            <>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-primary mt-1">✓</span>
                                                    <span className="text-secondary/70 dark:text-white/70">Data extraction and cleaning from PDFs, Excel, BIM exports</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-primary mt-1">✓</span>
                                                    <span className="text-secondary/70 dark:text-white/70">Automated quantity takeoff helpers from drawings and schedules</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-primary mt-1">✓</span>
                                                    <span className="text-secondary/70 dark:text-white/70">Cost and schedule utilities including rate calculators</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-primary mt-1">✓</span>
                                                    <span className="text-secondary/70 dark:text-white/70">Integration with Procore, ACC, SharePoint, and more</span>
                                                </li>
                                            </>
                                        )}
                                        {service.id === 2 && (
                                            <>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-primary mt-1">✓</span>
                                                    <span className="text-secondary/70 dark:text-white/70">Offline-first field forms for inspections and punch lists</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-primary mt-1">✓</span>
                                                    <span className="text-secondary/70 dark:text-white/70">Photo capture with annotation, geotagging, and timestamping</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-primary mt-1">✓</span>
                                                    <span className="text-secondary/70 dark:text-white/70">Drawing viewer with markup and issue tagging</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-primary mt-1">✓</span>
                                                    <span className="text-secondary/70 dark:text-white/70">Embedded construction calculators aligned with industry codes</span>
                                                </li>
                                            </>
                                        )}
                                        {service.id === 3 && (
                                            <>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-primary mt-1">✓</span>
                                                    <span className="text-secondary/70 dark:text-white/70">Workflow assessment and automation opportunity identification</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-primary mt-1">✓</span>
                                                    <span className="text-secondary/70 dark:text-white/70">LLM-based assistants for logs, minutes, and compliance</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-primary mt-1">✓</span>
                                                    <span className="text-secondary/70 dark:text-white/70">Computer vision for PPE, hazard, and progress tracking</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-primary mt-1">✓</span>
                                                    <span className="text-secondary/70 dark:text-white/70">Predictive analytics for productivity and risk assessment</span>
                                                </li>
                                            </>
                                        )}
                                        {service.id === 4 && (
                                            <>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-primary mt-1">✓</span>
                                                    <span className="text-secondary/70 dark:text-white/70">KPI dashboards for schedule, cost, and safety health</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-primary mt-1">✓</span>
                                                    <span className="text-secondary/70 dark:text-white/70">Automated data connectors pulling from multiple sources</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-primary mt-1">✓</span>
                                                    <span className="text-secondary/70 dark:text-white/70">Daily and weekly reporting automation with visuals</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-primary mt-1">✓</span>
                                                    <span className="text-secondary/70 dark:text-white/70">Role-based views for executives, PMs, and field teams</span>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesDetail;
