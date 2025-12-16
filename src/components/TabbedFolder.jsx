import { useState } from 'react'

function TabbedFolder({ projects }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="tabbed-folder">
      <div className="folder-tabs-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`folder-tab-item ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            <span className="folder-tab-title">{project.title}</span>
          </div>
        ))}
      </div>
      
      <div className="folder-main-content">
        <div className="project-details">
          <h3>{projects[activeTab].title}</h3>
          <div className="subtitle">{projects[activeTab].subtitle}</div>
          <p className="description">{projects[activeTab].description}</p>
          <div className="date">{projects[activeTab].date}</div>
        </div>
      </div>
    </div>
  )
}

export default TabbedFolder