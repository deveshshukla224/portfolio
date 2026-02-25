import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

function About() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [textRef, textVisible] = useScrollReveal(0.1);
  const [skillsRef, skillsVisible] = useScrollReveal(0.1);

  const skills = [
    { category: 'Automation Testing', items: ['Playwright (JS/TS)', 'Appium (Python)', 'Pytest', 'Cucumber'] },
    { category: 'API Testing', items: ['Postman', 'Python Requests'] },
    { category: 'Database Testing', items: ['SQL Queries', 'Data Integrity Validation'] },
    { category: 'Tools', items: ['Jenkins', 'BrowserStack', 'Git', 'TestLink', 'Jira'] },
  ];

  const experience = [
    {
      company: 'DevsLane',
      role: 'QA Engineer',
      location: 'Noida, UP, India',
      period: 'September 2021 - Present',
    },
    {
      company: 'Cavisson Systems, Inc.',
      role: 'Software Engineer',
      location: '',
      period: 'March 2019 - September 2021',
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 ref={titleRef} className={`section-title reveal ${titleVisible ? 'visible' : ''}`}>About Me</h2>
        <div className="about-content">
          <div ref={textRef} className={`about-text reveal-left ${textVisible ? 'visible' : ''}`}>
            <p>
              I'm a results-driven QA Engineer with <strong>6+ years</strong> of experience in automation
              and manual testing. I specialize in building robust test frameworks using
              <strong> Playwright</strong>, validating APIs, and integrating testing into CI/CD pipelines.
            </p>
            <p>
              I graduated with a <strong>B.Tech in Computer Science</strong> from Inderprastha Engineering
              College (2015-2019) and have since worked on diverse projects ranging from EV charging
              solutions to EdTech platforms.
            </p>
            <div className="experience-timeline">
              <h3>Experience</h3>
              {experience.map((exp) => (
                <div key={exp.company} className="experience-item">
                  <div className="exp-header">
                    <h4>{exp.company}</h4>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <p className="exp-role">{exp.role} {exp.location && `| ${exp.location}`}</p>
                </div>
              ))}
            </div>
          </div>
          <div ref={skillsRef} className={`about-skills reveal-right ${skillsVisible ? 'visible' : ''}`}>
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <div
                  key={skill.category}
                  className="skill-category"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <h4>{skill.category}</h4>
                  <div className="skill-tags">
                    {skill.items.map((item) => (
                      <span key={item} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
