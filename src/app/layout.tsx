import type { Metadata } from "next";
import { Orbitron, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import MarketingPopup from "@/components/MarketingPopup";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

// Viewport config — prevents iOS zoom on input focus, enables safe-area for notch
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Ideas Assemble | #1 Logo Designer in USA | Premium Design & Branding Agency",
    template: "%s | Ideas Assemble"
  },
  description: "Ideas Assemble is the leading logo designer in USA, specializing in professional custom logo design, cinematic branding, web development, and e-commerce growth. Trusted by 500+ brands across America.",
  keywords: ["Logo Designer in USA", "Best Logo Designer USA", "Professional Logo Designer", "Logo Design Company USA", "Custom Logo Design USA", "American Logo Designer", "Digital Design", "Branding Agency", "Website Design", "3D Animation", "E-commerce Solutions", "Ideas Assemble", "Logo Design", "Brand Identity USA"],
  authors: [{ name: "Ideas Assemble" }],
  creator: "Ideas Assemble",
  metadataBase: new URL("https://www.ideasassemble.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ideasassemble.com",
    title: "Ideas Assemble | #1 Logo Designer in USA | Premium Design & Branding Agency",
    description: "Ideas Assemble is the leading logo designer in USA, specializing in professional custom logo design, cinematic branding, web development, and e-commerce growth. Trusted by 500+ brands across America.",
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
    title: "Ideas Assemble | #1 Logo Designer in USA | Premium Design & Branding Agency",
    description: "Ideas Assemble is the leading logo designer in USA. Professional custom logo design, cinematic branding, web development, and e-commerce growth strategies.",
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
  "description": "Ideas Assemble is the #1 logo designer in USA, offering premium digital design, cinematic branding, high-performance website design, 3D animation, and e-commerce marketplace growth.",
  // "sameAs": [
  //   "https://facebook.com/ideasassemble",
  //   "https://instagram.com/ideasassemble",
  //   "https://linkedin.com/company/ideasassemble"
  // ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-682-437-5323",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "English"
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
        "text": "We offer a comprehensive range of premium services including Logo Design, Website Design & Development, 3D Animation, Brand Identity creation, and specialized E-commerce growth strategies."
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
      "name": "Can you help scale my existing online business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our E-commerce experts specialize in scaling digital brands through multi-platform expansion, PPC management, and supply chain optimization."
      }
    }
  ]
};

const logoServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Logo Designer in USA - Custom Logo Design & Brand Identity",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Ideas Assemble",
    "image": "https://www.ideasassemble.com/og-image.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ideas Assemble HQ",
      "addressLocality": "Dallas",
      "addressRegion": "TX",
      "addressCountry": "US"
    }
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "description": "Top-rated professional logo designer in USA. Custom logo design, minimalist branding, and complete brand identity services. Trusted by 500+ American businesses with 100% money-back guarantee.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "199.00",
    "availability": "https://schema.org/InStock"
  }
};

const webServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Website Design & Development",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Ideas Assemble"
  },
  "description": "High-performance, responsive website design and custom web development services. We build digital storefronts and corporate websites that convert.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "499.00",
    "availability": "https://schema.org/InStock"
  }
};

const ecommerceServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "E-commerce Solutions",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Ideas Assemble"
  },
  "description": "Professional e-commerce marketplace management and scaling. From product launch to logistics optimization, we grow your online sales.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "999.00",
    "availability": "https://schema.org/InStock"
  }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(logoServiceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webServiceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ecommerceServiceJsonLd) }}
        />
      </head>
      <body
        className={`${orbitron.variable} ${montserrat.variable} antialiased`}
      >
        <div className="scan-lines"></div>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <MarketingPopup />
        <Analytics />
      </body>
    </html>
  );
}
