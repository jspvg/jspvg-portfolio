export const translations = {
  en: {
    about: {
      title: "about me",
      header: "Hi, I am Gabrijela, nice to meet you!",
      description: [
        "Hello! I'm Gabrijela, a Software Developer based in Croatia.",
        "I am a problem solver and love building useful web applications. I know my way around with React, Nextjs, TypeScript, JavaScript, HTML, CSS, SCRUM, Git, and Bootstrap.",
        "I've worked on several projects and have a solid educational background in computing. I'm currently expanding my knowledge while working on various challenges/tasks using React/Nextjs and TypeScript.",
        "I'm passionate about all things digital, including education, development and productivity tools. When I'm not in front of a computer screen, I'm probably baking or watching Formula 1.",
        "You can find more details about my projects and education on their respective pages. Feel free to get in touch with me at gabrijelajosipovic1@gmail.com or through my GitHub. I'm always open to new opportunities and challenges.",
        "For a short overview, you can download my CV by clicking the button below.",
      ],
      cvUrl:
        "https://drive.google.com/uc?export=download&id=1pypPHVtQxvYKA_yVsVvaoNvyvGkR2GSK",
      download: "Download my CV",
    },
    projects: {
      title: "projects",
      project: [
        {
          title: "Link Sharing",
          list: [
            "Technical Stack: Vite, React, TypeScript, Zod (for form validation)",
            "Database: The application uses a Supabase database",
            "Future Improvements: The application will be made responsive for better user experience on different devices",
            "Deployment: The application is deployed on Netlify and uses a GitHub workflow for local testing",
          ],
          description:
            "This is a web application that allows users to manage and share their social media links effectively. It is built using Vite, React, TypeScript, and Supabase. The application provides features such as secure authentication, link management, profile management, form validation, and sharing options. Users can add up to 5 links to their social media accounts, preview them in a mocked mobile phone format, and share the preview by copying the URL to their clipboard. The application also includes a logout button and a preview tab in the navbar.",
          github: "https://github.com/jspvg/link-sharing-app",
          demo: "https://link-sharing-jspvg.netlify.app/",
        },
        {
          title: "Expense Tracker",
          list: [
            "Technical Stack: Vite, React, TypeScript",
            "Database: The application uses a Firebase database",
            "Future improvements: The application will have an option to register/login with email/password instead of only utilising the Google account",
            "Deployment: The application is deployed using Firebase deployment and is set up with a continuous deployment pipeline using GitHub Actions",
          ],
          description:
            "This is a web application that allows users to manage their expenses and income effectively. It is built using Vite, React, TypeScript, and Firebase. The application provides features such as secure sign in/out using Google account, real-time balance view, transaction management, transaction history, and a responsive design for various devices.",
          github: "https://github.com/jspvg/expense-tracker-react-ts",
          demo: "https://expenses-jspvg.web.app/",
        },
        {
          title: "Task Manager",
          list: [
            "Technical Stack: Angular v17.1.1, Angular Material UI v17.1.1",
            "Database: localStorage (to be replaced with Firebase)",
            "Future improvements:  I plan to connect the application to Firebase for a register/login page and to save the data there instead of localStorage. This will allow for persistent data storage and user authentication.",
            "Deployment: The application is deployed on Netlify and uses a GitHub workflow for local testing",
          ],
          description:
            "This is a Task Manager application built with Angular v17. It was a take-home assignment and represents my first independent Angular project. The application allows users to manage their tasks effectively. Users can log in/out, view their tasks, add new ones, edit existing ones, and mark them as done. Currently, the login/logout service is mocked (any e-mail/password combination works) and tasks are stored in localStorage.",
          github: "https://github.com/jspvg/task-manager-angular",
          demo: "https://task-manager-jspvg.netlify.app/",
        },
      ],
      cta: "View live demo",
    },
    education: {
      title: "education",
      uniTitleLong: "Bachelor of Computing",
      uniTitleShort: "[univ. bacc. ing. comp.]",
      uniDescription: [
        "Worked on multiple projects utilising different technologies mostly in Web Development",
        "Tutored and mentored students in the fields of Mathematics and Programming (Data Structures, OOP, C/C++,Java)",
        "Thesis: Possibilities of web application development in the Kotlin programming language",
      ],
      certs: [
        {
          title: "React & TypeScript - The Practical Guide",
          issued: "nov 2023",
          organization: "academind",
        },
        {
          title: "NextJS 13 [NextAuth]",
          issued: "oct 2023",
          organization: "udemy",
        },
        {
          title: "Devademy: Space Edition [React]",
          issued: "aug 2023",
          organization: "notch",
        },
        {
          title: "SQL Essential Training",
          issued: "nov 2022",
          organization: "linkedin",
        },
        {
          title: "Scrum: The Basics",
          issued: "nov 2022",
          organization: "linkedin",
        },
        {
          title: "Learn OOP in JavaScript",
          issued: "oct 2022",
          organization: "educative",
        },
        {
          title: "Informatics [JavaScript]",
          issued: "jun 2022",
          organization: "KCKF Mostar",
        },
        {
          title: "Python Essential Training",
          issued: "aug 2021",
          organization: "linkedin",
        },
        {
          title: "English Access Program",
          issued: "dec 2016",
          organization: "U.S. Embassy B&H",
        },
      ],
    },
    toggle: {
      menu: "menu",
      close: "close",
    },
  },
  hr: {
    about: {
      title: "o meni",
      header: "Bok, ja sam Gabrijela, drago mi je!",
      description: [
        "Hej! Ja sam Gabrijela, Software Developer iz Hrvatske.",
        "Posvećena sam u rješavanju problema i izradi korisnih web aplikacija. Dobro se snalazim s Reactom, Nextjsom, TypeScriptom, JavaScriptom, HTML-om, CSS-om, SCRUM-om, Gitom i Bootstrapom.",
        "Radila sam na nekoliko projekata i imam čvrstu obrazovnu pozadinu u računarstvu. Trenutno proširujem svoje znanje radeći na različitim izazovima/zadacima koristeći React/Nextjs i TypeScript.",
        "Volim i posvećena sam svemu što je digitalno, uključujući obrazovanje, razvoj i alate za produktivnost. Kada nisam ispred računalnog ekrana, vjerojatno pečem kolače ili gledam Formulu 1.",
        "Možeš pronaći više detalja o mojim projektima i obrazovanju na njihovim odgovarajućim stranicama. Slobodno mi se javi na gabrijelajosipovic1@gmail.com ili putem mog GitHuba. Uvijek sam otvorena za nove prilike i izazove.",
        "Za kratki pregled, možete preuzeti moj CV klikom na gumb ispod.",
      ],
      cvUrl:
        "https://drive.google.com/uc?export=download&id=1SN6ON3vJ67jmRGZMN24sLfYrhuChwFCe",
      download: "Preuzmi moj CV",
    },
    projects: {
      title: "projekti",
      project: [
        {
          title: "Link Sharing",
          list: [
            "Tehnološki Stack: Vite, React, TypeScript, Zod (za validaciju formi)",
            "Baza podataka: Aplikacija koristi Supabase bazu podataka",
            "Planirana poboljšanja: Aplikacija će biti prilagođena za bolje korisničko iskustvo na različitim uređajima",
            "Implementacija: Aplikacija je implementirana na Netlify-u i koristi GitHub workflow za lokalno testiranje",
          ],
          description:
            "Ovo je web aplikacija koja omogućuje korisnicima da učinkovito upravljaju i dijele svoje poveznice na društvenim mrežama. Izgrađena je koristeći Vite, React, TypeScript i Supabase. Aplikacija pruža značajke poput sigurne autentifikacije, upravljanja poveznicama, upravljanja profilima, validacije formi i opcija dijeljenja.",
          github: "https://github.com/jspvg/link-sharing-app",
          demo: "https://link-sharing-jspvg.netlify.app/",
        },
        {
          title: "Expense Tracker",
          list: [
            "Tehnološki Stack: Vite, React, TypeScript",
            "Baza podataka: Aplikacija koristi Firebase bazu podataka",
            "Planirana poboljšanja: Aplikacija će imati opciju registracije/prijave putem e-maila/lozinke umjesto samo korištenja Google računa",
            "Implementacija: Aplikacija je implementirana koristeći Firebase implementaciju i postavljena je s kontinuiranim pipeline-om za implementaciju koristeći GitHub Actions",
          ],
          description:
            "Ovo je web aplikacija koja omogućuje korisnicima da učinkovito upravljaju svojim troškovima i prihodima. Izgrađena je koristeći Vite, React, TypeScript i Firebase. Aplikacija pruža značajke poput sigurne prijave/odjave koristeći Google račun, pregleda trenutnog stanja u stvarnom vremenu, upravljanja transakcijama, povijesti transakcija i responzivnog dizajna za različite uređaje.",
          github: "https://github.com/jspvg/expense-tracker-react-ts",
          demo: "https://expenses-jspvg.web.app/",
        },
        {
          title: "Task Manager",
          list: [
            "Tehnološki Stack: Angular v17.1.1, Angular Material UI v17.1.1",
            "Baza podataka: localStorage (bit će zamijenjen Firebase-om)",
            "Planirana poboljšanja: Planiram povezati aplikaciju s Firebase-om za stranicu za registraciju/prijavu i spremiti podatke tamo umjesto u localStorage. To će omogućiti trajno spremanje podataka i autentifikaciju korisnika.",
            "Implementacija: Aplikacija je implementirana na Netlify-u i koristi GitHub workflow za lokalno testiranje",
          ],
          description:
            "Ovo je aplikacija za upravljanje zadacima izgrađena s Angular v17. Bila je take-home assignment i predstavlja moj prvi neovisni Angular projekt. Aplikacija omogućuje korisnicima da učinkovito upravljaju svojim zadacima. Korisnici se mogu prijaviti/odjaviti, pregledavati svoje zadatke, dodavati nove, uređivati postojeće i označavati ih kao obavljene. Trenutno je usluga prijave/odjave simulirana (bilo koja kombinacija e-mail/password radi), a zadaci se pohranjuju u localStorage.",
          github: "https://github.com/jspvg/task-manager-angular",
          demo: "https://task-manager-jspvg.netlify.app/",
        },
      ],
      cta: "Pogledaj live demo",
    },
    education: {
      title: "education",
      uniTitleLong: "Prvostupnica Računarstva",
      uniTitleShort: "[univ. bacc. ing. comp.]",
      uniDescription: [
        "Radila na više projekata koristeći različite tehnologije uglavnom u web razvoju",
        "Podučavala i mentorirala studente u područjima matematike i programiranja (strukture podataka, OOP, C/C++, Java)",
        "Završni rad: Mogućnosti razvoja web aplikacija u programskom jeziku Kotlin",
      ],
      certs: [
        {
          title: "React & TypeScript - The Practical Guide",
          issued: "stu 2023",
          organization: "academind",
        },
        {
          title: "NextJS 13 [NextAuth]",
          issued: "lis 2023",
          organization: "udemy",
        },
        {
          title: "Devademy: Space Edition [React]",
          issued: "kol 2023",
          organization: "notch",
        },
        {
          title: "SQL Essential Training",
          issued: "stu 2022",
          organization: "linkedin",
        },
        {
          title: "Scrum: The Basics",
          issued: "stu 2022",
          organization: "linkedin",
        },
        {
          title: "Learn OOP in JavaScript",
          issued: "lis 2022",
          organization: "educative",
        },
        {
          title: "Informatika [JavaScript]",
          issued: "lip 2022",
          organization: "KCKF Mostar",
        },
        {
          title: "Python Essential Training",
          issued: "kol 2021",
          organization: "linkedin",
        },
        {
          title: "English Access Program",
          issued: "pro 2016",
          organization: "U.S. Embassy BiH",
        },
      ],
    },
    toggle: {
      menu: "meni",
      close: "zatvori",
    },
  },
};
