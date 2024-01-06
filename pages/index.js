
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Clients from '@/components/Clients'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>

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
