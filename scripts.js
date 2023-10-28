window.onload = render;
function render() {
    renderSkills();
    renderExperiences();
    renderEducation();
}

var skills = {
    "Programming Langauges": ["C#", "Javascript"],
    "Databases": ["Postgres", "MySql", "MS Sql Server", "MongoDB", "Redis"],
    "Cloud Platforms": ["AWS", "Azure"],
    "WebFrameworks and Technologies": ["Asp.Net Core", "Asp.Net", "Blazor", "Nodejs", "Reactjs"],
    "Frameworks and libraries": ["dotnet framework", "dotnet", "RabbitMQ"],
    "Other tools": ["Docker", "npm", "webpack", "Terraform"],
    "IDEs": ["vs code", "visual studio", "Jetbrains Rider"],
    "Async Tools": ["JIRA", "Confluence"],
    "Sync Tools": ["Teams", "slack", "zoom", "webex"],
    "Operating systems": ["Windows", "MacOS", "Ubuntu"]
};

var experience = {
    "World Wide Technologies": {
        "from": "May-2021",
        "to": null,
        "role": "Senior software engineer",
        "location": "Hyderabad, India",
        "work": [
            "Developed web applications using .NET technologies, including C# and Blazor Web Assembly.",
            "Implemented front-end components and interactive UI using Blazor's component-based architecture.",
            "Used Hot Chocolate Graphql API to build robust and efficient API endpoints for data queries andmutaion, and database integrations using Postgres and En+ty Framework.",
            "Used Quartz library and MassTransit libraries to enable job and async message funconalies.",
            "Created and executed unit tests to ensure functionality and reliability of the application."
        ]
    },
    "Factset": {
        "from": "Dec-2018",
        "to": "April-2021",
        "role": "Senior software engineer",
        "location": "Hyderabad, India",
        "work": [
            "Developed and maintained contact centre socware using dotnet, WCF services, SQL Server, and Vue.js.",
            "Integrated various communication channels (e.g., phone, chat) into the contact centre socware, ensuringseamless customer interactions.",
            "Collaborated with cross-functional teams to troubleshoot issues, and helped to setup cloud contactcentre using Nice inContact service."
        ]
    },
    "GGK Technologies": {
        "from": "April-2018",
        "to": "Nov-2018",
        "role": "Software engineer",
        "location": "Hyderabad, India",
        "work": [
            "Developed and maintained RESTful API endpoints and functionalities including authentication, and dataretrieval using Node.js and Express.js.",
            "Built user-friendly and interactive client applica+ons using Angular framework to provide a seamless user experience."
        ]
    },
    "Tata Consultancey Services": {
        "from": "Sep-2014",
        "to": "April-2018",
        "role": "Systems engineer",
        "location": "Hyderabad, India",
        "work": [
            "Developed and maintained web applica+ons using Dotnet framework, C#, and SQL Server.",
            "Collaborated with a cross-functional team to design and implement high-performance web solutions.",
            "Helped in projects to migrate from legacy technologies like VB.Net to Dotnet framework.",
            "Conducted thorough testing and debugging of applications to ensure quality and user satisfaction."
        ]
    }
}

var education = {
    "Bachelor of Technologies": {
        "branch": "Computer science and Engineering",
        "start": "2010",
        "end": "2014",
        "college": "Rajiv Gandhi University of Knowledge Technologies",
        "website": "https://rguktn.ac.in/",
        "place": "Nuzvid, Andhra Pradesh",
        "cgpa": "8.4"
    },
    "Pre-University Course": {
        "branch": "Maths, Physics, Biology and Chemistry",
        "start": "2008",
        "end": "2010",
        "college": "Rajiv Gandhi University of Knowledge Technologies",
        "place": "Nuzvid, Andhra Pradesh",
        "website": "https://rguktn.ac.in/",
        "cgpa": "7.84"
    },
    "Secondary School Certificate": {
        "branch": "RCM High School",
        "start": null,
        "end": "2008",
        "college": "Board Of Secondary Education Andhra Pradesh",
        "place": "Vegiwada, Andhra Pradesh",
        "cgpa": "84"
    }
}

const bodyDOM = document.querySelector('body');
const skillsDOM = document.querySelector(".skills");
const experienceDOM = document.querySelector(".experience");
const educationDOM = document.querySelector(".education");
const aboutDOM = document.querySelector(".about");
const contactDOM = document.querySelector(".contact");

function renderSkills() {
    for (let key in skills) {
        const skillSection = document.createElement("div");
        let heading = document.createElement("span");
        heading.appendChild(document.createTextNode(key));
        skillSection.appendChild(heading);
        let list = document.createElement("ul");
        for (let s of skills[key]) {
            let ss = document.createElement("li");
            ss.appendChild(document.createTextNode(s));
            list.appendChild(ss);
        }
        skillSection.appendChild(list);
        skillsDOM.appendChild(skillSection);
    }
}

function renderExperiences() {
    for (let key in experience) {
        const experience_card = document.createElement("div");
        experience_card.classList.add("experience_card");

        let main = document.createElement("div")
        main.classList.add("main");
        let company = document.createElement("h1");
        company.appendChild(document.createTextNode(key));
        let period = document.createElement("h4");
        let from = experience[key].from;
        let to = experience[key].to;
        if (to == null) {
            period.appendChild(document.createTextNode(`Since ${from}`));
        }
        else {
            period.appendChild(document.createTextNode(`${from} to ${to}`));
        }
        var verticalLine = document.createElement("div");
        verticalLine.classList.add("vertical_line");
        main.appendChild(company);
        main.appendChild(period);
        main.appendChild(verticalLine);

        let content = document.createElement("div");
        content.classList.add("content");
        let role = document.createElement("h2");
        role.appendChild(document.createTextNode(experience[key].role));
        content.appendChild(role);

        let list = document.createElement("ul");
        for (let s of experience[key].work) {
            let ss = document.createElement("li");
            ss.appendChild(document.createTextNode(s));
            list.appendChild(ss);
        }
        content.appendChild(list);
        experience_card.appendChild(main);
        experience_card.appendChild(content);
        experienceDOM.appendChild(experience_card);
    }
}

function renderEducation() {
    for (let key in education) {
        const educationCard = document.createElement("div");
        educationCard.classList.add("education_card");

        let title = document.createElement("h1");
        title.appendChild(document.createTextNode(key));
        educationCard.appendChild(title);

        let sub = document.createElement("span");
        sub.appendChild(document.createTextNode("in"));
        educationCard.appendChild(sub);

        let specilization = document.createElement("h2");
        specilization.appendChild(document.createTextNode(education[key].branch));
        educationCard.appendChild(specilization);

        let college = document.createElement("h4");
        college.appendChild(document.createTextNode(education[key].college));
        educationCard.appendChild(college);

        let cgpa = document.createElement("p");
        cgpa.appendChild(document.createTextNode(`with ${education[key].cgpa} ${education[key].cgpa < 10 ? 'cgpa' : 'percentage'}`));
        educationCard.appendChild(cgpa);

        let years = document.createElement("p");
        years.appendChild(document.createTextNode(
            education[key].start == null
                ? `Passed out - ${education[key].end}`
                : `From ${education[key].start} to ${education[key].end}`));
        educationCard.appendChild(years);

        let location = document.createElement("p");
        location.appendChild(document.createTextNode(education[key].place));
        educationCard.appendChild(location);

        educationDOM.appendChild(educationCard);

        let lineEl = document.createElement("div");
        lineEl.classList.add("timeline_line");
        educationDOM.appendChild(lineEl);
    }
}

function showTab(button) {
    let isTabActive = button.classList.contains('active');

    document.querySelectorAll(".btn-explore")
        .forEach(b => b.classList.remove("active"));

    closeAllDetails();

    if (isTabActive) {
        bodyDOM.classList.remove('opened');
        bodyDOM.classList.add('closed');
    }else{
        button.classList.add('active');
        bodyDOM.classList.remove('closed');
        bodyDOM.classList.add('opened');
    }

    switch (button.name) {
        case "skills":
            skillsDOM.classList.add('show');
            break;
        case "experience":
            experienceDOM.classList.add('show');
            break;
        case "education":
            educationDOM.classList.add('show');
            break;
        case "about":
            aboutDOM.classList.add('show');
            break;
        case "contact":
            contactDOM.classList.add('show');
            break;
    }
}
function closeBody() {
    bodyDOM.classList.remove('opened');
    bodyDOM.classList.add('closed');
}

function closeAllDetails() {
    skillsDOM.classList.remove('show');
    experienceDOM.classList.remove('show');
    educationDOM.classList.remove('show');
    aboutDOM.classList.remove('show');
    contactDOM.classList.remove('show');


}