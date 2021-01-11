import Head from 'next/head'
import HeaderSection from '../components/HeaderSection'
import NavigationSection from '../components/NavigationSection'

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationSection />
      <HeaderSection pageTitle={'About'} />
    </div>
  )
}
