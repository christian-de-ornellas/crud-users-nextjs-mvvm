import { Providers } from '@/lib/queryClient'
import '../styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <Providers>{children}</Providers>
        </body>
        </html>
    )
}