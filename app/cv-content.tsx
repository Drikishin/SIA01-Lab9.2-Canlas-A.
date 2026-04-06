"use client";

import { Show } from "@clerk/nextjs";
import "./resume.css";

export function CVContent() {
  return (
    <>
      <Show when="signed-in">
        <div className="resume-container">
          <header className="resume-header">
            <img src="/profile.jpg" alt="Andrik Canlas Headshot" className="profile-pic" />

            <div className="name-contact">
              <h1 className="resume-name">Andrik Brenth E. Canlas</h1>
              <p className="title-sub">B.S. Information Technology Student</p>

              <p className="contact-row">
                📧 <a href="mailto:canlas.andrikbrenth@student.auf.edu.ph">canlas.andrikbrenth@student.auf.edu.ph</a>
              </p>
              <p className="contact-row">
                📞 <span>0933 275 7382</span>
              </p>
              <p className="contact-row">
                📍 <span>Mabalacat City, Pampanga</span>
              </p>
              <p className="contact-row">
                🔗 <a href="https://github.com/Drikishin" target="_blank" rel="noopener noreferrer">
                  github.com/Drikishin
                </a>
              </p>
            </div>
          </header>

          <div className="main-content">
            <section className="section-summary resume-section">
              <h2>Professional Summary</h2>
              <p>
                Results-driven 3rd-year Information Technology student with a strong foundation in full-stack development
                and API integration. Proven ability to build scalable web applications using modern backend-as-a-service
                platforms like Supabase. Adept at version control and collaborative coding within Agile-inspired
                environments.
              </p>
            </section>

            <div className="left-col">
              <section className="resume-section">
                <h2>Work Experience</h2>

                <div className="experience-item">
                  <h3>
                    IT Laboratory Assistant <span>(AUF)</span>
                  </h3>
                  <p className="sub-meta">Nov 2025 – Present | Angeles City</p>
                  <ul>
                    <li>Managed local server environments using XAMPP to ensure seamless deployment of academic web projects.</li>
                    <li>Optimized data retrieval processes by implementing efficient SQL queries within PostgreSQL-based environments.</li>
                    <li>Collaborated with peers to troubleshoot debugging issues in JavaScript-heavy applications.</li>
                  </ul>
                </div>

                <div className="experience-item">
                  <h3>
                    Technical Support Intern <span>(Mabalacat Tech)</span>
                  </h3>
                  <p className="sub-meta">June 2025 – Oct 2025 | Mabalacat</p>
                  <ul>
                    <li>Resolved hardware and software issues for over 20 workstations, ensuring 99% uptime for office operations.</li>
                    <li>Documented internal workflows for software installations, reducing onboarding time for new student assistants.</li>
                  </ul>
                </div>
              </section>

              <section className="resume-section">
                <h2>Education</h2>
                <div className="education-item">
                  <h3>Bachelor of Science in Information Technology</h3>
                  <p className="sub-meta">Angeles University Foundation | Expected June 2027</p>
                  <p className="contact-row">
                    GPA: 3.65 / 4.00<span className="gpa-tag">Honor Student</span>
                  </p>
                </div>
              </section>
            </div>

            <div className="right-col">
              <section className="resume-section">
                <h2>Academic Projects</h2>

                <div className="project-item">
                  <h3>SIA Lab 9: Job Portal Integration</h3>
                  <ul>
                    <li>Developed a dynamic web-based job portal that fetches real-time data from a Supabase backend.</li>
                    <li>Integrated RESTful APIs to display job listings and individual job details based on unique identifiers.</li>
                    <li>Implemented Row Level Security (RLS) policies to ensure secure data access for end-users.</li>
                  </ul>
                </div>

                <div className="project-item">
                  <h3>Automated Student Records System</h3>
                  <ul>
                    <li>Architected a database schema to handle student registrations and grade tracking.</li>
                    <li>Utilized Git for version control, ensuring a clean and documented commit history.</li>
                  </ul>
                </div>
              </section>

              <section className="resume-section">
                <h2>Core Skills</h2>

                <div className="skill-group">
                  <h3>Hard & Technical</h3>
                  <ul>
                    <li>HTML5, CSS3, JavaScript (ES6+)</li>
                    <li>API Integration (REST)</li>
                    <li>Supabase & PostgreSQL</li>
                    <li>Git & GitHub (Version Control)</li>
                    <li>Local Development (XAMPP)</li>
                  </ul>
                </div>

                <div className="skill-group" style={{ marginTop: "15px" }}>
                  <h3>Soft & Human</h3>
                  <ul>
                    <li>Analytical Problem Solving</li>
                    <li>Technical Documentation</li>
                    <li>Team Collaboration</li>
                    <li>Adaptability & Time Management</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Show>

      <Show when="signed-out">
        <div className="flex flex-col items-center justify-center h-[80vh]">
          <h2 className="text-2xl font-bold mb-4">Access Restricted</h2>
          <p className="text-gray-600 mb-6">Please sign in to view Andrik's full CV and contact details.</p>
        </div>
      </Show>
    </>
  );
}
