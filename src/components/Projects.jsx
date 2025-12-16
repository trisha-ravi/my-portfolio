

function Projects() {
  const projects = [
    {
      title: 'Apex Reviews Platform',
      subtitle: 'Product Review Application // React, Node.js',
      description: 'Full-stack product review platform developed through Georgia Tech\'s CREATE-X accelerator. Features include user authentication, dynamic review systems, and responsive UI design. Led end-to-end development from concept to deployment.',
      date: '2023 // 2024'
    },
    {
      title: 'Music Editor Application',
      subtitle: 'Java // Advanced HCI',
      description: 'Sophisticated music notation software with gesture recognition integration and spatial snapping features. Implements advanced interaction techniques for intuitive music composition and editing.',
      date: '2024'
    },
    {
      title: 'Infrastructure Automation Suite',
      subtitle: 'Python, Kubernetes, Terraform',
      description: 'Developed automated deployment pipelines and infrastructure-as-code solutions for scalable cloud environments. Reduced deployment time by 60% and improved system reliability metrics.',
      date: '2024 // ongoing'
    },
    {
      title: 'AI @ GT Design System',
      subtitle: 'Figma, React // Design Leadership',
      description: 'Created comprehensive design system and brand guidelines for Georgia Tech\'s AI organization. Managed team of 8 designers to ensure consistent visual identity across all platforms.',
      date: '2023 // present'
    }
  ]

  return (
    <div className="section">
      <div className="section-header">
        <h2>projects</h2>
      </div>
      <div className="section-content">
        {projects.map((project, index) => (
          <div key={index} className="experience-item">
            <h3>{project.title}</h3>
            <div className="subtitle">{project.subtitle}</div>
            <p className="description">{project.description}</p>
            <div className="date">{project.date}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
