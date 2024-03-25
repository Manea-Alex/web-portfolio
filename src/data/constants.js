// Importing images and documents used across the application
import CV from "../assets/CV_Szőke_Manea_Alexandru_2024.pdf";

import Tailwind from "../assets/languages/Tailwind.svg";
import ReactIcon from "../assets/languages/React.svg";
import NextJs from "../assets/languages/NextJs.png";
import HTML from "../assets/languages/HTML.png";
import CSS from "../assets/languages/CSS.png";
import JavaScript from "../assets/languages/JavaScript.png";
import Node from "../assets//languages/NodeJs.png";
import Python from "../assets/languages/Python.png";
import Java from "../assets/languages/Java.png";
import Cplusplus from "../assets/languages/C++.png";
import Typescriptt from "../assets/languages/TypeScript.png";

import Bosch from "../assets/companies/Bosch.jpg";
import Beamlogic from "../assets/companies/Beamlogic.jpeg";
import Extramus from "../assets/companies/Extramus.png";
import Softex from "../assets/companies/Softex.jpeg";

import AirWise from "../assets/projects/thumbnails/AirWise.jpg";
import Negombo from "../assets/projects/thumbnails/Negombo.jpg";
import SamuraiClash from "../assets/projects/thumbnails/SamuraiClash.jpg";
import Etch from "../assets/projects/thumbnails/Etch-a-sketch.jpg";
import Calculator from "../assets/projects/thumbnails/Calculator.jpg";
import Genius from "../assets/projects/thumbnails/Genius.jpg";

import UTCN from "../assets/institutions/UTCN.jpg";
import LITP from "../assets/institutions/LITP.png";
import LTNB from "../assets/institutions/LTNB.jpg";
import Vienna from "../assets/institutions/Vienna.png";

import AirwiseDocumentation from "../assets/projects/documentations/Airwise Documentation.pdf";
import GeniusDocumentation from "../assets/projects//documentations/Genius Documentation.pdf";
import SamuraiClashDocumentation from "../assets/projects/documentations/Samurai Clash Documentation.pdf";
import SketchDocumentation from "../assets/projects/documentations/Etch-a-Sketch Documentation.pdf";
import CalculatorDocumentation from "../assets/projects/documentations/Project Calculator Documentation.pdf";

const videoLink = "https://www.youtube.com/watch?v=cRG_XLj2FYY";

// Personal bio information, containing name, roles, description, and social links
export const Bio = {
  name: "Alexandru",
  roles: ["software engineer"],
  description:
    "Hello there! My name is Szőke-Manea Alexandru. I have recently graduated with an Engineering degree in Automation and Computer Science from the Technical University of Cluj-Napoca. This journey has not only sharpened my programming abilities but also sparked a passion for software engineering. As I step into the professional world, I'm excited to embrace its challenges and innovations. My goal is to keep growing as a software engineer and to contribute meaningfully to the tech industry.",
  github: "https://github.com/Manea-Alex",
  resume: CV,
  linkedin: "https://www.linkedin.com/in/alexandru-sz%C5%91ke-manea-901227217/",
};

// Skills data structured in categories, each with an array of skills and associated images
export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "JavaScript",
        image: JavaScript,
      },
      {
        name: "TypeScript",
        image: Typescriptt,
      },
      {
        name: "React Js",
        image: ReactIcon,
      },
      {
        name: "Next Js",
        image: NextJs,
      },

      {
        name: "HTML",
        image: HTML,
      },
      {
        name: "CSS",
        image: CSS,
      },
      {
        name: "Tailwind",
        image: Tailwind,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      // {
      //   name: "Node Js",
      //   image: Node,
      // },
      {
        name: "Python",
        image: Python,
      },

      {
        name: "C++",
        image: Cplusplus,
      },
      {
        name: "Java",
        image: Java,
      },
    ],
  },
];

// Professional experiences, each described with an image, role, company, date, description, and skills
export const experiences = [
  {
    id: 0,
    img: Bosch,
    role: "Junior System Test Engineer",
    company: "Robert Bosch GmbH, Cluj-Napoca",
    date: "March 2023 - March 2024",
    desc: "I worked as a Test Engineer in the automotive industry and my expertise centered on the rigorous testing of High Performance Computing Platforms (HCP1), for Electronic Control Unit (ECU) validation. I used  ECU Test for running the tests along Python for scripting. This allowed for the automation of complex test scenarios. I also worked with industry-standard tools such as INCA, DiagRA, and CANoe for tasks ranging from software flashing to network simulation and communication diagnostics between ECUs.",
    skills: ["Python", "ECU-Test", "INCA", "CANoe", "DiagRA"],
  },
  {
    id: 1,
    img: Beamlogic,
    role: "Embedded Software Engineer Intern",
    company: "BeamLogic, Cluj-Napoca",
    date: "December 2022 - March 2023",
    desc: "During my internship, I worked on developing a robust program for managing device communication over a serial connection, utilizing C++ and Boost libraries. My work involved integrating  components such as SerialHandler, CommandQueue, and WirelessManager for efficient data transmission and command processing. This project sharpened my skills in asynchronous programming and serial communication protocols, and deepened my understanding of software design patterns.",
    skills: [
      "C++",
      "Boost Libraries",
      "Asynchronous Programming",
      "Design Patterns",
    ],
  },
  {
    id: 2,
    img: Extramus,
    role: "Web Developer Intern",
    company: "Extramus,  Italy - Terranova Da Sibari",
    date: "July 2022 - October 2022",
    desc: "I played a pivotal role in enhancing this website called {NegomboLink}. It specializes in booking sunbeds and umbrellas for a resort located in Ischia, Naples. My responsibilities primarily involved improving both frontend and backend aspects using PHP and Laravel. I managed to implement a language toggle feature for English and Italian, therefore improving the site's usability and visual appeal. This experience not only improved my technical skills in web development but also boosted my interpersonal abilities. This resulted in the achievement of a Certificate of Completion for my contributions which can be found below.",
    skills: ["PHP", "Laravel", "JavaScript", "HTML", "CSS", "Git"],
    doc: "https://drive.google.com/file/d/1lprrpwT3RWxkA1lq6T_3kyUyO8PN9DJL/view",
  },
  {
    id: 3,
    img: Softex,
    role: "Backend Developer",
    company: "Softex, Cluj-Napoca",
    date: "September 2021 - December 2021",
    desc: "As a Backend Developer at Softex, I engaged in my first job closely aligned with my studies. I was part of a team working on a project to automate insurance policy generation for a Maltese company. My role primarily involved using PHP and Laravel. A notable challenge I tackled was employing regular expressions (regex) to resolve validation issues in forms, particularly for various European phone numbers. Although the company offered limited guidance, this experience was valuable in developing my problem-solving skills.",
    skills: ["PHP", "Laravel"],
  },
];

// Educational background information, containing details about academic institutions and qualifications
export const education = [
  {
    id: 3,
    img: Vienna,
    school: "Faculty of Computer Science - University of Vienna, Vienna",
    date: "March 2024 - Present",
    desc: "I am currently expanding my academic horizon by working towards a Master's degree in Computer Science with a specialization in Data Science at the University of Vienna's Faculty of Computer Science. The curriculum is improving my comprehension of data analysis and machine learning preparing me for what is next in tech.",
    degree:
      "Programme -  Master in Computer Science with a focus on Data Science",
  },
  {
    id: 0,
    img: UTCN,
    school: "Faculty of Automation and Computer Science, Cluj-Napoca",
    date: "Oct 2019 - August 2023",
    grade: "8.04",
    desc: "My academic journey at the Technical University of Cluj-Napoca's Faculty of Automation and Computer Science was both enriching and challenging. It resulted in achieving an Engineering degree with a notable 9.4 grade on my final project. The program provided a comprehensive foundation in Computer Science and Engineering principles, touching upon a wide range of subjects from Programming and Algorithm Design to Control Systems and System Theory. This education not only equipped me with versatile technical skills but also provided a deep understanding of both theoretical and practical aspects of technology.",
    degree: "Programme - Automation and Applied Informatics",
  },
  {
    id: 1,
    img: LITP,
    school: "Lyceum of Informatics „Tiberiu Popoviciu”, Cluj-Napoca",
    date: "September 2015 - July 2019",
    grade: "9.30",
    desc: "At the Lyceum of Informatics 'Tiberiu Popoviciu', my High School journey in Mathematics and Informatics was a progressive dive into the world of computing. Starting in the IX grade, I was introduced to the foundations of Computer Science, exploring Algorithms, Data Structures, and Pseudocode, complemented by writing code in programming environments like Codeblocks. As I advanced through the grades, the focus shifted to more complex concepts such as character strings, recursive subprograms, delving into practical algorithms like Divide et Impera. In my junior year, I explored the realms of Graphs, Trees, Backtracking, Greedy Algorithms, and Dynamic Programming. My senior year culminated in a deeper engagement with databases, such as SQL, and web programming. This  curriculum laid a strong foundation, setting the stage for my further development in this field",
    degree: "Mathematics and Informatics Specialization",
  },
  {
    id: 2,
    img: LTNB,
    school: " „Nicolae Bălcescu” Theoretical High School, Cluj-Napoca",
    date: "September 2007 - July 2015",
    desc: "My foundational academic years were spent at Nicolae Bălcescu Theoretical High School in Cluj-Napoca. I studied there between the I grade, where I learned how to read, and all the way up to the VIII grade. This time was important in shaping my academic path, resulting in the High School entrance examination, which would open the doors for my next educational chapter.",
  },
];

// Project information, including title, date, description, images, tags, categories, and links
export const projects = [
  {
    id: 0,
    title: "Airwise",
    date: "May 2023 - July 2023",
    description:
      "Airwise is a web application, developed in my final year of university, and it serves as an innovative solution in the travel industry. It utilizes react and an API from Kiwi.com to provide users with an efficient, user-friendly platform for flight price searches. The application offers real-time flight data, various search parameters, and a dynamic interface. NOTE: Please allow pop-ups on the page, otherwise the search won't return any results and you will be met by a blank page",
    image: AirWise,
    tags: ["JavaScript", "React.js", "HTML", "CSS", "Tequila API"],
    category: "web app",
    github: "https://github.com/Manea-Alex/Air-Wise",
    webapp: "https://manea-alex.github.io/Air-Wise/",
    flow: " Airwise is a web application meant to help you with your travel needs by providing you cheap options. In the PDF file below you can explore more detaily how the application works and you can find some code snippets. ",
    pdf: AirwiseDocumentation,
  },
  {
    id: 1,
    title: "Genius",
    date: "2023",
    description:
      "Genius is a comprehensive chat application which uses a variety of AI functionalities into a single platform. Using technologies like TypeScript, Tailwind, Next.js, Prisma, and MySQL, the app features five unique AI tools: interactive conversations, stunning images and efficient code powered by OpenAI, music generation using the Replicate AI’s Riffusion model, and video generation utilizing again Replicate AI, this time the zeroscope-v2-xl model. While the app is hosted on Vercel's free tier, which can unfortunately limit features like video generation, image generation and music generation I have included a video demonstration to showcase its full potential. The app not only offers tiered access with Stripe integration, but also ensures a seamless experience with Clerk for authentication and Crisp for customer support. This project showcases my ability to build an intuitive and versatile AI-driven app.",
    image: Genius,
    tags: [
      "Typescript",
      "Tailwind",
      "Next.js",
      "Stripe",
      "Prisma",
      "MySQL",
      "Clerk",
    ],
    // category: "android app",
    github: "https://github.com/Manea-Alex/AI-Web-App",
    webapp: "https://ai-platform-lemon.vercel.app/dashboard",
    flow: "Explore the functionalities of 'Genius' through the documentation. This application uses advanced AI APIs to deliver a unique user experience. To see it in action, please watch the accompanying video showcasing the app’s capabilities, available below. For an in-depth understanding of its performance and the technology stack behind it, click the button to access the comprehensive documentation.",
    pdf: GeniusDocumentation,
    link: videoLink,
  },
  {
    id: 2,
    title: "Negombo",
    date: "July 2022 - October 2022",
    description:
      "I played a role in enhancing this website called {NegomboLink}. It specializes in booking sunbeds and umbrellas. My responsibilities primarily involved improving both frontend and backend aspects using PHP and Laravel. I managed to implement a language toggle feature for English and Italian, therefore improving the site's usability and visual appeal.",
    image: Negombo,
    tags: ["PHP", "Laravel", "Javascript", "HTML", "CSS"],
    category: "web app",
    webapp: "https://prenotazioni.negombo.it/",
  },

  {
    id: 3,
    title: "Samurai Clash",
    date: "October 2022",
    description:
      " 'Samurai Clash' is a simple yet engaging keyboard-controlled game, made by leveraging resources found online and applying my skills in JavaScript, HTML, and CSS. The game features two samurai fighters, each controlled by arrow keys, clashing in battle. The aim is to strike your opponent within the time limit. This project was a great way for me to deepen my understanding of web development while creating something fun and interactive.",
    image: SamuraiClash,
    tags: ["Javascript", "HTML", "CSS"],
    category: "web app",
    github: "https://github.com/Manea-Alex/Fighting-Game/tree/master",
    webapp: "https://manea-alex.github.io/Fighting-Game/",
    flow: "Explore the developement  of the game through the documentation provided. This resource offers a  guide on how the game was built, including the animation process, collision detection, and character control mechanisms",
    pdf: SamuraiClashDocumentation,
  },
  {
    id: 4,
    title: "Etch-a-Sketch",
    date: "August 2021",
    description:
      "'Etch A Sketch,' another engaging project from The Odin Project, allowed me to explore the dynamic aspects of web development. This task involved creating a digital version of the classic drwaing game. It required a mix of HTML, CSS, and JavaScript to make a grid where users can 'draw' by hovering over cells, changing colors, and shaking to erase, just like the traditional Etch A Sketch. This project showcases my skills in creating interactive and user-friendly web interfaces.",
    image: Etch,
    tags: ["CSS", "HTML", "Javascript"],
    // category: "machine learning",
    github: "https://github.com/Manea-Alex/Etch-a-Sketch",
    webapp: "https://manea-alex.github.io/Etch-a-Sketch/",
    flow: "Welcome to the documentation for the Etch-A-Sketch game. This guide delves into how the game works, detailing the creative process behind the virtual canvas and the drawing mechanism.",
    pdf: SketchDocumentation,
  },
  {
    id: 5,
    title: "Project Calculator",
    date: "August 2021",
    description:
      "As one of my initial incursion into JavaScript, 'Project Calculator' from The Odin Project was a great experience in my web development education. This project not only introduced me to JavaScript, HTML, and CSS but also challenged me to apply these newly acquired skills in creating a fully functional web calculator. It was an important step in my coding journey, allowing me to develop problem-solving abilities and understand complex functionalities such as basic arithmetic operations and user input handling.",
    image: Calculator,
    tags: ["CSS", "HTML", "Javascript"],
    // category: "android app",
    github: "https://github.com/Manea-Alex/Project_Calculator",
    webapp: "https://manea-alex.github.io/Project_Calculator/",
    flow: "Below you can explore the documentation of the Project Calculator. This documentation outlines the steps of the development process, including the responsive design and the implementation of user input handling.",
    pdf: CalculatorDocumentation,
  },
];
