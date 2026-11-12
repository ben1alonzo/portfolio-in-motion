import type { Metadata } from "next";
import { ContentPage } from "@/components/ui/ContentPage";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <ContentPage
      title="About"
      description="This page will introduce the person behind the portfolio. More to come."
    />
  );
}
