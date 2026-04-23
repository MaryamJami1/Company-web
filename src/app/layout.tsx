import type { Metadata } from "next";
import { Orbitron, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
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
  description: "Ideas Assemble is a premier digital design agency specializing in cinematic branding, custom web development, and Amazon marketplace growth strategies.",
  keywords: ["Digital Design", "Branding Agency", "Website Design", "3D Animation", "Amazon Private Label", "Amazon Wholesale", "Ideas Assemble", "Logo Design", "Digital Identity"],
  authors: [{ name: "Ideas Assemble" }],
  creator: "Ideas Assemble",
  metadataBase: new URL("https://www.ideasassemble.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ideasassemble.com",
    title: "Ideas Assemble | Premium Digital Design & Branding Agency",
    description: "Ideas Assemble is a premier digital design agency specializing in cinematic branding, custom web development, and Amazon marketplace growth strategies.",
    siteName: "Ideas Assemble",
    images: [
      {
        url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Ideas Assemble - Digital Innovation Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ideas Assemble | Premium Digital Design & Branding Agency",
    description: "Ideas Assemble is a premier digital design agency specializing in cinematic branding, custom web development, and Amazon marketplace growth strategies.",
    images: ["https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop"],
  },
  alternates: {
    canonical: "https://www.ideasassemble.com",
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
  verification: {
    google: "oyCVzcfugZruqsz1tqJP-Ki7pQHrNSayNna3H7erFg4",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ideas Assemble",
  "url": "https://www.ideasassemble.com",
  // "logo": "https://www.ideasassemble.com/logo.png",
  "description": "Ideas Assemble is a premium digital design agency specializing in cinematic branding, high-performance website design, 3D animation, and Amazon marketplace growth.",
  // "sameAs": [
  //   "https://facebook.com/ideasassemble",
  //   "https://instagram.com/ideasassemble",
  //   "https://linkedin.com/company/ideasassemble"
  // ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-682-437-5323",
    "contactType": "customer service"
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What digital services does Ideas Assemble provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer a comprehensive range of premium services including Logo Design, Website Design & Development, 3D Animation, Brand Identity creation, and specialized Amazon Marketplace growth strategies."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical web design project take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project timelines vary depending on complexity. A standard business website usually takes 2-4 weeks, while complex E-commerce platforms can take 6-10 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help scale my existing Amazon business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our Amazon experts specialize in scaling both Private Label and Wholesale businesses with optimization, PPC management, and logistics support."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body
        className={`${orbitron.variable} ${montserrat.variable} antialiased`}
      >
        <div className="scan-lines"></div>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
