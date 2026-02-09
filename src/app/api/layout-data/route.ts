import { NextResponse } from "next/server";

const MenuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Solutions",
    path: "/projects",
    newTab: false,
  },
  // {
  //   id: 4,
  //   title: "Blog",
  //   path: "/blog",
  //   newTab: false,
  // },
  {
    id: 5,
    title: "Services",
    path: "/services",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  // {
  //   id: 7,
  //   title: "Docs",
  //   path: "/documentation",
  //   newTab: false,
  // }
];


const footerData = {
    name: "UsherTech",
    tagline: "Let's automate your construction workflows.",
    info: [
        {
            icon: "/images/footer/email-arrow.svg",
            link: "contact@ushertech.com",
            href: "mailto:contact@ushertech.com"
        },
        {
            icon: "/images/footer/Location.svg",
            link: "United States",
            href: "https://maps.google.com"
        }
    ],
    links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/#services" },
        { name: "Solutions", href: "/projects" },
        { name: "Terms", href: "/terms-and-conditions" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        // { name: "Error 404", href: "/not-found" }
    ],
    socialLinks: [
        { name: "Facebook", href: "https://www.facebook.com/" },
        { name: "Instagram", href: "https://www.instagram.com/" },
        { name: "Twitter", href: "https://x.com/" }
    ],
    copyright: "© UsherTech 2025. All rights reserved."
};

export const GET = async () => {
    return NextResponse.json({
        footerData,
        MenuData
    });
};