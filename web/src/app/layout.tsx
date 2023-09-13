import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../styles/global.scss'

const roboto = Roboto({ 
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin-ext']
})

export const metadata: Metadata = {
  title: 'Reciclatech',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}
