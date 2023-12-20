import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Vocaal ensemble Noctet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Vocaal ensemble Noctet!" />
        <p className="description">
          Wij zijn vocaal ensemble Noctet
        </p>
      </main>

      <Footer />
    </div>
  )
}
