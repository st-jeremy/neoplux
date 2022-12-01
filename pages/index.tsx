import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Neoplux</title>
        <meta name="description" content="Neoplux Swim Academy" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main >
        <Box margin={'2%'}>
          <Image src="/logo.png" width={ 50 } height={ 50 } alt='Logo' />
        </Box>

        <Box bg={'blue'} height={ 600 } margin={ '10%' } padding={ '5%'}>
          <label htmlFor="Github">GitHub Sign In</label>
          <button>Sign In</button>
        </Box>
      </main>

    </div>
  )
}
