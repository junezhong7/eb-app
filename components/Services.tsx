import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: "Individual Counseling",
      ageRange: "Ages 2-13",
      description: "One-on-one therapeutic sessions tailored to address specific emotional, behavioral, and developmental needs.",
      icon: "👶"
    },
    {
      title: "Behavior Support",
      ageRange: "Ages 3-10",
      description: "Structured programs that teach positive behavior strategies, emotional regulation, and social skills.",
      icon: "🎯"
    },
    {
      title: "Family Therapy",
      ageRange: "All Ages",
      description: "Family-centered sessions that strengthen relationships and improve communication within the family unit.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Parenting Support",
      ageRange: "For Parents",
      description: "Training and guidance for parents of children with special needs, including NDIS support coordination.",
      icon: "📚"
    },
    {
      title: "School Readiness",
      ageRange: "Ages 4-7",
      description: "Programs designed to help children develop the social, emotional, and behavioral skills needed for school success.",
      icon: "🎓"
    }
  ]

  return (
    <section className="services">
      <div className="container">
        <div className="services-header">
          <h2>Your comprehensive access to<br />all our professional programs</h2>
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
          <Link href="/contact" className="btn-primary btn-large">
            Get Started Today
          </Link>
          <p>Includes access for up to four children per family.</p>
        </div>
      </div>
    </section>
  )
}

