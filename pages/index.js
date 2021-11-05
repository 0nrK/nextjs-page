import Head from 'next/head'
import Layout, { siteTitle } from './components/layout'
import Info from './components/Info'
import utilStyles from './styles/utils.module.css'
import Posts from './components/Posts'

export default function Home() {
  return (
    <div className="max-w-5xl	m-auto">
      <Head>
        <title>John Doe | Home Page</title>
      </Head>
      <section>
        <Info/>
        <Posts/>
        
      </section>
    </div>
  )
}