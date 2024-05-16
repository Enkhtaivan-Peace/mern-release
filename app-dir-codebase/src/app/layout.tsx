import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.scss'
import SessionProvider from '@/common/auth/SessionProvider'
import { getServerSession } from 'next-auth'
import { ThemeProvider } from '@/common/theme/themeProvider'
import { cn } from '@/common/utils'
import ReactQueryProvider from '@/common/tanstack/ReactQuery'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        default: 'App directory codebase',
        template: `%s | Explorer`,
    },
    description: 'Nextjs 14 is awesome!!!',
}

export default async function RootLayout({ children }: React.PropsWithChildren) {
    const session = await getServerSession()
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(' antialiased', inter.className)}>
                <ThemeProvider>
                    <SessionProvider session={session}>
                        <ReactQueryProvider>
                            {children}
                            <Toaster />
                        </ReactQueryProvider>
                    </SessionProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
