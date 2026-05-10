function Hero() {
  try {
    const [typedText, setTypedText] = React.useState('');
    const textOptions = [
      'GenAI & RAG Builder',
      'Computer Vision Engineer',
      'Data Science MCA Student',
      'Full-stack AI Developer'
    ];
    const [currentTextIndex, setCurrentTextIndex] = React.useState(0);

    React.useEffect(() => {
      let currentText = textOptions[currentTextIndex];
      let index = 0;
      let deleting = false;
      let timeout;

      const tick = () => {
        if (!deleting && index <= currentText.length) {
          setTypedText(currentText.slice(0, index));
          index += 1;
          timeout = setTimeout(tick, 75);
          return;
        }

        if (!deleting) {
          deleting = true;
          timeout = setTimeout(tick, 1400);
          return;
        }

        if (index > 0) {
          index -= 1;
          setTypedText(currentText.slice(0, index));
          timeout = setTimeout(tick, 35);
          return;
        }

        setCurrentTextIndex((value) => (value + 1) % textOptions.length);
      };

      timeout = setTimeout(tick, 300);
      return () => clearTimeout(timeout);
    }, [currentTextIndex]);

    const metrics = [
      { value: '97%', label: 'YOLOv8 meter-seal detection accuracy' },
      { value: '25+', label: 'REST APIs designed for Solar Suvidha' },
      { value: '4+', label: 'AI/Data Science internships' },
      { value: 'Top 75', label: 'Uttarakhand Emerging Tech Hackathon' }
    ];

    return (
      <section
        id="home"
        className="min-h-[92vh] flex items-center bg-[var(--primary-color)] pt-24 pb-12"
        data-name="hero"
        data-file="components/Hero.js"
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-12 xl:gap-16 items-center">
            <div className="min-w-0" data-aos="fade-up">
              <div className="flex w-full max-w-[22rem] sm:w-fit sm:max-w-full items-start gap-2 px-3 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--background-card)] text-sm text-[var(--text-secondary)] mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-secondary)]"></span>
                <span className="min-w-0 break-words">Available for AI, GenAI, CV and data science projects</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--text-primary)] leading-tight mb-5">
                Yogesh Chauhan
                <span className="block text-[var(--accent-color)] mt-2">
                  AI & Data Science Portfolio
                </span>
              </h1>

              <div className="min-h-10 text-xl sm:text-2xl font-semibold text-[var(--accent-secondary)] mb-6">
                {typedText}
                <span className="text-[var(--accent-color)] ml-1 animate-pulse">|</span>
              </div>

              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-[22rem] sm:max-w-2xl mb-8">
                MCA Data Science student building production-minded AI systems across GenAI,
                Retrieval-Augmented Generation, computer vision, and full-stack web platforms.
                Recent work includes an Azure AI support chatbot, a 97% accurate meter-seal
                detection model, and a live P2P solar energy trading platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8 max-w-[22rem] sm:max-w-[36rem]">
                <button
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                >
                  <span className="icon-folder"></span>
                  View Featured Projects
                </button>
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary"
                >
                  <span className="icon-send"></span>
                  Start a Conversation
                </button>
              </div>

              <div className="flex flex-wrap gap-3 mb-10 max-w-[22rem] sm:max-w-none">
                {[
                  { href: 'mailto:yogesh.chauhan.ai@gmail.com', icon: 'mail', label: 'Email' },
                  { href: 'https://github.com/techyogeshchauhan', icon: 'github', label: 'GitHub' },
                  { href: 'https://linkedin.com/in/yogesh-chauhan-40650523b', icon: 'linkedin', label: 'LinkedIn' },
                  { href: 'https://techyogeshchauhan.github.io/Yogesh_Chauhan_portfolio/', icon: 'globe', label: 'Portfolio' }
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--background-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-color)] transition-colors text-sm"
                    aria-label={item.label}
                  >
                    <span className={`icon-${item.icon}`}></span>
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-[22rem] sm:max-w-[40rem]">
                {metrics.map((metric) => (
                  <div key={metric.label} className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--background-card)]">
                    <div className="text-2xl font-black text-[var(--text-primary)] mb-1">{metric.value}</div>
                    <div className="text-xs text-[var(--text-secondary)] leading-snug">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-w-0" data-aos="fade-up" data-aos-delay="120">
              <div className="relative mx-auto max-w-md">
                <div className="aspect-[4/5] rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--background-card)] shadow-xl">
                  <img
                    src="/trickle/assets/yogu2.jpg"
                    alt="Yogesh Chauhan"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-lg bg-[var(--background-card)] border border-[var(--border-color)]">
                    <div className="flex items-center gap-2 text-[var(--accent-color)] font-semibold mb-1">
                      <span className="icon-graduation-cap"></span>
                      Education
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-0">
                      MCA Data Science, DSVV Haridwar
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--background-card)] border border-[var(--border-color)]">
                    <div className="flex items-center gap-2 text-[var(--accent-secondary)] font-semibold mb-1">
                      <span className="icon-trophy"></span>
                      Recognition
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-0">
                      Hackathon winner and state-level finalist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}
