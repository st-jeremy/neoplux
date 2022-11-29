import Head from 'next/head';


export default function Home() {

  // const [ session, loading ] = useSession();

  return (
    <div>
      <Head>
        <title>Neoplux</title>
        <meta name="description" content="Neoplux Swim Academy" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <h1>Hi everyone</h1>
      </main>
    </div>
  )
}
