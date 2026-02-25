import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

function Projects() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal(0.05);

  const projects = [
    {
      title: 'Rove',
      subtitle: 'EV Charging Solution',
      role: 'Mobile Automation Engineer',
      description:
        'Automated end-to-end EV charging sessions, service purchases for car wash, user profile and payment methods including 3D Secure cards. Implemented mobile testing using Appium with Python.',
      tags: ['Appium', 'Python', 'Mobile Testing', 'E2E Automation'],
    },
    {
      title: 'Matrix',
      subtitle: 'US Rental Application Solution',
      role: 'Automation Engineer',
      description:
        'Developed automated test scenarios for the complete user journey as a renter, property addition flows, and performed cross-browser testing using Playwright.',
      tags: ['Playwright', 'Cross-Browser', 'JavaScript', 'E2E Testing'],
    },
    {
      title: 'AML',
      subtitle: 'Math Learning Web App',
      role: 'Automation Engineer',
      description:
        "Created a comprehensive test framework for interactive math exercises designed for children with numeracy challenges, covering various grades and skills.",
      tags: ['Test Framework', 'Automation', 'EdTech'],
    },
    {
      title: 'Dome',
      subtitle: 'Social Media App for US Senate & Congress',
      role: 'Manual Tester',
      description:
        'Performed end-to-end functional and UI testing for a social media platform built exclusively for members of the US Senate and Congress.',
      tags: ['Manual Testing', 'UI Testing', 'Functional Testing'],
    },
    {
      title: 'One2Ones',
      subtitle: 'EdTech Platform',
      role: 'Manual Tester',
      description:
        'Tested live Zoom class scheduling, video streaming, and messaging between stakeholders (Child, Parent, Teacher). Validated functionalities across all user roles.',
      tags: ['Manual Testing', 'Multi-Role Testing', 'EdTech'],
    },
    {
      title: 'NetVision',
      subtitle: 'Customer Experience Management Platform',
      role: 'Manual Tester',
      description:
        'Performed manual testing for an online Customer Experience Management (CEM) platform at Cavisson Systems.',
      tags: ['Manual Testing', 'CEM', 'Enterprise'],
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 ref={titleRef} className={`section-title reveal ${titleVisible ? 'visible' : ''}`}>Projects</h2>
        <div ref={gridRef} className={`projects-grid ${gridVisible ? 'visible' : ''}`}>
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card"
              style={{ animationDelay: gridVisible ? `${index * 0.1}s` : '0s' }}
            >
              <div className="project-card-header">
                <div className="project-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                </div>
                <span className="project-role">{project.role}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
