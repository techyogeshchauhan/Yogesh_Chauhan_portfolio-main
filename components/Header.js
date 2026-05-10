function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    const navItems = [
      { id: 'home', label: 'Home', icon: 'home' },
      { id: 'about', label: 'About', icon: 'user' },
      { id: 'skills', label: 'Skills', icon: 'code' },
      { id: 'internship', label: 'Experience', icon: 'briefcase' },
      { id: 'projects', label: 'Projects', icon: 'folder' },
      { id: 'credentials', label: 'Credentials', icon: 'award' }
    ];

    React.useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 16);
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    React.useEffect(() => {
      const savedMode = localStorage.getItem('darkMode');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(savedMode !== null ? savedMode === 'true' : prefersDark);
    }, []);

    React.useEffect(() => {
      document.documentElement.classList.toggle('dark', isDarkMode);
      localStorage.setItem('darkMode', String(isDarkMode));
    }, [isDarkMode]);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setIsMenuOpen(false);
    };

    return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--background-card)]/95 border-b border-[var(--border-color)] shadow-sm backdrop-blur-xl py-3'
            : 'bg-[var(--primary-color)]/80 backdrop-blur-md py-4'
        }`}
        data-name="header"
        data-file="components/Header.js"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 group text-left"
              aria-label="Go to home section"
            >
              <span className="w-10 h-10 rounded-lg bg-[var(--text-primary)] text-[var(--primary-color)] flex items-center justify-center font-bold text-base">
                YC
              </span>
              <span className="hidden sm:block">
                <span className="block text-base lg:text-lg font-bold text-[var(--text-primary)]">
                  Yogesh Chauhan
                </span>
                <span className="block text-xs text-[var(--text-secondary)]">
                  AI, Data Science & GenAI
                </span>
              </span>
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg hover:bg-[var(--background-dark)] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 rounded-lg bg-[var(--text-primary)] text-[var(--primary-color)] text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Contact
              </button>
              <button
                onClick={() => setIsDarkMode((value) => !value)}
                className="w-10 h-10 rounded-lg border border-[var(--border-color)] bg-[var(--background-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center justify-center"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <span className={isDarkMode ? 'icon-sun text-lg' : 'icon-moon text-lg'}></span>
              </button>
            </div>

            <div className="lg:hidden fixed top-4 left-16 z-[60] flex items-center gap-2 shrink-0">
              <button
                onClick={() => setIsMenuOpen((value) => !value)}
                className="w-10 h-10 rounded-lg bg-[var(--text-primary)] text-[var(--primary-color)] flex items-center justify-center"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <span className={isMenuOpen ? 'icon-x text-lg' : 'icon-menu text-lg'}></span>
              </button>
            </div>
          </div>

          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[32rem] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="bg-[var(--background-card)] border border-[var(--border-color)] rounded-lg p-2 shadow-lg">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--background-dark)] transition-colors text-left"
                >
                  <span className={`icon-${item.icon}`}></span>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-2 px-3 py-3 rounded-lg bg-[var(--text-primary)] text-[var(--primary-color)] font-semibold flex items-center justify-center gap-2"
              >
                <span className="icon-mail"></span>
                Contact
              </button>
              <button
                onClick={() => setIsDarkMode((value) => !value)}
                className="w-full mt-2 px-3 py-3 rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-semibold flex items-center justify-center gap-2"
              >
                <span className={isDarkMode ? 'icon-sun' : 'icon-moon'}></span>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}
