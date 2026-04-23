import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Initialize Project",
  description: "Start your journey with Ideas Assemble. Tell us about your project and let our experts craft the perfect digital solution for your brand.",
};

export default function BuildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
