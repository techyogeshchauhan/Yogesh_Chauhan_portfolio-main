function Projects() {
  try {
    const [filter, setFilter] = React.useState('All');
    const [searchTerm, setSearchTerm] = React.useState('');

    const projects = [
      {
        title: 'P2P Energy Trading Platform, Solar Suvidha',
        category: 'Full Stack',
        image: '/trickle/assets/new.png',
        description: 'Live peer-to-peer solar energy trading platform with smart buyer-seller matching, token verification, dashboards, and settlement-ready workflows.',
        impact: ['25+ REST APIs', 'Blockchain-ready architecture', 'Priority scoring engine'],
        tags: ['PHP', 'MySQL', 'Bootstrap', 'jQuery', 'REST APIs'],
        liveUrl: 'https://solar-suvidha.in/p2p/frontend/login.php'
      },
      {
        title: 'Support Chatbot, Dot Net Tricks',
        category: 'GenAI',
        image: '/trickle/assets/AI-powered-chatbot.png',
        description: 'Azure AI powered support chatbot integrated with website workflows for FAQ automation, contextual query resolution, and customer support acceleration.',
        impact: ['Live deployment', 'Azure OpenAI workflow', 'FastAPI backend'],
        tags: ['Azure AI', 'Azure OpenAI', 'Python', 'FastAPI', 'React'],
        liveUrl: 'https://schlorhat-ai-support-front.onrender.com/'
      },
      {
        title: 'Multimodal RAG Chatbot',
        category: 'GenAI',
        image: '/trickle/assets/ChatGPT Image Aug 16, 2025, 12_06_49 AM.png',
        description: 'Text and image aware RAG chatbot that retrieves relevant context, handles document understanding, and answers with grounded responses.',
        impact: ['Vision + text retrieval', 'FAISS vector search', 'MongoDB storage'],
        tags: ['Python', 'Flask', 'LangChain', 'MongoDB', 'Gemini API', 'FAISS'],
        githubUrl: 'https://github.com/techyogeshchauhan/Multimodel-Rag-System'
      },
      {
        title: 'Uttarakhand GenAI Tourism Guide',
        category: 'GenAI',
        image: '/trickle/assets/edtech.jpg',
        description: 'Multilingual AI tourism guide with landmark recognition, voice support, itinerary generation, and regional-language assistance.',
        impact: ['Top 75 state hackathon', 'Voice + vision + GenAI', 'Hindi, Garhwali, Kumaoni, English'],
        tags: ['Flask', 'React', 'OpenCV', 'Speech AI', 'Gemini API', 'OpenAI API']
      },
      {
        title: 'Electricity Meter Terminal Seal Detection',
        category: 'Computer Vision',
        image: '/trickle/assets/meeter.jpg',
        description: 'Inspection model for detecting electrical meter terminal seals and logging audit-ready Yes/No outputs for field validation.',
        impact: ['97% accuracy', 'YOLOv8 detection', 'Excel automation'],
        tags: ['Python', 'OpenCV', 'YOLOv8', 'Computer Vision', 'Pandas'],
        githubUrl: 'https://github.com/techyogeshchauhan/Electricity-Meter-Terminal-Seal-Detection-System'
      },
      {
        title: 'Lip Reading Without Audio',
        category: 'Computer Vision',
        image: '/trickle/assets/lipreading.png',
        description: 'CNN and temporal modeling prototype for recognizing speech from lip movement, inspired by audio-visual speech recognition research.',
        impact: ['No-audio inference', 'CNN-based pipeline', 'Research prototype'],
        tags: ['Python', 'PyTorch', 'CNN', 'Computer Vision', 'TCN'],
        githubUrl: 'https://github.com/techyogeshchauhan/Lipreading-using-Temporal-Convolutional-Networks'
      },
      {
        title: 'Wildfire and Smoke Detection',
        category: 'Computer Vision',
        image: '/trickle/assets/wildfire.png',
        description: 'Real-time fire and smoke detection system using YOLO and OpenCV for early visual warning from camera feeds.',
        impact: ['YOLO detection', 'D-Fire dataset', 'Real-time alerts'],
        tags: ['Python', 'OpenCV', 'YOLO', 'Deep Learning', 'Computer Vision'],
        githubUrl: 'https://github.com/techyogeshchauhan/wildfire-detection/tree/master'
      },
      {
        title: 'Crop Recommendation System',
        category: 'Machine Learning',
        image: '/trickle/assets/crop.png',
        description: 'Machine learning system that recommends suitable crops based on soil, weather, and environmental features.',
        impact: ['Agriculture use case', 'Feature-based prediction', 'Decision support'],
        tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas'],
        githubUrl: 'https://github.com/techyogeshchauhan/Crop-Recommendation-System-using-Machine-Learning'
      }
    ];

    const categories = ['All', ...new Set(projects.map((project) => project.category))];

    const filteredProjects = projects.filter((project) => {
      const matchesCategory = filter === 'All' || project.category === filter;
      const haystack = `${project.title} ${project.description} ${project.tags.join(' ')} ${project.impact.join(' ')}`.toLowerCase();
      return matchesCategory && haystack.includes(searchTerm.toLowerCase());
    });

    const stats = [
      { value: '2', label: 'Live product deployments' },
      { value: '25+', label: 'APIs in Solar Suvidha' },
      { value: '97%', label: 'Best CV accuracy' },
      { value: '8', label: 'Featured resume projects' }
    ];

    return (
      <section
        id="projects"
        className="section-padding bg-[var(--primary-color)]"
        data-name="projects"
        data-file="components/Projects.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10" data-aos="fade-up">
            <p className="text-sm font-semibold text-[var(--accent-color)] uppercase mb-3">
              Projects
            </p>
            <h2 className="section-title">
              Featured Work
            </h2>
            <p className="section-subtitle">
              Selected projects from the resume, prioritized by deployment, measurable results, and recruiter relevance.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8" data-aos="fade-up">
            {stats.map((stat) => (
              <div key={stat.label} className="p-4 rounded-lg bg-[var(--background-card)] border border-[var(--border-color)]">
                <div className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]">{stat.value}</div>
                <div className="text-xs sm:text-sm text-[var(--text-secondary)]">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center mb-8" data-aos="fade-up">
            <div className="relative w-full lg:max-w-sm">
              <input
                type="text"
                placeholder="Search projects, tools, or impact..."
                className="w-full px-4 py-3 pr-10 rounded-lg border border-[var(--border-color)] bg-[var(--background-card)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]/20 focus:border-[var(--accent-color)]"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <span className="icon-search absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]"></span>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    filter === category
                      ? 'bg-[var(--text-primary)] text-[var(--primary-color)]'
                      : 'bg-[var(--background-card)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5" data-aos="fade-up">
            {filteredProjects.map((project) => (
              <article key={project.title} className="card group overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-[13rem_1fr] gap-5">
                  <div className="aspect-[4/3] sm:aspect-auto sm:h-full rounded-lg overflow-hidden bg-[var(--background-dark)] border border-[var(--border-color)]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-lg bg-[var(--background-dark)] text-[var(--accent-color)] text-xs font-bold">
                        {project.category}
                      </span>
                      {project.liveUrl && (
                        <span className="px-2.5 py-1 rounded-lg bg-[var(--accent-secondary)]/10 text-[var(--accent-secondary)] text-xs font-bold">
                          Live
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-1 gap-2 mb-4">
                      {project.impact.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                          <span className="icon-check text-[var(--accent-secondary)]"></span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="skill-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--text-primary)] text-[var(--primary-color)] text-sm font-semibold hover:opacity-90 transition-opacity"
                        >
                          <span className="icon-external-link"></span>
                          Live
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--background-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-semibold"
                        >
                          <span className="icon-github"></span>
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 bg-[var(--background-card)] rounded-lg border border-[var(--border-color)]">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">No projects found</h3>
              <p className="text-[var(--text-secondary)] mb-4">Try another keyword or category.</p>
              <button
                onClick={() => {
                  setFilter('All');
                  setSearchTerm('');
                }}
                className="btn-secondary inline-flex"
              >
                Reset filters
              </button>
            </div>
          )}

          <div className="text-center mt-12">
            <a
              href="https://github.com/techyogeshchauhan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex"
            >
              <span className="icon-github"></span>
              View More on GitHub
            </a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}
