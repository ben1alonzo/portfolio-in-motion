import Link from "next/link";
import { siteLinks } from "@/config/site";

export function FallbackNavigation() {
  return (
    <nav className="fallback-navigation" aria-label="Site navigation">
      {siteLinks.map(({ href, label }) => (
        <Link key={href} href={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
