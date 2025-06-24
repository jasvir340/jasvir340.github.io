import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaStar } from 'react-icons/fa6';

function SkillTimeline({ skills }) {
  // Flatten the categorized skills into a simple array
  const items = skills.flatMap(section => section.skills.map(skill => ({ ...skill, category: section.category })));

  return (
    <div style={{ width: '100%', maxWidth: '700px', marginTop: '2rem' }}>
      <h2 style={{ textAlign: 'center', color: '#004488', marginBottom: '1rem' }}>Skill Timeline</h2>
      <VerticalTimeline animate={false} lineColor="#0066cc">
        {items.map((item, idx) => (
          <VerticalTimelineElement
            key={item.label}
            position={idx % 2 === 0 ? 'left' : 'right'}
            iconStyle={{ background: '#0066cc', color: '#fff' }}
            icon={item.icon || <FaStar />}
            contentStyle={{ boxShadow: '0 3px 10px rgba(0,0,0,0.2)' }}
          >
            <h3 className="vertical-timeline-element-title">{item.label}</h3>
            <p>{item.category}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default SkillTimeline;
