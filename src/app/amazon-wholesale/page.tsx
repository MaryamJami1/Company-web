import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Amazon Wholesale Solutions & Sourcing | Ideas Assemble",
  description: "Build a profitable Amazon FBA wholesale business with Ideas Assemble. We provide expert product sourcing, brand approval, and streamlined logistics management to scale your wholesale empire.",
  keywords: ["Amazon Wholesale", "Product Sourcing", "Brand Approval", "Logistics Management", "Wholesale FBA", "Amazon Inventory", "Supply Chain", "Amazon Growth"],
};

export default function AmazonWholesalePage() {
  return (
    <ServicePageLayout
      heroTitle="Amazon Wholesale"
      heroSubtitle="Scale your business with high-volume distribution."
      ctaLabel="Start Wholesale"
      heroImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
      description="Build a profitable wholesale empire. We simplify the complex process of product sourcing, brand approval, and logistics management."
      description2="Our team connects you with top-tier suppliers and handles the operational heavy lifting, allowing you to focus on growth and ROI."
      highlights={[
        "Brand Approvals",
        "Product Sourcing",
        "Logistics Management",
      ]}
      pricing={[
        {
          name: "Starter",
          price: "$599",
          features: [
            "Listing Optimization (1 SKU)",
            "Keyword Research",
            "Title & Bullet Points",
            "Description HTML",
            "Search Terms Setup",
            "Competitor Analysis",
          ],
        },
        {
          name: "Growth",
          price: "$1,499",
          features: [
            "PPC Management (Up to $5k Spend)",
            "Listing Optimization (5 SKUs)",
            "Campaign Setup & Management",
            "Bid Optimization",
            "Negative Keyword Management",
            "Weekly Reporting",
            "Dedicated Account Manager",
          ],
        },
        {
          name: "Dominance",
          price: "$2,999",
          features: [
            "PPC Management (Unlimited Spend)",
            "Listing Optimization (10 SKUs)",
            "EBC / A+ Content Design",
            "Storefront Design",
            "Inventory Management",
            "Brand Protection",
            "Strategic Consulting",
          ],
        },
      ]}
      process={[
        { title: "A+ Content", description: "Enhanced Brand Content (EBC) that tells your story and drives sales." },
        { title: "PPC Management", description: "Targeted ad campaigns that lower your ACOS and increase ROI." },
        { title: "Storefront Design", description: "A branded destination within Amazon to showcase your full catalog." },
        { title: "Product Photography", description: "High-quality lifestyle and white-background images that comply with Amazon's standards." },
        { title: "Analytics & Reporting", description: "Deep dive into your sales data to uncover opportunities for growth and optimization." },
        { title: "SEO Keywords", description: "We find the high-volume, low-competition keywords that drive organic traffic to your listings." },
      ]}
    />
  );
}
