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
        <title>Emotional Balance - Behavior Choice Game | Children&apos;s Emotional Learning</title>
        <meta name="description" content="Help children learn correct behavior choices through interactive games, developing emotional management and social skills. Free to play, suitable for ages 5-13." />
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

