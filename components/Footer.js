function Footer() {
  try {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <footer
        className="bg-[var(--background-dark)] border-t border-[var(--border-color)]"
        data-name="footer"
        data-file="components/Footer.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr_0.8fr] gap-8 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-11 h-11 rounded-lg bg-[var(--text-primary)] text-[var(--primary-color)] flex items-center justify-center font-bold">
                  YC
                </span>
                <div>
                  <h2 className="text-xl font-bold text-[var(--text-primary)]">Yogesh Chauhan</h2>
                  <p className="text-sm text-[var(--text-secondary)] mb-0">AI, Data Science and GenAI Developer</p>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed max-w-xl mb-5">
                Building practical AI systems across GenAI, RAG, computer vision, APIs, and full-stack product workflows.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { href: 'mailto:yogesh.chauhan.ai@gmail.com', icon: 'mail' },
                  { href: 'https://www.linkedin.com/in/yogesh-chauhan-40650523b/', icon: 'linkedin' },
                  { href: 'https://github.com/techyogeshchauhan', icon: 'github' },
                  { href: 'https://x.com/yogesh_chau_mca', icon: 'twitter' }
                ].map((link) => (
                  <a
                    key={link.icon}
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="w-10 h-10 rounded-lg border border-[var(--border-color)] bg-[var(--background-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-color)] flex items-center justify-center transition-colors"
                  >
                    <span className={`icon-${link.icon}`}></span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-[var(--text-primary)] mb-4">Navigate</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'About', id: 'about' },
                  { label: 'Skills', id: 'skills' },
                  { label: 'Experience', id: 'internship' },
                  { label: 'Projects', id: 'projects' },
                  { label: 'Architecture', id: 'architecture' },
                  { label: 'Credentials', id: 'credentials' },
                  { label: 'Contact', id: 'contact' }
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-[var(--text-primary)] mb-4">Contact</h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <a href="mailto:yogesh.chauhan.ai@gmail.com" className="flex items-center gap-2 hover:text-[var(--text-primary)] transition-colors">
                  <span className="icon-mail"></span>
                  yogesh.chauhan.ai@gmail.com
                </a>
                <a href="tel:+918004116115" className="flex items-center gap-2 hover:text-[var(--text-primary)] transition-colors">
                  <span className="icon-phone"></span>
                  +91 8004116115
                </a>
                <div className="flex items-center gap-2">
                  <span className="icon-map-pin"></span>
                  Haridwar, Uttarakhand
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-[var(--border-color)]">
            <p className="text-sm text-[var(--text-secondary)] mb-0">
              Copyright {currentYear} Yogesh Chauhan. All rights reserved.
            </p>
            <button
              onClick={() => scrollToSection('home')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--background-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-semibold"
            >
              <span className="icon-arrow-up"></span>
              Back to top
            </button>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
