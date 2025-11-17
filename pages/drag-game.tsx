import Head from 'next/head'
import Layout from '@/components/Layout'
import DragGame from '@/components/DragGame'

export default function DragGamePage() {
  return (
    <>
      <Head>
        <title>Drag & Drop Game - Emotional Balance</title>
        <meta name="description" content="Learn correct behaviors through interactive drag and drop games. Drag the right choices to the box!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <div className="game-page">
          <div className="container">
            <div className="game-page-header">
              <h1>Drag & Drop Game</h1>
              <p>Drag the correct behaviors to the box! Learn which choices are good and which ones to avoid.</p>
            </div>
            <DragGame />
          </div>
        </div>
      </Layout>
    </>
  )
}

