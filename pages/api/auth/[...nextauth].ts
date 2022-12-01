import NextAuth, {NextAuthOptions} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { type } from "os";

const authOptions: NextAuthOptions = {
  session:{
    strategy: 'jwt'
  },
  providers: [
    Credentials({
      type: "credentials",
      credentials: {
        // email:{ label:"Email", type: 'email', placeholder: 'Email Address'  },
        // password:{ label: "Password", type: 'password', placeholder: '*******'}
      },
      authorize( credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (email === 'jay@gmail.com' && password !== '1234'){
          return null
        }
        return { id: '1234', name: 'Jeremy Smith', email: 'jay@gmail.com'}
      },
    }),
  ],
  pages:{
    signIn: '/Authentication/Login',
    // error: '/Authentication/Error',
    // signOut: '/Authentication/Logout'
  }
};

export default NextAuth(authOptions)