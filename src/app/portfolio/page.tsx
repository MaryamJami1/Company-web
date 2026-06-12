import PortfolioClient from "@/app/portfolio/PortfolioClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Topstier",
  description: "Explore our premium portfolio of logo designs, websites, and brand identities. Professional solutions for modern brands.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
