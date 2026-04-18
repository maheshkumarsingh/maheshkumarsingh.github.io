import { Mail, Linkedin, Globe, MapPin, ArrowRight, Award, ShieldCheck, Cpu, Database, Layout, Cloud, Code, Zap, Users } from "lucide-react";

export const RESUME_DATA = {
  name: "Mahesh Kumar Singh",
  title: "Senior Full Stack .NET Developer",
  role: "SDE2 @ The Toro Company",
  location: "Pune, India",
  contact: {
    email: "sm.singhmahesh@gmail.com",
    phone: "+91-9525958755",
    linkedin: "https://www.linkedin.com/in/mahesh-kumar-singh-3362921a6",
    github: "https://github.com",
    personal: "https://meet-your-match.azurewebsites.net/",
    address: "Pune, Maharashtra, India",
    image: "/profile.jpg"
  },
  summary: [
    "Senior Full Stack Developer with 4+ years of enterprise experience, currently at The Toro Company building IoT solutions for smart irrigation systems.",
    "Expert in .NET 8, Angular 18, and microservices architecture, specializing in scalable cloud-native solutions for IoT devices.",
    "Developing features for the OASIS irrigation platform, enabling seamless operation and management of smart irrigation devices.",
    "Implemented Microsoft Dynamics 365 integrations, reducing data silos by 40% and accelerating customer engagement by 30%.",
    "Optimized system performance: cut reporting latency by 75% and database response times by 60%+ through KQL/SQL optimization.",
    "Azure 3x Certified (AZ-900, AZ-204, AI-102) | Founder & Lead of AzurePath Telegram Community (300+ members).",
    "Passionate about IoT, smart agriculture, and solving real-world problems through Domain-Driven Design and modern design patterns.",
    "Always eager to collaborate with engineering leaders on innovative .NET, Azure, and IoT solutions."
  ],
  skills: [
    { name: ".NET 8", icon: Code },
    { name: "Angular 18", icon: Layout },
    { name: "IoT Devices", icon: Cpu },
    { name: "Azure Cloud", icon: Cloud },
    { name: "SQL Server", icon: Database },
    { name: "Entity Framework", icon: Database },
    { name: "Microservices", icon: Zap },
    { name: "Azure DevOps", icon: Cloud },
    { name: "Docker", icon: Code },
    { name: "Power BI", icon: Globe },
    { name: "Dynamics 365", icon: Users },
    { name: "Smart Irrigation", icon: Cpu }
  ],
  certifications: [
    "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
    "Microsoft Certified: Azure Developer Associate (AZ-204)",
    "Microsoft Certified: Azure Fundamentals (AZ-900)"
  ],
  awards: [
    "Runner-up: Infosys Makeathon - AI-powered Resume Parser",
    "Mentored 10+ developers and led technical PR reviews"
  ],
  experience: [
    {
      company: "The Toro Company",
      role: "Software Development Engineer 2",
      period: "Present",
      location: "Pune, India",
      highlights: [
        "Developing IoT solutions for smart irrigation systems using .NET 8 and Angular 18 in the OASIS platform.",
        "Architecting and maintaining microservices for real-time device management and irrigation control.",
        "Implementing features to operate irrigation devices with ease, enabling seamless user experience for smart agriculture.",
        "Leveraging Azure Service Bus and Event Grid to handle high-throughput telemetry data from IoT irrigation controllers.",
        "Building cloud-native solutions with focus on scalability and clean architecture for IoT device management.",
        "Collaborating on end-to-end feature delivery from design to deployment for irrigation device operations."
      ]
    },
    {
      company: "Infosys Strategic Technology Group",
      role: "Software Development Engineer",
      period: "Mar'24 – Present",
      location: "Pune, India",
      highlights: [
        "Implemented integration of diverse data sources (Cosmos DB, event-driven microservices) into Dynamics 365 Customer Insights, delivering 360° customer view and reducing data silos by 40%.",
        "Automated real-time triggers in Customer Journeys using Azure Functions + Service Bus (containerized with Docker), accelerating customer engagement speed by 30% and improving retention.",
        "Engineered custom Dynamics plugins, Power Apps extensions, and Logic Apps enabling personalized campaigns, boosting conversion rates and agent productivity.",
        "Optimized KQL/SQL queries and built Power BI dashboards with Application Insights integration, reducing reporting latency from 1 min to 15 sec (75% improvement).",
        "Enhanced test coverage by 20% with xUnit/Moq and enforced SonarQube/CloudTest gates in Azure DevOps CI/CD, cutting release cycles by 40%.",
        "Mentored 10+ developers, led PR reviews and interviews, and contributed to engineering best practices through internal tooling."
      ]
    },
    {
      company: "Cognizant Technology Solutions",
      role: "Software Development Engineer",
      period: "Dec'21 – Mar'24 (2 years 4 months)",
      location: "Pune, India",
      highlights: [
        "Re-architected legacy MVC payroll system into modern .NET Core microservices architecture with Domain-Driven Design (DDD), enabling faster deployment and improved scalability.",
        "Designed 'No-Show' tracking module using Angular, EF Core, and REST APIs, enhancing HR reporting with 99% accuracy for 5K+ employees.",
        "Automated document processing workflows with Azure Functions, Blob Storage, OCR, and Cosmos DB, reducing manual effort by 60% and cutting processing time from hours to minutes.",
        "Enhanced production stability by introducing structured logging (App Insights), monitoring, Redis caching, and background job orchestration with SSIS, reducing issues by 40%.",
        "Worked on United Parcel Service (UPS) payroll applications serving enterprise-scale operations."
      ]
    }
  ],
  projects: [
    {
      name: "MeetYourMatch",
      description: "Full-stack matchmaking platform",
      tech: [".NET Core", "Angular", "SignalR", "Azure"],
      highlights: [
        "Secure real-time chat with SignalR",
        "Online presence tracking",
        "Photo upload functionality",
        "Role-based authentication",
        "Optimized API response times by 25%",
        "500+ active users"
      ]
    },
    {
      name: "SDronaCharya Fitness Zone",
      description: "Gym management web application",
      tech: ["Angular", ".NET", "SQL Server"],
      highlights: [
        "Manage 300+ members",
        "Attendance tracking",
        "Subscription handling",
        "Reduced manual data entry by 70%",
        "Automated dashboards for reporting"
      ]
    },
    {
      name: "Parking Lot Management System",
      description: "Real-time parking tracker",
      tech: ["Design Patterns", "Pub-Sub Model", "Observer Pattern"],
      highlights: [
        "500-slot parking facility simulation",
        "99% accuracy in slot availability",
        "Reduced parking search time from 5 mins to under 1 min",
        "Event-driven architecture"
      ]
    }
  ],
  languages: ["C#", "TypeScript", "Python", "C++", "PL/SQL", "KQL", "HTML"],
  frameworks: [".NET 8", "Angular 18", ".NET Core", "ASP.NET", "Entity Framework Core", "LINQ", "Web API"],
  tools: ["Git", "Docker", "Azure DevOps", "Redis", "Postman", "Power BI", "Application Insights", "SQL Server", "Cosmos DB", "Linux", "PostgreSQL"],
  specializations: ["IoT Devices", "Smart Irrigation", "Microservices", "Domain-Driven Design (DDD)", "Design Patterns", "Pub-Sub Model", "Generative AI", "Microsoft Dynamics 365", "Power Apps", "Power Automate", "SSIS/ETL"],
  education: {
    school: "Savitribai Phule Pune University (SPPU)",
    degree: "Bachelor of Engineering | Electronics & Telecommunication Engineering",
    honors: "First Class with Distinction | 9.1 CGPA",
    period: "2017 – 2021"
  }
};
