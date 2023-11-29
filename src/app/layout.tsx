import type { Metadata } from 'next'
import { Header } from '@/layouts';
import { NavBar } from '@/components';
import '@/styles/index.scss';


export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'By BUATHIER Tom',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <NavBar />
        {children}
      </body>
    </html>
  )
}
