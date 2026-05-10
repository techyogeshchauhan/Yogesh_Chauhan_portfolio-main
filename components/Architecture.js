function Architecture() {
  try {
    const diagrams = [
      {
        title: 'Multimodal RAG Pipeline',
        subtitle: 'Grounded answers from documents, images, and retrieved context.',
        icon: 'workflow',
        steps: [
          { label: 'Upload', note: 'PDF, DOC, image' },
          { label: 'Extract', note: 'Text and visual signals' },
          { label: 'Embed', note: 'Vector representation' },
          { label: 'Retrieve', note: 'FAISS similarity search' },
          { label: 'Generate', note: 'Context-aware answer' }
        ],
        stack: ['Python', 'Flask', 'LangChain', 'FAISS', 'MongoDB']
      },
      {
        title: 'Azure AI Support Chatbot',
        subtitle: 'Fast customer support workflow with FAQ context and escalation readiness.',
        icon: 'bot',
        steps: [
          { label: 'Query', note: 'Website visitor' },
          { label: 'API', note: 'FastAPI router' },
          { label: 'Context', note: 'FAQ and support data' },
          { label: 'LLM', note: 'Azure OpenAI' },
          { label: 'Reply', note: 'Answer or escalation' }
        ],
        stack: ['Azure AI', 'Azure OpenAI', 'FastAPI', 'React']
      },
      {
        title: 'YOLOv8 Meter-Seal Inspection',
        subtitle: 'Field image to audit-ready seal detection output.',
        icon: 'scan-eye',
        steps: [
          { label: 'Capture', note: 'Meter image' },
          { label: 'Detect', note: 'YOLOv8 model' },
          { label: 'Validate', note: 'Confidence threshold' },
          { label: 'Classify', note: 'Seal present or missing' },
          { label: 'Log', note: 'Excel audit record' }
        ],
        stack: ['YOLOv8', 'OpenCV', 'Python', 'Pandas']
      }
    ];

    return (
      <section
        id="architecture"
        className="section-padding bg-[var(--background-dark)]"
        data-name="architecture"
        data-file="components/Architecture.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-sm font-semibold text-[var(--accent-color)] uppercase mb-3">
              Architecture
            </p>
            <h2 className="section-title">
              How the Systems Work
            </h2>
            <p className="section-subtitle">
              Simple project flows that show how the AI layer connects with APIs, data, and user-facing output.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {diagrams.map((diagram, diagramIndex) => (
              <div key={diagram.title} className="card" data-aos="fade-up" data-aos-delay={diagramIndex * 80}>
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="lg:w-72 flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-[var(--accent-color)]/10 text-[var(--accent-color)] flex items-center justify-center mb-4">
                      <span className={`icon-${diagram.icon} text-2xl`}></span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2">
                      {diagram.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                      {diagram.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {diagram.stack.map((item) => (
                        <span key={item} className="skill-tag">{item}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                      {diagram.steps.map((step, index) => (
                        <div key={step.label} className="relative">
                          <div className="h-full p-4 rounded-lg border border-[var(--border-color)] bg-[var(--primary-color)]">
                            <div className="w-8 h-8 rounded-lg bg-[var(--accent-color)] text-white flex items-center justify-center text-sm font-bold mb-3">
                              {index + 1}
                            </div>
                            <h4 className="font-bold text-[var(--text-primary)] mb-1">{step.label}</h4>
                            <p className="text-xs text-[var(--text-secondary)] mb-0 leading-relaxed">{step.note}</p>
                          </div>
                          {index < diagram.steps.length - 1 && (
                            <span className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[var(--background-card)] border border-[var(--border-color)] items-center justify-center text-[var(--accent-color)]">
                              <span className="icon-arrow-right text-sm"></span>
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Architecture component error:', error);
    return null;
  }
}
