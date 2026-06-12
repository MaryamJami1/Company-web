import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "E-commerce Solutions & Marketplace Scaling | Topstier",
  description: "End-to-end e-commerce management. We specialize in product launch, marketplace scaling, and logistics optimization for premium brands.",
  keywords: ["E-commerce Solutions", "Marketplace Scaling", "Product Launch", "Marketplace Optimization", "Online Store Growth", "Digital Commerce", "Inventory Management", "Sales Optimization"],
};

export default function EcommercePage() {
  return (
    <ServicePageLayout
      heroTitle="E-commerce Solutions"
      heroSubtitle="Dominate global marketplaces with precision scaling."
      ctaLabel="Start Selling"
      heroImage="/bg.jpeg"
      description="We provide a holistic approach to e-commerce growth. From initial product selection and brand registration to high-volume distribution and logistics management, we handle every aspect of your online business."
      description2="Our team combines data-driven marketing with operational excellence to ensure your brand doesn't just exist onlineÃ¢â‚¬â€it dominates its category across every major platform."
      highlights={[
        "Marketplace Optimization",
        "High-Volume Scaling",
        "Logistics & Supply Chain",
      ]}
      pricing={[
        {
          name: "Launch Pad",
          price: "$999",
          paymentLink: "https://buy.stripe.com/test_ecommerce_launchpad_999",
          features: [
            "Market Research",
            "Listing Creation",
            "SEO Optimization",
            "Basic PPC Setup",
            "Initial Sourcing Guide",
            "Launch Strategy",
          ],
        },
        {
          name: "Growth Master",
          price: "$2,499",
          paymentLink: "https://buy.stripe.com/test_ecommerce_growth_2499",
          features: [
            "Full Account Management",
            "Advanced PPC & Advertising",
            "A+ Content Design",
            "Logistics Integration",
            "Inventory Forecasting",
            "Competitive Analysis",
          ],
        },
        {
          name: "Elite Scaling",
          price: "Custom",
          paymentLink: "https://wa.me/15163090972?text=I'm%20interested%20in%20Elite%20Scaling",
          features: [
            "Multi-Platform Expansion",
            "International Sourcing",
            "Supply Chain Automation",
            "Brand Protection",
            "Dedicated Account Director",
            "Performance Guarantee",
          ],
        },
      ]}
      process={[
        { title: "Market Analysis", description: "We identify high-potential niches and analyze competitor weaknesses to find your competitive edge." },
        { title: "Brand Foundation", description: "We set up your listings, store design, and brand identity to ensure a premium customer experience." },
        { title: "Supply Chain", description: "Our team optimizes your sourcing and logistics to ensure maximum margins and reliable inventory." },
        { title: "Launch & SEO", description: "We execute a high-impact launch strategy backed by aggressive SEO and search engine marketing." },
        { title: "Scaling Logic", description: "Continuous optimization of ad spend and conversion rates to grow your monthly recurring revenue." },
        { title: "Global Expansion", description: "Taking your successful local brand to international marketplaces and new digital storefronts." },
      ]}
    />
  );
}
