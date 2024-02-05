//icons import

import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoSendOutline } from "react-icons/io5";
import { GiAchievement } from "react-icons/gi";
import { RiBriefcase2Fill } from "react-icons/ri";
import { MdHeadsetMic } from "react-icons/md";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { VscLiveShare } from "react-icons/vsc";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { TbApi } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { IoIosGitBranch } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { FaArrowLeft } from "react-icons/fa6";


//image import

import splendior from "../assets/splendior_sm.jpg";
import splendior_lg from "../assets/splendior.jpg";
import moviehub from "../assets/moviehub_sm.jpg" ;
import moviehub_lg from "../assets/moviehub.jpg"
import activelearn from "../assets/activelearn_sm.jpg"
import activelearn_lg from "../assets/activelearn.jpg"

import gym from "../assets/gym_sm.jpg"
import gym_lg from "../assets/gym.jpg"

import space from "../assets/space_sm.jpg"
import space_lg from "../assets/space.jpg"

import portfolio from "../assets/portfolio_sm.jpg"
import portfolio_lg from "../assets/portfolio.jpg"


import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import client4 from "../assets/client4.jpg";

export const icons = {
  facebook: <FaFacebookF className="icon" />,
  github: <FaGithub className="icon" />,
  linkedin: <FaLinkedin className="icon" />,
  x: <FaXTwitter className="icon" />,
  send_arrow: <IoSendOutline className="icon" />,
  experience_icon: <GiAchievement className="icon" />,
  projects_icon: <RiBriefcase2Fill className="icon" />,
  work_time_icon: <MdHeadsetMic className="icon" />,
  cv_icon: <MdOutlineStickyNote2 className="icon" />,
  live_icon: <LuEye className="icon" />,
  arrow: <FaArrowRight className="icon" />,
  live_demo_icon: <VscLiveShare className="icon" />,
  location_icon: <FaLocationDot className="icon" />,
  person_icon: <IoMdPerson className="icon" />,
  mail_icon: <IoMdMail className="icon" />,
  phone_icon: <FaPhoneAlt className="icon" />,
  dark_theme_icon: <FaRegMoon className="icon" />,
  light_theme_icon: <MdOutlineWbSunny className="icon" />,
  menu_icon: <HiMenuAlt3 className="icon" />,
  close_icon: <MdClose className="icon" />,
  plus_icon: <GoPlus className="icon" />,
  minus_icon: <HiMiniMinusSmall className="icon" />,
  back_arrow: <FaArrowLeft className="icon"/>,
};

export const skills = [
  {
    icon: <FaHtml5 />,
    name: "html",
  },
  {
    icon: <FaCss3Alt />,
    name: "css",
  },
  {
    icon: <FaSass />,
    name: "scss",
  },
  {
    icon: <IoLogoJavascript />,
    name: "javascript",
  },
  {
    icon: <RiReactjsLine />,
    name: "reactjs",
  },
  {
    icon: <TbBrandRedux />,
    name: "redux",
  },
  {
    icon: <TbApi />,
    name: "api",
  },
  {
    icon: <SiTypescript />,
    name: "typescript",
  },
  {
    icon: <FaGithub />,
    name: "github",
  },

  {
    icon: <IoIosGitBranch />,
    name: "version control",
  },
];

export const project = [
  {
    name: "moviehub",
    skill: ["reactjs", "api", "scss", "swiperjs"],
    description:
      "MovieHub is your passport to a seamless cinematic experience, blending cutting-edge React technology with dynamic API integration. Discover the latest blockbusters and hidden gems with real-time movie data. Navigating through genres, release dates, and favorites is a breeze with the intuitive user interface. Enjoy a consistent, high-quality viewing experience across devices, thanks to responsive design. Behind the scenes, MovieHub stands out with clean code architecture, ensuring smooth performance, reliability, and easy maintenance. Personalized recommendations based on your viewing history enhance your movie exploration, while social integration allows effortless sharing of cinematic moments with friends. Stay in the cinematic loop with MovieHub's commitment to continuous updates, keeping its database fresh with the latest trailers, reviews, and releases. MovieHub is not just a website; it's your cinematic escape – an immersive journey into the world of film. ",
    live_link: "https://moviehub-dun.vercel.app/",
    github: "https://github.com/ugonna-onyejekwe/moviehub",
    img: moviehub,
    img2:moviehub_lg,
    key_features: [
      "reactjs",
      "api",
      "real-time movie data",
      "intuitive design",
      "responsiveness",
      "clean code philosophy",
      "personalized recommendation",
      "version control",
    ],
  },
  {
    name: "Splendior",
    skill: ["reactjs", "scss", "swiperjs"],
    description:
      "Step into the world of Splendior, where sophistication meets technology in our meticulously designed hotel website. Powered by ReactJS for seamless exploration, adorned with SCSS for aesthetic elegance, and featuring dynamic SwiperJS carousels, Slendior provides a chic and immersive online experience. From intuitive navigation to responsive design, every aspect is tailored for a user-friendly journey. Our secure booking system ensures a hassle-free reservation process, while SCSS styling adds a visually cohesive touch to the entire website. More than a booking platform, Slendior is a virtual haven, enticing guests with captivating visuals and a promise of luxurious retreat. Welcome to Splendior – Your Chic Escape. ",
    live_link: " https://spendior.vercel.app/     ",
    github: "https://github.com/ugonna-onyejekwe/spendior",
    img: splendior,
    img2: splendior_lg,
    key_features: [
      "reactjs power",
      "scss elegance",
      "swiperjs dynamics",
      "responsive design",
      " easy navigation",
      "customized styling with scss",
      "visual appeal",
    ],
  },
  {
    name: " activelearn",
    skill: ["reactjs", "scss", "swiper.js"],
    description:
      "ActiveLearn is a newly launched educational website designed to provide a seamless and engaging learning experience. Built using ReactJS, SCSS, and SwiperJS, the platform boasts an intuitive design for easy navigation, responsiveness across devices, and a visually appealing interface. Users can explore a rich array of educational content, including interactive lessons, quizzes, and multimedia resources. The integration of SwiperJS adds an interactive touch with dynamic carousels for featured content. ActiveLearn is not just a website but a dynamic platform with plans for future enhancements such as user profiles, discussion forums, and live sessions.",
    live_link: "https://activelearn-website.vercel.app/",
    github: "https://github.com/ugonna-onyejekwe/Activelearn-website",
    img: activelearn,
    img2: activelearn_lg,
    key_features: [
      "reactjs excellence",
      "scss aesthetic",
      "swiperjs dynamics",
      "responsive design",
      " intuitive navigation ",
      " customized styling with scss",
      "visual appeal",
    ],
  },
  {
    name: " gymnasia",
    skill: ["html", "css", "javascript"],
    description:
      "Gymnasia is a comprehensive gym website developed using HTML, CSS, and JavaScript. The website prioritizes user-friendliness, interactivity, and visual appeal for fitness enthusiasts. Key features include a responsive HTML structure, CSS styling for a modern aesthetic, JavaScript for enhanced interactivity, fitness program details, a seamless workout scheduling system, community forums, and social media integration. The result is a vibrant online hub catering to diverse fitness needs and fostering a sense of community among gym members.",
    live_link: "https://gym-website-eta-six.vercel.app/",
    github: "https://github.com/ugonna-onyejekwe/gym-website",
    img: gym,
    img2: gym_lg,
    key_features: [
      "responsive html structure",
      "css styling for visual appeal",
      "javaScript for interactivity",
      "fitness programs and scheduling",
      "community and social integration",
      "responsive design for cross-device compatibility ",
    ],
  },
  {
    name: " portfolio",
    skill: ["html", "css", "javascript"],
    description:
      "I crafted a dynamic and engaging portfolio website utilizing HTML, CSS, and JavaScript to showcase my skills and experiences. The website features a clean and responsive HTML structure, ensuring accessibility across various devices. CSS styling is employed for a visually appealing and cohesive design, utilizing modern layout techniques. JavaScript is integrated to enhance interactivity, with features such as dynamic animations, smooth transitions, and a user-friendly navigation system. The portfolio website serves as a comprehensive platform for presenting my professional achievements, projects, skills, and contact information, providing visitors with a visually pleasing and interactive experience.",
    live_link: "https://portfolio-beta-teal-84.vercel.app/",
    github: "https://github.com/ugonna-onyejekwe/portfolio",
    img: portfolio,
    img2: portfolio_lg,
    key_features: [
      "responsive html structure",
      "css styling for visual appeal",
      "javaScript for interactivity",
      "project showcase",
      "skill proficiency",
      "community and social integration",
      "responsive design for cross-device compatibility ",
    ],
  },
  {
    name: " space tourism",
    skill: ["html", "css", "javascript"],
    description:
      "I'm thrilled to present my recent project, a Space Tourism Website developed with HTML, CSS, and JavaScript. This visually stunning website offers an immersive and informative experience, showcasing the marvels of space travel. Features include a robust HTML structure for easy navigation, CSS for a galactic aesthetic, and JavaScript for interactivity. Users can explore space travel packages, engage with interactive content, and access educational resources. The website's responsive design ensures an optimal experience across devices, inviting users to embark on a virtual journey to the stars.",
    live_link: "https://space-tourism-multi-page-website-dun.vercel.app/",
    github: "https://github.com/ugonna-onyejekwe/space-tourism-multi-page-website",
    img: space,
    img2: space_lg,
    key_features: [
      "responsive html structure",
      "css styling for visual appeal",
      "javaScript for interactivity",
      "project showcase",
      "skill proficiency",
      "community and social integration",
      "responsive design for cross-device compatibility ",
    ],
  },
];

export const education = [
  {
    institute: "university of nigeria, nsukka",
    program: "computer science",
    date: "2021 - present",
    description:
      "Pursuing a Computer Science degree at the University of Nigeria, Nsukka, my academic journey reflects a commitment to technology and innovation. Passionate about the field, I strive for a deep understanding to drive future impact.",
  },
  {
    institute: "freecodecamp",
    program: "frontend developer",
    date: "2021 - present",
    description:
      "Currently immersed in FreeCodeCamp's Frontend Development program, I'm honing skills to create engaging web interfaces. Passionate about crafting seamless digital experiences, I look forward to applying practical insights gained from the program.",
  },
  {
    institute: "self taught",
    program: "web development",
    date: "2021 - present",
    description:
      "I am a self-taught developer, driven by a passion for continuous learning. Committed to honing my skills, I embrace hands-on experience in the dynamic world of technology.",
  },
];

export const experience = [
  {
    company: "best tech limited",
    position: "frontend developer | internship",
    date: " 2022 -  2023",
    description:
      "During my internship as a Frontend Developer at Best Enterprise, I acquired hands-on experience in crafting responsive and user-friendly web interfaces. Collaborating with a talented team, I contributed to projects, furthering my skills in frontend development and gaining valuable insights into industry best practices.",
  },

  {
    company: "oge enterprise",
    position: "frontend developer | internship",
    date: " 2023 - present",
    description:
      "As a Frontend Developer at OGE Enterprise, I've honed my skills in creating visually appealing and functional interfaces. Collaborating within a dynamic team, I've successfully implemented innovative solutions and contributed to project success, gaining valuable practical insights in the process.",
  },
  {
    company: "vivva solution",
    position: "frontend developer | contract",
    date: "2023",
    description:
      "As a contracted Frontend Developer at Vivvaa Solutions, I've played a pivotal role in creating innovative and visually compelling web solutions. This experience has significantly enhanced my proficiency in frontend development, providing valuable insights and contributing to the overall success of the team and projects.",
  },
];

export const reviews =[

  {
    name: "sir cinture",
    position: "best enterprise",
    review: "Ugonna: a standout frontend developer, turning ideas into visually stunning and functional websites with precision and innovation.",
    img:client1,
  },
  {
    name: "veo miles",
    position: "full stack developer",
    review: "This guy delivered outstanding work for us. His frontend development skills exceeded our expectations, creating a visually stunning and high-performing digital experience.",
    img:client2,
  },
  {
    name: "oge jane",
    position: "CEO oge tech",
    review: "Ugonna's frontend work impresses with tidy, efficient code. His commitment to clarity is evident in every project.",
    img:client3,
  },
  {
    name: "jhoe victor",
    position: "frontend developer",
    review: " Ugonna excels as a frontend developer, seamlessly crafting visually impressive and functional websites. His skill and innovation elevate every project.",
    img:client4,
  },
 
]