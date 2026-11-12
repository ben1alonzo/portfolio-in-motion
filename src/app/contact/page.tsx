import type { Metadata } from "next";
import { ContentPage } from "@/components/ui/ContentPage";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <ContentPage
      title="Contact"
      description="Contact information and ways to connect will be added here."
    />
  );
}
