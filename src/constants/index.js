import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    genesys,
    tiktok,
    linkedin,
    netflix,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Reactjs Developer",
        icon: web,
    },
    {
        title: "Unity Developer",
        icon: mobile,
    },
    {
        title: "Nodejs Developer",
        icon: backend,
    },
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Javascript Developer",
        company_name: "Genesy",
        icon: genesys,
        iconBg: "#383E56",
        date: "February 2022 - April 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",

        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "TikTok wedsite",
        description:
            "The platform enables Google login/registration, video download/search, commenting, sharing, and reviewing of both liked and uploaded videos.            ",
        tags: [
            {
                name: "react-typescript",
                color: "blue-text-gradient",
            },
            {
                name: "Sanity",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: tiktok,
        source_code_link: "https://github.com/hieuvm68/tiktokclone",
        view_link: "https://tiktokclone-olive.vercel.app/",
    },
    {
        name: "LinkedIn",
        description:
            "The web platform enables logging in/registering via Google, uploading videos/articles, and liking/commenting on posts.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Redux-Thunnk",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: linkedin,
        source_code_link: "https://github.com/hieuvm68/linkedin_firebase",
        view_link: "hvm-linkedin.web.app",

    },
    {
        name: "Netflix",
        description:
            "I created a web UI for Netflix, using movie database APIs. Users can search and view movie details such as ratings, cast, crew, and release dates.   ",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "API",
                color: "green-text-gradient",
            },
            {
                name: "SCSS",
                color: "pink-text-gradient",
            },
        ],
        image: netflix,
        source_code_link: "https://github.com/hieuvm68/clonenetflixver_1",
        view_link: " https://hieuvm68.github.io/clonenetflixver_1/",

    },
];

export { services, technologies, experiences, testimonials, projects };