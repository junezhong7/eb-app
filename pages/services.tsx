import Head from 'next/head'
import Layout from '@/components/Layout'

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Emotional Balance</title>
        <meta name="description" content="Behavior Choice Game - Help children learn correct behavior choices through interactive games, developing emotional management and social skills." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <div className="services-page">
          <div className="container">
            <h1 className="page-title">Our Services</h1>
            <div className="services-content">
              <section className="service-detail">
                <h2>Behavior Choice Game</h2>
                <p className="age-range">Ages 5-13</p>
                <p>
                  Help children learn correct behavior choices through fun interactive games. The game includes multiple daily life scenarios,
                  each with different behavior options. After making a choice, children immediately receive feedback and scores to help them understand
                  the consequences of different behaviors. The game is designed to be fun and engaging, allowing children to learn while playing.
                </p>
                <p>
                  <strong>Features:</strong>
                </p>
                <ul style={{ marginLeft: '2rem', lineHeight: '2' }}>
                  <li>Instant feedback system - Each choice has detailed feedback</li>
                  <li>Scoring mechanism - Different behaviors have different scores, encouraging better choices</li>
                  <li>Rich scenarios - Covers emotional management, social skills, honesty, and more</li>
                  <li>Results summary - Provides detailed choice review and total score after the game</li>
                </ul>
              </section>

              <section className="service-detail">
                <h2>Emotional Management Learning</h2>
                <p className="age-range">Ages 5-13</p>
                <p>
                  Learn how to identify and manage emotions in the game. Through different scenario choices, children can learn:
                </p>
                <ul style={{ marginLeft: '2rem', lineHeight: '2' }}>
                  <li>How to express their feelings</li>
                  <li>How to handle anger and frustration in healthy ways</li>
                  <li>How to seek help and support</li>
                  <li>How to understand others&apos; emotions</li>
                </ul>
              </section>

              <section className="service-detail">
                <h2>Social Skills Development</h2>
                <p className="age-range">Ages 5-13</p>
                <p>
                  Through different scenarios in the game, help children learn important social skills:
                </p>
                <ul style={{ marginLeft: '2rem', lineHeight: '2' }}>
                  <li>How to get along with others</li>
                  <li>How to resolve conflicts</li>
                  <li>How to share and wait</li>
                  <li>How to help others</li>
                </ul>
              </section>

              <section className="service-detail">
                <h2>Family Interactive Learning</h2>
                <p className="age-range">All Ages</p>
                <p>
                  This game is perfect for parents and children to play together. Parents can:
                </p>
                <ul style={{ marginLeft: '2rem', lineHeight: '2' }}>
                  <li>Discuss different choices with children</li>
                  <li>Help children understand the meaning of feedback</li>
                  <li>Apply knowledge learned in the game to daily life</li>
                  <li>Observe children&apos;s thinking patterns and decision-making processes</li>
                </ul>
              </section>

              <section className="service-detail">
                <h2>Free to Play</h2>
                <p>
                  Our behavior choice game is completely free and requires no registration. Start playing anytime,
                  allowing children to learn correct behaviors in a relaxed and enjoyable atmosphere.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  <strong>To learn more about our counseling services, please</strong> <a href="/contact" style={{ color: 'var(--primary-color)' }}>contact us</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

