import type { Metadata } from "next";
import { ContentPage } from "@/components/ui/ContentPage";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <ContentPage
      title="Experience"
      description="Professional experience and resume highlights will live here."
    />
  );
}
