export var data_projects = [
    { 
        date: 2024, 
        type: "Undergraduate Thesis",
        projects: [
            {
                name : "Study of Explainable Artificial Intelligence (XAI) Using Model Agnostic Method SHAP for Regression",
                patform:"globe",
                description : "This is my thesis project. The project is about the study of Explainable Artificial Intelligence using Model Agnostic Method SHAP for Regression. The final aim of the project is to understand how SHAP works as XAI tool and implement the SHAP into a dashboard visualization with multiple models. The project was done primarily using python, jupyter, streamlit, and various python libraries such as numpy, pandas, scikit-learn, etc.",
                images : ["ta1.png","ta2.png","ta3.png","ta4.png","ta5.png","ta6.png"],
                tags: ["Web", "Python", "Streamlit", "SHAP"],
            },
        ],
    },
    { 
        date: 2024, 
        type: "Personal Project",
        projects: [
            {
                name : "Next JS Website with Docker and GraphQL",
                patform:"globe",
                description : "A full stack NextJS website with dockerization using JS as the main language, Mongoose (MongoDB) as the NoSQL database, MUI as the front end library, and gitlab & docker for the CI. The website has basic feature of authentication using next-auth(with JWT) for email credential and github credential. The web also has CRUD functionality of REST API and GraphQL with both routes protected using middleware. The project also has testing functionality using JEST for unit / integration testing. The CD was not done because of the limitation of resources. The project was made mainly because of learning purpose.",
                images : ["next1.png","next3.png","next4.png","next5.png","next6.png"],
                tags: ["Web", "NextJS", "JS", "React", "MongoDB", "MUI", "Docker", "Jest", "CI", "REST API", "GraphQL", "Testing"],
            },
            {
                name : "Go Backend",
                patform:"globe",
                description : "Backend CRUD with Authorization Backend REST API using GoLang. Using GORM as the ORM, and JWT concept for authorization. Database used was postgres from supabase. Also added an additional feature, an automated test of integration testing of endpoints.",
                images : ["golang_backend1.png"],
                tags: ["Web", "Rest API", "GoLang", "Postgres", "Testing"],
            },
        ],
    },
    { 
        date: 2023, 
        type: "Personal Project",
        projects: [
            {
                name : "Chris Portofolio",
                patform:"globe",
                description : "The static web portofolio you're seeing right now, with responsiveness concept in mind. Made from scratch using vue3 script-setup, GSAP and Lenis as the animation library, along with bootstrap and fontawesome as the front-end toolkits.",
                images : ["porto1.png","porto2.png","porto3.png"],
                tags: ["Web", "Vue", "GSAP", "Lenis", "Bootstrap"],
            },
            {
                name : "NestJS Backend",
                patform:"globe",
                description : "Simple CRUD with Authorization Backend REST API using NestJS. Using prsima as the ORM (including seeding & migrating), and Auth Guard JWT concept to implement the authentication strategy. The backend also has simple testing feature to check the endpoint status code using NestJS testing module. The whole backend was made for learning purpose",
                images : [],
                tags: ["Web", "Rest API", "NestJS", "TS", "Prisma", "MySQL"],
            },
        ],
    },
    { 
        date: 2023, 
        type: "Internship",
        projects: [
            {
                name : "Marble and Granite Mobile App",
                patform:"mobile",
                description : "Mobile application for granite and marble company. App consist of 3 another app, separated by role. Made with flutter, and laravel as the back end using REST API concept. The app has bunch of feature and functionality such as catalogue, book, location tracking order, etc.",
                images : ["brescia_catalog.png","brescia_penawaran1.png","brescia_penawaran2.png","brescia_penawaran3.png","brescia_pengiriman.png","brescia_sales.png","brescia_tracking.png"],
                tags: ["Mobile", "Flutter", "Dart", "Laravel", "MySQL", "REST API"],
            },
        ],
    },
    { 
        date: 2022, 
        type: "5th semester",
        projects: [
            {
                name : "Cinema Booking Web App",
                patform:"globe",
                description : "Web based multi-branch app for user to book cinema ticket. Made using Laravel, PHP, and MySQL. Has feature for booking ticket, midtrans as payment, emailer, admin and managerial dashboard & reporting.",
                images : ["nobar_nowplaying.png","nobar_playing.png"],
                tags: ["Web", "Laravel", "PHP", "Midtrans", "MySQL"],
            },
            {
                name : "Job Seeking Android App",
                description : "Android application for job seeker to find & post job vacancy. Made using kotlin and laravel as backend. Has feature for search, apply, & post job vacancy, chat, add friend, and modify user profile.",
                images : ["mdp_app.png"],
                tags: ["Android", "Kotlin", "Laravel", "MySQL", "REST API"],
            },
        ],
    },
    { 
        date: 2021, 
        type: "Personal Project",
        projects: [
            {
                name : "Restaurant Ordering Mobile App",
                patform:"mobile",
                description : "Mobile android app made with flutter for learning purpose. The app has feature for browsing menu, adding to favorite, and mock  up cart system. Backend made with REST API using Laravel.",
                images : ["flutter_restaurant.png"],
                tags: ["Mobile", "Flutter", "Dart", "Laravel",],
            },
           
        ],
    },
    { 
        date: 2021, 
        type: "4th semester",
        projects: [
            {
                name : "Web Financial Management App",
                patform:"globe",
                description : "Web based app for user to manage their financial spending / invest / advice. Made using PHP, MySQL, and various library like payment gateway: midtrans, and phpemailer. The app has 2 main page : the landing page which is static and the other is dashboard page which is dynamic. The dashboard page has feature for user to add, edit, delete, and view their financial data. The app also has feature for user to get financial advice based on their financial data.",
                images : ["aplin_dashboard.jpg", "aplin_kesehatan.png", "aplin_keuangan.jpg","aplin_rasio.png"],
                tags: ["Web", "MySQL", "PHP", "Midtrans", "Tailwind"],
            },
           
        ],
    },
    { 
        date: 2021, 
        type: "3rd semester",
        projects: [
            {
                name : "Java Desktop Point of Sales",
                platform: "desktop",
                description : "A desktop application for Point of Sales using Java and MySQL. The premise were quite similar with previous project that I made using C#. The differences are the app were developed with OOP concept and using MySQL as database which need to be connected with JDBC connector etc.",
                images : ["pbo_transaction.png", "pbo_login.png", "pbo_admin.png"],
                tags: ["Desktop", "Java", "MySQL", "OOP"],
            },
            {
                name: "Desktop ERP Inventory Module",
                platform: "desktop",
                description: "A desktop application for Inventory Module using .NET, Oracle as Database, and Bunifu UI framework. It has multiple functionality such as CRUD master, and warehouse transaction request/access to another warehouse. The application also provide product tracking to track product movement within the app to function as history transfer log. The app also has standard reporting feature using Crystal Report.",  
                images: ['acs_menu.png', 'acs_login.png'],
                tags: ['Desktop','.NET', 'C#', 'SQL', 'Oracle'],
            },
        ],
    },
    {
        date: 2020, 
        type: "2nd semester",
        projects: [
            {
                name : ".NET Desktop Point of Sales",
                platform: "desktop",
                description : "A desktop application for Point of Sales using C# and SQL Server. User can login as admin or cashier where as the admin have CRUD access to users and products. The app also has reporting feature using Crystal Report which are introduced in my later semester but I implemented one before the class. Cashier can do transaction, and the app will generate receipt for the transaction (pdf).",
                images : ["pv_dashboard.png", "pv_login.png", "pv_sales.png", "pv_report.png"],
                tags: ["C#", ".NET", "SQL Server", "Desktop", "Crystal Report"],
            },
        ]
    },
];
