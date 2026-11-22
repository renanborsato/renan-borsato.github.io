// Personal content adapted from the supplied portfolio draft.
export const introduction = [
  "I’m Renan, an IT student at Ensign College preparing for a career in software development. I enjoy understanding how things work and building solutions that make life easier. My interest in technology began with games, MS Paint, and PowerPoint on my family’s computer. Studying industrial automation later introduced me to programming in C and the challenge of turning an idea into a working machine.",
  "Today, I am building my full stack development skills and helping other students learn math and computer science. Tutoring has taught me that understanding a technical problem is only part of the work. Explaining it clearly, listening patiently, and helping someone gain confidence matter just as much.",
  "My work is guided by service, learning through study and faith, and humility and integrity. This portfolio brings those commitments together through my projects, professional experience, and reflections. As I work toward graduation in April 2027, my goal is to develop useful software, communicate honestly, and keep learning as technology changes."
];

export const principles = [
  {
    "title": "Service",
    "subtitle": "Use my abilities to benefit others",
    "paragraphs": [
      "Service gives my education and career a purpose. Mosiah 2:17 connects serving other people with serving God, and 1 Corinthians 12:4–7 teaches that different gifts can contribute to the good of others. These teachings help me see programming, teaching, and problem solving as abilities I can develop for a useful purpose.",
      "In technology, service begins with understanding the people affected by a solution. I want to build software that addresses real needs, communicates clearly, and respects the people using it. A technically interesting feature has greater value when it helps someone complete a task or overcome a difficulty.",
      "My tutoring work provides a practical way to apply this principle. Serving a student means listening carefully and helping them build understanding instead of simply providing an answer. Professionally, I want to bring the same patience to users and coworkers. I can measure my progress by asking whether my work helps people become more capable and whether I respond respectfully when they need support."
    ]
  },
  {
    "title": "Learning by study and by faith",
    "subtitle": "Take initiative and keep growing",
    "paragraphs": [
      "Doctrine and Covenants 88:118 teaches me to seek learning through study and faith. I understand this as an invitation to combine disciplined effort with trust in the Lord. Studying documentation, practicing programming, and asking questions are responsibilities I need to accept. Faith helps me continue when progress feels slow or the next step is uncertain.",
      "Doctrine and Covenants 58:27–28 also reminds me to act willingly and use my agency. I do not need to wait until I feel completely prepared to begin a project, seek feedback, or explore a career direction. Taking a manageable next step can help me discover what I need to learn.",
      "This principle matters as AI changes software development and I continue deciding where to focus my career. I want to respond with curiosity and consistent practice. My professional goals include completing a polished software project, explaining my contribution clearly, and learning from a working developer or alumnus. In each case, I can combine preparation, action, reflection, and faith."
    ]
  },
  {
    "title": "Humility and integrity",
    "subtitle": "Be teachable and trustworthy",
    "paragraphs": [
      "Humility helps me recognize the limits of my knowledge, and integrity guides what I do with that recognition. Ether 12:27 teaches me that acknowledging weakness can open the way to growth. Proverbs 11:3 and the thirteenth Article of Faith reinforce the importance of honesty. Together, these teachings encourage me to be truthful about my abilities and willing to improve.",
      "In professional work, integrity includes giving credit to sources, accurately describing my contribution, protecting information, and communicating problems honestly. It also affects how I use AI. I want to understand and review the work I submit, follow applicable course or workplace expectations, and acknowledge assistance when required.",
      "Humility matters when I debug code, receive feedback, or help another student. I can admit that I do not know an answer and then work carefully to find it. Colossians 3:23 reminds me to approach work sincerely, including tasks that receive little attention. My goal is to become someone others can trust with both technical responsibilities and honest communication."
    ]
  }
];

export const projects = [
  {
    "id": "movielist",
    "kind": "Web application · Live",
    "title": "MovieList",
    "context": "Movie discovery and personal movie lists",
    "role": "Website development and deployment",
    "tools": "React, Vite, TMDB API, Appwrite, browser storage, and Vercel",
    "links": [
      { "label": "Visit MovieList", "url": "https://movielist-renan.vercel.app/" },
      { "label": "View source on GitHub", "url": "https://github.com/renanborsato/movielist" }
    ],
    "paragraphs": [
      "I built MovieList to help people discover movies and organize personal movie lists. Users can search movies, view details and posters, create or delete lists, add or remove movies, and rate them from zero to five stars. The interface supports English, Spanish, and Portuguese, with light and dark themes and color choices.",
      "The current version migrates the original React and Quarkus project to a React and Vite application with Appwrite accounts and data services, deployed on Vercel. A key challenge is moving guest lists from browser storage into an account without losing data: each local list is removed only after its cloud write succeeds, and failed imports can be retried. Movie requests go through a restricted server-side TMDB proxy. The repository includes tests for guest persistence, import failures and retries, and proxy boundaries.",
      "This project connects service with practical choices about privacy and reliability. People can start as guests, while account lists are private to their owner. Protecting lists during account import reflects respect for the time users invest in the application. Integrity also means explaining limitations clearly: clearing browser data removes guest lists, and the community, profile, and settings pages remain placeholders. Accessibility and clear data-storage explanations are areas I want to keep reviewing as I refine the application."
    ]
  },
  {
    "id": "robot",
    "kind": "Technical project · Completed",
    "title": "Self-Balancing Robot",
    "context": "Technical Diploma in Industrial Automation, 2019",
    "role": "Robot design and programming",
    "tools": "C, control algorithms, electronics, and robotics",
    "paragraphs": [
      "I designed and programmed a self-balancing robot as part of my industrial automation studies. The project required me to connect software behavior with a physical system and work through the practical difficulties of making the robot function reliably.",
      "A limited budget restricted the hardware available. I had to improve the software to compensate for hardware limitations, which required patience and practical problem solving. The result was a functional robot and a stronger understanding of how programming decisions affect real-world behavior.",
      "This experience connects with learning and humility. It showed me that an initial solution may need adjustment and that limitations can reveal what I need to understand better. The connection to my guiding principles is my present reflection on the experience. In future projects, I want to apply the same willingness to investigate problems and improve within available resources."
    ]
  },
  {
    "id": "tutoring",
    "kind": "Experience project · Ongoing",
    "title": "Math and Computer Science Tutoring",
    "context": "Ensign College, February 2026–present",
    "role": "Individual tutor",
    "tools": "Programming logic, debugging, problem solving, and technical communication",
    "paragraphs": [
      "As a math and computer science tutor, I help students work through difficult ideas and develop confidence in their own reasoning. The work requires me to understand a problem and then explain it in a way that makes sense to a particular learner.",
      "A central challenge is helping students learn without taking over the task. I adapt explanations and guide students toward understanding their next step. I have supported more than 40 students, averaged more than 20 appointments monthly, and helped contribute to an increase of more than 50% in scheduled appointments.",
      "Tutoring connects technical development with service. It reminds me that knowledge becomes more useful when I can share it patiently. It also requires humility because an explanation that seems clear to me may need to change. These lessons apply to software development through collaboration, user support, and explaining technical decisions."
    ]
  },
  {
    "id": "englishconnect",
    "kind": "Experience project · Completed",
    "title": "EnglishConnect Instruction",
    "context": "BYU-Pathway, April 2023–August 2024",
    "role": "EnglishConnect instructor for adult learners",
    "tools": "Lesson planning, communication, adapting instruction, and tracking learner progress",
    "paragraphs": [
      "I taught English to adult learners using structured lesson plans and activities. The class included people with different levels of experience, which required me to explain ideas clearly and create opportunities for everyone to participate.",
      "My primary challenge was supporting different learning needs in the same classroom. I worked to create an inclusive environment where learners could practice and gain confidence. I helped more than 10 students increase their participation and confidence.",
      "This experience strengthened skills I can bring to technology teams: listening, organizing information, and adapting communication to an audience. It also reinforced service as a professional value. Helping someone learn requires respect for their pace and goals. In software development, I want to show that same respect when working with users and colleagues."
    ]
  }
];

export const materials = [
  {
    "id": "mosiah",
    "letter": "g",
    "title": "Mosiah 2:17 — Service",
    "description": "This scripture connects service to others with service to God. It gives purpose to my tutoring and my desire to build useful software. Application: consider whose needs a project addresses and how I can help them more effectively.",
    "chapter": "Mosiah 2",
    "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/2?lang=eng",
    "verse": "17"
  },
  {
    "id": "corinthians",
    "letter": "f",
    "title": "1 Corinthians 12:4–7 — Gifts used for others",
    "description": "This passage describes different gifts that benefit others. It reminds me to value both my abilities and the different strengths of teammates. Application: contribute technical skills while listening to people with other perspectives.",
    "chapter": "1 Corinthians 12",
    "url": "https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/12?lang=eng",
    "verse": "4"
  },
  {
    "id": "dc88",
    "letter": "d",
    "title": "Doctrine and Covenants 88:118 — Study and faith",
    "description": "This verse connects learning with study and faith. It encourages preparation, practice, and spiritual trust. Application: approach difficult topics with disciplined effort and patience.",
    "chapter": "Doctrine and Covenants 88",
    "url": "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/88?lang=eng",
    "verse": "118"
  },
  {
    "id": "dc58",
    "letter": "c",
    "title": "Doctrine and Covenants 58:27–28 — Initiative and agency",
    "description": "This passage encourages willing action. It connects my spiritual commitments with taking responsibility for projects and career preparation. Application: seek feedback and begin useful work without waiting for someone to direct every step.",
    "chapter": "Doctrine and Covenants 58",
    "url": "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/58?lang=eng",
    "verse": "27"
  },
  {
    "id": "ether",
    "letter": "e",
    "title": "Ether 12:27 — Humility and growth",
    "description": "This scripture helps me view weakness as an opportunity to grow through the Lord’s help. Application: acknowledge gaps in my understanding, ask questions, and practice consistently.",
    "chapter": "Ether 12",
    "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/ether/12?lang=eng",
    "verse": "27"
  },
  {
    "id": "proverbs",
    "letter": "h",
    "title": "Proverbs 11:3 — Integrity",
    "description": "This verse presents integrity as a guide for decisions. Application: describe my work accurately, credit sources, and communicate concerns honestly.",
    "chapter": "Proverbs 11",
    "url": "https://www.churchofjesuschrist.org/study/scriptures/ot/prov/11?lang=eng",
    "verse": "3"
  },
  {
    "id": "colossians",
    "letter": "b",
    "title": "Colossians 3:23 — Sincere effort",
    "description": "This verse encourages wholehearted work. Application: write careful code, keep commitments, and give routine responsibilities appropriate attention.",
    "chapter": "Colossians 3",
    "url": "https://www.churchofjesuschrist.org/study/scriptures/nt/col/3?lang=eng",
    "verse": "23"
  },
  {
    "id": "articles",
    "letter": "a",
    "title": "Articles of Faith 1:13 — Honesty and good conduct",
    "description": "This statement reinforces my commitment to honesty and conduct that benefits others. Application: represent my qualifications truthfully and take responsibility for how I use information and technology.",
    "chapter": "Articles of Faith 1",
    "url": "https://www.churchofjesuschrist.org/study/scriptures/pgp/a-of-f/1?lang=eng",
    "verse": "13"
  }
];
