const logotext = "ROB";
const meta = {
    title: "Rob Bergamasco",
    description: "PMP, CSM-certified technical leader with 10 years of experience solving complex challenges. Proficient in Python and Java, focused on developing AI projects and strategic execution.",
};

const introdata = {
    title: "I'm Rob Bergamasco",
    animated: {
        first: "I develop solutions",
        second: "I review processes",
        third: "I ship results",
    },
    description: "A results-oriented developer and PMP/CSM-certified technical leader with 10 years of experience solving complex challenges. Proficient in Python and Java, with hands-on experience building applications.",
    your_img_url: require("./assets/images/develop-review-ship.jpg"),
};

const dataabout = {
    title: "About Me",
    aboutme: "I'm a PMP and CSM-certified technical leader with 10 years of experience in the United States Air Force and corporate environments. Currently serving as Product Master Data Manager at Wesco, I specialize in strategic execution, process development, and modernizing legacy systems. My expertise spans Python and Java development, cloud migrations, and AI project development. I'm passionate about solving complex challenges and building high-impact solutions that drive operational efficiency and cost savings.",
};
const worktimeline = [{
        jobtitle: "Manager, Product Master Data",
        where: "Wesco",
        date: "2022 - Present",
    },
    {
        jobtitle: "Program Manager, Strategic Growth Initiatives",
        where: "Highmark, Inc.",
        date: "2021 - 2022",
    },
    {
        jobtitle: "Portfolio Manager, Foreign Military Sales",
        where: "United States Air Force",
        date: "2017 - 2021",
    },
    {
        jobtitle: "Missile Combat Crew Commander - REACT Software",
        where: "United States Air Force",
        date: "2013 - 2016",
    },
];

const skills = [{
        name: "Python",
        description: "Developed Web of Veterans application teaching veterans marketable skills and job search strategies, demonstrating proficiency in Python programming for web applications.",
    },
    {
        name: "Java",
        description: "Applied Java development skills in various enterprise environments, contributing to robust software solutions and system integrations.",
    },
    {
        name: "Project Management",
        description: "Led 2019 Team of the Year, creating innovative solutions that saved $230MM+ and standardized $60k process migration across complex organizational structures.",
    },
    {
        name: "Strategic Planning",
        description: "Drove $500k+ annual operational cost savings through rationalization of 28 legal entities across three strategic business units, demonstrating strategic planning expertise.",
    },
    {
        name: "Cloud Migration",
        description: "Modernized global tax engine, migrating 76 companies from on-prem to Onesource Cloud, eliminating $350k+ in licensing fees and optimizing Oracle Cloud migration.",
    },
    {
        name: "Process Development",
        description: "Standardized $60k process migration and optimized PMO efficiency across 70+ projects and 1700+ milestones, streamlining organizational processes.",
    },
    {
        name: "Risk Management",
        description: "Led 21 TLS protocol updates and eliminated 1,100 obsolete Active Directory accounts, strengthening company security infrastructure and managing technical risks.",
    },
    {
        name: "Team Leadership",
        description: "Led integration and strategic planning for Highmark NY affiliation, managing cross-functional teams and delivering results in complex organizational environments.",
    },
];

const services = [{
        title: "Strategic Planning & Execution",
        description: "Expert in developing and executing strategic initiatives that drive operational efficiency and cost savings. Proven track record of optimizing processes and delivering measurable results.",
    },
    {
        title: "Cloud Migration & Modernization",
        description: "Specialized in modernizing legacy systems and migrating to cloud platforms. Successfully led migrations saving organizations $500k+ in operational costs while improving system reliability.",
    },
    {
        title: "AI Project Development",
        description: "Focused on developing AI solutions using Python and Java. Applying strong foundation in software development to build high-impact AI applications that solve complex business challenges.",
    },
    {
        title: "Team Leadership & Management",
        description: "PMP and CSM-certified leader with experience managing cross-functional teams. Proven ability to drive collaboration, optimize performance, and deliver results in complex organizational environments.",
    },
];

const dataportfolio = [{
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        description: "IT Security Modernization - Led 21 TLS protocol updates and eliminated 1,100 obsolete Active Directory accounts, strengthening company security infrastructure.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        description: "Legal Structure Optimization - Drove $500k+ annual operational cost savings through rationalization of 28 legal entities across three strategic business units.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        description: "Cloud Migration Leadership - Modernized global tax engine, migrating 76 companies from on-prem to Onesource Cloud, eliminating $350k+ in licensing fees.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
        description: "Oracle Cloud Migration - Directed strategic tradeoffs optimizing Oracle Cloud migration saving $500k+ in technology builds and avoiding vendor contract extensions.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        description: "Cross-Functional Integration - Led integration and strategic planning for Highmark NY affiliation, optimizing PMO efficiency across 70+ projects and 1700+ milestones.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
        description: "Web of Veterans - Founded and programmed application teaching veterans marketable skills and job search strategies, hosting 9 networking events across Pittsburgh.",
        link: "#",
    },
    {
        img: require("./assets/images/linkedinphoto.jpg"),
        description: "USAF Portfolio Management - Led 2019 Team of the Year, creating innovative solutions that saved $230MM+ and standardized $60k process migration.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
        description: "RADAR Program Enhancement - Strengthened $5.1MM program involving 74 nations and 16 U.S. agencies, growing economic revenue 50% and authorizing 12 travel routes.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "bergamascorob@gmail.com",
    description: "Ready to discuss how my expertise in strategic planning, cloud migration, and AI development can drive your organization's success. Let's connect and explore opportunities for collaboration.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_677kjlq",
    YOUR_TEMPLATE_ID: "template_f3m04dl",
    YOUR_USER_ID: "7E8ecCZ9jmgp2mTyv",
};

const socialprofils = {
    github: "https://github.com/bergamascorob",
    linkedin: "https://linkedin.com/in/RobertJBergamasco",
    twitter: "https://x.com/robbergamasco",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};