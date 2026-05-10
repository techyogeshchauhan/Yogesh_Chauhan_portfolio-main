function Skills() {
  try {
    const skillCategories = [
      {
        title: 'AI, ML and GenAI',
        icon: 'brain',
        skills: ['Machine Learning', 'Deep Learning', 'NLP', 'LLMs', 'RAG', 'Generative AI', 'Prompt Engineering', 'Reinforcement Learning']
      },
      {
        title: 'Computer Vision',
        icon: 'scan-eye',
        skills: ['YOLOv8', 'OpenCV', 'CNNs', 'TensorFlow', 'PyTorch', 'CUDA', 'Image Processing', 'Field Validation']
      },
      {
        title: 'Web and APIs',
        icon: 'server',
        skills: ['React JS/TS', 'FastAPI', 'Flask', 'Django', 'Node.js', 'PHP', 'REST APIs', 'Tailwind CSS']
      },
      {
        title: 'Data and Cloud',
        icon: 'database',
        skills: ['Python', 'Pandas', 'NumPy', 'SciPy', 'MySQL', 'MongoDB', 'Redis', 'FAISS', 'Azure AI', 'AWS Cloud']
      },
      {
        title: 'Analytics and BI',
        icon: 'bar-chart-3',
        skills: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'Data Visualization', 'Data Engineering', 'Excel Automation']
      },
      {
        title: 'Engineering Tools',
        icon: 'settings',
        skills: ['Git', 'Docker Basics', 'Linux Basics', 'API Testing', 'Deployment', 'ERP Production Workflows']
      }
    ];

    const strengths = [
      {
        title: 'Model to workflow',
        desc: 'I connect models with APIs, dashboards, databases, and operational validation instead of stopping at notebooks.'
      },
      {
        title: 'Vision-heavy project depth',
        desc: 'Meter seals, seatbelts, wildfire/smoke, lip reading, crop and plant disease detection give strong applied CV coverage.'
      },
      {
        title: 'GenAI product thinking',
        desc: 'RAG, chatbot automation, voice/vision tourism guide, and Azure AI support workflows show end-user orientation.'
      }
    ];

    return (
      <section
        id="skills"
        className="section-padding bg-[var(--primary-color)]"
        data-name="skills"
        data-file="components/Skills.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-sm font-semibold text-[var(--accent-color)] uppercase mb-3">
              Skills
            </p>
            <h2 className="section-title">
              Technical Stack
            </h2>
            <p className="section-subtitle">
              A practical toolkit for building intelligent products, from model development to deployment-ready interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12" data-aos="fade-up">
            {skillCategories.map((category) => (
              <div key={category.title} className="card">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-lg bg-[var(--background-dark)] text-[var(--accent-color)] flex items-center justify-center">
                    <span className={`icon-${category.icon} text-xl`}></span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="100">
            {strengths.map((item) => (
              <div key={item.title} className="p-5 rounded-lg border border-[var(--border-color)] bg-[var(--background-card)]">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-0">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}
