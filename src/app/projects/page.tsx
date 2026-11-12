import type { Metadata } from "next";
import { ContentPage } from "@/components/ui/ContentPage";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <ContentPage
      title="Projects"
      description="A collection of selected work and technical projects is coming soon."
    />
  );
}
