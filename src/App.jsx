import './App.css'
import {
  FaJava,
  FaRobot,
  FaDiagramProject,
  FaClipboardCheck,
  FaFileCode,
  FaChartLine,
  FaLinux,
  FaApple,
  FaWindows,
  FaMicrosoft,
  FaGoogle,
} from 'react-icons/fa6'
import {
  SiPython,
  SiScala,
  SiSpring,
  SiQuarkus,
  SiFastapi,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiApachecassandra,
  SiAerospike,
  SiHibernate,
  SiLangchain,
  SiAmazonwebservices,
  SiGooglecloud,
  SiApachekafka,
  SiTemporal,
  SiJunit5,
  SiApachejmeter,
  SiGrafana,
  SiOracle,
  SiDocker,
  SiGit,
} from 'react-icons/si'

function App() {
  const summary = `Results-driven Software Developer with 6+ years of experience in designing, developing, and optimizing scalable applications. Passionate about solving complex problems in fast-paced, dynamic environments while contributing to the continuous growth and innovation of the company and seeking an opportunity to leverage my expertise in software development, AI integration, and system optimization to drive impactful solutions.`

  const experiences = [
    {
      company: 'MakeMyTrip, Gurugram',
      role: 'Senior Software Engineer II',
      period: 'May 2022 – Present',
      bullets: [
        'Simulation and Test Framework: Developed a human-like simulator that interacts with conversational AI agents to evaluate performance across multiple dimensions such as context retention, coherence, relevance, groundedness, role adherence, and more. These simulated dialogues are processed by an integrated test framework to score and validate agent quality, enabling a fully automated and reliable release pipeline.',
        'LLM Evaluation Framework: Developed a custom evaluation framework designed to optimize LLM-based applications, seamlessly integrating with Google, Confident AI, and Microsoft’s evaluation tools.',
        'Experience Hub: Built a no-code/low-code platform for dynamic card-based UIs that eliminates the need for further code changes after setup. This reduced development time from days to hours, freed up 90% developer bandwidth, and cut infrastructure costs by 40%.',
        'TripView Page: Created an intelligent trips page for cross-selling based on user behavior, increasing bookings by 14%. Now a core feature of the MakeMyTrip app.',
        'Unified Data Logging Framework: Standardized and streamlined data collection processes across the organization, becoming the core analytics and dashboarding platform.',
        'Homepage and Drawer Components: Redesigned and optimized experiences across Android, iOS, desktop, and PWA, improving scroll engagement by 45% and onboarding 600,000+ new desktop/PWA users.',
        'Cross-Selling Logic: Shifted from generic to personalized cross-selling for hotels, flights, and more, boosting click-throughs by 32%.',
      ],
    },
    {
      company: 'Syncron, Bengaluru',
      role: 'Software Engineer',
      period: 'Nov 2021 – May 2022',
      bullets: [
        'Collaborated with the Price Team to develop and implement strategic pricing solutions.',
        'Integrated the pricing platform with ML infrastructure to improve automated pricing accuracy.',
        'Designed event-driven tasks that reduced product pricing time and improved efficiency.',
      ],
    },
    {
      company: 'High Radius, Hyderabad',
      role: 'Technical Consultant I',
      period: 'May 2019 – Nov 2021',
      bullets: [
        'Developed and deployed an advanced SaaS-based accounts receivable solution with automated ERP payment posting.',
        'Designed and implemented custom data capture agents for Fortune 100 clients such as Apple, Walmart, Citi Group, Tyson, and Nike.',
      ],
    },
  ]

  const education = [
    {
      school: 'SRM Institute of Science & Technology, Chennai',
      degree: 'Bachelor of Technology, Computer Science and Engineering',
      period: '2015 – May 2019',
      grade: '88.48/100',
    },
    {
      school: 'Kendriya Vidyalaya, Mysuru',
      degree: '12th Standard: 81.2% | 10th Standard: CGPA 10',
      period: '',
    },
  ]

  const categorizedSkills = [
    {
      category: 'Backend & Core Languages',
      skills: [
        { label: 'Java', icon: <FaJava /> },
        { label: 'Python', icon: <SiPython /> },
        { label: 'Scala', icon: <SiScala /> },
      ],
    },
    {
      category: 'Web & API Frameworks',
      skills: [
        { label: 'Spring', icon: <SiSpring /> },
        { label: 'Quarkus', icon: <SiQuarkus /> },
        { label: 'FastAPI', icon: <SiFastapi /> },
      ],
    },
    {
      category: 'Database Technologies',
      skills: [
        { label: 'MySQL', icon: <SiMysql /> },
        { label: 'PostgreSQL', icon: <SiPostgresql /> },
        { label: 'MongoDB', icon: <SiMongodb /> },
        { label: 'Cassandra', icon: <SiApachecassandra /> },
        { label: 'Aerospike', icon: <SiAerospike /> },
        { label: 'Qdrant', icon: <FaDatabase /> },
      ],
    },
    {
      category: 'Database Access & ORM',
      skills: [
        { label: 'PyMongo', icon: <SiMongodb /> },
        { label: 'MongoEngine', icon: <SiMongodb /> },
        { label: 'Hibernate', icon: <SiHibernate /> },
      ],
    },
    {
      category: 'AI & LLM Development',
      skills: [
        { label: 'Microsoft Autogen', icon: <FaRobot /> },
        { label: 'AG2', icon: <FaRobot /> },
        { label: 'LangChain', icon: <SiLangchain /> },
        { label: 'LangGraph', icon: <FaDiagramProject /> },
        { label: 'CrewAI', icon: <FaRobot /> },
        { label: 'Agno', icon: <FaRobot /> },
      ],
    },
    {
      category: 'AI Monitoring & Evaluation',
      skills: [
        { label: 'Langfuse', icon: <FaRobot /> },
        { label: 'PromptFlow', icon: <FaDiagramProject /> },
        { label: 'Microsoft Evaluation Framework', icon: <FaMicrosoft /> },
        { label: 'Google Evaluation Framework', icon: <FaGoogle /> },
        { label: 'DeepEval (Confident AI)', icon: <FaClipboardCheck /> },
      ],
    },
    {
      category: 'Cloud Platforms',
      skills: [
        { label: 'AWS', icon: <SiAmazonwebservices /> },
        { label: 'GCP', icon: <SiGooglecloud /> },
        { label: 'Azure', icon: <FaMicrosoft /> },
      ],
    },
    {
      category: 'Data Processing & Messaging',
      skills: [
        { label: 'Kafka', icon: <SiApachekafka /> },
      ],
    },
    {
      category: 'Data Formats',
      skills: [
        { label: 'Avro', icon: <FaFileCode /> },
        { label: 'ProtoBuf', icon: <FaFileCode /> },
      ],
    },
    {
      category: 'Workflow Orchestration',
      skills: [
        { label: 'Temporal', icon: <SiTemporal /> },
      ],
    },
    {
      category: 'Testing & Quality',
      skills: [
        { label: 'JUnit', icon: <SiJunit5 /> },
        { label: 'JMeter', icon: <SiApachejmeter /> },
      ],
    },
    {
      category: 'Visualization & Monitoring',
      skills: [
        { label: 'Grafana', icon: <SiGrafana /> },
        { label: 'Scalyr', icon: <FaChartLine /> },
        { label: 'Oracle Flight Recorder', icon: <SiOracle /> },
      ],
    },
    {
      category: 'Infrastructure & Version Control',
      skills: [
        { label: 'Docker', icon: <SiDocker /> },
        { label: 'Git', icon: <SiGit /> },
      ],
    },
    {
      category: 'Operating Systems',
      skills: [
        { label: 'Linux', icon: <FaLinux /> },
        { label: 'MacOS', icon: <FaApple /> },
        { label: 'Windows', icon: <FaWindows /> },
      ],
    },
  ]

  return (
    <div className="container">
      <header>
        <h1>Jasvir Singh Dhillon</h1>
        <div className="contact">
          <div>Phone: +91-7358639842</div>
          <div>Address: Gurugram, Haryana, India</div>
          <div>
            <a
              href="https://www.linkedin.com/in/jasvir-singh-dhillon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            {' | '}
            <a href="mailto:jasvirdhillon340@gmail.com">Email</a>
          </div>
        </div>
      </header>

      <section className="section summary">
        <h2>Summary</h2>
        <p>{summary}</p>
      </section>

      <section className="section experience">
        <h2>Experience</h2>
        {experiences.map((exp) => (
          <div className="job" key={exp.company}>
            <h3>
              {exp.role} – {exp.company}
            </h3>
            <p className="period">{exp.period}</p>
            <ul>
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="section education">
        <h2>Education</h2>
        {education.map((edu) => (
          <div className="edu" key={edu.school}>
            <h3>{edu.school}</h3>
            <p>
              {edu.degree} {edu.grade ? `— Grade: ${edu.grade}` : ''}
            </p>
            {edu.period && <p className="period">{edu.period}</p>}
          </div>
        ))}
      </section>

      <section className="section skills">
        <h2>Skills</h2>
        {categorizedSkills.map((section) => (
          <div className="category-section" key={section.category}>
            <h3>{section.category}</h3>
            <div className="icon-grid">
              {section.skills.map((skill) => (
                <div className="droplet" key={skill.label}>
                  {skill.icon}
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default App
