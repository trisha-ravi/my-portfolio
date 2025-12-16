function Experience() {
  const experiences = [
    {
      title: 'Senior iOS Designer',
      subtitle: 'iOS Development Club, Georgia Institute of Technology',
      description: 'Leading design operations for a team of 3-4 junior designers per project. Directing the full design process for semester-long mobile app initiatives and collaborating with developer leads to align engineering and design timelines.',
      date: 'aug. 2025 // present'
    },
    {
      title: 'Software Engineering Intern',
      subtitle: 'Narb',
      description: 'Architected and shipped 5+ production features using TypeScript, Next.js, and Node.js, impacting 10,000+ active users. Optimized API performance with Redis caching, reducing backend response times by 20%.',
      date: 'may 2025 // present'
    },
    {
      title: 'Co-Founder',
      subtitle: 'Apex Reviews // Georgia Tech CREATE-X Program',
      description: 'Co-founded startup through competitive CREATE-X accelerator program, building AI-powered gaming feedback platform. Engineered high-performance React 18 application with micro-frontend architecture.',
      date: 'aug. 2024 // present'
    },
    {
      title: 'Undergraduate Researcher',
      subtitle: 'PARCE-Lab, Georgia Institute of Technology',
      description: 'Conducting research on user trust and perception of AI. Designed and distributed user surveys to collect quantitative and qualitative feedback, increasing engagement by 25% through improved UX design.',
      date: 'jan. 2025 // present'
    },
    {
      title: 'Associate Director & Graphic Designer',
      subtitle: 'Artificial Intelligence @ GT',
      description: 'Spearheaded comprehensive brand transformation, increasing social media engagement by 150% and membership by 40%. Built and managed creative team of 8 designers, implementing agile design processes.',
      date: 'mar. 2024 // present'
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