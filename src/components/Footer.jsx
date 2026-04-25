function Footer() {
  return (
    <>
      <section className="cta card" aria-label="Career call to action">
        <h2 className="heading-md">Ready to advance your biomedical career?</h2>
        <p>Bangun roadmap pembelajaran, riset, dan kolaborasi profesional bersama NIBM 7.0.</p>
        <a href="#topics" className="btn-primary">Explore all topics</a>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3>Platform</h3>
            <a href="#about">About</a>
            <a href="#paths">Learning Paths</a>
            <a href="#dashboard">Dashboard</a>
          </div>
          <div>
            <h3>Resources</h3>
            <a href="#datasets">Datasets</a>
            <a href="#mentors">Mentors</a>
            <a href="#research">Research Hub</a>
          </div>
          <div>
            <h3>Stay in the loop</h3>
            <div className="newsletter">
              <input type="email" placeholder="your@email.com" aria-label="Newsletter email" />
              <button className="btn-primary">Subscribe</button>
            </div>
            <p>Contact: hello@nibm7.io</p>
          </div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} NiBTM 7.0. Built for education, collaboration, and future biomedical innovation.</div>
      </footer>
    </>
  )
}

export default Footer
