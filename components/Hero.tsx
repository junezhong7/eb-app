import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Professional Children&apos;s Psychology<br />
              Counseling & Behavior Support
            </h1>
            <p className="hero-subtitle">
              Empowering children and families with empathy, care, and evidence-based support. 
              Specialized programs for children aged 2-13.
            </p>
            <p className="hero-description">
              <strong>Includes access for up to four children per family.</strong>
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn-primary btn-large">
                Get Started Today
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
            <p className="hero-note">
              Already have an account? <Link href="/contact">Contact us</Link>
            </p>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
              <p>Professional Counseling Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

