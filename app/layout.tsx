import type { Metadata } from 'next'
import { Varela } from 'next/font/google'
import { Dancing_Script } from 'next/font/google'
import './globals.css'

const varela = Varela( {weight: '400',
subsets: ['latin'],
display: 'swap',})

const dancing = Dancing_Script( {weight: '400', subsets: ['latin'], display: 'swap',})


export const metadata: Metadata = {
  title: 'Superlist',
  description: 'Clone of SuperList Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={varela.className}>{children}</body>
    </html>
  )
}
