export default function Features() {
  const features = [
    {
      title: "Interactive Game Learning",
      description: "Children learn correct behaviors through fun choice games while playing"
    },
    {
      title: "Instant Feedback",
      description: "Every choice gets immediate feedback to help children understand the consequences of their actions"
    },
    {
      title: "Scoring System",
      description: "Different behavior choices have different scores, encouraging children to make better decisions"
    },
    {
      title: "Rich Scenarios",
      description: "Covers various situations in daily life to help children handle different circumstances"
    },
    {
      title: "Free to Play",
      description: "No registration required, start playing anytime, easy and convenient"
    },
    {
      title: "Family-Friendly",
      description: "Parents can play together with children to learn emotional management and social skills together"
    }
  ]

  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <h2>Why children and parents love<br />this behavior choice game</h2>
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

