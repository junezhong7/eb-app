import Head from 'next/head'
import Layout from '@/components/Layout'
import BehaviorGame from '@/components/BehaviorGame'

export default function Game() {
  return (
    <>
      <Head>
        <title>Behavior Choice Game - Emotional Balance</title>
        <meta name="description" content="Learn correct behavior choices through interactive games, developing children's emotional management and social skills." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <div className="game-page">
          <div className="container">
            <div className="game-page-header">
              <h1>Behavior Choice Game</h1>
              <p>Learn how to make better decisions by choosing different behaviors. Each choice has different points - see how many you can score!</p>
            </div>
            <BehaviorGame />
          </div>
        </div>
      </Layout>
    </>
  )
}

