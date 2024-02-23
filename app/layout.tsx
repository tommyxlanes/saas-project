import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { ClerkProvider } from '@clerk/nextjs'

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-IBM-plex'
});

export const metadata: Metadata = {
  title: "Photo Ai",
  description: "AI-powered photo generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: {
        colorPrimary: '#112545'
      }
    }}>
      <html lang="en">
        <body 
          className={cn('font-IBMPlex antialiased', IBMPlex.variable)}>
            {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
