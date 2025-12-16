

function Experience() {
  const experiences = [
    {
      title: 'SRE Manager',
      subtitle: 'Target: Microsoft, Google, AWS',
      description: 'Leading initiatives in site reliability, infrastructure automation, and team management. Focusing on senior leadership opportunities at top-tier tech companies.',
      date: 'current role'
    },
    {
      title: 'Associate Director',
      subtitle: 'Artificial Intelligence @ GT',
      description: 'Managing a creative team of 8 designers, overseeing design strategy and execution for AI-focused initiatives at Georgia Tech\'s premier AI organization.',
      date: 'current // ongoing'
    },
    {
      title: 'Co-Founder',
      subtitle: 'Apex Reviews // CREATE-X Program',
      description: 'Founded and developed a product review platform through Georgia Tech\'s CREATE-X accelerator program. Led product development, UX design, and business strategy.',
      date: '2023 // 2024'
    },
    {
      title: 'Software Engineering Intern',
      subtitle: 'Narb',
      description: 'Contributed to full-stack development projects, implementing features and optimizing system performance in a fast-paced startup environment.',
      date: '2023'
    }
  ]

  return (
    <div className="section">
      <div className="section-header">
        <h2>experience</h2>
      </div>
      <div className="section-content">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.title}</h3>
            <div className="subtitle">{exp.subtitle}</div>
            <p className="description">{exp.description}</p>
            <div className="date">{exp.date}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
