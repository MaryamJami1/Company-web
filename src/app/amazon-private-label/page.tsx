import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Amazon Private Label FBA Services | Ideas Assemble",
  description: "Launch and scale your Amazon Private Label brand with Ideas Assemble. High-converting A+ content, data-driven PPC management, and expert listing optimization to dominate the FBA marketplace.",
  keywords: ["Amazon Private Label", "Amazon FBA", "Listing Optimization", "Amazon PPC", "A+ Content", "EBC Design", "Amazon SEO", "Amazon Seller Support"],
};

export default function AmazonPrivateLabelPage() {
  return (
    <ServicePageLayout
      heroTitle="Amazon Private Label"
      heroSubtitle="Build your brand on the world's largest marketplace."
      ctaLabel="Launch Now"
      heroImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
      description="Dominate the world's largest marketplace. Stand out in the crowded Amazon marketplace with our data-driven marketing strategies. We help you increase visibility, click-through rates, and sales."
      description2="From SEO optimization and PPC campaigns to A+ content creation, we provide a holistic approach to Amazon marketing that maximizes your ROI."
      highlights={[
        "Listing Optimization (SEO)",
        "PPC Ad Management",
        "Enhanced Brand Content (EBC)",
      ]}
      pricing={[
        {
          name: "Starter",
          price: "$499",
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
          price: "$1,299",
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
          price: "$2,499",
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
