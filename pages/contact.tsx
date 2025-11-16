import Head from 'next/head'
import Layout from '@/components/Layout'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Emotional Balance</title>
        <meta name="description" content="Get in touch with Emotional Balance Centres for children's psychology counseling and behavior support services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <div className="contact-page">
          <div className="container">
            <h1 className="page-title">Contact Us</h1>
            <div className="contact-content">
              <div className="contact-form-wrapper">
                <h2>Interested in working together?</h2>
                <p>Fill out some info and we will be in touch shortly. We can&apos;t wait to hear from you!</p>
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={6} required></textarea>
                  </div>
                  <button type="submit" className="btn-primary">Send Message</button>
                </form>
              </div>
              <div className="contact-info-wrapper">
                <h2>Get in Touch</h2>
                <div className="contact-details">
                  <p><strong>Email:</strong></p>
                  <p><a href="mailto:reception@emotionalbalance.com.au">reception@emotionalbalance.com.au</a></p>
                  
                  <p><strong>Phone:</strong></p>
                  <p><a href="tel:+61756125751">(07) 5612 5751</a></p>
                  
                  <p><strong>Hours:</strong></p>
                  <p>Monday, Tuesday, Wednesday, and Thursday<br />8:00am - 4:00pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

