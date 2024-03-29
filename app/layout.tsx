import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ConvexClientProvider } from "@/components/providers/convex-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Noteable',
  description: 'The connected workspace where better, faster work happens.',

  // memo '' single quote doesn't work here need to use double quote "
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.png",
        href: "/logo.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.png",
        href: "/logo-dark.png",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>

      <ConvexClientProvider>
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange

      // Important reminder: you can always choose whatever theme or write anything in storagekey just make sure its unique
      storageKey="noteable-theme"
      >
      {children}
      </ThemeProvider>
      </ConvexClientProvider>
      <SpeedInsights />
      </body>
    </html>
  );
}
