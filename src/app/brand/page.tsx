import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Brand Identity & Strategy | Topstier",
  description: "Complete corporate branding and identity solutions. Build trust and recognition with a cohesive brand strategy and premium visual assets.",
  keywords: ["Brand Identity", "Corporate Branding", "Brand Strategy", "Visual Identity", "Business Design", "Identity Design", "Brand Guidelines", "Premium Branding"],
};

export default function BrandPage() {
  return (
    <ServicePageLayout
      heroTitle="Brand Identity"
      heroSubtitle="Defining who you are."
      ctaLabel="Build Legacy"
      heroImage="/bg.jpeg"
      description="Build a brand, not just a business. Our corporate branding services help you define who you are, what you stand for, and how you communicate with the world. We create cohesive brand identities that build trust and loyalty."
      description2="From naming and taglines to visual identity and style guides, we ensure consistency across every touchpoint."
      highlights={[
        "Comprehensive Brand Strategy",
        "Visual Identity Systems",
        "Brand Guidelines Book",
      ]}
      pricing={[
        {
          name: "Startup",
          price: "$399",
          paymentLink: "https://buy.stripe.com/test_brand_startup_399",
          features: [
            "Custom Logo Design",
            "Business Card Design",
            "Letterhead Design",
            "Envelope Design",
            "MS Word Letterhead",
            "Email Signature",
          ],
        },
        {
          name: "Corporate",
          price: "$899",
          paymentLink: "https://buy.stripe.com/test_brand_corporate_899",
          features: [
            "Unlimited Logo Ideas",
            "Complete Stationery Design",
            "Social Media Design (FB, Insta, Twitter)",
            "Flyer / Pamphlet Design",
            "T-Shirt / Merch Design",
            "Brand Guidelines Book",
            "Dedicated Account Manager",
          ],
        },
        {
          name: "Complete",
          price: "$1,699",
          paymentLink: "https://buy.stripe.com/test_brand_complete_1699",
          features: [
            "Logo + Stationery + Social Kit",
            "5 Page Website Design",
            "Mobile Responsive Site",
            "CMS Integration",
            "1 Year Domain & Hosting",
            "Search Engine Submission",
            "Copyright Ownership",
          ],
        },
      ]}
      process={[
        { title: "Brand Books", description: "The bible of your brand, ensuring consistency in every communication." },
        { title: "Marketing Collateral", description: "Business cards, brochures, and letterheads that speak volumes." },
        { title: "Audience Analysis", description: "Understanding who you are talking to, to tailor the message perfectly." },
        { title: "Naming & Taglines", description: "Struggling to find the right name? We help brainstorm creative names and catchy slogans that stick." },
        { title: "Packaging Design", description: "If you sell physical products, we create shelf-popping packaging designs that drive sales." },
        { title: "Rebranding", description: "Outdated look? We help established businesses revitalize their image without losing their core identity." },
      ]}
    />
  );
}
