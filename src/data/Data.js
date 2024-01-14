import logo1 from "../components/Experience/Images/Pixelotech.jpg";
import logo2 from "../components/Experience/Images/Istellar.png";
// import ljmu from "../components/Education/Images/LJMU.png"; This will be added later
import iiitb from "../components/Education/Images/IIITB.png";
import csmit from "../components/Education/Images/CSMIT.jpg";
import hoc from "../components/Education/Images/HOC.png";

export const Data = {
  name: "Dhiraj Pandhari Dalvi",
  designation: "MERN Stack Developer",
  experience: [
    {
      _id: 0,
      name: "Pixelotech",
      designation: "Software Developer",
      start: "22th July, 23",
      end: "PRESENT",
      link: "https://pixelotech.com/",
      src: logo1,
      description: [
        {
          li: "Working as a software developer at Pixelotech where I am currently working as a Frontend Developer.",
        },
        {
          li: "Working on  various technologies including ReactJs, NextJs, Vite, Typescript, Tailwind css, etc.",
        },
        {
          li: "Till date I've worked on various projects including CRMs, Admin-side panels, E-commerce wesites, etc.",
        },
      ],
      images: ["pixelotech-cover", "pixelotech-about"],
    },
    {
      _id: 1,
      name: "Istellar Labs Pvt. Ltd.",
      designation: "Software Engineer",
      start: "2nd Nov, 22",
      end: "16 Feb, 23",
      link: "https://istellarlabs.com/",
      src: logo2,
      description: [
        {
          li: "Developed a Full Stack Single Page Application (SPA) using React and Redux architecture component method.",
        },
        {
          li: "Involved in all phases of the application i.e. project estimation, design, development and implementation.",
        },
        {
          li: "Developed analytical skills to understand client's needs.",
        },
        {
          li: "Responsible for identifying bugs in the web development process both in Backend & Frontend design application.",
        },
        {
          li: "Finally, hosted the project codebase using GoDaddy hosting.",
        },
      ],
      images: ["img1", "img2"],
    },
  ],
  projects: [
    {
      _id: 0,
      name: "Chess API",
      github: "https://github.com/dhirajdalvi2001/Chess-Api",
      hosted: "https://chessapihosted.web.app/",
      start: "Jan, 2023",
      end: "Feb, 2023",
      img: "ChessApi",
      description: [
        {
          li: "Website where users can search for users present on chess.com platform",
        },
        {
          li: "Used Chess.com public Api to fetch user details and stats.",
        },
        {
          li: "Used ReactJs for responsive user interface.",
        },
        {
          li: "Used ContextApi to handle state globally",
        },
        {
          li: "Used Vanilla CSS for styling.",
        },
        {
          li: "Used media queries for a mobile responsive design.",
        },
        {
          li: "Used LocalStorage to cache the inputted data.",
        },
      ],
    },
    {
      _id: 1,
      name: "Keeper",
      github: "https://github.com/dhirajdalvi2001/Keeper",
      hosted: "https://keeperdd.netlify.app/",
      start: "Jan, 2022",
      end: "Mar, 2022",
      img: "Keeper",
      description: [
        { li: "Web-page where users can manage notes." },
        { li: "Add and delete notes on the webpage platform." },
        { li: "Used ReactJs for responsive user interface." },
        { li: "Used Vanilla Css for designing the webpage." },
        { li: "Also used Material UI for styling." },
        { li: "Used media queries for a mobile responsive design." },
        { li: "Used LocalStorage to cache the notes data." },
      ],
    },
    {
      _id: 2,
      name: "Simon Game",
      github: "https://github.com/dhirajdalvi2001/Simon-Game",
      hosted: "https://dhirajdalvi2001.github.io/Simon-Game/",
      start: "Nov, 2021",
      end: "Dec, 2021",
      img: "SimonGame",
      description: [
        {
          li: "Web-page game where the user has to memorize the colors and tap/ click in the same series.",
        },
        { li: "Used Html for the structure of the website." },
        { li: "Used Vanilla Css for designing the webpage." },
        { li: "Used media queries for a mobile responsive design." },
        { li: "Used Javascript for the functionality." },
      ],
    },
  ],
  education: [
    // This will be added later
    // {
    //   _id: 0,
    //   type: "Master of Science in Computer Science",
    //   name: "Liverpool John Moores",
    //   location: "Liverpool",
    //   university: "LJMU",
    //   year: "2024-PRESENT",
    //   marks: "Not declared yet",
    // },
    {
      _id: 1,
      type: "Executive PG Programme (PGD)",
      name: "International Institute of Information Technology",
      location: "Bangalore",
      university: "IIIT-B",
      year: "2023-PRESENT",
      marks: "Not declared yet",
      src: iiitb,
    },
    {
      _id: 2,
      type: "Bachelor of Engineering in Computer Engineering (B.E.)",
      name: "Chhatrapati Shivaji Maharaj Institute of Technology",
      location: "Shedung",
      university: "Mumbai University",
      year: "2019-2023",
      marks: "8.15 CGPA",
      src: csmit,
    },
    {
      _id: 3,
      type: "Higher Secondary School Certificate (12th - HSC)",
      name: "HOC Jr. College",
      location: "Rasayani",
      university: "CBSE Board",
      year: "2018-2019",
      marks: "56%",
      src: hoc,
    },
    {
      _id: 4,
      type: "Secondary School Certificate (10th - SSC)",
      name: "HOC School",
      location: "Rasayani",
      university: "CBSE Board",
      year: "2016-2017",
      marks: "7.6 CGPA",
      src: hoc,
    },
  ],
  certifications: [
    {
      _id: 1,
      name: "Udemy : Complete 2023 Web Development Bootcamp",
      provider: "Angela Yu",
      type: "Udemy Certificate",
    },
    {
      _id: 2,
      name: "CSS (Basics)",
      provider: "HackerRank",
      type: "HackerRank Certificate",
    },
    {
      _id: 3,
      name: "Java (Basics)",
      provider: "HackerRank",
      type: "HackerRank Certificate",
    },
  ],
  achievements: [
    {
      _id: 1,
      name: "HackerRank Java",
      stars: 5,
    },
    {
      _id: 2,
      name: "HackerRank SQL",
      stars: 4,
    },
    {
      _id: 3,
      name: "HackerRank 10 Days of Javascript",
      stars: 4,
    },
  ],
};
