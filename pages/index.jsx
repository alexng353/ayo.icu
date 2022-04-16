import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">
        Hello world!
        </h1>
      </main>        


    </div>
  )
}

export default Home