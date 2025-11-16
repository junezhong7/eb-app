import Head from 'next/head'
import Layout from '@/components/Layout'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Emotional Balance</title>
        <meta name="description" content="Learn about Emotional Balance Centres and our mission to provide empathy in action, empowering lives." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <div className="about-page">
          <div className="container">
            <h1 className="page-title">About Emotional Balance Centres</h1>
            <div className="about-content">
              <section className="about-section">
                <h2>Empathy in Action, Empowering Lives</h2>
                <p>
                  Marcon Emotional Balance Centres is a registered NDIS provider delivering personalised, 
                  high-quality supports that empower individuals with disabilities to live independently, 
                  safely, and with purpose.
                </p>
              </section>

              <section className="about-section">
                <h2>EB Kids and Youth</h2>
                <p>
                  EB Kids and Youth delivers specialised programs for children and young people, 
                  parenting programs for children with disabilities, training for early childhood educators, 
                  and family-focused services including family and divorce counselling.
                </p>
              </section>

              <section className="about-section">
                <h2>EB Care</h2>
                <p>
                  EB Care is a registered NDIS provider delivering personalised, high-quality supports 
                  that empower individuals with disabilities to live independently, safely, and with purpose.
                </p>
              </section>

              <section className="about-section">
                <h2>EB At Work</h2>
                <p>
                  EB at Work provides professional services including consulting, training, 
                  Employee Assistance Programs (EAP), and tailored workplace solutions to support 
                  organisational wellbeing and performance.
                </p>
              </section>

              <section className="contact-info">
                <h2>Contact Us</h2>
                <p><strong>Email:</strong> reception@emotionalbalance.com.au</p>
                <p><strong>Phone:</strong> (07) 5612 5751</p>
                <p><strong>Hours:</strong> Monday, Tuesday, Wednesday, and Thursday. 8:00am - 4:00pm</p>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

