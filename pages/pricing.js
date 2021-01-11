import Head from 'next/head'
import HeaderSection from '../components/HeaderSection'
import NavigationSection from '../components/NavigationSection'

export default function Pricing() {
  return (
    <div>
      <Head>
        <title>Pricing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationSection />
      <HeaderSection pageTitle={'Pricing'} />
    </div>
  )
}
