import Link from 'next/link'

export default function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>Start Playing<br />Our Interactive Games</h2>
          <p><strong>Free to play, no registration required, start anytime!</strong></p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <Link href="/game" className="btn-primary btn-large">
              Choice Game
            </Link>
            <Link href="/drag-game" className="btn-primary btn-large">
              Drag Game
            </Link>
          </div>
          <p className="cta-note">Want to learn more? <Link href="/about">View About Us</Link></p>
        </div>
      </div>
    </section>
  )
}

