import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Terms of Service for Topstier. Understand the conditions, responsibilities, and legal framework of our digital design and branding services.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
