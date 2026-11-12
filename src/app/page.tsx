import CardExperience from "@/components/3d/CardExperience";
import { FallbackNavigation } from "@/components/navigation/FallbackNavigation";

export default function Home() {
  return (
    <main className="home">
      <h1 className="visually-hidden">Portfolio in Motion</h1>
      <p className="visually-hidden">
        An interactive business-card portfolio is being built here, milestone by
        milestone.
      </p>
      <div className="scene-frame">
        <CardExperience />
      </div>
      <FallbackNavigation />
    </main>
  );
}
