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
  const skills = [
    { label: 'Java', icon: <FaJava /> },
    { label: 'Python', icon: <SiPython /> },
    { label: 'Spring', icon: <SiSpring /> },
    { label: 'Quarkus', icon: <SiQuarkus /> },
    { label: 'FastAPI', icon: <SiFastapi /> },
    { label: 'MySQL', icon: <SiMysql /> },
    { label: 'PostgreSQL', icon: <SiPostgresql /> },
    { label: 'MongoDB', icon: <SiMongodb /> },
    { label: 'Cassandra', icon: <SiApachecassandra /> },
    { label: 'Qdrant', icon: <FaQuestion /> },
    { label: 'MongoEngine', icon: <FaQuestion /> },
    { label: 'Hibernate', icon: <SiHibernate /> },
    { label: 'Microsoft Autogen', icon: <FaQuestion /> },
    { label: 'AG2', icon: <FaQuestion /> },
    { label: 'LangChain', icon: <SiLangchain /> },
    { label: 'LangGraph', icon: <FaQuestion /> },
    { label: 'Agno', icon: <FaQuestion /> },
    { label: 'CrewAI', icon: <FaQuestion /> },
    { label: 'Langfuse', icon: <FaQuestion /> },
    { label: 'Promptflow', icon: <FaQuestion /> },
    { label: 'Microsoft Evaluation Framework', icon: <FaQuestion /> },
    { label: 'Google Evaluation Framework', icon: <FaQuestion /> },
    { label: 'LLM', icon: <FaQuestion /> },
    { label: 'RAG', icon: <FaQuestion /> },
    { label: 'Kafka', icon: <SiApachekafka /> },
    { label: 'Temporal', icon: <SiTemporal /> },
    { label: 'Avro', icon: <FaQuestion /> },
    { label: 'ProtoBuf', icon: <FaQuestion /> },
    { label: 'JUnit', icon: <SiJunit5 /> },
    { label: 'JMeter', icon: <SiApachejmeter /> },
    { label: 'Grafana', icon: <SiGrafana /> },
    { label: 'Scalyr', icon: <FaQuestion /> },
    { label: 'Oracle Flight Recorder', icon: <FaQuestion /> },
    { label: 'Docker', icon: <SiDocker /> },
    { label: 'Git', icon: <SiGit /> }
  ]

  return (
    <div className="container">
      <h1>Jasvir Singh Dhillon</h1>
      <div className="icon-grid">
        {skills.map((skill) => (
          <div className="droplet" key={skill.label}>
            {skill.icon}
            <span>{skill.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
