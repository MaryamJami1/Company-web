import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Animation & Motion Graphics | Topstier",
  description: "Professional 2D/3D animation services. Explainer videos, motion graphics, and cinematic visual effects to captivate your audience.",
  keywords: ["2D Animation", "3D Animation", "Explainer Videos", "Motion Graphics", "Whiteboard Animation", "Video Production", "Cinematic Effects", "Product Animation"],
};

export default function AnimationPage() {
  return (
    <ServicePageLayout
      heroTitle="Animation"
      heroSubtitle="Bringing your story to life."
      ctaLabel="Get Animated"
      heroImage="/bg.jpeg"
      description="Explain your business in 60 seconds. Animation is the most powerful way to simplify complex ideas. We create engaging 2D and 3D animated explainer videos, whiteboard animations, and motion graphics that captivate your audience."
      description2="Our videos are designed to increase conversion rates, improve brand recall, and boost your engagement on social media platforms."
      highlights={[
        "Professional Script Writing",
        "Custom Illustration & Storyboard",
        "Voice Over & Sound Effects",
      ]}
      pricing={[
        {
          name: "Teaser",
          price: "$299",
          paymentLink: "https://buy.stripe.com/test_animation_teaser_299",
          features: [
            "15 Seconds Duration",
            "Professional Script Writing",
            "Storyboard Design",
            "Custom Characters",
            "Background Music",
            "HD 1080p Delivery",
          ],
        },
        {
          name: "Explainer",
          price: "$799",
          paymentLink: "https://buy.stripe.com/test_animation_explainer_799",
          features: [
            "30 Seconds Duration",
            "Professional Voice Over",
            "Professional Script",
            "Sound Effects (SFX)",
            "Unlimited Revisions",
            "Commercial Rights",
            "Dedicated Project Manager",
          ],
        },
        {
          name: "Premium",
          price: "$1,499",
          paymentLink: "https://buy.stripe.com/test_animation_premium_1499",
          features: [
            "60 Seconds Duration",
            "Top Tier Voice Talent",
            "Advanced Animation Style",
            "Custom Character Design",
            "Script & Storyboard",
            "Source Files Included",
            "4 Week Delivery",
          ],
        },
      ]}
      process={[
        { title: "Script Writing", description: "We transform your ideas into a compelling narrative. Our copywriters craft a script that delivers your message clearly." },
        { title: "Storyboard", description: "We create a visual roadmap of the video, sketching out each scene so you can visualize the flow before we animate." },
        { title: "Voice Over", description: "Choose from our library of professional voice actors to find the perfect tone and accent for your brand." },
        { title: "Illustration & Animation", description: "This is where the magic happens. We design the assets and bring them to life with smooth, engaging motion." },
        { title: "Sound Design", description: "We add background music and sound effects to enhance the emotional impact and production value of the video." },
        { title: "Delivery & Format", description: "We deliver your video in any format you need (MP4, MOV, etc.) optimized for web, social media, or broadcast." },
      ]}
    />
  );
}
