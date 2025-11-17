import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: "Behavior Choice Game",
      ageRange: "Ages 5-13",
      description: "Learn correct behavior choices through interactive games, with instant feedback and scoring for each choice.",
      icon: "🎮"
    },
    {
      title: "Emotional Management",
      ageRange: "Ages 5-13",
      description: "Learn how to identify and manage emotions in the game, developing healthy ways to express feelings.",
      icon: "😊"
    },
    {
      title: "Social Skills Development",
      ageRange: "Ages 5-13",
      description: "Learn how to get along with others and solve problems through different scenario choices.",
      icon: "🤝"
    },
    {
      title: "Family Interaction",
      ageRange: "All Ages",
      description: "Parents can play games with children, discussing and learning correct behaviors together.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Free to Play",
      ageRange: "Everyone",
      description: "No registration required, start playing anytime, easily learn behavior choices.",
      icon: "✨"
    }
  ]

  return (
    <section className="services">
      <div className="container">
        <div className="services-header">
          <h2>Learn through games<br />Develop correct behavior habits</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <div className="service-badge">{service.ageRange}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="services-cta">
          <Link href="/game" className="btn-primary btn-large">
            Start Game Now
          </Link>
          <p>Free to play, suitable for all children and parents.</p>
        </div>
      </div>
    </section>
  )
}

