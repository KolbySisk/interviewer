import Head from 'next/head'
import Button from '../components/button';

const Home = () => {
  return (
    <>
      <Head>
        <title>Interview Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button>Click me</Button>
      </main>
    </>
  )
}

export default Home;