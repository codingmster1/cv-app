import { v4 as uuidv4 } from "uuid";
import samplePicture from "../assets/lightpfp.jpg";

const CV = {
    color1: "rgb(50, 50, 50)",
    color2: "rgb(0, 0, 0)",
    fileName: "lightpfp.jpg",
    fileSrc: samplePicture,
    info: [
        {
            name: "First Name",
            text: "Light"
        },
        {
            name: "Last Name",
            text: "Yagami"
        },
        {
            name: "Honor Student",
            text: "Death Note User"
        },
        {
            name: "Tell us something about yourself.",
            text: `From the moment I stumbled upon this notebook, I knew my life would change forever. I am Kira!`
        },
        {
            name: "School",
            text: "Suginami University"
        },
        {
            name: "Degree",
            text: "Economics"
        },
        {
            name: "Address",
            text: "456 Dry Ink blvd, Tokyo, Japan"
        },
        {
            name: "E-Mail",
            text: "godofthenewworld@gmail.com"
        },
        {
            name: "Phone number",
            text: "1-800-IAMKIRA"
        },
        {
            name: "Social Link",
            text: "LinkedIn: in/yourusername"
        }
    ],
    skills: [
        {
            id: uuidv4(),
            text: "React"
        },
        {
            id: uuidv4(),
            text: "HTML"
        },
        {
            id: uuidv4(),
            text: "CSS"
        },
        {
            id: uuidv4(),
            text: "JavaScript"
        },
        {
            id: uuidv4(),
            text: "Git"
        },
        {
            id: uuidv4(),
            text: "Nodejs"
        },
        {
            id: uuidv4(),
            text: "Webpack"
        }

    ],
    experiences: [
        {
            id: uuidv4(),
            position: "Senior Software Engineer",
            company: "Japanese Task Force",
            startDate: "2022",
            endDate: "Present",
            description: "Classified"
        },
        {
            id: uuidv4(),
            position: "IT Help Desk",
            company: "University Computer Science Center",
            startDate: "2020",
            endDate: "2022",
            description: "I would assist in common technical student issues within my university's computer science department and fix them immediately."
        }
    ]

}

// eslint-disable-next-line react-refresh/only-export-components
export default CV