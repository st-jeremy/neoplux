import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';

export default function Home() {

  return ( 
    <>
      <Head>
        <title>Neoplux</title>
        <meta name="description" content="Neoplux Swim Academy" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main >
        <Box fontSize={65}>
          <h1>This is the Homepage</h1>
        </Box>
        <br />

        <button onClick={ ()=>{
          signIn();
        }}>
          Login
        </button>

      </main>
    </>
  )
}
