import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Topstier, our journey, and our commitment to delivering excellence in digital design and branding.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
