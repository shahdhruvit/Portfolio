import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";


const Info={
    stack:["React.js Developer","Software Engineer","Full Stack Web Developer","Javascript Developer"],
    bio :"I'm a recent graduate with a focus on web development, passionate about building responsive, user-friendly websites and web applications. Through my academic projects and self-driven learning, I have gained proficiency in HTML, CSS, JavaScript, and popular tools like React (a JavaScript library) and Node.js.During my studies, I worked on various projects that enhanced my understanding of front-end and back-end development, enabling me to create seamless user experiences and efficient code. Let's connect and create something amazing together!"
}

const ProjectInfo=[
    {
        title:"Online Furnitur Store",
        desc: "An online furniture store serves to provide customers with convenience and accessibility in shopping for a diverse range of furniture options. Through the convenience of online browsing, customers can easily compare prices, access detailed product information, and personalize their selections to suit their preferences. Additionally, online stores often offer home delivery and installation services, along with responsive customer support, enhancing the overall shopping experience.",
        image:"Online_Furniture.png",
        technologies:["React.js","Firebase","Node.js","TailwindCSS","Redux","Heroicons","Visualstudio"],
        github:"https://github.com/shahdhruvit/Online-Furniture-Store",
    },
    {
        title:"Online Food Shop",
        desc: "Welcome to our online foods delivery shop, your one-stop destination for all your food and household essentials. We are committed to providing you with a convenient and efficient shopping experience, bringing the grocery store directly to your doorstep. Our website offers a wide range of high-quality products sourced from trusted suppliers and brands. From fresh fruits and vegetables to pantry staples, dairy products, meats, and more, we have everything you need to fill your kitchen and keep your home well-stocked. We carefully select each item to ensure freshness, quality, and value for your money.",
        image:"Online_Food.png",
        technologies:["React.js","TailwindCSS","PhpMyAdmin","Redux","Heroicons","Visualstudio"],
        github:"https://github.com/shahdhruvit/Online-Food-Shop",
    },
    {
        title:"Car Sharing System",
        desc: "An online car sharing system we create during our Azadi ka amrit mahotsav Hakathon-2022(SSIP). An online car sharing system is a digital platform designed to facilitate the short-term rental of vehicles between individuals or between company and its customers.it is User-friendly, 27x7 Availability, Cost Efficiency, Environmental Benifits, Resource Optimization. This system can be beneficial for urban dwellers, students, tourists, and businesses that require occasional access to vehicles without the commitment of ownership",
        image:"Car_Sharing.png",
        technologies:["HTML","CSS","Visualstudio","PhpMyAdmin","JavaScript"],
    }
    
]

const SkillInfo = [
    {
        title:"Frontend",
        skills:["HTML","CSS","JavaScript","React Js","Tailwind CSS","Bootstrap","Redux"]
    },
    {
        title:"Backend",
        skills:["Node Js","MySQL","Firebase","Express Js","MongoDB"]
    },
    {
        title:"Languages",
        skills:["C","JavaScript","Python","C++"]
    },
    {
        title:"Tools",
        skills:["Git","Github","VS Code","Wordpress"]
    },

]

const ExperienceInfo = [
    {
        role:"React.js DEveloper Internship",
        company:"Maxgen Technologies",
        date:"Jan 2024",
        desc:"Built and maintained user interfaces using React.js, ensuring responsiveness and performance. Participated in daily stand-ups and sprint planning sessions as part of an Agile team.",
        skills:["HTML", "CSS", "JS", "React Js", "Node.js", "Firebase", "VS Code", "TailwindCSS", "Bootstrap"]
    },
    {
        role:"React.js DEveloper Internship",
        company:"Praxware Technologies",
        date:"Jul 2023",
        desc:"Developed and maintained web applications using React.js, ensuring high performance and responsiveness to user interactions. Proficient in React.js and its core principles such as components, hooks, state management, and lifecycle methods.",
        skills:["HTML", "CSS", "JS", "React Js", "Node.js","MySQL","PhpMyAdmin","VS Code"]
    }
]

const Slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const socialLinks=[{link:"https://github.com/shahdhruvit", icon:IconBrandGithub}, {link:"https://www.linkedin.com/in/shah-dhruvit-953453289/", icon:IconBrandLinkedin}, {link:"https://www.instagram.com/shah_dhruvit_12_03/", icon:IconBrandInstagram}, {link:"https://www.youtube.com/@m2o_dhruvit307", icon:IconBrandYoutube}]
export { Info, ProjectInfo, SkillInfo, ExperienceInfo, Slugs, socialLinks };