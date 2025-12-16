import TabbedFolder from './TabbedFolder'

function Projects() {
  const projects = [
    {
      title: 'Apex Reviews',
      subtitle: 'React 18, TypeScript, Node.js // CREATE-X Startup',
      description: 'AI-powered gaming feedback platform built through Georgia Tech\'s CREATE-X accelerator. Engineered high-performance application with micro-frontend architecture, achieving 45% bundle size reduction. Built enterprise-grade component library with 47+ reusable elements.',
      date: 'aug. 2024 // present'
    },
    {
      title: 'Spotify Wrapped',
      subtitle: 'Android Studio, Java/Kotlin, Firebase',
      description: 'Developed feature-rich native Android app leveraging Material Design 3 principles and Firebase real-time database, supporting 1000+ concurrent users. Implemented responsive design patterns reducing app load time by 40%.',
      date: 'feb. 2024 // mar. 2024'
    },
    {
      title: 'College Scheduler',
      subtitle: 'Android Studio, Java/Kotlin',
      description: 'Built comprehensive academic planning solution with intuitive drag-and-drop scheduling interface and offline-first architecture. Designed end-to-end UX through iterative prototyping in Figma, achieving 85% task completion rate.',
      date: 'jan. 2024 // feb. 2024'
    },
    {
      title: 'iOS Dev Club Apps',
      subtitle: 'Swift, UIKit, SwiftUI // Team Leadership',
      description: 'Led design for multiple mobile apps including Skill Swap, Jot Down, Rey, and Yes Chef. Directed feature ideation and UX architecture with dynamic UIs, AI integration, and intuitive data visualization.',
      date: 'aug. 2025 // present'
    }
  ]

  return (
    <div className="section">
      <div className="section-header">
        <h2>projects</h2>
      </div>
      <TabbedFolder projects={projects} />
    </div>
  )
}

export default Projects;