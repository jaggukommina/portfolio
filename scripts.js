window.onload = () => {
    render();
    loadActiveTab();
};
function render() {
    renderSkills();
    renderExperiences();
    renderEducation();
}

function loadActiveTab() {
    if (window.location.href.indexOf("#") > 0) {
        var tab = window.location.href.split("#").pop();
        console.log(tab);
        if (tab != '') {
            var button = document.querySelector(`button[name='${tab}']`);
            this.showTab(button);
        }
    }
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
        "website": "https://www.wwt.com/",
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
        "website": "https://www.factset.com/",
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
        "website": "https://www.ggktech.com/",
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
        "website": "https://www.tcs.com/",
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
        "cgpa": "84",
        "website": "https://bse.ap.gov.in/"
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
        experience_card.classList.add("timeline_card");

        let main = document.createElement("div")
        main.classList.add("main");
        let role = document.createElement("h2");
        role.appendChild(document.createTextNode(experience[key].role));
        let period = document.createElement("h4");
        let from = experience[key].from;
        let to = experience[key].to;
        if (to == null) {
            period.appendChild(document.createTextNode(`Since ${from}`));
        }
        else {
            period.appendChild(document.createTextNode(`${from} to ${to}`));
        }
        main.appendChild(role);
        main.appendChild(period);

        var verticalLine = document.createElement("div");
        verticalLine.classList.add("timeline");
        if (experience[key].to == undefined || experience[key].to == undefined) {
            verticalLine.classList.add("current");
        }

        let content = document.createElement("div");
        content.classList.add("content");
        let company = document.createElement("h2");
        company.appendChild(document.createTextNode(key));
        content.appendChild(company);

        let location = document.createElement("h4");
        location.appendChild(document.createTextNode(experience[key].location));
        content.appendChild(location);

        let list = document.createElement("ul");
        for (let s of experience[key].work) {
            let ss = document.createElement("li");
            ss.appendChild(document.createTextNode(s));
            list.appendChild(ss);
        }
        content.appendChild(list);

        let website = document.createElement("a");
        website.classList.add("link")
        website.setAttribute("href", experience[key].website);
        website.setAttribute("target", "_blank");
        website.appendChild(document.createTextNode("website"));
        content.appendChild(website);

        experience_card.appendChild(main);
        experience_card.appendChild(verticalLine);
        experience_card.appendChild(content);
        experienceDOM.appendChild(experience_card);
    }
}

function renderEducation() {
    for (let key in education) {
        const educationCard = document.createElement("div");
        educationCard.classList.add("timeline_card");

        let main = document.createElement("div");
        main.classList.add("main");
        let title = document.createElement("h1");
        title.appendChild(document.createTextNode(key));
        main.appendChild(title);

        let years = document.createElement("p");
        years.appendChild(document.createTextNode(
            education[key].start == null
                ? `Passed out - ${education[key].end}`
                : `${education[key].start} to ${education[key].end}`));
        main.appendChild(years);

        let timeline = document.createElement("div");
        timeline.classList.add("timeline");

        let content = document.createElement("div");
        content.classList.add("content");

        let specilization = document.createElement("h2");
        specilization.appendChild(document.createTextNode(education[key].branch));
        content.appendChild(specilization);

        let cgpa = document.createElement("p");
        cgpa.appendChild(document.createTextNode(`with ${education[key].cgpa} ${education[key].cgpa < 10 ? 'cgpa' : 'percentage'}`));
        content.appendChild(cgpa);

        let sub = document.createElement("span");
        sub.appendChild(document.createTextNode("from"));
        content.appendChild(sub);

        let college = document.createElement("h4");
        college.appendChild(document.createTextNode(education[key].college));
        content.appendChild(college);

        let location = document.createElement("p");
        location.appendChild(document.createTextNode(education[key].place));
        content.appendChild(location);

        let website = document.createElement("a");
        website.classList.add("link")
        website.setAttribute("href", education[key].website);
        website.setAttribute("target", "_blank");
        website.appendChild(document.createTextNode("website"));
        content.appendChild(website);

        educationCard.appendChild(main);
        educationCard.appendChild(timeline);
        educationCard.appendChild(content);
        educationDOM.appendChild(educationCard);
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

        window.location.href = window.location.href.replace(`#${button.name}`, '');
    } else {
        button.classList.add('active');
        bodyDOM.classList.remove('closed');
        bodyDOM.classList.add('opened');

        let location = window.location.href;
        if (location.indexOf('#') > 0) {
            let activeTab = location.split('#').pop();
            window.location.href = window.location.href.replace(activeTab, button.name);
        } else {
            window.location.href = `${window.location.href}#${button.name}`;
        }
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