import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type ClientLogo = {
  name: string;
  segment: string;
  /** URL da logo real do cliente (PNG/SVG com fundo transparente). */
  logo?: string;
};

export function ClientsCarousel({ clients }: { clients: ClientLogo[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scrollBy = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 640), behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (paused) return;
    const el = trackRef.current;
    if (!el) return;
    const id = window.setInterval(() => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 280, behavior: "smooth" });
      }
    }, 3200);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {clients.map((c) => (
          <article
            key={c.name}
            className="surface-card group flex min-h-40 w-56 shrink-0 snap-start flex-col items-center justify-center gap-3 rounded-lg px-6 py-8 text-center sm:w-64"
          >
            {c.logo ? (
              <img
                src={c.logo}
                alt={`Logo ${c.name}`}
                loading="lazy"
                className="h-14 w-auto max-w-full object-contain opacity-80 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
              />
            ) : (
              <span className="font-display text-lg tracking-[0.18em] text-gilded uppercase">
                {c.name}
              </span>
            )}
            <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {c.segment}
            </span>
          </article>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-end gap-3">
        <button
          type="button"
          aria-label="Anterior"
          onClick={() => scrollBy(-1)}
          className="grid size-11 shrink-0 place-items-center rounded-full border border-primary/30 text-primary transition hover:border-primary hover:bg-primary/10"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Próximo"
          onClick={() => scrollBy(1)}
          className="grid size-11 shrink-0 place-items-center rounded-full border border-primary/30 text-primary transition hover:border-primary hover:bg-primary/10"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
