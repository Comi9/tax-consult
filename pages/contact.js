import Head from 'next/head'
import HeaderSection from '../components/HeaderSection'
import NavigationSection from '../components/NavigationSection'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationSection />
      <HeaderSection pageTitle={'Contact'} />
    </div>
  )
}
