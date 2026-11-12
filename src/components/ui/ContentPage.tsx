import Link from "next/link";

type ContentPageProps = {
  title: string;
  description: string;
};

export function ContentPage({ title, description }: ContentPageProps) {
  return (
    <main className="content-page">
      <Link href="/" className="back-link">
        &larr; Back to home
      </Link>
      <div className="content-panel">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </main>
  );
}
