
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Clients from '@/components/Clients'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="max-w-screen-2xl m-auto">

      <Head>
        <title>Gamespy</title>
      </Head>
      <Header />

      <main>
        <Hero />
      </main>

      <Clients />

      <Footer />
    </div>
  )
}
