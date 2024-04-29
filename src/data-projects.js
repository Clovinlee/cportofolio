export var data_projects = [
    { 
        date: 2024, 
        type: "Personal Project",
        projects: [
            {
                name : "E Commerce Catalogue Mock Up using GO (& Spring) and VUE",
                platform:"globe",
                description:"A mockup catalogue part of E-commerce website with advanced queries and filters using 2 interchangeable backend: Go Gin and Java Springboot.",
                features:[
                    "REST API",
                    "Lazy Loading & Pagination",
                    "Advanced Queries & Filters",
                    "Multiple Backend",
                ],
                frontend:["The frontend is made using Vue3 with Vuetify as the main framework. The filters and queries was achieved by using multiple options as checkbox, chips, and search bar. The application also has pagination feature with lazy loading using shimmer. The page was made with reactivity in mind."],
                backendTitle: ["JAVA BACKEND","GO BACKEND"],
                backend:["The first backend is made using Java with Spring as the main framework and JPA for the ORM. The backend was made using MVC-Repository pattern with DI (managed by spring). The backend uses criteria, and query builder to chain queries into advanced queries and filters. The backend also uses pageable with custom DTO to return similar response as the second backend.","The second backend is made using GoLang with Gin as the main framework and GORM as the ORM. The backend uses MVC-Repository pattern with DI practice. The backend uses query builder to achieve advanced search and filter, along with pagination as the response."],
                database:"The database used was Postgres from supabase for both backend.",
                github:[
                    {"Frontend Repo":"https://github.com/Clovinlee/cmarket"},
                    {"Java Repo":"https://github.com/Clovinlee/cmarket_backend_spring"},
                    {"Go Repo":"https://github.com/Clovinlee/cmarket_backend"},
                ],
                images : ["cmarket1.png","cmarket2.png","cmarket3.png","cmarket4.png","cmarket5.png","cmarket6.png"],
                tags: ["Web", "Rest API", "GoLang", "Gin", "Gorm", "Postgres", "Vue", "Vuetify"],
            },
            {
                name : "Go Backend with User Authorization",
                platform:"globe",
                description:"CRUD Backend Application as REST API using Go Gin with Authorization using JWT Concept.",
                features: [
                    "REST API",
                    "User Authentication",
                    "JWT",
                    "CRUD",
                ],
                frontend:[],
                backend:["The backend is made using Go as the main language, gin as the main framework, and GORM as the ORM of the backend. The application has full CRUD functionality with user registration, logout, authentication, and authorization using JWT concept. The application also has automated testing feature using Go test package for integration test."],
                database:"The database used was Postgres from supabase.",
                github:[
                    {"Main Repo":"https://github.com/Clovinlee/golang-playground"},
                ],
                images : ["golang_backend1.png"],
                tags: ["Web", "Rest API", "GoLang", "Gin","Gorm", "Postgres", "Testing"],
            },
            {
                name : "Next JS CRUD Wensite with Docker and REST API (& GraphQL)",
                platform:"globe",
                description:"Full stack nextJS website using interchangeable API method of REST API and GraphQL ",
                features: [
                    "REST API",
                    "GraphQL",
                    "User Authentication",
                    "JWT",
                    "OAuth",
                    "Test",
                    "Continuous Integration",
                ],
                frontend: ["The frontned is made using NextJS with MUI as the main front end library. The website has both user login and registration page. The website was made with reactivity in mind, keeping the single page application concept. The web also has two different page to change the API method of using REST or GraphQL."],
                backend: ["The backend primarily uses JS from NextJS as main framework. The backend has both method of API with REST and GraphQL separated by different endpoint. Both method handles full CRUD of the application with user authorization using JWT and OAuth. The backend also consist of integration tests using Jest test library. As a learning purpose, the application was dockerized and put into continuous integration with tests made using gitlab."],
                database: "The database used was MongoDB from MongoDB cloud",
                github:[
                    {"Main Repo":"https://github.com/Clovinlee/chris_sample_nextjs"}
                ],
                images : ["next1.png","next3.png","next4.png","next5.png","next6.png"],
                tags: ["Web", "NextJS", "React", "Docker", "Jest", "CI", "REST API", "GraphQL",],
            }
        ],
    },
    { 
        date: 2024, 
        type: "Undergraduate Thesis",
        projects: [
            {
                name : "Study of Explainable Artificial Intelligence (XAI) Using Model Agnostic Method SHAP for Regression",
                platform:"globe",
                description:"This is my thesis project. The project is about the study of Explainable Artificial Intelligence using Model Agnostic Method SHAP for Regression. The project was made using python as its primary tool.",
                frontend:["The frontend of the project is made using streamlit library. The frontend has two different page consist of model & data initialization, and SHAP visualization output as the second page."],
                backend: ["The backend consist of data preprocess, model, and  SHAP explanation model training. The project uses python as its main tool with data science library such as pandas, numpy, matplotlib, etc."],
                github:[
                    {"Main Repo":"https://github.com/Clovinlee/shap_dashboard"}
                ],
                images : ["ta1.png","ta2.png","ta3.png","ta4.png","ta5.png","ta6.png"],
                tags: ["Web", "Python", "Streamlit", "SHAP"],
            },
        ],
    },
    { 
        date: 2023, 
        type: "Personal Project",
        projects: [
            {
                name : "Chris Portofolio",
                platform:"globe",
                description:"The static web portofolio you're seeing right now, with responsiveness concept in mind. Made from scratch using vue3 script-setup, GSAP and Lenis as the animation library, along with bootstrap and fontawesome as the front-end toolkits.",
                frontend:["The frontend is amde using vue3 with script setup. The animation library used was GreenSock with Lenis as its smooth scrolling along with bootstrap and fontawesome as the front-end toolkits. The website has multiple page with different content, animation, and responsiveness in mind."],
                images : ["porto1.png","porto2.png","porto3.png"],
                tags: ["Web", "Vue", "GSAP", "Lenis", "Bootstrap"],
            },
            {
                name : "NestJS Backend",
                platform:"globe",
                description:"Backend-only CRUD micro project with Authorization Backend REST API using NestJS. Using prsima as the ORM (including seeding & migrating), and Auth Guard JWT concept to implement the authentication strategy. The backend also has simple testing feature to check the endpoint status code using NestJS testing module.",
                features: [
                    "REST API",
                    "User Authentication",
                    "JWT",
                    "CRUD",
                    "Test",
                    "Seed & Migration",
                ],
                backend:["The application was made with NestJS and Typescript as the main language. Backend has full CRUD functionality and user authentication. The application uses JWT concept for the authentication strategy. The application also has automated testing feature using Nest Test feature. The application also has seeding and migration feature using Prisma as its main ORM."],
                images : [],
                database: "The database used was Local MySQL",
                tags: ["Web", "Rest API", "NestJS", "TS", "Prisma", "MySQL"],
            },
        ],
    },
    { 
        date: 2023, 
        type: "Internship",
        projects: [
            {
                name : "Marble and Granite Mobile App with Laravel and Flutter",
                platform:"mobile",
                description : "Mobile application for granite and marble company. App consist of 3 another app, separated by role. The app was made with flutter, and laravel with PHP as the back end using REST API and JWT concept. The app is used for sales, tracking, and cataloging. The application consist of numerous CRUD process, authorization, pagination with lazy loading, database management (triggers, and pro func), validation, and image request.",
                features:[
                    "Product Catalogue with Lazy Load and Filters",
                    "Numerous Forms & Validations",
                    "Sales Item Booking",
                    "Sales Attendance",
                    "Customer Item Booking",
                    "Customer Item Tracking",
                    "Driver Item Track Update",
                    "Sales Attendance",
                ],
                frontend:["The frontend is made using flutter with dart as the main language. The app has 3 different role with different feature. The application is made with reactivity and state management in mind. The state management used was getx package. The app uses multiple library, such as shimmer for lazy loading, pull to refresh, charts, and etc."],
                backend:["Backend uses laravel as its main framework with PHP as the main language. The backend has numerous CRUD and validations with request and response handling. The backend uses JWT concept for user authentication and authorization. The backend also handle image upload from the mobile device to the server. The backend also consist of multiple database triggers and procedure functions."],
                images : ["brescia_catalog.png","brescia_penawaran1.png","brescia_penawaran2.png","brescia_penawaran3.png","brescia_pengiriman.png","brescia_sales.png","brescia_tracking.png"],
                database: "The database used was Server MySQL",
                tags: ["Mobile", "Flutter", "Dart", "Laravel", "MySQL", "REST API"],
            },
        ],
    },
    { 
        date: 2022, 
        type: "5th semester",
        projects: [
            {
                name : "MTix Mockup with Laravel",
                platform:"globe",
                description : "A mockup web application of MTix (Movie Ticketing) with multi branch using Laravel as the main framework. The app consist of user authentication, numerous CRUD, and reporting. The application also has payment feature using midtrans mockup payment. The app has three role to manage the platform: owner with access to application reporting and master user, admin with master movies & foods, and user to book tickets and foods",
                features:[
                    "Multi Branch",
                    "User Authentication",
                    "Payment Gateway with Midtrans",
                    "Various master and CRUD",
                    "Reporting",
                    "Ticket & Food Booking",
                ],
                frontend:["The frontend is made using laravel blade as the main template engine. The app has 3 different role with different feature. The application is made with reactivity in mind. The app uses multiple library, such as chartjs for reporting, and bootstrap."],
                backend:["Backend uses laravel as its main framework with PHP as the main language. The backend has numerous CRUD and validations with request and response handling. The backend is connected with midtrans as payment gateway where as the result of the payment will be connected into response endpoint of the server to update the database."],
                database: "The database used was Local MySQL",
                images : ["nobar_nowplaying.png","nobar_playing.png"],
                github: [
                    {"Main Repo":"https://github.com/Clovinlee/NoBar"}
                ],
                tags: ["Web", "Laravel", "PHP", "Midtrans", "MySQL"],
            },
            {
                name : "Linkedin Mockup Mobile App with Kotlin & Laravel",
                description : "Linkedin mockup as an Android application for job seeker to find & post job vacancy. Made using kotlin and laravel as backend.",
                features:[
                    "Job Posting & Filters",
                    "Synchronous Chat",
                    "Profile Management",
                    "Profile Connect (Friend)",
                ],
                frontend:["The frontend is made with kotlin as the main language. The app has reactivitiy state on the job search, and sidebar & bottom nav bar for navigation"],
                backend:["The backend of the application uses kotlin DAO and DTO to transform request & response. The backend of the server uses laravel and PHP as the main language. The backend consist of user authentication & authorization using JWT concept, and multiple CRUD process."],
                github: [
                    {"Mobile Repo":"https://github.com/Clovinlee/GaweKerjo"},
                    {"Backend Repo":"https://github.com/Clovinlee/GaweKerjo_API"}
                ],
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
                platform:"mobile",
                description : "Mobile android app made with flutter and laravel for learning purpose. The app consist of 4 main page. User can also \"simulate\" of ordering food using cart-like system.",
                features:[
                    "Featured Menu",
                    "Browsing Menu",
                    "Cart Ordering",
                ],
                frontend:["The frontend was made purely with flutter without any other library. As one of the main UI aspect was the food menu, which was made to look like it is \"popping\" out of the menu, and this was achieved using stack."],
                backend:["The backend was made using laravel with PHP. The backend handle only user cart system."],
                github:[
                    {"Main Repo":"https://github.com/Clovinlee/crestaurant_flutter"}
                ],
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
                name : "Web Financial Management App with Native PHP",
                platform:"globe",
                description : "Web based app for user to manage their financial spending / invest / advice using PHP, MySQL, and various library like payment gateway: midtrans, and phpemailer. The app has 2 main page : the landing page which is static and the other is dashboard page which is dynamic. The dashboard page has feature for user to add, edit, delete, and view their financial data. The app also has feature for user to get financial advice based on their financial data.",
                features:[
                    "User financial CRUD with categories spending",
                    "Payment gateway (membership)",
                    "Financial Dashboard",
                    "Money spend limitation & reminder",
                    "User Authentication with PHPEmailer",
                    "Financial Analysis through %ratio",
                ],
                frontend:["The frontend of the application uses purely HTML, and CSS with tailwind as its toolkit. The app consist of two main page, the landing page and application page. The application page was a single page app built on pure HTML using ajax to fetch the request asynchronously. The app also has sidebar to navigate around the application page getting the page to reload."],
                backend:[
                    "The backend was made using purely native PHP with MVC pattern. The backend has multiple CRUD process, and user authentication using PHPEmailer confirmation. The backend also has payment gateway integrated using midtrans.",
                ],
                github:[
                    {"Main Repo":"https://github.com/Clovinlee/CalonSultan"}
                ],
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
                description : "A desktop application for Point of Sales using Java and MySQL. The premise were quite similar with previous project that I made using C#. The differences are the app were developed with OOP concept and using MySQL as database which need to be connected with JDBC connector etc. The app consist of two roles: admin and cashier. Admin can do CRUD process, and cashier can do transaction. The app has simple repoorting converted into PDF",
                features:[
                    "User Authentication",
                    "CRUD Master",
                    "Transaction",
                    "Reporting",
                ],
                frontend: ["Frontend of the application was made purely using java form toolkit which has native windows display. However the app was tweaked into having advanced display such as sidebar, and dynamic login screen. The frontend of application consist of multiple CRUD for admin, and cashier."],
                backend: ["The backend of the application was made using Java as the main language. The backend has multiple CRUD process, and user authentication. The backend also has reporting feature to PDF."],
                github:[
                    {"Main Repo":"https://github.com/Clovinlee/PBO_Proyek"}
                ],
                images : ["pbo_transaction.png", "pbo_login.png", "pbo_admin.png"],
                tags: ["Desktop", "Java", "MySQL", "OOP"],
            },
            {
                name: "Desktop ERP Inventory Module",
                platform: "desktop",
                description: "A desktop application for Inventory Module using .NET, Oracle as Database, and Bunifu UI framework. It has multiple functionality such as CRUD master, and warehouse transaction request/access to another warehouse. The application also provide product tracking to track product movement within the app to function as history transfer log. The app also has standard reporting feature using Crystal Report.",  
                frontend:["The frontend was made purely using C# .NET form toolkit. The application also has extendable sidebar which was made customly for page navigation inside of the form."],
                backend:["The backend was made using windows SQL server with C# and SQL."],
                github:[
                    {"Main Repo":"https://github.com/Clovinlee/ACS_ProjectV2"}
                ],
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
                frontend:["The frontend was made purely using C# .NET form toolkit. The application also uses static sidebar which was made customly for page navigation inside of the form. The app also has reporting system using C# crystal report."],
                backend:["The backend was made using windows SQL server with C# and SQL."],
                images : ["pv_dashboard.png", "pv_login.png", "pv_sales.png", "pv_report.png"],
                github:[
                    {"Main Repo":"https://github.com/Clovinlee/Compufy-PV-Project"}
                ],
                tags: ["C#", ".NET", "SQL Server", "Desktop", "Crystal Report"],
            },
        ]
    },
];
