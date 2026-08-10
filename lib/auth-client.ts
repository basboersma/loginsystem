import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://loginsystem-ruddy.vercel.app"
})