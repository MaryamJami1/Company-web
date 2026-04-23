import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Ideas Assemble, our journey, and our commitment to delivering excellence in digital design and branding.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
