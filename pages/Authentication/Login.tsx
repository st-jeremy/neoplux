import { NextPage } from "next"; 
import { Box, Input } from '@chakra-ui/react';
import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";

interface Props {}

const Login : NextPage = (props): JSX.Element =>{
  const [userInfo, setUserInfo] = useState({ email: '', password: ''})

  const handleSubmit: FormEventHandler<HTMLFormElement> =async (e) =>{
    e.preventDefault();
    await signIn('credentials',{
      email:userInfo.email,
      password: userInfo.password
    })
  }

  return(
    <>
      <Box textAlign={'center'} margin={'auto'} pt={200} >
        <form onSubmit={ handleSubmit }>
          <h1><b>Neoplux Login</b></h1>
          <br />

          <Input 
            type="email" 
            value={userInfo.email} 
            onChange={({target}) => 
              setUserInfo({...userInfo, email: target.value})
            }
            name="email" 
            id="email" 
            placeholder="Email address" 
            width={400} 
            marginBottom={30} />
            <br />


          <Input 
            type="password"  
            value={userInfo.password} 
            onChange={({target}) => 
              setUserInfo({...userInfo, password: target.value})
            }
            name="password" id="" 
            placeholder="Password" 
            width={400} 
            marginBottom={30} 
          />
          <br />

          <Input 
            type="submit" 
            value="Login" 
            width={300} 
            color='teal' 
            bgColor={'blackAlpha.100'} 
          />
        </form>
      </Box>
  </>
  )
}
export default Login