import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Your Project",
  description: "Ready to launch your digital identity? Fill out our project brief for logo design, web development, or e-commerce strategy and let's build something extraordinary together.",
};

export default function BuildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
