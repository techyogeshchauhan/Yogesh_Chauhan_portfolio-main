function Internship() {
  try {
    const experiences = [
      {
        company: 'Dot Net Tricks Innovation Pvt. Ltd.',
        role: 'Data Science Intern',
        period: 'Jun 2025 - Aug 2025',
        icon: 'message-square-text',
        summary: 'Built a GenAI support chatbot for the company website and connected it with live support workflows.',
        bullets: [
          'Developed an Azure AI based support chatbot to automate customer query handling.',
          'Built real-time query automation using Python, FastAPI, and website support integrations.',
          'Focused on faster first response, FAQ automation, and reliable escalation-ready flows.'
        ],
        tags: ['Azure AI', 'Azure OpenAI', 'Python', 'FastAPI', 'React']
      },
      {
        company: 'Assetplus Consulting Pvt. Ltd.',
        role: 'Data Science Intern',
        period: 'Apr 2025 - May 2025',
        icon: 'scan-line',
        summary: 'Created a computer vision inspection system for electrical meter terminal seals.',
        bullets: [
          'Built a YOLOv8 based terminal seal detection system with 97% accuracy.',
          'Validated the model under varied real-world field conditions using OpenCV workflows.',
          'Prepared detection outputs for inspection logging and operational review.'
        ],
        tags: ['YOLOv8', 'OpenCV', 'Computer Vision', 'Deep Learning', 'Pandas']
      },
      {
        company: 'Centre for Artificial Intelligence and Research',
        role: 'AI Intern',
        period: 'Nov 2024 - Dec 2024',
        icon: 'brain-circuit',
        summary: 'Worked on multimodal AI research prototypes combining vision, text, and speech understanding.',
        bullets: [
          'Built a multimodal RAG chat system integrating vision and text for contextual responses.',
          'Implemented a no-audio lip reading model using CNN concepts inspired by Auto-AVSR.',
          'Explored retrieval pipelines and visual context handling for more grounded outputs.'
        ],
        tags: ['Multimodal RAG', 'CNN', 'Computer Vision', 'FAISS', 'LangChain']
      },
      {
        company: 'Cognifyz Technologies',
        role: 'Data Science Intern',
        period: 'Jan 2024 - Feb 2024',
        icon: 'line-chart',
        summary: 'Supported data science project execution, data processing, and analytical workflows.',
        bullets: [
          'Worked on data cleaning, analysis, and model-oriented project tasks.',
          'Strengthened execution discipline across research, documentation, and delivery workflows.',
          'Built foundations for later AI and computer vision project work.'
        ],
        tags: ['Data Processing', 'Analysis', 'Python', 'Data Science']
      },
      {
        company: 'Campus Activewear Limited',
        role: 'ERP Executive, Production',
        period: 'Jul 2023 - Jun 2024',
        icon: 'factory',
        summary: 'Managed ERP operations for production and dispatch processes in a manufacturing environment.',
        bullets: [
          'Handled production and dispatch data with accuracy across ERP workflows.',
          'Improved workflow reliability through structured reporting and data handling.',
          'Gained hands-on understanding of operations, inventory movement, and process discipline.'
        ],
        tags: ['ERP', 'Production', 'Dispatch', 'Reporting', 'Operations']
      }
    ];

    return (
      <section
        id="internship"
        className="section-padding bg-[var(--background-dark)]"
        data-name="internship"
        data-file="components/Internship.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-sm font-semibold text-[var(--accent-color)] uppercase mb-3">
              Experience
            </p>
            <h2 className="section-title">
              Professional Timeline
            </h2>
            <p className="section-subtitle">
              Resume-aligned experience across GenAI, computer vision, AI research, analytics, and production ERP operations.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--border-color)]"></div>
            <div className="space-y-6">
              {experiences.map((item, index) => (
                <div
                  key={item.company}
                  className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 items-start"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <div className={`card ${index % 2 === 0 ? 'lg:mr-8 lg:col-start-1' : 'lg:ml-8 lg:col-start-2'}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 rounded-lg bg-[var(--accent-color)]/10 text-[var(--accent-color)] flex items-center justify-center flex-shrink-0">
                          <span className={`icon-${item.icon} text-xl`}></span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[var(--text-primary)]">
                            {item.company}
                          </h3>
                          <p className="text-[var(--accent-color)] font-semibold mb-0">
                            {item.role}
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex w-fit px-3 py-1 rounded-lg bg-[var(--background-dark)] text-[var(--text-secondary)] text-sm font-medium">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                      {item.summary}
                    </p>

                    <ul className="space-y-3 mb-5">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm sm:text-base text-[var(--text-secondary)]">
                          <span className="icon-arrow-right text-[var(--accent-secondary)] mt-1 flex-shrink-0"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="skill-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Internship component error:', error);
    return null;
  }
}
