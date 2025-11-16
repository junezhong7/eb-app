import Head from 'next/head'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Head>
        <title>Emotional Balance - Children&apos;s Psychology Counseling & Behavior Support</title>
        <meta name="description" content="Professional children's psychology counseling and behavior support services. Empowering children and families with empathy and care." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Features />
        <Services />
        <Testimonials />
        <CTA />
      </Layout>
    </>
  )
}

