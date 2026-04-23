import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Your privacy is our priority. Learn how Ideas Assemble collects, uses, and protects your personal information in our Privacy Policy.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
