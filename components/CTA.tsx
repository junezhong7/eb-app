import Link from 'next/link'

export default function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>Start the<br />Behavior Choice Game</h2>
          <p><strong>Free to play, no registration required, start anytime!</strong></p>
          <Link href="/game" className="btn-primary btn-large">
            Start Game
          </Link>
          <p className="cta-note">Want to learn more? <Link href="/about">View About Us</Link></p>
        </div>
      </div>
    </section>
  )
}

