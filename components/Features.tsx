export default function Features() {
  const features = [
    {
      title: "Evidence-Based Approach",
      description: "Our programs are based on proven therapeutic methods and match your child's individual needs"
    },
    {
      title: "Comprehensive Assessment",
      description: "Detailed evaluations and personalized treatment plans for your child's growth"
    },
    {
      title: "Family-Centered Care",
      description: "We involve parents and caregivers in the therapeutic process for holistic support"
    },
    {
      title: "Progress Tracking",
      description: "Regular reports and updates let you track your child's development and milestones"
    },
    {
      title: "Flexible Sessions",
      description: "Online and in-person options provide greater accessibility for families"
    },
    {
      title: "Experienced Team",
      description: "Qualified psychologists and counselors dedicated to your child's wellbeing"
    }
  ]

  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <h2>Why you and your child will love<br />Emotional Balance</h2>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <div className="icon-placeholder"></div>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

