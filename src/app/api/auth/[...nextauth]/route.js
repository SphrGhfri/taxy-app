import axios from "axios";
import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/dist/client/components/headers";


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'credentials',
            // The credentials property is used to generate a suitable form on the sign in page.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith", value: "" },
                password: { label: "Password", type: "password", value: "" }
            },
            async authorize(credentials) {
                try {
                    const login_resp = await postAuthLogin(
                        {
                            "email": "test@modelic.ai",
                            "password": "password123"
                        });

                    console.log('DATA', login_resp)

                    const user = login_resp.data.user;//{ id: "1", name: "J Smith", email: "jsmith@example.com" }

                    const cookies = login_resp.headers['set-cookie']
                    

                    // res.setHeader('Set-Cookie', cookies)


                    return user;

                } catch (e) {

                    console.log(e?.response?.data)
                    throw new Error(e?.response?.data?.detail || "There was an error on user authentication");
                }
            }
        })
    ],
    pages: {
        // signIn: '/signin',
        // signOut: '/',
        // error: '/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            // console.log({credentials});
            return true
        },
        async redirect({ url, baseUrl }) {
            // console.log("url ", url)
            // console.log("baseurl ", baseUrl)
            // return Promise.resolve(baseUrl + "/dashboard")
            return Promise.resolve(baseUrl)
        }        
    },

});

export { handler as GET, handler as POST };

export const postAuthLogin = async (body) => {
    const res = await axios.post("https://dev-api.modelic.ai/auth/login", body, {
        withCredentials: true,
    })
    // const res = await axios("https://dev-api.modelic.ai/auth/login", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",

    //     },
    //     body: JSON.stringify(body),
    //     credentials: 'same-origin'
    // })
    return res
}