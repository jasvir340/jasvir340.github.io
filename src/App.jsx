import './App.css'
import SkillTimeline from './SkillTimeline.jsx'
import {
  FaJava,
  FaDatabase,
  FaRobot,
  FaDiagramProject,
  FaClipboardCheck,
  FaFileCode,
  FaChartLine,
} from 'react-icons/fa6'
import {
  SiPython,
  SiSpring,
  SiQuarkus,
  SiFastapi,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiApachecassandra,
  SiHibernate,
  SiLangchain,
  SiApachekafka,
  SiTemporal,
  SiJunit5,
  SiApachejmeter,
  SiGrafana,
  SiOracle,
  SiDocker,
  SiGit
} from 'react-icons/si'

function App() {
  const categorizedSkills = [
    {
      category: 'Programming Languages',
      skills: [
        { label: 'Java', icon: <FaJava /> },
        { label: 'Python', icon: <SiPython /> }
      ],
    },
    {
      category: 'Frameworks and Libraries',
      skills: [
        { label: 'Spring', icon: <SiSpring /> },
        { label: 'Quarkus', icon: <SiQuarkus /> },
        { label: 'FastAPI', icon: <SiFastapi /> },
        { label: 'Hibernate', icon: <SiHibernate /> },
        { label: 'MongoEngine', icon: <SiMongodb /> },
      ],
    },
    {
      category: 'Databases / Storage',
      skills: [
        { label: 'MySQL', icon: <SiMysql /> },
        { label: 'PostgreSQL', icon: <SiPostgresql /> },
        { label: 'MongoDB', icon: <SiMongodb /> },
        { label: 'Cassandra', icon: <SiApachecassandra /> },
        { label: 'Qdrant', icon: <FaDatabase /> },
      ],
    },
    {
      category: 'AI Frameworks / Agents',
      skills: [
        { label: 'Microsoft Autogen', icon: <FaRobot /> },
        { label: 'AG2', icon: <FaRobot /> },
        { label: 'LangChain', icon: <SiLangchain /> },
        { label: 'LangGraph', icon: <FaDiagramProject /> },
        { label: 'Agno', icon: <FaRobot /> },
        { label: 'CrewAI', icon: <FaRobot /> },
        { label: 'Langfuse', icon: <FaRobot /> },
        { label: 'Promptflow', icon: <FaDiagramProject /> },
      ],
    },
    {
      category: 'AI Evaluation Frameworks',
      skills: [
        { label: 'Microsoft Evaluation Framework', icon: <FaClipboardCheck /> },
        { label: 'Google Evaluation Framework', icon: <FaClipboardCheck /> },
      ],
    },
    {
      category: 'Messaging / Workflow',
      skills: [
        { label: 'Kafka', icon: <SiApachekafka /> },
        { label: 'Temporal', icon: <SiTemporal /> },
      ],
    },
    {
      category: 'Data Serialization Formats',
      skills: [
        { label: 'Avro', icon: <FaFileCode /> },
        { label: 'ProtoBuf', icon: <FaFileCode /> },
      ],
    },
    {
      category: 'Testing Tools',
      skills: [
        { label: 'JUnit', icon: <SiJunit5 /> },
        { label: 'JMeter', icon: <SiApachejmeter /> },
      ],
    },
    {
      category: 'Observability and Monitoring',
      skills: [
        { label: 'Grafana', icon: <SiGrafana /> },
        { label: 'Scalyr', icon: <FaChartLine /> },
        { label: 'Oracle Flight Recorder', icon: <SiOracle /> },
      ],
    },
    {
      category: 'DevOps and Version Control',
      skills: [
        { label: 'Docker', icon: <SiDocker /> },
        { label: 'Git', icon: <SiGit /> },
      ],
    },
  ]

  return (
    <div className="container">
      <h1>Jasvir Singh Dhillon</h1>
      <div className="contact">
        <a
          href="https://www.linkedin.com/in/jasvir-singh-dhillon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      {categorizedSkills.map((section) => (
        <div className="category-section" key={section.category}>
          <h2>{section.category}</h2>
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
      <SkillTimeline skills={categorizedSkills} />
    </div>
  )
}

export default App
