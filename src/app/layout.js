import './globals.css'

export const metadata = {
  title: 'Portfolio @Saharsh Shrivastava',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
