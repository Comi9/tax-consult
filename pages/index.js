import Head from 'next/head'
import SimpleToggle from '../components/SimpleToggle'
import MyDropdown from '../components/MyDropdown'
import HeaderSection from '../components/HeaderSection'
import NavigationSection from '../components/NavigationSection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tax Consult</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationSection />

      <HeaderSection pageTitle={'Welcome'} />
    </div>
  )
}
