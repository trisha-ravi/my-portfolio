function Education() {
  const education = [
    {
      title: 'Bachelor of Science in Computer Science',
      subtitle: 'Georgia Institute of Technology',
      description: 'Concentration in Human-Computer Interaction',
      date: 'expected dec. 2026'
    }
  ]

  return (
    <div className="section">
      <div className="section-header">
        <h2>education</h2>
      </div>
      <div className="section-content">
        {education.map((edu, index) => (
          <div key={index} className="experience-item">
            <h3>{edu.title}</h3>
            <div className="subtitle">{edu.subtitle}</div>
            {edu.description && <p className="description">{edu.description}</p>}
            <div className="date">{edu.date}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education;