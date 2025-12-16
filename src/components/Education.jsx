

function Education() {
  const education = [
    {
      title: 'Computer Science',
      subtitle: 'Georgia Institute of Technology',
      date: 'graduating dec. 2026'
    },
    {
      title: 'Master of Business Administration',
      subtitle: 'Purdue University Global',
      description: 'Concentrations in Marketing Management and Corporate Finance',
      date: 'in progress // 2025'
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

export default Education