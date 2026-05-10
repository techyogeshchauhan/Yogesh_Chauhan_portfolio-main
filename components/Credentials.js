function Credentials() {
  try {
    const education = [
      {
        degree: 'Master of Computer Application, Data Science',
        place: 'Dev Sanskriti Vishwavidyalaya, Haridwar',
        period: 'Jul 2024 - Present',
        detail: 'SGPA Sem 3: 8.36'
      },
      {
        degree: 'Bachelor of Science, Information Technology',
        place: 'Dev Sanskriti Vishwavidyalaya, Haridwar',
        period: 'Jul 2020 - Jun 2023',
        detail: 'Cumulative GPA: 7.26'
      }
    ];

    const achievements = [
      {
        title: '1st Place, University Level Hackathon',
        desc: 'Led a 4-member team at the AI Impact Summit 2026 Pre-Summit Event to build AlumniSync, an AI-enabled alumni scheduling and engagement platform.'
      },
      {
        title: 'Top 75, State Level Emerging Technology Hackathon',
        desc: 'Selected by the Department of IT, Government of Uttarakhand and UPES Dehradun for an AI tourism solution using voice AI, computer vision, and GenAI.'
      }
    ];

    const certifications = [
      {
        name: 'AWS Academy Graduate, AWS Academy Data Engineering',
        date: 'Feb 2025',
        url: 'https://www.credly.com/earner/earned/badge/f2eea86b-aa0a-4743-b207-8724225bbdac'
      },
      {
        name: 'AWS Educate Machine Learning Foundations',
        date: 'Feb 2025',
        url: 'https://www.credly.com/earner/earned/badge/3116cfbb-2153-4191-9591-d42609ac3616'
      },
      {
        name: 'Foundations: Data, Data, Everywhere, Google Coursera',
        date: 'Jan 2025',
        url: 'https://drive.google.com/file/d/1cFHlsrLPr25PgJ5GCf_3n09szd28iw9C/view?usp=drive_link'
      },
      {
        name: 'RAG App Development with LangChain and Streamlit',
        date: 'Analytics Vidhya',
        url: 'https://drive.google.com/file/d/172tho8ytMStsSssCmr1_wNF371N77139/view?usp=drive_link'
      },
      {
        name: 'Introduction to NLP',
        date: 'Analytics Vidhya',
        url: 'https://drive.google.com/file/d/1dr2F49n5ESrl4CK9Vl6hB17eLvCsvcPR/view?usp=drive_link'
      },
      {
        name: 'Introduction to Tableau',
        date: 'Simplilearn SkillUp',
        url: 'https://drive.google.com/file/d/1bOrj7pRDOkp13vxO6hEWtl0SQ50w5TJQ/view?usp=drive_link'
      },
      {
        name: 'Cybersecurity',
        date: 'Skill India, Tech Mahindra Foundation',
        url: 'https://drive.google.com/file/d/1R1swEYB2k99UrjqhTdOSbWEImka7DEqC/view?usp=drive_link'
      },
      {
        name: 'CCC NIELIT, Course on Computer Concepts',
        date: 'NIELIT',
        url: 'https://drive.google.com/file/d/1LF6lHngJrJQLFm0DwZ95oY3a57bHX8Ul/view?usp=drive_link'
      }
    ];

    return (
      <section
        id="credentials"
        className="section-padding bg-[var(--background-dark)]"
        data-name="credentials"
        data-file="components/Credentials.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-sm font-semibold text-[var(--accent-color)] uppercase mb-3">
              Credentials
            </p>
            <h2 className="section-title">
              Education, Wins and Certifications
            </h2>
            <p className="section-subtitle">
              Academic foundation and external proof points that support the AI and data science portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6 mb-6">
            <div className="card" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-5">
                <span className="icon-graduation-cap text-2xl text-[var(--accent-color)]"></span>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Education</h3>
              </div>
              <div className="space-y-5">
                {education.map((item) => (
                  <div key={item.degree} className="pb-5 border-b border-[var(--border-color)] last:border-b-0 last:pb-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-1">
                      <h4 className="font-bold text-[var(--text-primary)]">{item.degree}</h4>
                      <span className="text-sm text-[var(--text-secondary)]">{item.period}</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-1">{item.place}</p>
                    <p className="text-sm font-semibold text-[var(--accent-secondary)] mb-0">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center gap-3 mb-5">
                <span className="icon-trophy text-2xl text-[var(--accent-tertiary)]"></span>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Achievements</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {achievements.map((item) => (
                  <div key={item.title} className="p-4 rounded-lg bg-[var(--background-dark)] border border-[var(--border-color)]">
                    <h4 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-0">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card" data-aos="fade-up">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
              <div className="flex items-center gap-3">
                <span className="icon-badge-check text-2xl text-[var(--accent-secondary)]"></span>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Certifications</h3>
              </div>
              <span className="text-sm text-[var(--text-secondary)]">English and Hindi</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {certifications.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--primary-color)] hover:border-[var(--accent-color)] transition-colors group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)] mb-0">{item.date}</p>
                    </div>
                    <span className="icon-external-link text-[var(--text-secondary)]"></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Credentials component error:', error);
    return null;
  }
}
