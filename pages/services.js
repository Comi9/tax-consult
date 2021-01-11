import Head from 'next/head'
import HeaderSection from '../components/HeaderSection'
import NavigationSection from '../components/NavigationSection'

export default function Services() {
  return (
    <div>
      <Head>
        <title>Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationSection />
      <HeaderSection pageTitle={'Services'} />
    </div>
  )
}
