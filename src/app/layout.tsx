import type { Metadata } from 'next'
import { Header } from '@/layouts';
import { LanguageSwitcher, NavBar } from '@/components';
import { LanguageProvider } from '@/contexts/LanguageContext';
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
        <LanguageProvider>
          <Header />
          {children}
          <NavBar />
          <LanguageSwitcher />
        </LanguageProvider>
      </body>
    </html>
  )
}
