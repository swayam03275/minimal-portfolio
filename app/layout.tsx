import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from 'sonner'
import { Analytics } from "@vercel/analytics/next"

const inter = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Swayam Agarwal - Portfolio",
    template: "%s | Swayam Agarwal Portfolio",
  },
  description: "Full Stack Developer Portfolio of Swayam — building scalable, elegant web apps with React, Node.js, and design precision.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js",
    "Portfolio",
    "Swayam Agarwal",
    "Web Developer",
    "UI/UX Designer",
  ],
  authors: [{ name: "Swayam Agarwal", url: "https://github.com/swayam03275" }],
  creator: "Swayam Agarwal",
  metadataBase: new URL("https://minimal-portfolio-sw.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://minimal-portfolio-ps.vercel.app",
    title: "Swayam Agarwal - Portfolio",
    description:
      "Explore the portfolio of Swayam, a full stack developer focused on performance, scalability, and clean UI/UX.",
    siteName: "Swayam Agarwal Portfolio",
    images: [
      {
        url: "/og_bannerr.jpeg",
        width: 1200,
        height: 630,
        alt: "Swayam Agarwal Portfolio",
      },
    ],
    locale: "India",
  },
  
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="ydHSzattedGcB-5-HAZYQTflySCqIgWSVqZD8wgedEo" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
