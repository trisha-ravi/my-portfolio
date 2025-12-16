

function Skills() {
  const skills = [
    { name: 'Infrastructure & SRE', level: 95 },
    { name: 'System Design', level: 92 },
    { name: 'Python / Java', level: 90 },
    { name: 'Cloud Platforms', level: 88 },
    { name: 'Kubernetes / Docker', level: 87 },
    { name: 'Leadership', level: 93 },
    { name: 'UX/UI Design', level: 85 }
  ]

  return (
    <div className="section">
      <div className="section-header">
        <h2>skills</h2>
      </div>
      <div className="section-content">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar-container">
                <div 
                  className="skill-bar" 
                  data-width={`${skill.level}%`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
