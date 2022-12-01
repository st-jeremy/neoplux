import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { Input, Button } from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Login() {
   useSession();
   const loading = useSession()
  
  return ( 
    <>
      <Head>
        <title>Neoplux</title>
        <meta name="description" content="Neoplux Swim Academy" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main >
        <Box padding={5} >
          <Image src="/logo.png" width={ 120 } height={ 50 } alt='Logo' />
        </Box>

        <Box width={"md"} m={5} margin={'auto'} padding={5} boxShadow={'2xl'} borderRadius={10} >
          <h2>Login</h2>
          <br />

          <Input type="email" name="Email Address" id="" placeholder='Email Address' />
          <br />
          <br/>

          <Input type="password" name="password" id="" placeholder="Password" />
          <br />
          <br />

          { !loading && !useSession() &&(
            <Link href='/api/auth/signin'>
              <Button rightIcon={<BsArrowRight />} colorScheme='blue' variant='outline' alignItems={'center'} onClick={e =>{
                e.preventDefault();
                signIn();
              }} >
                Log In
              </Button>
            </Link>
          )}

          {useSession &&(
            <Link href='/api/auth/signout'>
              <Button rightIcon={<BsArrowRight />} colorScheme='blue' variant='outline' onClick={e =>{
                e.preventDefault();
                signOut();
              }} >
                Log Out
              </Button>
            </Link>
          )}
        </Box>
      </main>
    </>
  )
}
