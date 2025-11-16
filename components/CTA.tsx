import Link from 'next/link'

export default function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>Get started with<br />professional support today</h2>
          <p><strong>Includes access for up to four children per family.</strong></p>
          <Link href="/contact" className="btn-primary btn-large">
            Contact Us Today
          </Link>
          <p className="cta-note">Already have an account? <Link href="/contact">Get in touch</Link></p>
        </div>
      </div>
    </section>
  )
}

