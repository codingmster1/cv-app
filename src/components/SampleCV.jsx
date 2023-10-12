import { v4 as uuidv4 } from "uuid";
import samplePicture from "../assets/lightpfp.jpg";

const CV = {
    color1: "rgb(91, 205, 188)",
    color2: "rgb(100, 227, 104)",
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
            name: "Tell something about yourself to stand out from other candidates...",
            text: `From the moment I stumbled upon this notebook, I knew my life would change forever.`
        },
        {
            name: "School",
            text: "Suginami University of Economics"
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
            text: "904-603-2504"
        },
        {
            name: "Link to portfolio",
            text: "https://codingmster1.github.io/adv-portfolio/"
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
            description: "I would assist in common technical complaints within my university's computer science center"
        }
    ]

}

export default CV