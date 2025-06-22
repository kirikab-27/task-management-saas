import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Task Management SaaS',
  description: 'A modern task management solution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}