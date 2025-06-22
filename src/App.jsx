import './App.css'
import { FaJava, FaQuestion } from 'react-icons/fa6'
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
        { label: 'MongoEngine', icon: <FaQuestion /> },
      ],
    },
    {
      category: 'Databases / Storage',
      skills: [
        { label: 'MySQL', icon: <SiMysql /> },
        { label: 'PostgreSQL', icon: <SiPostgresql /> },
        { label: 'MongoDB', icon: <SiMongodb /> },
        { label: 'Cassandra', icon: <SiApachecassandra /> },
        { label: 'Qdrant', icon: <FaQuestion /> },
      ],
    },
    {
      category: 'AI Frameworks / Agents',
      skills: [
        { label: 'Microsoft Autogen', icon: <FaQuestion /> },
        { label: 'AG2', icon: <FaQuestion /> },
        { label: 'LangChain', icon: <SiLangchain /> },
        { label: 'LangGraph', icon: <FaQuestion /> },
        { label: 'Agno', icon: <FaQuestion /> },
        { label: 'CrewAI', icon: <FaQuestion /> },
        { label: 'Langfuse', icon: <FaQuestion /> },
        { label: 'Promptflow', icon: <FaQuestion /> },
      ],
    },
    {
      category: 'AI Evaluation Frameworks',
      skills: [
        { label: 'Microsoft Evaluation Framework', icon: <FaQuestion /> },
        { label: 'Google Evaluation Framework', icon: <FaQuestion /> },
      ],
    },
    {
      category: 'AI Concepts',
      skills: [
        { label: 'LLM', icon: <FaQuestion /> },
        { label: 'RAG', icon: <FaQuestion /> },
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
        { label: 'Avro', icon: <FaQuestion /> },
        { label: 'ProtoBuf', icon: <FaQuestion /> },
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
        { label: 'Scalyr', icon: <FaQuestion /> },
        { label: 'Oracle Flight Recorder', icon: <FaQuestion /> },
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
    </div>
  )
}

export default App
