import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Premium Website Design & Development | Ideas Assemble",
  description: "Get a high-performance, custom-designed website with Ideas Assemble. We specialize in conversion-optimized, responsive web design and advanced UI/UX to elevate your digital presence.",
  keywords: ["Website Design", "Web Development", "E-commerce Website", "Responsive Design", "Next.js Development", "Landing Page Design", "UI/UX Design", "Business Website"],
};

export default function WebsiteDesignPage() {
  return (
    <ServicePageLayout
      heroTitle="Website Design"
      heroSubtitle="Building digital fortresses for your business."
      ctaLabel="Launch Site"
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
      description="Your website is your digital storefront. We create responsive, high-performance websites that not only look stunning but also convert visitors into customers. From simple landing pages to complex E-commerce platforms, we craft digital experiences."
      description2="Our development team ensures your site is SEO-friendly, mobile-responsive, and secure. We use the latest technologies to build websites that scale with your business."
      highlights={[
        "Mobile-First Responsive Design",
        "CMS Integration (WordPress, Shopify)",
        "Complete Source Code Ownership",
      ]}
      pricing={[
        {
          name: "Startup",
          price: "$499",
          features: [
            "5 Page Website Design",
            "HTML Based",
            "Hover Effects",
            "1 Banner Design",
            "Contact/Query Form",
            "Mobile Responsive",
          ],
        },
        {
          name: "Professional",
          price: "$999",
          features: [
            "10 Page Website Design",
            "CMS / Admin Panel Support",
            "Mobile Responsive",
            "5 Stock Photos",
            "Social Media Integration",
            "Google Maps Integration",
            "1 Year Free Domain Name",
          ],
        },
        {
          name: "E-Commerce",
          price: "$1,999",
          features: [
            "Unlimited Pages Website",
            "Complete Cart Functionality",
            "Payment Gateway Integration",
            "Product Management System",
            "Customer Login Area",
            "Sales Reports",
            "Dedicated Project Manager",
          ],
        },
      ]}
      process={[
        { title: "Planning & Wireframe", description: "We map out the site architecture and user flow, creating wireframes to visualize the structure before design begins." },
        { title: "UI/UX Design", description: "Our designers create high-fidelity mockups using your brand colors and typography, focusing on user experience." },
        { title: "Front-End Development", description: "We code the design into a functioning website using clean HTML5, CSS3, and JavaScript, ensuring pixel-perfect accuracy." },
        { title: "Back-End Integration", description: "We integrate the Content Management System (CMS) or database functionality, enabling dynamic content and features." },
        { title: "Testing & Launch", description: "We rigorously test the site across browsers and devices to squash bugs before deploying to your live server." },
        { title: "Maintenance", description: "We provide ongoing support and maintenance to keep your website secure, updated, and running smoothly." },
      ]}
    />
  );
}
