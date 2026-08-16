import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type ClientLogo = {
  name: string;
  /** Categoria do cliente (ex.: "Shopping Centers"). */
  category: string;
  /** Descrição curta do escopo atendido. */
  segment: string;
  /** URL da logo real do cliente (PNG/SVG com fundo transparente). */
  logo?: string;
};

export function ClientsCarousel({ clients }: { clients: ClientLogo[] }) {
  const categories = useMemo(() => {
    const set: string[] = [];
    for (const c of clients) if (!set.includes(c.category)) set.push(c.category);
    return set;
  }, [clients]);

  const [active, setActive] = useState<string>(categories[0] ?? "");
  const visible = useMemo(
    () => clients.filter((c) => c.category === active),
    [clients, active],
  );

  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scrollBy = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 640), behavior: "smooth" });
  }, []);

  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }, [active]);

  useEffect(() => {
    if (paused) return;
    const el = trackRef.current;
    if (!el) return;
    const id = window.setInterval(() => {
      if (el.scrollWidth <= el.clientWidth + 4) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 280, behavior: "smooth" });
      }
    }, 3200);
    return () => window.clearInterval(id);
  }, [paused, active]);

  return (
    <div>
      {/* Filtros por classe de cliente */}
      <div
        role="tablist"
        aria-label="Classes de clientes"
        className="flex flex-wrap gap-2"
      >
        {categories.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat)}
              className={
                isActive
                  ? "rounded-full border border-primary/70 bg-primary/15 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-primary transition"
                  : "rounded-full border border-border px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition hover:border-primary/50 hover:text-primary"
              }
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div
        className="relative mt-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
      >
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {visible.map((c) => (
            <article
              key={c.name}
              className="surface-card group flex min-h-52 w-60 shrink-0 snap-start flex-col items-center justify-between gap-4 rounded-lg px-6 py-7 text-center sm:w-64"
            >
              <div className="grid h-20 w-full place-items-center rounded-md bg-white/95 px-4 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={`Logo ${c.name}`}
                    loading="lazy"
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <span className="font-display text-gilded text-lg uppercase tracking-[0.18em]">
                    {c.name}
                  </span>
                )}
              </div>
              <div className="min-w-0">
                <h3 className="truncate text-sm font-medium text-foreground">{c.name}</h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {c.segment}
                </p>
              </div>
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
    </div>
  );
}
