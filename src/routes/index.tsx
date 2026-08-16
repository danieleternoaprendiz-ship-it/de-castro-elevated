import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Activity,
  Building2,
  Cable,
  ChevronDown,
  Cpu,
  Factory,
  Gauge,
  Home,
  Instagram,
  Layers,
  Lightbulb,
  Linkedin,
  MapPin,
  MessageCircle,
  Monitor,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";

import logoDourado from "@/assets/logo-dourado.png.asset.json";
import logoDc from "@/assets/logo-dc.png.asset.json";
import selo from "@/assets/selo-engenharia.png.asset.json";
import { Reveal } from "@/components/site/reveal";
import { ClientsCarousel, type ClientLogo } from "@/components/site/clients-carousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "De Castro Engenharia | Elétrica e Automação" },
      {
        name: "description",
        content:
          "Projetos e execução em elétrica e automação residencial, predial e industrial. CLP, SCADA, integração de sistemas e eficiência energética em Salvador, Lauro de Freitas e Camaçari.",
      },
      { property: "og:title", content: "De Castro Engenharia | Elétrica e Automação" },
      {
        property: "og:description",
        content:
          "Engenharia elétrica e automação com excelência técnica: projeto, painéis, CLP, SCADA e integração de sistemas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5571000000000";

const nav = [
  { href: "#empresa", label: "Empresa" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#clientes", label: "Clientes" },
  { href: "#cultura", label: "Cultura" },
  { href: "#contato", label: "Contato" },
];

const portfolios = [
  {
    id: "p1",
    tag: "Portfólio 01",
    title: "Elétrica Residencial e Predial",
    icon: Home,
    intro:
      "Execução rápida e segura para quem precisa de uma instalação confiável, normatizada e sem retrabalho.",
    items: [
      "Retrofit e adequação de QDC",
      "Adequação de tomadas e circuitos",
      "Iluminação LED e luminotécnica",
      "Infraestrutura elétrica predial",
      "Laudos, ARTs e documentação técnica",
      "Manutenção preventiva e corretiva",
    ],
  },
  {
    id: "p2",
    tag: "Portfólio 02",
    title: "Automação Residencial",
    icon: Lightbulb,
    intro:
      "Conforto, cenas e controle inteligente integrados ao projeto de arquitetura — tecnologia que se usa todos os dias.",
    items: [
      "Cenas de iluminação e conforto térmico",
      "Controle por app e assistentes virtuais",
      "Automação de cortinas, climatização e acessos",
      "Infraestrutura de rede e cabeamento estruturado",
      "Integração com projeto de arquitetura",
      "Eficiência energética residencial",
    ],
  },
  {
    id: "p3",
    tag: "Portfólio 03",
    title: "Automação Predial e Industrial",
    icon: Factory,
    intro:
      "Engenharia de controle de ponta a ponta: da especificação de instrumentação ao SCADA em operação assistida.",
    items: [
      "Levantamento de cargas e pontos de automação",
      "Dimensionamento de cabos, eletrocalhas e eletrodutos",
      "Especificação de sensores, transmissores e CLPs",
      "Projeto executivo e arquitetura de rede",
      "Programação de CLP, inversores e soft starters",
      "Telas SCADA, alarmes, tendências e relatórios",
    ],
  },
];

const processo = [
  {
    icon: Gauge,
    title: "Análise e Especificação",
    text: "Plantas, memoriais e diagramas analisados, lista de cargas e de pontos de automação, especificação de instrumentação, CLP e SCADA.",
  },
  {
    icon: Layers,
    title: "Concepção e Projeto",
    text: "Fluxograma de engenharia, arquitetura de rede, diagramas e layouts de quadros, projeto executivo e planilha de comissionamento.",
  },
  {
    icon: Cable,
    title: "Infraestrutura e Instalação",
    text: "Construção de infraestrutura, lançamento de cabeamento, fornecimento e instalação de quadros, sensores e atuadores.",
  },
  {
    icon: Cpu,
    title: "Software e Programação",
    text: "Parametrização de instrumentos, programação de CLP, inversores e soft starters, desenvolvimento de telas gráficas SCADA.",
  },
  {
    icon: Network,
    title: "Integração e Startup",
    text: "Integração de sistemas e equipamentos, comissionamento, startup e operação assistida junto à equipe do cliente.",
  },
  {
    icon: Monitor,
    title: "Treinamento e DataBook",
    text: "Treinamento de operação manual, automatizada e SCADA, manual técnico, relatórios de testes e DataBook completo.",
  },
];

const clients: ClientLogo[] = [
  {
    name: "Boulevard Shopping Camaçari",
    category: "Shopping Centers",
    segment: "Facilities & BMS",
    logo: cliBoulevard.url,
  },
  {
    name: "Salvador Shopping",
    category: "Shopping Centers",
    segment: "Automação predial",
    logo: cliSalvadorShopping.url,
  },
  {
    name: "Moeve",
    category: "Indústria & Energia",
    segment: "Automação industrial",
    logo: cliMoeve.url,
  },
  {
    name: "Sabesp",
    category: "Saneamento",
    segment: "Automação de processos",
    logo: cliSabesp.url,
  },
  {
    name: "Sanasa Campinas",
    category: "Saneamento",
    segment: "CLP & SCADA",
    logo: cliSanasa.url,
  },
  {
    name: "Complexo HUPES",
    category: "Saúde",
    segment: "Elétrica hospitalar",
    logo: cliHupes.url,
  },
  {
    name: "Aliança Star — Rede D'Or",
    category: "Saúde",
    segment: "Infraestrutura elétrica",
    logo: cliAliancaStar.url,
  },
  {
    name: "Receita Federal",
    category: "Órgãos Públicos",
    segment: "Elétrica predial",
    logo: cliReceita.url,
  },
  {
    name: "Justiça Federal",
    category: "Órgãos Públicos",
    segment: "Automação predial",
    logo: cliJustica.url,
  },
  {
    name: "Desenbahia",
    category: "Órgãos Públicos",
    segment: "Manutenção & eficiência",
    logo: cliDesenbahia.url,
  },
];


const cultura = [
  {
    title: "Cultura do Divino",
    text: "Propósito, ética e integridade como base de toda decisão. Verdade, honestidade e justiça no trato com clientes e equipe — a casa construída sobre a rocha.",
  },
  {
    title: "Mentalidade de Crescimento",
    text: "Erro vira aprendizado, desafio vira degrau. O time é treinado para evoluir tecnicamente e assumir responsabilidade sobre resultado.",
  },
  {
    title: "Cultura da Organização",
    text: "Processos claros de prospecção, proposta, execução e manutenção. Documentação, prazos e obra limpa: organização é o que evita retrabalho.",
  },
  {
    title: "Cultura da Solução",
    text: "Ninguém traz problema sem hipótese de solução. O cliente contrata resultado — disponibilidade, segurança e economia de energia.",
  },
  {
    title: "Cultura do Estudo",
    text: "Estudo contínuo de novas tecnologias: protocolos de integração, gateways, CLPs e plataformas SCADA aplicadas ao problema do cliente.",
  },
  {
    title: "Cultura do Trabalho",
    text: "Disciplina diária, execução com padrão e compromisso com o combinado. Palavra é compromisso.",
  },
  {
    title: "Cultura do Progresso",
    text: "Crescimento como consequência natural de princípios, mentalidade, organização, solução, estudo e trabalho.",
  },
];

const areas = [
  {
    sigla: "ADM",
    nome: "Administrativo",
    text: "Diretoria, financeiro, compras, contratos e conformidade, RH e gestão de colaboradores, além de Operações & Tech.",
  },
  {
    sigla: "COM",
    nome: "Comercial",
    text: "Processo comercial estruturado em 10 etapas — da prospecção fria ao pós-venda e aprendizado.",
  },
  {
    sigla: "OM",
    nome: "Obras e Manutenções",
    text: "Planejamento e execução de obras, manutenção preventiva e corretiva, segurança e padrão de entrega.",
  },
  {
    sigla: "MKT",
    nome: "Marketing",
    text: "Autoridade técnica em Instagram, LinkedIn e site, marketing de conteúdo e geração de demanda qualificada.",
  },
  {
    sigla: "CI",
    nome: "Cursos e Infoprodutos",
    text: "Treinamentos e mentorias técnicas, e-books, manuais operacionais e templates comerciais e técnicos.",
  },
];

const valores = [
  "Disciplina",
  "Comprometimento",
  "Responsabilidade",
  "Foco em resultado",
  "Ética e integridade",
  "Proatividade",
  "Autodesenvolvimento",
];

function Index() {
  const [activePortfolio, setActivePortfolio] = useState<string>(portfolios[2]!.id);
  const [openCultura, setOpenCultura] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const current = portfolios.find((p) => p.id === activePortfolio) ?? portfolios[0]!;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : ""
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between">
          <a href="#topo" className="flex min-w-0 items-center gap-3">
            <img src={logoDc.url} alt="De Castro Engenharia" className="h-11 w-auto shrink-0" />
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            <MessageCircle className="size-4" />
            <span className="hidden sm:inline">Orçamento</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
        <div className="grid-tech absolute inset-0 opacity-70" aria-hidden />
        <div
          className="absolute -right-40 top-0 size-[36rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.78 0.13 84 / 0.18), transparent 65%)" }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-primary">
                <Sparkles className="size-3.5" /> Elétrica · Automação · Integração
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-display mt-7 text-4xl leading-[1.08] sm:text-6xl lg:text-7xl">
                Engenharia que <span className="text-gilded">controla</span> o que move o seu negócio
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Projetos e execução em elétrica e automação residencial, predial e industrial — do
                dimensionamento de cargas ao SCADA em operação assistida. Excelência técnica,
                documentação impecável e obra entregue do jeito certo.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground transition hover:brightness-110"
                  style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
                >
                  Falar com um engenheiro
                </a>
                <a
                  href="#servicos"
                  className="text-sm uppercase tracking-[0.16em] text-muted-foreground underline-offset-8 transition hover:text-primary hover:underline"
                >
                  Ver portfólios técnicos
                </a>
              </div>
            </Reveal>
            <Reveal delay={420}>
              <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
                {[
                  ["03", "Portfólios técnicos"],
                  ["05", "Áreas estruturadas"],
                  ["03", "Cidades atendidas"],
                  ["100%", "Documentação técnica"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dt className="font-display text-3xl text-gilded">{v}</dt>
                    <dd className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {l}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={200} className="mx-auto w-full max-w-md">
            <div className="relative">
              <div
                className="absolute inset-0 animate-pulse rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, oklch(0.78 0.13 84 / 0.22), transparent 60%)" }}
                aria-hidden
              />
              <img
                src={selo.url}
                alt="Selo De Castro Engenharia"
                className="relative w-full drop-shadow-2xl transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* EMPRESA */}
      <section id="empresa" className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionTitle kicker="A empresa" title="Excelência técnica com propósito" />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Missão",
                text: "Impactar a vida das pessoas por meio da excelência técnica em elétrica e automação, formando profissionais, liderando com valores e construindo uma empresa organizada, ética e altamente lucrativa — deixando um legado que valeu a pena.",
              },
              {
                icon: Activity,
                title: "Visão",
                text: "Ser referência em elétrica e automação na Bahia, atuando em camadas: caixa saudável na execução residencial e predial enquanto conquista os grandes players industriais e prediais da região.",
              },
              {
                icon: ShieldCheck,
                title: "Valores",
                text: "",
                list: valores,
              },
            ].map((b, i) => (
              <Reveal key={b.title} delay={i * 120}>
                <article className="surface-card h-full rounded-xl p-8">
                  <b.icon className="size-7 text-primary" />
                  <h3 className="font-display mt-5 text-2xl">{b.title}</h3>
                  {b.text ? (
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                  ) : null}
                  {b.list ? (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {b.list.map((v) => (
                        <li
                          key={v}
                          className="rounded-full border border-primary/25 px-3 py-1.5 text-xs text-muted-foreground"
                        >
                          {v}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionTitle
              kicker="Serviços"
              title="Três portfólios, um mesmo padrão de engenharia"
              desc="O portfólio certo para o perfil de cada cliente — do retrofit de um quadro à integração completa de uma planta."
            />
          </Reveal>

          <div className="mt-12 flex flex-wrap gap-3">
            {portfolios.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePortfolio(p.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                  activePortfolio === p.id
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                <p.icon className="size-4" />
                {p.title}
              </button>
            ))}
          </div>

          <div key={current.id} className="surface-card mt-8 rounded-2xl p-8 sm:p-12">
            <span className="text-[11px] uppercase tracking-[0.28em] text-primary">{current.tag}</span>
            <h3 className="font-display mt-3 text-3xl sm:text-4xl">{current.title}</h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {current.intro}
            </p>
            <div className="gold-rule my-8" />
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {current.items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Wrench className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="relative overflow-hidden border-y border-border bg-card/40 py-24">
        <div className="grid-tech absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionTitle
              kicker="Processo técnico"
              title="Da análise ao DataBook"
              desc="Seis etapas rastreáveis que garantem previsibilidade de prazo, segurança operacional e um sistema documentado ponta a ponta."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processo.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <article className="surface-card h-full rounded-xl p-7">
                  <div className="flex items-center justify-between">
                    <p.icon className="size-7 text-primary" />
                    <span className="font-display text-3xl text-primary/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section id="clientes" className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionTitle
              kicker="Clientes atendidos"
              title="Quem confia na De Castro"
              desc="Indústrias, hospitais, redes de varejo, condomínios logísticos, construtoras e residências de alto padrão."
            />
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-12">
              <ClientsCarousel clients={clients} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CULTURA */}
      <section id="cultura" className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <SectionTitle
                kicker="Cultura"
                title="Sete princípios que sustentam a operação"
                desc="A cultura é o jeito da empresa funcionar — vivida pelo líder antes de ser exigida do time, reforçada em cada decisão, treinamento e entrega."
              />
            </Reveal>
            <Reveal delay={160}>
              <blockquote className="mt-8 border-l-2 border-primary/50 pl-5 text-sm italic leading-relaxed text-muted-foreground">
                “Se você cumprir os mandamentos do Senhor, tiver a mentalidade certa, for
                organizado, pensar em solução, estudar e trabalhar, o seu crescimento será uma
                consequência natural.”
              </blockquote>
            </Reveal>
          </div>

          <div className="space-y-3">
            {cultura.map((c, i) => {
              const open = openCultura === i;
              return (
                <Reveal key={c.title} delay={i * 60}>
                  <div className="surface-card overflow-hidden rounded-xl">
                    <button
                      type="button"
                      onClick={() => setOpenCultura(open ? null : i)}
                      aria-expanded={open}
                      className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-display shrink-0 text-sm text-primary/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display min-w-0 truncate text-lg">{c.title}</span>
                      <ChevronDown
                        className={`size-5 shrink-0 text-primary transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className="grid transition-all duration-500 ease-out"
                      style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                          {c.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ESTRUTURA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <SectionTitle
              kicker="Estrutura"
              title="Uma empresa organizada por áreas"
              desc="Organograma vivo: cada área com responsabilidade, indicador e dono — o que garante entrega consistente e escala sem perder qualidade."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((a, i) => (
              <Reveal key={a.sigla} delay={i * 90}>
                <article className="surface-card h-full rounded-xl p-7">
                  <div className="flex items-center gap-4">
                    <span
                      className="font-display grid size-14 shrink-0 place-items-center rounded-lg text-sm text-primary-foreground"
                      style={{ background: "var(--gradient-gold)" }}
                    >
                      {a.sigla}
                    </span>
                    <h3 className="font-display min-w-0 text-xl">{a.nome}</h3>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                </article>
              </Reveal>
            ))}
            <Reveal delay={450}>
              <article className="surface-card flex h-full flex-col justify-center gap-3 rounded-xl p-7">
                <Building2 className="size-7 text-primary" />
                <h3 className="font-display text-xl">Abrangência</h3>
                <ul className="mt-1 space-y-2 text-sm text-muted-foreground">
                  {["Salvador", "Lauro de Freitas", "Camaçari"].map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <MapPin className="size-4 shrink-0 text-primary" />
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA / CONTATO */}
      <section id="contato" className="relative overflow-hidden border-t border-border py-24">
        <div className="grid-tech absolute inset-0 opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <img src={logoDourado.url} alt="De Castro Elétrica e Automação" className="mx-auto h-20 w-auto" />
            <h2 className="font-display mt-8 text-3xl sm:text-5xl">
              Vamos <span className="text-gilded">dimensionar</span> o seu projeto
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Envie a planta, o memorial ou apenas o problema. Retornamos com diagnóstico técnico e
              proposta clara — sem promessa que não se cumpre.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground transition hover:brightness-110"
                style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
              <a
                href="mailto:contato@decastroengenharia.com.br"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-primary transition hover:bg-primary/10"
              >
                E-mail
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-5 sm:flex sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <img src={logoDc.url} alt="De Castro Engenharia" className="h-10 w-auto shrink-0" />
            <p className="min-w-0 text-xs text-muted-foreground">
              © {new Date().getFullYear()} De Castro Engenharia · Elétrica e Automação
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <a href="#topo" aria-label="Instagram" className="text-muted-foreground transition hover:text-primary">
              <Instagram className="size-5" />
            </a>
            <a href="#topo" aria-label="LinkedIn" className="text-muted-foreground transition hover:text-primary">
              <Linkedin className="size-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({
  kicker,
  title,
  desc,
}: {
  kicker: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="text-[11px] uppercase tracking-[0.3em] text-primary">{kicker}</span>
      <h2 className="font-display mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {desc ? <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{desc}</p> : null}
    </div>
  );
}
