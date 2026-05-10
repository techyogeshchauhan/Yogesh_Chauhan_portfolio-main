function About() {
  try {
    const focusAreas = [
      {
        icon: 'bot',
        title: 'GenAI and RAG Systems',
        desc: 'Document-aware chatbots, multimodal retrieval, vector search, prompt workflows, and Azure/OpenAI-powered support automation.'
      },
      {
        icon: 'scan-eye',
        title: 'Computer Vision',
        desc: 'YOLOv8, OpenCV, CNN-based detection pipelines, field validation, annotation workflows, and real-time inspection systems.'
      },
      {
        icon: 'workflow',
        title: 'Full-stack AI Products',
        desc: 'FastAPI, Flask, React, PHP, MySQL, MongoDB, REST APIs, dashboards, authentication flows, and deployment-ready prototypes.'
      }
    ];

    const profilePoints = [
      'Data Science MCA student with practical AI/ML project delivery experience.',
      'Built deployed systems across energy trading, support automation, tourism AI, and utility inspection.',
      'Comfortable connecting model work with APIs, databases, dashboards, and real operational workflows.'
    ];

    return (
      <section
        id="about"
        className="section-padding bg-[var(--background-dark)]"
        data-name="about"
        data-file="components/About.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
            <div data-aos="fade-up">
              <p className="text-sm font-semibold text-[var(--accent-color)] uppercase mb-3">
                About
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] mb-6">
                Building AI systems that move from prototype to product.
              </h2>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                I am focused on practical AI: systems that can answer real questions,
                inspect real images, serve users through APIs, and create measurable value.
                My resume combines internships, live products, hackathon wins, and academic
                depth in data science.
              </p>

              <div className="space-y-3">
                {profilePoints.map((point) => (
                  <div key={point} className="flex gap-3 text-[var(--text-secondary)]">
                    <span className="icon-check-circle text-[var(--accent-secondary)] mt-1"></span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4" data-aos="fade-up" data-aos-delay="100">
              {focusAreas.map((area) => (
                <div key={area.title} className="card">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--accent-color)]/10 text-[var(--accent-color)] flex items-center justify-center flex-shrink-0">
                      <span className={`icon-${area.icon} text-xl`}></span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2">
                        {area.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-0">
                        {area.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12" data-aos="fade-up">
            {[
              { label: 'Current Degree', value: 'MCA Data Science', icon: 'graduation-cap' },
              { label: 'Best CV Result', value: '97% Accuracy', icon: 'target' },
              { label: 'Live Product', value: 'Solar Suvidha', icon: 'sun' },
              { label: 'Strong Stack', value: 'Python + React + APIs', icon: 'layers' }
            ].map((item) => (
              <div key={item.label} className="p-5 rounded-lg border border-[var(--border-color)] bg-[var(--background-card)]">
                <span className={`icon-${item.icon} text-[var(--accent-color)] text-xl`}></span>
                <div className="text-sm text-[var(--text-secondary)] mt-3">{item.label}</div>
                <div className="text-lg font-bold text-[var(--text-primary)]">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}
