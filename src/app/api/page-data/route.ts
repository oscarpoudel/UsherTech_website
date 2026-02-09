import { NextResponse } from "next/server";

const avatarList = [
    {
        image: "/images/avatar/avatar_1.jpg",
        title: "Sarah Johnson"
    },
    {
        image: "/images/avatar/avatar_2.jpg",
        title: "Olivia Miller"
    },
    {
        image: "/images/avatar/avatar_3.jpg",
        title: "Sophia Roberts"
    },
    {
        image: "/images/avatar/avatar_4.jpg",
        title: "Isabella Clark"
    },
];

const statsFactData = {
    number: '01',
    name: "Stats & facts",
    heading: "Construction technology solutions built for your workflows.",
    description: "We deliver proven automation, mobile apps, and consulting services that streamline construction operations and drive measurable results.",
    scoreData: [
        {
            number: 150,
            postfix: '+',
            scoreDescp: "Construction teams using our solutions"
        },
        {
            number: 8,
            numberValue: 'M+',
            scoreDescp: "Hours saved through automation annually"
        },
        {
            number: 98,
            numberValue: '%',
            scoreDescp: "Client satisfaction rate"
        },
    ]
};

const servicesData = {
    number: '03',
    name: "Services",
    heading: "What we build for construction",
    description: "From AI-powered automation to mobile apps and consulting—solutions designed to optimize workflows, improve safety, and accelerate project delivery.",
    data: [
        {
            id: 1,
            image: "/images/home/services/services_1.png",
            heading: "AI & Automation Scripts",
            descp: "Automated workflows for data extraction, quantity takeoffs, cost tracking, RFI drafting, safety checks, and document control across your favorite platforms."
        },
        {
            id: 2,
            image: "/images/home/services/services_2.png",
            heading: "Mobile Field Apps",
            descp: "Android applications with offline capabilities for inspections, photo capture, punch lists, drawing markup, embedded calculators, and real-time reporting."
        },
        {
            id: 3,
            image: "/images/home/services/services_3.png",
            heading: "AI & Automation Consulting",
            descp: "End-to-end assessment, LLM-based assistants, computer vision solutions, predictive analytics, and validated models for your specific workflows."
        },
        {
            id: 4,
            image: "/images/home/services/services_4.png",
            heading: "Custom Dashboards & Tools",
            descp: "KPI dashboards, automated reporting, quality management systems, resource tracking, and role-based views integrated with your existing platforms."
        },
    ]
};

const testimonialData = {
    data_1: {
        preTitle: "Client Success",
        title: "Their automation saved us 40 hours per week on data entry and reporting. Game-changing.",
        // author: "James Morrison",
        // company: "Turner Construction"
    },
    data_2: {
        preTitle: "Client Success",
        title: "The mobile app transformed how we manage field inspections—seamless, intuitive, and offline-capable. Essential tool.",
        // author: "Sarah Chen",
        // company: "Mortenson"
    },
    data_3: {
        preTitle: "Client Success",
        title: "Their consulting helped us identify and implement automation that cut project delivery time by 20%. Highly recommend.",
        // author: "Robert Gonzales",
        // company: "Walsh Group"
    },
};

const teamData = {
    number: '06',
    data: [
        {
            image: "/images/home/team/team-img-1.png",
            name: "Marcus Andrews",
            position: "Founder & Chief Technology Officer",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-2.png",
            name: "Elena Rodriguez",
            position: "VP of Construction Solutions",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-3.png",
            name: "David Kumar",
            position: "Lead Software Architect",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-4.png",
            name: "Jessica Martinez",
            position: "Customer Success Manager",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
    ]
};

const pricingData = {
    data: [
        {
            planName: "Starter",
            planPrice: "$1,499",
            planDescp: "Perfect for small teams looking to automate specific workflows.",
            planIncludes: ["Up to 2 automation scripts","Basic mobile app customization","Email support","1 month of implementation assistance"]
        },
        {
            planName: "Professional",
            tag: "Most popular",
            planPrice: "$4,999",
            cancelPrice: "$6,499",
            planDescp: "Ideal for mid-size contractors needing comprehensive automation and mobile solutions.",
            planIncludes: ["Up to 5 automation scripts","Fully customized mobile app","Custom dashboard development","Priority support","Quarterly training & optimization"]
        },
        {
            planName: "Enterprise",
            planPrice: "$12,999",
            planDescp: "For large organizations seeking end-to-end digital transformation and consulting.",
            planIncludes: ["Unlimited custom scripts & dashboards","Enterprise mobile app suite","AI/ML consulting & integration","Dedicated account manager","24/7 priority support for 1 year"]
        },
    ],
    partnerLogo: [
        { light: "/images/home/pricing/partner-1.svg", dark: "/images/home/pricing/partner-dark-1.svg" },
        { light: "/images/home/pricing/partner-2.svg", dark: "/images/home/pricing/partner-dark-2.svg" },
        { light: "/images/home/pricing/partner-3.svg", dark: "/images/home/pricing/partner-dark-3.svg" },
        { light: "/images/home/pricing/partner-4.svg", dark: "/images/home/pricing/partner-dark-4.svg" },
        { light: "/images/home/pricing/partner-5.svg", dark: "/images/home/pricing/partner-dark-5.svg" },
      ],
};

const faqData = {
  data: [
    {
      faq_que: "What services do you offer for construction and civil teams?",
      faq_ans:
        "We build AI scripts, Android field apps, dashboards, and automation systems for construction operations, plus robotics, SHM tools, and integration support."
    },
    {
      faq_que: "What kinds of workflows can you automate?",
      faq_ans:
        "Common automations include data extraction from PDFs and Excel, quantity takeoffs, cost and schedule tracking, RFI and submittal drafts, and document control."
    },
    {
      faq_que: "Can you integrate with our tools like Procore or ACC?",
      faq_ans:
        "Yes, we integrate with platforms like Procore, Autodesk Construction Cloud, SharePoint, and cloud storage using APIs, exports, and connectors to fit your workflow."
    },
    {
      faq_que: "How do you price projects and what affects cost?",
      faq_ans:
        "Pricing depends on scope, integrations, timeline, and deployment needs. We can deliver a fixed scope build or a phased prototype to production plan."
    },
    {
      faq_que: "Do you provide ongoing support after delivery?",
      faq_ans:
        "Yes, we provide post-delivery support for rollout, training, bug fixes, and maintenance options for clients needing regular updates or added features."
    }
  ]
};

const contactData = {
    keypoint:["Expert Construction Technology Support","Proven Implementation & Training"],
    managerProfile:{
        image:"/images/avatar/avatar_1.jpg",
        name:"Jennifer Walsh",
        position:"Customer Success Director"
    }
}

const aboutusStats = [
    {
        number: 150,
        postfix:"+",
        title: 'Construction teams partnered',
        descp: "Serving mid-size to enterprise contractors across building, civil, and specialty trades."
    },
    {
        number: 8,
        prefix: "",
        postfix: "M+",
        title: 'Hours saved annually',
        descp: "Our automation solutions reduce manual work and accelerate project delivery consistently."
    },
    {
        number: 500,
        postfix: "+",
        title: 'Workflows automated',
        descp: "From data extraction to safety tracking—proven solutions across all construction phases."
    },
]

const servicesSliderData = [
    "Automation Scripts", "Mobile Apps", "AI Consulting","Custom Dashboards","Robotics","Hardware Solutions","Training & Support"
]



export const GET = async () => {
    return NextResponse.json({
        avatarList,
        statsFactData,
        servicesData,
        testimonialData,
        teamData,
        pricingData,
        faqData,
        contactData,
        aboutusStats,
        servicesSliderData
    });
};