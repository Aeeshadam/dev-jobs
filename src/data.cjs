const data = [
  {
    id: 1,
    company: "Scoot",
    logo: "https://images.unsplash.com/photo-1517305268957-8d20be2c9b62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHJhbmRvbSUyMFQlMjBsb2dvfGVufDB8fDB8fHwy",
    position: "Senior Software Engineer",
    timestamp: 1715446436696,
    contract: "Full Time",
    location: "United Kingdom",
    website: "https://example.com/scoot",
    apply: "https://example.com/scoot/apply",
    description:
      "Scoot is looking for a Senior Software Engineer passionate about building approachable, innovative and user-first experiences to join our small but growing Engineering team. You will be responsible for building and maintaining front end functionality across all of Scoot’s applications, fostering a growing team of software engineers, and helping drive and maintain best software patterns and practices in our codebase.",
    requirements:
      "The ideal candidate is as passionate about solving challenges through technology. They are well-versed in building proof of concepts from scratch and taking these POCs to production and scale. The right fit will have the engineering experience to build and iterate quickly and is comfortable working with product and design to set the technical strategy and roadmap.",

    role: "We are looking for a Senior Software Engineer to join as one of our first hires. As we iterate on our MVP, you will have the opportunity to drive the vision and own the build behind our digital experience. You’ll have the support of an experienced technical advisor, a Head of Product, and an external team to work with.",
  },
  {
    id: 2,
    company: "Blogr",
    logo: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "Haskell and PureScript Dev",
    timestamp: 1715446436696,
    contract: "Part Time",
    location: "United States",
    website: "https://example.com/blogr",
    apply: "https://example.com/blogr/apply",
    description:
      "Blogr is looking for a part-time developer to join our six-strong team of full-stack engineers. Our core development values are strong, static typing and correctness, rigorous automation (in both testing and infrastructure) and everyone having a say.",
    requirements:
      "We are looking to carefully add great developers which care about solving problems & which have been in a relationship with Purescript and/or Haskell for at least 3 years (Not necessarily monogamous though).",

    role: "The role is more frontend-focused where you will be tasked to build browser-based UIs for Haskell applications.",
  },
  {
    id: 3,
    company: "Vector",
    logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "Midlevel Back End Engineer",
    timestamp: 1715446436696,
    contract: "Part Time",
    location: "Russia",
    website: "https://example.com/vector",
    apply: "https://example.com/vector/apply",
    description:
      "We are looking for a Mid-level Back End Engineer to join our growing software engineering organization. The right person will help move our platform to the next level. You’ll be working as part of a skilled, collaborative team to jointly design and implement high visibility applications.",
    requirements:
      "As our ideal candidate, you have previous experience in Ruby on Rails and are eager to continue to develop professionally. You work well in an agile environment, and collaborate well with other Software Engineers, Test Automation Engineers, Product Managers, and Designers. You thrive in a fast-paced environment, and are able to adapt when needed.",

    role: "This is an IDEAL job if you already have a few years of software engineering experience under your belt, and you want to be part of a small, intensely skilled team, who feel total ownership of their work, and can’t imagine a day without learning & coding. You will play a crucial role in the Vector platform and everything you do will matter.",
  },
  {
    id: 4,
    company: "Office Lite",
    logo: "https://images.unsplash.com/photo-1614851099518-055a1000e6d5?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "Senior Application Engineer",
    timestamp: 1715446436696,
    contract: "Full Time",
    location: "Japan",
    website: "https://example.com/officelite",
    apply: "https://example.com/officelite/apply",
    description:
      "Office Lite is seeking a talented and enthusiastic Senior Application Engineer whose primary responsibility is software architecture and development for Office Lite systems. Additional responsibilities include participation in project time/task estimation, code and architecture reviews, providing support for junior developers, documentation of system architecture and a supporting role for all phases of the development life-cycle (project definition, process mapping, architecture, coding, acceptance testing, installation, turnover to support, etc.).",
    requirements:
      "As a hands-on subject matter expert, you will use expert-level engineering knowledge to provide technical support and help translate customer requirements into exciting new product features. You will be working within multi-disciplinary teams to create pervasive simulation solutions, advance your industry knowledge, and grow the business impact.​",

    role: "You'll work alongside a skilled team of Senior Engineers across five countries participating in system design, architecture, maintenance, and refactoring decisions. You'll be working on new features and integrations and be active in code reviews and coordinating engineering efforts across teams and products.",
  },
  {
    id: 5,
    company: "Pod",
    logo: "https://images.unsplash.com/photo-1663537440880-c200a8faf614?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHB8ZW58MHx8MHx8fDI%3D",
    position: "Remote DevOps Engineer",
    timestamp: 1715446436696,
    contract: "Part Time",
    location: "Japan",
    website: "https://example.com/pod",
    apply: "https://example.com/pod/apply",
    description:
      "Join our dynamic team in developing Pod’s core products and supporting infrastructure. Our software is currently written in Java, VB.Net, React Native, React JS and others. You will help lead new initiatives to build and improve the testing, staging and deployment solutions. You will interact with all development teams, development leadership and our hosting/IT staff to define requirements and goals for the Dev Ops Platform.",
    requirements:
      "We are looking for talented and motivated engineers who can hit the ground running and take our products to the next level. The engineers who are building our platform across the stack are always willing to go the extra mile to deliver the highest quality software and client experiences. Ideally, you would have:",

    role: "You will work closely with development teams to implement automation solutions using technologies like Amazon Web Services (AWS), Ansible, Jenkins, and Kubernetes to automatically build, test, integrate, and deploy complex, modern systems. You will leverage the full power of the cloud to configure highly resilient and scalable applications that support zero downtime. This position is open to a mid-level to senior professional depending on experience and background.",
  },
  {
    id: 6,
    company: "Creative",
    logo: "https://images.unsplash.com/photo-1528028018421-7787621bd55d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxyYW5kb20lMjBjJTIwbGV0dGVyfGVufDB8fDB8fHwy",
    position: "Desktop Support Manager",
    timestamp: 1715446436696,
    contract: "Part Time",
    location: "Germany",
    website: "https://example.com/creative",
    apply: "https://example.com/creative/apply",
    description:
      "Creative is seeking a Desktop Support Manager responsible for managing and leading a high-performance team in a dynamic environment. The ideal candidate should have management experience, a strong technical skillset, exceptional client service skills and enjoy mentoring a team.",
    requirements:
      "You are likely someone with a solid background in end-user support and troubleshooting, as this position involves dealing with a large, and often changing, number of day-to-day issues which arise in supporting the information technology requirements of our applications.",

    role: "This is an 80% management and 20% hands-on supervisory role where you will be responsible for the support of automation technologies and managing a team of support engineers in a 24x7 high-volume environment.",
  },
  {
    id: 7,
    company: "Pomodoro",
    logo: "https://images.unsplash.com/photo-1579623828015-bd63cc261a09?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGV0dGVyJTIwcHxlbnwwfHwwfHx8Mg%3D%3D",
    position: "iOS Engineer",
    timestamp: 1715446436696,
    contract: "Full Time",
    location: "United States",
    website: "https://example.com/pomodoro",
    apply: "https://example.com/pomodoro/apply",
    description:
      "We are looking for thoughtful, well-rounded iOS engineer to join our team. We’re looking for someone to help build out the foundation of the app and infrastructure. If you are interested in taking part in building an application that millions of people use every day to increase their productivity, this is the perfect opportunity. You will play an important part in our mobile engineering practice, implementing new features, improving performance, and building beautiful user interfaces.",
    requirements:
      "You are an experienced mobile engineer looking to make Pomodoro one of the best mobile experiences out there. You are someone who excels at customer-centric product development and has a passion for working on application architecture and design, and making smooth, delightful experiences. You care deeply about quality, are energized by partnership and collaboration, and you strive to enable others around you to excel.",

    role: "You will be responsible for building infrastructure and abstractions to help us double our engineering velocity.  You will work at all layers of the stack and closely with partners across engineering, data science, research, product, and design. You will help our codebase stay ahead of the curve of the constantly evolving development ecosystem.",
  },
  {
    id: 8,
    company: "Maker",
    logo: "https://images.unsplash.com/photo-1535913590195-6b39514ba0c5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHJhbmRvbSUyMEIlMjBsZXR0ZXJ8ZW58MHx8MHx8fDI%3D",
    position: "Senior EJB Developer",
    timestamp: 1715446436696,
    contract: "Full Time",
    location: "United Kingdom",
    website: "https://example.com/maker",
    apply: "https://example.com/maker/apply",
    description:
      "We are seeking an experienced EJB Developer who will join our fast-growing engineering team, working on mission-critical applications. Searching for a Senior Java Developer who thrives on working with enterprises in multiple industries with unique business challenges requiring sophisticated solution design.",
    requirements:
      "The candidate must have work experience in all aspects of designing and constructing J2EE/EJB systems and developing system requirements and design specifications, and J2EE/EJB Coding for new and existing applications.",

    role: "Job responsibilities will include developing scalable Java applications while providing expertise in the full software development lifecycle, from concept and design to testing.",
  },
  {
    id: 9,
    company: "Coffeeroasters",
    logo: "https://images.unsplash.com/photo-1523837084841-974e58314272?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxyYW5kb20lMjBjJTIwbGV0dGVyfGVufDB8fDB8fHwy",
    position: "Senior Frontend Developer",
    timestamp: 1715446436696,
    contract: "Part Time",
    location: "Singapore",
    website: "https://example.com/coffeeroasters",
    apply: "https://example.com/coffeeroasters/apply",
    description:
      "We’re looking for an experienced Frontend Developer with an eye for Product Design along with a honed set of coding skills and who shares our values around technology. Most importantly, we’d like someone who is collaborative and can work closely with the rest of our team shaping product.",
    requirements:
      "You will be responsible for executing high quality solutions for customers and contributing to the day-to-day technical excellence of a delivery team. You should have a deep understanding of Modern JavaScript, HTML and CSS, the software development life cycle, and possess the ability to implement and execute standard software architecture patterns.",

    role: "Beyond working closely with our team to build an exciting app, you’ll be leading Frontend development of our React/Next.js product. You’ll be coming up with UI/UX for the app and making architectural decisions for the frontend.",
  },
  {
    id: 10,
    company: "Mastercraft",
    logo: "https://images.unsplash.com/photo-1668643215329-66f88d703734?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEzfHxyYW5kb20lMjBtJTIwbGV0dGVyfGVufDB8fDB8fHwy",
    position: "App & Website Designer",
    timestamp: 1715446436696,
    contract: "Freelance",
    location: "United States",
    website: "https://example.com/mastercraft",
    apply: "https://example.com/mastercraft/apply",
    description:
      "Mastercraft is looking for a UX/UI Designer to turn our software into easy-to-use products for our clients. Responsibilities include gathering user requirements, designing graphic elements and building software component",
    requirements:
      "To be successful in this role, you should have experience with design software and wireframe tools preferably Figma. You should also have a portfolio of professional design projects that includes work with web/mobile applications.",

    role: "You’ll create both functional and appealing features that address our clients’ needs and help us grow our customer base. We expect you to have experience with market/user research and stay current with most recent trends, tools, workflows.",
  },
  {
    id: 11,
    company: "Crowdfund",
    logo: "https://images.unsplash.com/photo-1597220353445-c1aecf25f0c3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxyYW5kb20lMjBjJTIwbGV0dGVyfGVufDB8fDB8fHwy",
    position: "Fullstack Developer",
    timestamp: 1715446436696,
    contract: "Part Time",
    location: "New Zealand",
    website: "https://example.com/crowdfund",
    apply: "https://example.com/crowdfund/apply",
    description:
      "Crowdfund is currently expanding and working on revolutionizing the world of raising funds for any project – creative, entrepreneurial or cause-related. Come and join us in this growth! We are looking for an exceptionally talented Fullstack Developer who will become an integral part of the company’s exciting new chapter.",
    requirements:
      "We'd love to hear from you if you take ownership of your work and continuously want to improve the products you've built. We're looking for developers who have an uncanny abilithy to work very well cross-functionality in a flat startup.",

    role: "At Crowdfund, you will have the opportunity to literally change the world and people’s lives by developing new features for our consumer platform to make it even more robust. You’ll work with exceptional developers and there are lots of interesting technical challenges to tackle, including projects dealing with heavy transaction volume, scalability and Big Data.",
  },
  {
    id: 12,
    company: "Typemaster",
    logo: "https://images.unsplash.com/photo-1697036572846-0818f12a62ea?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHQlMjBsZXR0ZXIlMjB0fGVufDB8fDB8fHwy",
    position: "Technical Lead Engineer",
    timestamp: 1715446436696,
    contract: "Part Time",
    location: "United Kingdom",
    website: "https://example.com/typemaster",
    apply: "https://example.com/typemaster/apply",
    description:
      "We are looking for a talented tech lead to join a team that creates large-scale, highly-performant web applications. This team creates highly visible and responsive user interfaces used by millions of people.",
    requirements:
      "Our work is not just about the code: we seek a tech lead who cares deeply about user experience and how their work impacts users. An ideal candidate has extensive experience as a full-stack software engineer, including experience with both Django and React/Redux, our stack. This role is perfect for a seasoned full-stack developer who is looking to grow both as an engineer and technical product owner. We want someone who takes the initiative to learn, enjoys thoughtful code review, and has a history collaborating with other software engineers to develop best patterns and practices.",

    role: "Here's the role: sling code, architect new systems, mentor junior engineers, and manage product as a tech lead on Typemaster’s growing dev team. You will work directly with Typemaster’s two technical co-founders and other engineers in a culture that includes clean code, extensive testing, rapid iteration, and the values you bring to the table. You will come to own one of our product lines, and will have the ability to contribute to multiple projects.",
  },
  {
    id: 13,
    company: "Crowdfund",
    logo: "https://images.unsplash.com/photo-1597220353445-c1aecf25f0c3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxyYW5kb20lMjBjJTIwbGV0dGVyfGVufDB8fDB8fHwy",
    position: "Front-end Developer",
    timestamp: 1715446436696,
    contract: "Full Time",
    location: "New Zealand",
    website: "https://example.com/crowdfund",
    apply: "https://example.com/crowdfund/apply",
    description:
      "We’re hiring a Front-end Developer to help create the front-end experience for Crowdfund’s management interface. As our ideal candidate, you’re an adept user of the front-end stack (React, Yarn, webpack, Babel, SCSS, JSX, GraphQL) and an avid learner of new frameworks. You enjoy building excellent user experiences as well as reusable components that other developers can use to solve similar problems. You love open-source and being part of a thriving developer community and understand that strong businesses enable great enduring communities.",
    requirements:
      "As a mid-level developer, we expect you to have a complete understanding of JavaScript, CSS, and HTML, and proven experience building and deploying single-page applications at scale. Experience with modern JavaScript application frameworks is a given, but you also have the ability to think outside the frameworks.",

    role: "We want people who are passionate about building apps that you and your peers will love. We are looking for an experienced Front-end Developer who shares our passion for making complex applications appear simple for our customers. We’ll give you the freedom to do what you do best, so you should feel comfortable owning your work from start to finish, as well as bringing fresh ideas to the table that can make our products, development experience, and team better. You’ll have the opportunity to work closely with designers, product managers, and other engineers across the stack to make ideas a reality.",
  },
  {
    id: 14,
    company: "Coffeeroasters",
    logo: "https://images.unsplash.com/photo-1523837084841-974e58314272?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxyYW5kb20lMjBjJTIwbGV0dGVyfGVufDB8fDB8fHwy",
    position: "Junior Full-Stack Developer",
    timestamp: 1715446436696,
    contract: "Full Time",
    location: "Singapore",
    website: "https://example.com/coffeeroasters",
    apply: "https://example.com/coffeeroasters/apply",
    description:
      "We’re looking for a Junior Full-Stack Developer to join our Product and Engineering team. This is an exciting opportunity to work on building our core web application.",
    requirements:
      "This is an entry level full stack developer position that will assist in developing the next generation apps and APIs. You will be a contributor to agile teams by providing services that ensure Coffeeroasters is aligning technology efforts with business information needs. The intent is to develop a junior full stack developer to become a well-rounded API developer ready to take on any challenging opportunity.",

    role: "We're looking for a dynamic individual who is no stranger to building well-designed, performant and effective front-end web applications that support complex business rules/flows. You will start by learning from the experiences of our current team and our current offerings and become intimately familiar with our codebase. You will leverage your experience to establish best practices for web development and drive the team and the codebase to a higher level.",
  },
  {
    id: 15,
    company: "Blogr",
    logo: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "Midweight Front-end Developer",
    timestamp: 1715446436696,
    contract: "Full Time",
    location: "United States",
    website: "https://example.com/blogr",
    apply: "https://example.com/blogr/apply",
    description:
      "We’re looking for a Frontend Developer who values user experience, performance and accessibility. Through our enduring interest in how people use our products, Blogr embraces a model of software development that is iterative and gradual. Like high-performance engines, our products are built through a process of continuous refinement (usually on two week release cycles). We’re looking for someone who is comfortable embodying this approach.",
    requirements:
      "You will be responsible for writing and debugging your code while writing your own unit tests. We are looking for self-motivated developers who are interested in learning and can quickly pick up new technologies. We’re a relatively small team in a stable yet fast growing company and would love for you to join us.",

    role: "In this role, you are part of our Product team comprised of Frontend & Backend Developers, UX & UI Specialists and Product Owners. You'll work on mission critical projects from the first day on, support other engineers, share your knowledge with your colleagues, and contribute to agile projects.",
  },
];

module.exports = data;
