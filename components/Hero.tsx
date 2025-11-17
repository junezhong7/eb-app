import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Behavior Choice Game<br />
              Learn to Make Better Decisions
            </h1>
            <p className="hero-subtitle">
              Help children learn correct behavior choices through fun interactive games, developing emotional management and social skills. 
              Suitable for children aged 5-13.
            </p>
            <p className="hero-description">
              <strong>Choose different behaviors, get instant feedback, and see how many points you can score!</strong>
            </p>
            <div className="hero-cta">
              <Link href="/game" className="btn-primary btn-large">
                Choice Game
              </Link>
              <Link href="/drag-game" className="btn-primary btn-large">
                Drag Game
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
            <p className="hero-note">
              Free to play, no registration required
            </p>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
              <p>🎮 Interactive Learning Game</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

