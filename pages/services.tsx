import Head from 'next/head'
import Layout from '@/components/Layout'

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - Emotional Balance</title>
        <meta name="description" content="Comprehensive children's psychology counseling and behavior support services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <div className="services-page">
          <div className="container">
            <h1 className="page-title">Our Services</h1>
            <div className="services-content">
              <section className="service-detail">
                <h2>Individual Counseling</h2>
                <p className="age-range">Ages 2-13</p>
                <p>
                  One-on-one therapeutic sessions tailored to address specific emotional, behavioral, 
                  and developmental needs. Our experienced psychologists use evidence-based approaches 
                  to help children understand and manage their emotions, build resilience, and develop 
                  healthy coping strategies.
                </p>
              </section>

              <section className="service-detail">
                <h2>Behavior Support</h2>
                <p className="age-range">Ages 3-10</p>
                <p>
                  Structured programs that teach positive behavior strategies, emotional regulation, 
                  and social skills. We work with children who may be experiencing behavioral challenges 
                  at home, school, or in social settings, providing personalized support and practical tools.
                </p>
              </section>

              <section className="service-detail">
                <h2>Family Therapy</h2>
                <p className="age-range">All Ages</p>
                <p>
                  Family-centered sessions that strengthen relationships and improve communication 
                  within the family unit. We help families navigate challenges together, build stronger 
                  connections, and create a supportive home environment.
                </p>
              </section>

              <section className="service-detail">
                <h2>Parenting Support</h2>
                <p className="age-range">For Parents</p>
                <p>
                  Training and guidance for parents of children with special needs, including NDIS 
                  support coordination. We provide resources, strategies, and ongoing support to help 
                  parents feel confident and equipped in supporting their child&apos;s development.
                </p>
              </section>

              <section className="service-detail">
                <h2>School Readiness</h2>
                <p className="age-range">Ages 4-7</p>
                <p>
                  Programs designed to help children develop the social, emotional, and behavioral 
                  skills needed for school success. We prepare children for the transition to school 
                  by building confidence, emotional regulation, and positive peer interactions.
                </p>
              </section>

              <section className="service-detail">
                <h2>NDIS Support</h2>
                <p>
                  As a registered NDIS provider, we offer comprehensive support services for children 
                  with disabilities. Our team can help coordinate NDIS plans, provide therapeutic 
                  supports, and work with families to achieve their goals.
                </p>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

