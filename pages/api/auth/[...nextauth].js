import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.Client_ID,
      clientSecret: process.env.Client_SECRETS,
    }),
  ],
});
