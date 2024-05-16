import { Account, User as AuthUser, AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import User from '@/features/user/model/User'
import connect from '@/common/db/db-config'
import { authService } from './authService'
import { decodeToken } from './token'

export const authOptions: any = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials: any): Promise<any> {
                // await connect();
                try {
                    const res = await authService.login(credentials)
                    if (res.success && res.token) {
                        const user = await decodeToken(res.token)
                        return {
                            ...user,
                            token: res.token,
                        }
                    }
                } catch (err: any) {
                    throw new Error(err)
                }
            },
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? '',
        }),
        // ...add more providers here
    ],
    callbacks: {
        async signIn({ user, account }: { user: string; account: Account }) {
            if (account?.provider == 'credentials') {
                return true
            }

            // if (account?.provider == "github") {
            //   await connect();
            //   try {
            //     const existingUser = await User.findOne({ email: user.email });
            //     if (!existingUser) {
            //       const newUser = new User({
            //         email: user.email,
            //       });

            //       await newUser.save();
            //       return true;
            //     }
            //     return true;
            //   } catch (err) {
            //     console.log("Error saving user", err);
            //     return false;
            //   }
            // }

            return null
        },

        async jwt({ token, user }: any) {
            if (user) {
                token.user = user
                return token
            }
            return token
        },

        async session(context: any) {
            const { session, token } = context
            session.user = token?.user
            return session
        },
    },
    session: {
        strategy: 'jwt',
    },
    debug: process.env.NODE_ENV !== 'production',
}
