function Skills() {
  const skills = [
    { name: 'React & TypeScript', level: 95 },
    { name: 'UX/UI Design', level: 92 },
    { name: 'Mobile Development', level: 88 },
    { name: 'Figma & Prototyping', level: 90 },
    { name: 'Java/Kotlin & Swift', level: 85 },
    { name: 'User Research', level: 87 },
    { name: 'Leadership & Mentoring', level: 93 }
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

export default Skills;
