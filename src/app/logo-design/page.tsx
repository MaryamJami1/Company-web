import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Best Logo Designer in USA | Professional Custom Logo Design Services",
  description: "Looking for the best logo designer in USA? Ideas Assemble offers professional custom logo design with 100% Money-Back Guarantee, unlimited revisions, and fast delivery. Trusted by 500+ American brands.",
  keywords: ["Logo Designer in USA", "Best Logo Designer USA", "Professional Logo Designer USA", "Custom Logo Design USA", "Logo Design Company America", "Affordable Logo Designer USA", "Top Logo Designer in United States", "Business Logo Design USA", "Minimalist Logo Designer USA", "Corporate Logo Design USA", "Brand Identity Designer USA"],
  openGraph: {
    title: "Best Logo Designer in USA | Ideas Assemble",
    description: "Professional custom logo design services in USA. 100% Money-Back Guarantee, unlimited revisions, and fast turnaround. Trusted by 500+ brands across America.",
    type: "website",
    url: "https://www.ideasassemble.com/logo-design",
  },
};

export default function LogoDesignPage() {
  return (
    <ServicePageLayout
      heroTitle="Logo Design"
      heroSubtitle="Forging visual identities that resonate."
      ctaLabel="Start Designing"
      heroImage="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop"
      description="We don't just design logos; we build brands. As a premier logo design agency, we combine artistic creativity with strategic thinking to deliver logos that are not only visually stunning but also psychologically compelling."
      description2="With our 100% Money-Back Guarantee and rapid turnaround times, you can trust us to deliver excellence. Our process involves dedicated project managers and direct communication with award-winning designers."
      highlights={[
        "100% Unique Design Guarantee",
        "Industry-Standard Source Files (AI, EPS, PNG, JPEG)",
        "Full Copyright Ownership",
      ]}
      pricing={[
        {
          name: "Silver",
          price: "$149",
          features: [
            "3 Custom Logo Concepts",
            "2 Dedicated Designers",
            "Unlimited Revisions",
            "48 to 72 hours Turnaround Time",
            "Free Color Options",
            "Final Files (JPEG & PNG)",
          ],
        },
        {
          name: "Gold",
          price: "$349",
          features: [
            "6 Custom Logo Concepts",
            "3 Dedicated Designers",
            "Unlimited Revisions",
            "24 to 48 hours Turnaround Time",
            "Stationery Design (Card, Letterhead)",
            "All Source Files (AI, EPS, PDF, PSD)",
            "100% Copyright Ownership",
          ],
        },
        {
          name: "Platinum",
          price: "$599",
          features: [
            "Unlimited Logo Concepts",
            "4 Dedicated Designers",
            "Unlimited Revisions",
            "24 hours Turnaround Time",
            "Stationery Design + Social Media Kit",
            "Free Website Icon",
            "Dedicated Account Manager",
            "100% Money Back Guarantee",
          ],
        },
      ]}
      process={[
        { title: "The Creative Brief", description: "We start by understanding your vision. You fill out a simple brief detailing your business, target audience, and style preferences." },
        { title: "Sketch & Concept", description: "Our award-winning designers brainstorm and sketch initial concepts, ensuring originality and creativity in every stroke." },
        { title: "Review & Refine", description: "We present the concepts to you. You provide feedback, and we offer unlimited revisions until the design is perfect." },
        { title: "Final Delivery", description: "Once approved, we deliver the final logo in all industry-standard formats (AI, EPS, PNG, JPEG, PDF) ready for print and web." },
        { title: "Ownership Transfer", description: "You receive full copyright ownership of your new logo. It's yours to trademark and use freely across all mediums." },
        { title: "24/7 Support", description: "Our dedicated support team is always available to answer your questions and assist you even after the project is completed." },
      ]}
    />
  );
}
