export const content = {
  EN: {
    hero: {
      title: "Leonardo Galgano",
      subtitle: ["MSc Student in AI & Robotics @ Sapienza University", "Fast Charge for Formula SAE Driverless", "Flutter Developer"],
      socials: "Connect with me"
    },
    about: {
      title: "About Me",
      description: "I write software for robots and autonomous systems — and build cloud platforms when needed. Currently doing my MSc in AI & Robotics at Sapienza, focused on Computer Vision and Agentic Architectures. Co-Founder & CTO at Telcedo, where I handle the full tech side of our Digital Twin platform. Six years of competitive tennis at FIT level taught me to work under pressure and see things through. Back-to-back winner of the Reply Student Tech Clash (2024 & 2025)."
    },
    experience: {
      title: "Experience",
      items: [
        {
          id: 1,
          title: "Co-Founder & CTO",
          company: "Telcedo",
          period: "May 2025 - Present",
          description: "I handle the full technical side — designed the architecture, built the platform from scratch (Vue.js + Node.js), and own the cloud deployment. Also built the company website.",
          tags: ["Node.js", "Vue.js", "Cloud", "Architecture"],
          link: "https://telcedo.com"
        },
        {
          id: 2,
          title: "Freelance App Developer",
          company: "Freelance",
          period: "Feb 2024 - Present",
          description: "Building and shipping Flutter/Dart apps focused on performance and clean UX. One app live on the Play Store — releases managed via Google Play Console, source code on GitHub.",
          tags: ["Flutter", "Dart", "Mobile", "UI/UX"],
          link: "https://play.google.com/store/apps/dev?id=4935235036652631052"
        }
      ]
    },
    projects: {
      title: "Projects & Competitions",
      competitionsLabel: "Competitions & Awards",
      projectsLabel: "Projects",
      competitions: [
        {
          id: 1,
          title: "Reply Student Tech Clash",
          company: "Reply",
          period: "2024",
          subtitle: "1st out of 38+ teams",
          description: "Built a RAG-based platform for workplace safety — querying regulations and procedures to flag risks, guide compliance checks, and surface the right information at the right time.",
          tags: ["LLM", "Multi-Agent", "Safety AI", "Python"],
        },
        {
          id: 2,
          title: "Reply Student Tech Clash",
          company: "Reply",
          period: "2025",
          subtitle: "1st out of 33 teams",
          description: "Built \"Gregorit\", an agentic platform that turns medical consultations into structured care plans — coordinated agents, automated reasoning, end-to-end workflows.",
          tags: ["Agentic AI", "Multi-Agent", "LLM"],
        },
        {
          id: 3,
          title: "Codemotion × ENG Hackathon",
          company: "Codemotion",
          period: "2026",
          subtitle: "1st Place",
          description: "Built a dashboard for companies to monitor and cut their environmental impact — carbon footprint, emissions, and sustainability data across departments, updated in real time.",
          tags: ["Dashboard", "Sustainability", "Data Viz"],
        },
      ],
      items: [
        {
          id: 1,
          title: "Computer Vision Member",
          company: "Sapienza Fast Charge",
          period: "Sep 2024 - Present",
          description: "Developing ROS2 pipelines to detect and classify cones for autonomous vehicles. Fine-tuned YOLO models to 97.2% mAP@50, built a 30K+ image dataset from scratch. In September 2025, took the stack to competition at Formula SAE Italy (FATA) in Varano de' Melegari.",
          tags: ["ROS2", "YOLO", "Computer Vision", "Python"],
          link: "https://sapienzafastcharge.it/"
        },
        {
          id: 2,
          title: "SLAM/Sensor Fusion Member",
          company: "Sapienza Fast Charge",
          period: "Nov 2023 - Oct 2024",
          description: "Implemented C/C++ algorithms for localization and sensor fusion. Tested and validated code with Arduino and embedded components for robust performance on track.",
          tags: ["C++", "Embedded", "Sensor Fusion", "Simulink"],
          link: "https://sapienzafastcharge.it/"
        },
        {
          id: 3,
          title: "Open Source Flutter App",
          company: "LapisCalc",
          period: "2024",
          description: "My Flutter app on the Play Store, with source code on GitHub. Clean architecture, smooth cross-platform performance, version-controlled from day one.",
          tags: ["Flutter", "Open Source", "Dart"],
          link: "https://github.com/ilGalghi/LapisCalc"
        }
      ]
    },
    education: {
      title: "Education",
      items: [
        {
          id: 1,
          school: "Sapienza University of Rome",
          degree: "Master degree, Artificial Intelligence and Robotics",
          period: "Dec 2025 – Present",
          description: "Specializing in the design of advanced robotic systems and intelligent information processing. The curriculum covers the intersection of Computer Science and Automation, with a focus on Machine Learning, Computer Vision, autonomous navigation in unstructured environments, and practical robot construction. Taught entirely in English.",
          logo: "/sapienza-logo.png" 
        },
        {
          id: 2,
          school: "Sapienza University of Rome",
          degree: "Bachelor's degree, Computer Engineering",
          period: "Sep 2022 – Dec 2025",
          description: "Completed a Bachelor's degree in Computer Engineering at Sapienza University of Rome, with a strong focus on software development, algorithms, and hardware systems. The curriculum included advanced coursework in Algorithms and Programming, providing solid theoretical foundations that I applied practically through hands-on projects and team activities.",
          activities: "Member of the Sapienza Fast Charge Formula Team, contributing to the Driverless division. We design and develop a self-driving electric vehicle to compete in the Formula Student Germany (FSG) competition, applying theory to real-world autonomous systems."
        }
      ]
    },
    skills: {
      title: "Skills",
      categories: [
        { name: "Languages", items: ["Python", "C", "C++", "Java", "Dart", "TypeScript"] },
        { name: "AI/Robotics", items: ["Computer Vision (OpenCV, YOLO)", "ROS2", "TensorFlow", "SLAM", "Embedded"] },
        { name: "Dev", items: ["Node.js", "React", "Vue.js", "Flutter", "TailwindCSS", "Docker", "Cloud"] },
        { name: "Soft Skills", items: ["Leadership", "Discipline", "Problem Solving", "Teamwork", "Public Speaking"] }
      ]
    },
    contact: {
      title: "Get In Touch",
      email: "Email me",
      footer: "© 2026 Leonardo Galgano. Built with React & Tailwind."
    },
    navbar: {
      about: "About",
      resume: "Resume",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    }
  },
  IT: {
    hero: {
      title: "Leonardo Galgano",
      subtitle: ["Studente Magistrale in AI & Robotica @ Sapienza", "Fast Charge per Formula SAE Driverless", "Sviluppatore Flutter"],
      socials: "Connettiti con me"
    },
    about: {
      title: "Chi Sono",
      description: "Sviluppo software per sistemi autonomi — pipeline di percezione, SLAM, e piattaforme cloud per il monitoraggio industriale. Studente Magistrale in AI & Robotica alla Sapienza. Co-Founder & CTO di Telcedo. Sei anni di tennis agonistico FIT: lavorare sotto pressione e portare a termine quello che si inizia è diventata un'abitudine. Vincitore per due anni di fila del Reply Student Tech Clash (2024 e 2025)."
    },
    experience: {
      title: "Esperienza Professionale",
      items: [
        {
          id: 1,
          title: "Co-Founder & CTO",
          company: "Telcedo",
          period: "Mag 2025 - Presente",
          description: "Mi occupo di tutto il lato tecnico — ho progettato l'architettura, sviluppato la piattaforma da zero (Vue.js + Node.js) e gestisco il deployment cloud. Ho costruito anche il sito aziendale.",
          tags: ["Node.js", "Vue.js", "Cloud", "Architettura"],
          link: "https://telcedo.com"
        },
        {
          id: 2,
          title: "Sviluppatore App Freelance",
          company: "Freelance",
          period: "Feb 2024 - Presente",
          description: "Sviluppo app Flutter/Dart focalizzate su performance e UX pulita. Un'app pubblicata sul Play Store, release gestite via Google Play Console, codice su GitHub.",
          tags: ["Flutter", "Dart", "Mobile", "UI/UX"],
          link: "https://play.google.com/store/apps/dev?id=4935235036652631052"
        }
      ]
    },
    projects: {
      title: "Progetti & Competizioni",
      competitionsLabel: "Competizioni & Premi",
      projectsLabel: "Progetti",
      competitions: [
        {
          id: 1,
          title: "Reply Student Tech Clash",
          company: "Reply",
          period: "2024",
          subtitle: "1° su 38+ team",
          description: "Costruito una piattaforma RAG per la sicurezza sul lavoro — recupero di normative e procedure per segnalare rischi, guidare i controlli di conformità e dare le informazioni giuste al momento giusto.",
          tags: ["LLM", "Multi-Agent", "Safety AI", "Python"],
        },
        {
          id: 2,
          title: "Reply Student Tech Clash",
          company: "Reply",
          period: "2025",
          subtitle: "1° su 33 team",
          description: "Costruito \"Gregorit\", una piattaforma agentic che trasforma consultazioni mediche in piani di cura strutturati — agenti coordinati, ragionamento automatizzato, workflow end-to-end.",
          tags: ["Agentic AI", "Multi-Agent", "LLM"],
        },
        {
          id: 3,
          title: "Codemotion × ENG Hackathon",
          company: "Codemotion",
          period: "2026",
          subtitle: "1° Posto",
          description: "Costruito una dashboard per permettere alle aziende di monitorare e ridurre il proprio impatto ambientale — carbon footprint, emissioni e dati di sostenibilità per reparto, aggiornati in tempo reale.",
          tags: ["Dashboard", "Sostenibilità", "Data Viz"],
        },
      ],
      items: [
        {
          id: 1,
          title: "Membro Computer Vision",
          company: "Sapienza Fast Charge",
          period: "Set 2024 - Presente",
          description: "Sviluppo pipeline ROS2 per rilevare e classificare coni per veicoli autonomi. Modelli YOLO ottimizzati al 97.2% mAP@50, dataset da 30k+ immagini costruito da zero. A settembre 2025, portato lo stack in gara alla Formula SAE Italy (FATA) a Varano de' Melegari.",
          tags: ["ROS2", "YOLO", "Computer Vision", "Python"],
          link: "https://sapienzafastcharge.it/"
        },
        {
          id: 2,
          title: "Membro SLAM/Sensor Fusion",
          company: "Sapienza Fast Charge",
          period: "Nov 2023 - Ott 2024",
          description: "Implementazione algoritmi C/C++ per localizzazione e sensor fusion. Codice testato e validato su Arduino e componenti embedded per performance robuste su pista.",
          tags: ["C++", "Embedded", "Sensor Fusion", "Simulink"],
          link: "https://sapienzafastcharge.it/"
        },
        {
          id: 3,
          title: "App Flutter Open Source",
          company: "LapisCalc",
          period: "2024",
          description: "La mia app Flutter sul Play Store, con codice sorgente su GitHub. Architettura pulita, performance cross-platform, tutto version-controlled dall'inizio.",
          tags: ["Flutter", "Open Source", "Dart"],
          link: "https://github.com/ilGalghi/LapisCalc"
        }
      ]
    },
    education: {
      title: "Formazione",
      items: [
        {
          id: 1,
          school: "Sapienza Università di Roma",
          degree: "Laurea Magistrale, Artificial Intelligence and Robotics",
          period: "Dic 2025 – Presente",
          description: "Specializzazione nella progettazione di sistemi robotici avanzati e nell'elaborazione intelligente delle informazioni. Il curriculum copre l'intersezione tra Informatica e Automazione, con un focus su Machine Learning, Computer Vision, navigazione autonoma in ambienti non strutturati e costruzione pratica di robot. Insegnato interamente in Inglese."
        },
        {
          id: 2,
          school: "Sapienza Università di Roma",
          degree: "Laurea Triennale, Ingegneria Informatica",
          period: "Set 2022 – Dic 2025",
          description: "Laurea Triennale in Ingegneria Informatica presso Sapienza Università di Roma, con un forte focus su sviluppo software, algoritmi e sistemi hardware. Il curriculum includeva corsi avanzati in Algoritmi e Programmazione, fornendo solide basi teoriche applicate praticamente attraverso progetti pratici e attività di team.",
          activities: "Membro del Sapienza Fast Charge Formula Team, divisione Driverless. Progettiamo e sviluppiamo un veicolo elettrico a guida autonoma per competere nella Formula Student Germany (FSG), applicando la teoria a sistemi autonomi reali."
        }
      ]
    },
    skills: {
      title: "Competenze",
      categories: [
        { name: "Linguaggi", items: ["Python", "C", "C++", "Java", "Dart", "TypeScript"] },
        { name: "AI/Robotica", items: ["Computer Vision (OpenCV, YOLO)", "ROS2", "TensorFlow", "SLAM", "Embedded"] },
        { name: "Sviluppo", items: ["Node.js", "React", "Vue.js", "Flutter", "TailwindCSS", "Docker", "Cloud"] },
        { name: "Soft Skills", items: ["Leadership", "Disciplina", "Problem Solving", "Teamwork", "Public Speaking"] }
      ]
    },
    contact: {
      title: "Contattami",
      email: "Inviami una email",
      footer: "© 2026 Leonardo Galgano. Creato con React & Tailwind."
    },
    navbar: {
      about: "Chi Sono",
      resume: "Curriculum",
      projects: "Progetti",
      skills: "Competenze",
      contact: "Contattami"
    }
  }
};
