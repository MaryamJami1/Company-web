import type { Metadata } from "next";
import { Orbitron, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ideas Assemble | Premium Digital Design & Branding Agency",
    template: "%s | Ideas Assemble"
  },
  description: "Ideas Assemble is a premium digital design agency specializing in cinematic branding, high-performance website design, 3D animation, and Amazon marketplace growth. Forging high-performance digital identities with precision.",
  keywords: ["Digital Design", "Branding Agency", "Website Design", "3D Animation", "Amazon Private Label", "Amazon Wholesale", "Ideas Assemble", "Logo Design", "Digital Identity"],
  authors: [{ name: "Ideas Assemble" }],
  creator: "Ideas Assemble",
  metadataBase: new URL("https://www.ideasassemble.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ideasassemble.com",
    title: "Ideas Assemble | Premium Digital Design & Branding Agency",
    description: "Forging high-performance digital identities. Premium branding, web design, and animation solutions.",
    siteName: "Ideas Assemble",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ideas Assemble - Digital Innovation Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ideas Assemble | Premium Digital Design & Branding Agency",
    description: "Forging high-performance digital identities. Premium branding, web design, and animation solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${montserrat.variable} antialiased`}
      >
        <div className="scan-lines"></div>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
