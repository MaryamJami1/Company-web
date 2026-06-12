import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "AI Chatbot Development | Topstier",
  description: "Automate your customer engagement with advanced AI chatbots. Custom NLP solutions, WhatsApp bots, and website assistants to scale your business.",
  keywords: ["Chatbot Development", "AI Assistant", "NLP", "WhatsApp Bot", "Customer Automation", "AI Solutions", "Machine Learning", "Customer Support Bot"],
};

export default function ChatbotDevelopmentPage() {
  return (
    <ServicePageLayout
      heroTitle="Chatbot Development"
      heroSubtitle="Automate your connection with 24/7 AI-powered assistants."
      ctaLabel="Build My Bot"
      heroImage="/bg.jpeg"
      description="Revolutionize your customer experience with intelligent, automated conversation agents. We build custom AI chatbots that understand context, solve problems, and convert leads while you sleep."
      description2="Our bots integrate seamlessly with your website, WhatsApp, and social media platforms, providing a consistent and efficient support layer for your brand."
      highlights={[
        "NLP & Machine Learning",
        "WhatsApp & Social Integration",
        "24/7 Automated Support",
      ]}
      pricing={[
        {
          name: "Basic Bot",
          price: "$599",
          paymentLink: "https://buy.stripe.com/test_chatbot_basic_599",
          features: [
            "Rule-based Logic",
            "Website Integration",
            "Lead Collection Form",
            "Basic FAQs",
            "Custom Theme Design",
            "Email Notifications",
          ],
        },
        {
          name: "AI Advanced",
          price: "$1,499",
          paymentLink: "https://buy.stripe.com/test_chatbot_advanced_1499",
          features: [
            "NLP Integration (OpenAI/Dialogflow)",
            "Contextual Understanding",
            "CRM Integration",
            "Multi-platform Support",
            "Advanced Analytics",
            "1 Month Maintenance",
          ],
        },
        {
          name: "Enterprise",
          price: "$3,499",
          paymentLink: "https://buy.stripe.com/test_chatbot_enterprise_3499",
          features: [
            "Custom Trained Models",
            "Secure API Integrations",
            "Voice Interaction",
            "Dedicated Project Manager",
            "Unlimited Conversations",
            "Lifetime Technical Support",
          ],
        },
      ]}
      process={[
        { title: "Conversation Mapping", description: "We map out the user journeys and potential conversation flows to ensure your bot handles queries effectively." },
        { title: "NLP Training", description: "We train the AI model on your specific business data and industry terminology for high-accuracy responses." },
        { title: "Logic Building", description: "Our developers build the core logic, connecting the bot to your database, CRM, or external APIs." },
        { title: "Platform Integration", description: "We deploy the bot to your website, WhatsApp, or mobile app, ensuring a seamless user experience." },
        { title: "Testing & Refinement", description: "Rigorous testing with real-world scenarios to refine the bot's accuracy and personality." },
        { title: "Launch & Growth", description: "Ongoing monitoring and updates to improve the bot's performance as it learns from user interactions." },
      ]}
    />
  );
}
