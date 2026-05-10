function Projects() {
  try {
    const [filter, setFilter] = React.useState('All');
    const [searchTerm, setSearchTerm] = React.useState('');
    const [selectedProject, setSelectedProject] = React.useState(null);

    React.useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          setSelectedProject(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const projects = [
      {
        title: 'P2P Energy Trading Platform, Solar Suvidha',
        category: 'Full Stack',
        image: '/trickle/assets/new.png',
        description: 'Live peer-to-peer solar energy trading platform with smart buyer-seller matching, token verification, dashboards, and settlement-ready workflows.',
        problem: 'Solar energy producers and buyers need a transparent way to discover, verify, and settle energy trades.',
        solution: 'Designed a web platform with buyer-seller matching, token-based verification, responsive dashboards, and REST APIs ready for blockchain integration.',
        role: 'Full-stack developer for API design, dashboards, matching logic, and database workflows.',
        impact: ['25+ REST APIs', 'Blockchain-ready architecture', 'Priority scoring engine'],
        flow: ['Buyer/Seller Login', 'Energy Requirement', 'Priority Scoring', 'Token Verification', 'Settlement Workflow'],
        tags: ['PHP', 'MySQL', 'Bootstrap', 'jQuery', 'REST APIs'],
        liveUrl: 'https://solar-suvidha.in/p2p/frontend/login.php'
      },
      {
        title: 'Support Chatbot, Dot Net Tricks',
        category: 'GenAI',
        image: '/trickle/assets/AI-powered-chatbot.png',
        description: 'Azure AI powered support chatbot integrated with website workflows for FAQ automation, contextual query resolution, and customer support acceleration.',
        problem: 'Website visitors needed faster answers without increasing manual support load.',
        solution: 'Built a support automation flow using Azure AI, Azure OpenAI, FastAPI, and React for real-time query handling.',
        role: 'Designed chatbot workflow, backend APIs, response pipeline, and live support integration.',
        impact: ['Live deployment', 'Azure OpenAI workflow', 'FastAPI backend'],
        flow: ['User Query', 'FastAPI Router', 'Azure OpenAI', 'Knowledge/FAQ Context', 'Response or Escalation'],
        tags: ['Azure AI', 'Azure OpenAI', 'Python', 'FastAPI', 'React'],
        liveUrl: 'https://schlorhat-ai-support-front.onrender.com/'
      },
      {
        title: 'Multimodal RAG Chatbot',
        category: 'GenAI',
        image: '/trickle/assets/ChatGPT Image Aug 16, 2025, 12_06_49 AM.png',
        description: 'Text and image aware RAG chatbot that retrieves relevant context, handles document understanding, and answers with grounded responses.',
        problem: 'Traditional chatbots lose context when users ask questions across documents, images, and mixed data.',
        solution: 'Built a retrieval pipeline with embeddings, FAISS vector search, MongoDB storage, and multimodal context handling.',
        role: 'Implemented retrieval, backend integration, prompt orchestration, and response grounding.',
        impact: ['Vision + text retrieval', 'FAISS vector search', 'MongoDB storage'],
        flow: ['Upload Content', 'Extract Text/Image Signals', 'Create Embeddings', 'FAISS Retrieval', 'Grounded Answer'],
        tags: ['Python', 'Flask', 'LangChain', 'MongoDB', 'Gemini API', 'FAISS'],
        githubUrl: 'https://github.com/techyogeshchauhan/Multimodel-Rag-System'
      },
      {
        title: 'Uttarakhand GenAI Tourism Guide',
        category: 'GenAI',
        image: '/trickle/assets/edtech.jpg',
        description: 'Multilingual AI tourism guide with landmark recognition, voice support, itinerary generation, and regional-language assistance.',
        problem: 'Tourists need local, multilingual, context-aware guidance for Uttarakhand travel planning.',
        solution: 'Combined voice, vision, GenAI, and itinerary generation for landmark-aware travel assistance.',
        role: 'Built AI solution concept, CV flow, voice interaction, and hackathon pitch prototype.',
        impact: ['Top 75 state hackathon', 'Voice + vision + GenAI', 'Hindi, Garhwali, Kumaoni, English'],
        flow: ['Voice/Image Input', 'Landmark Recognition', 'GenAI Planning', 'Regional Language Output', 'Itinerary'],
        tags: ['Flask', 'React', 'OpenCV', 'Speech AI', 'Gemini API', 'OpenAI API']
      },
      {
        title: 'Electricity Meter Terminal Seal Detection',
        category: 'Computer Vision',
        image: '/trickle/assets/meeter.jpg',
        description: 'Inspection model for detecting electrical meter terminal seals and logging audit-ready Yes/No outputs for field validation.',
        problem: 'Manual field inspection of electrical meter seals can be slow and inconsistent.',
        solution: 'Trained a YOLOv8-based visual detection system with OpenCV validation and Excel logging for inspection records.',
        role: 'Worked on model training, data preparation, validation workflow, and output automation.',
        impact: ['97% accuracy', 'YOLOv8 detection', 'Excel automation'],
        flow: ['Meter Image', 'YOLOv8 Detection', 'Seal Confidence', 'Yes/No Output', 'Audit Log'],
        tags: ['Python', 'OpenCV', 'YOLOv8', 'Computer Vision', 'Pandas'],
        githubUrl: 'https://github.com/techyogeshchauhan/Electricity-Meter-Terminal-Seal-Detection-System'
      },
      {
        title: 'Lip Reading Without Audio',
        category: 'Computer Vision',
        image: '/trickle/assets/lipreading.png',
        description: 'CNN and temporal modeling prototype for recognizing speech from lip movement, inspired by audio-visual speech recognition research.',
        problem: 'Speech understanding can fail in noisy or silent environments where audio is unavailable.',
        solution: 'Implemented a visual speech recognition prototype using CNN and temporal modeling concepts.',
        role: 'Explored model architecture, preprocessing, and inference workflow inspired by Auto-AVSR.',
        impact: ['No-audio inference', 'CNN-based pipeline', 'Research prototype'],
        flow: ['Video Frames', 'Mouth ROI', 'CNN Features', 'Temporal Model', 'Predicted Text'],
        tags: ['Python', 'PyTorch', 'CNN', 'Computer Vision', 'TCN'],
        githubUrl: 'https://github.com/techyogeshchauhan/Lipreading-using-Temporal-Convolutional-Networks'
      },
      {
        title: 'Wildfire and Smoke Detection',
        category: 'Computer Vision',
        image: '/trickle/assets/wildfire.png',
        description: 'Real-time fire and smoke detection system using YOLO and OpenCV for early visual warning from camera feeds.',
        problem: 'Early detection is critical for reducing wildfire response time and damage.',
        solution: 'Built a camera-oriented CV workflow for fire and smoke detection using YOLO and OpenCV.',
        role: 'Implemented model pipeline, detection flow, and real-time alert concept.',
        impact: ['YOLO detection', 'D-Fire dataset', 'Real-time alerts'],
        flow: ['Camera Feed', 'Frame Processing', 'YOLO Detection', 'Fire/Smoke Class', 'Alert'],
        tags: ['Python', 'OpenCV', 'YOLO', 'Deep Learning', 'Computer Vision'],
        githubUrl: 'https://github.com/techyogeshchauhan/wildfire-detection/tree/master'
      },
      {
        title: 'Crop Recommendation System',
        category: 'Machine Learning',
        image: '/trickle/assets/crop.png',
        description: 'Machine learning system that recommends suitable crops based on soil, weather, and environmental features.',
        problem: 'Farmers need data-backed crop choices based on local environmental conditions.',
        solution: 'Built a feature-based ML recommendation workflow using soil and climate parameters.',
        role: 'Handled preprocessing, model training, evaluation, and recommendation logic.',
        impact: ['Agriculture use case', 'Feature-based prediction', 'Decision support'],
        flow: ['Soil/Weather Data', 'Preprocessing', 'ML Model', 'Crop Prediction', 'Recommendation'],
        tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas'],
        githubUrl: 'https://github.com/techyogeshchauhan/Crop-Recommendation-System-using-Machine-Learning'
      }
    ];

    const featuredDemos = projects.slice(0, 3);
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

    const closeModal = () => setSelectedProject(null);

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

          <div className="mb-10" data-aos="fade-up">
            <div className="flex items-center justify-between gap-4 mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">Live Demo Highlights</h3>
              <span className="text-sm text-[var(--text-secondary)]">Screenshots and preview cards</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {featuredDemos.map((project) => (
                <button
                  key={project.title}
                  onClick={() => setSelectedProject(project)}
                  className="text-left group rounded-lg border border-[var(--border-color)] bg-[var(--background-card)] overflow-hidden hover:border-[var(--accent-color)] transition-colors"
                >
                  <div className="aspect-video overflow-hidden bg-[var(--background-dark)]">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-bold text-[var(--accent-color)] mb-2">{project.category}</div>
                    <h4 className="font-bold text-[var(--text-primary)] mb-2">{project.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)] mb-0">{project.impact.join(' | ')}</p>
                  </div>
                </button>
              ))}
            </div>
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
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--accent-color)] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                      >
                        <span className="icon-file-text"></span>
                        Case Study
                      </button>
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

        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70" role="dialog" aria-modal="true">
            <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg bg-[var(--background-card)] border border-[var(--border-color)] shadow-2xl">
              <div className="sticky top-0 z-10 flex items-center justify-between gap-4 p-4 sm:p-5 border-b border-[var(--border-color)] bg-[var(--background-card)]">
                <div>
                  <p className="text-xs font-bold text-[var(--accent-color)] mb-1">{selectedProject.category}</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center"
                  aria-label="Close case study"
                >
                  <span className="icon-x"></span>
                </button>
              </div>

              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-5 mb-6">
                  <div className="rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--background-dark)]">
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full min-h-64 object-cover" />
                  </div>
                  <div className="space-y-4">
                    {[
                      { title: 'Problem', text: selectedProject.problem },
                      { title: 'Solution', text: selectedProject.solution },
                      { title: 'My Role', text: selectedProject.role }
                    ].map((item) => (
                      <div key={item.title} className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--primary-color)]">
                        <h4 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h4>
                        <p className="text-sm text-[var(--text-secondary)] mb-0 leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <div className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--primary-color)]">
                    <h4 className="font-bold text-[var(--text-primary)] mb-3">Impact</h4>
                    <div className="space-y-2">
                      {selectedProject.impact.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                          <span className="icon-check-circle text-[var(--accent-secondary)]"></span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--primary-color)]">
                    <h4 className="font-bold text-[var(--text-primary)] mb-3">Mini Architecture</h4>
                    <div className="flex flex-wrap items-center gap-2">
                      {selectedProject.flow.map((step, index) => (
                        <React.Fragment key={step}>
                          <span className="px-3 py-2 rounded-lg bg-[var(--background-card)] border border-[var(--border-color)] text-xs font-semibold text-[var(--text-primary)]">
                            {step}
                          </span>
                          {index < selectedProject.flow.length - 1 && (
                            <span className="icon-arrow-right text-[var(--accent-color)]"></span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-5">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}
