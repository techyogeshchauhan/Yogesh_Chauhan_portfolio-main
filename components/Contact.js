function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      message: '',
      projectTypes: []
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState('');

    const projectTypes = ['Machine Learning', 'Computer Vision', 'GenAI/RAG', 'Data Dashboard', 'Full-stack AI', 'Consulting'];

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((previous) => ({
        ...previous,
        [name]: value
      }));
    };

    const handleTypeToggle = (type) => {
      setFormData((previous) => {
        const exists = previous.projectTypes.includes(type);
        return {
          ...previous,
          projectTypes: exists
            ? previous.projectTypes.filter((item) => item !== type)
            : [...previous.projectTypes, type]
        };
      });
    };

    const isEmailJSAvailable = () => typeof emailjs !== 'undefined' && emailjs !== null;

    const sendViaMailto = () => {
      const subject = encodeURIComponent('Portfolio project inquiry');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nProject Types: ${formData.projectTypes.join(', ') || 'Not specified'}\n\nMessage: ${formData.message}`
      );
      window.location.href = `mailto:yogesh.chauhan.ai@gmail.com?subject=${subject}&body=${body}`;
      return true;
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus('');

      try {
        if (!isEmailJSAvailable()) {
          sendViaMailto();
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '', projectTypes: [] });
          return;
        }

        await emailjs.send(
          'service_f37gaaa',
          'template_njpfg9a',
          {
            from_name: formData.name,
            from_email: formData.email,
            project_types: formData.projectTypes.join(', ') || 'Not specified',
            message: formData.message
          },
          'EmyjwMPqNA3YaK6xO'
        );

        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '', projectTypes: [] });
      } catch (error) {
        console.error('Error sending email:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <section
        id="contact"
        className="section-padding bg-[var(--primary-color)]"
        data-name="contact"
        data-file="components/Contact.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-sm font-semibold text-[var(--accent-color)] uppercase mb-3">
              Contact
            </p>
            <h2 className="section-title">
              Let's Build Something Useful
            </h2>
            <p className="section-subtitle">
              Open for data science projects, AI prototypes, internships, collaborations, and research-oriented builds.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6">
            <div className="space-y-4" data-aos="fade-up">
              {[
                { href: 'mailto:yogesh.chauhan.ai@gmail.com', icon: 'mail', label: 'Email', value: 'yogesh.chauhan.ai@gmail.com' },
                { href: 'tel:+918004116115', icon: 'phone', label: 'Phone', value: '+91 8004116115' },
                { href: 'https://linkedin.com/in/yogesh-chauhan-40650523b', icon: 'linkedin', label: 'LinkedIn', value: 'in/yogesh-chauhan' },
                { href: 'https://github.com/techyogeshchauhan', icon: 'github', label: 'GitHub', value: 'github/techyogeshchauhan' }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-lg border border-[var(--border-color)] bg-[var(--background-card)] hover:border-[var(--accent-color)] transition-colors"
                >
                  <span className={`icon-${item.icon} w-10 h-10 rounded-lg bg-[var(--background-dark)] text-[var(--accent-color)] flex items-center justify-center`}></span>
                  <span>
                    <span className="block text-sm text-[var(--text-secondary)]">{item.label}</span>
                    <span className="block font-semibold text-[var(--text-primary)] break-all">{item.value}</span>
                  </span>
                </a>
              ))}

              <div className="p-5 rounded-lg border border-[var(--border-color)] bg-[var(--background-card)]">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Best fit work</h3>
                <div className="flex flex-wrap gap-2">
                  {['GenAI chatbots', 'RAG systems', 'YOLO/OpenCV', 'AI dashboards', 'API backends', 'Data workflows'].map((item) => (
                    <span key={item} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-5">
                Project Inquiry
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--primary-color)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)]/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--primary-color)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)]/20"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                    Project Type
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {projectTypes.map((type) => (
                      <label
                        key={type}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition-colors text-sm ${
                          formData.projectTypes.includes(type)
                            ? 'border-[var(--accent-color)] bg-[var(--accent-color)]/10 text-[var(--text-primary)]'
                            : 'border-[var(--border-color)] text-[var(--text-secondary)]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.projectTypes.includes(type)}
                          onChange={() => handleTypeToggle(type)}
                          className="accent-[var(--accent-color)]"
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="message" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--primary-color)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)]/20 resize-none"
                    placeholder="Tell me about the problem, data, timeline, or role."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="mb-5 p-4 rounded-lg border border-[var(--accent-secondary)]/30 bg-[var(--accent-secondary)]/10 text-[var(--accent-secondary)]">
                    Message sent. I will respond as soon as possible.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-5 p-4 rounded-lg border border-red-500/30 bg-red-500/10 text-red-500">
                    Email service failed. Use the direct email link or try again.
                  </div>
                )}

                <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="icon-loader-2 animate-spin"></span>
                      Sending
                    </>
                  ) : (
                    <>
                      <span className="icon-send"></span>
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}
