import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-xl px-4 text-center">
        <div className="text-8xl font-bold text-slate-200 mb-4">404</div>
        <div className="flex size-20 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
          <FontAwesomeIcon icon={faMusic} className="size-9" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight mb-2">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          This note seems to have gone flat. Let&apos;s get you back on key.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="inline-flex"><Button>Back Home</Button></Link>
          <Link href="/services" className="inline-flex"><Button variant="outline">Explore Services</Button></Link>
        </div>
      </div>
    </section>
  );
}
