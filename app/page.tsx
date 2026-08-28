import Image from 'next/image'
import { Reframe } from '@/components/reframe'

export default function Page() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a className="font-display text-lg font-bold tracking-tight text-foreground" href="#top">
            Jean Affi<span className="text-primary">.</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            <a
              href="#approach"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Approach
            </a>
            <a
              href="#problems"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              What I Solve
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </nav>
          <a
            href="tel:+17026862413"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Call (702) 686-2413
          </a>
        </div>
      </header>

      <main>
        <section id="top" className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Jean Affi — Las Vegas, NV
                </p>
                <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-foreground text-balance sm:text-6xl md:text-7xl">
                  Every problem has a<br />
                  side no one&apos;s{' '}
                  <span className="relative inline-block text-primary">
                    looking at
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 h-1.5 w-full bg-primary/30"
                    />
                  </span>
                  .
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
                  I&apos;m Jean Affi — the person you call when the obvious answers have run out. I take
                  any challenge — messy, stuck, or overthought — and turn it around until a way through
                  shows up. No jargon, no template. Just a genuinely different point of view.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Bring me a problem
                  </a>
                  <a
                    href="#approach"
                    className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                  >
                    See how I think
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card">
                  <Image
                    src="/jean-affi.png"
                    alt="Portrait of Jean Affi"
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 hidden max-w-[240px] rounded-xl border border-border bg-card p-4 shadow-sm sm:block">
                  <p className="font-display text-3xl font-bold text-foreground">Jean Affi</p>
                  <p className="text-xs leading-snug text-muted-foreground">
                    36 · based in Las Vegas, NV · turning stuck problems into a way forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Reframe />

        <section id="approach" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">How I work</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground text-balance md:text-5xl">
                A method, not a magic trick.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
                “Outside the box” sounds like chaos. It isn&apos;t. It&apos;s a repeatable way of moving
                around a problem until the exit becomes obvious.
              </p>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {[
                {
                  n: '01',
                  h: 'Listen past the words',
                  p: 'Most problems are described in the language of the symptom. I dig until we find the thing underneath the thing you actually came to say.',
                },
                {
                  n: '02',
                  h: 'Turn it upside down',
                  p: 'I ask the questions that feel slightly wrong on purpose. Inverting a problem is the fastest way to see what everyone stopped noticing.',
                },
                {
                  n: '03',
                  h: 'Borrow from elsewhere',
                  p: "Your industry isn't the first to face this shape of problem. I steal the solved version from somewhere unexpected and adapt it.",
                },
                {
                  n: '04',
                  h: 'Hand you the door',
                  p: "You don't get a 40-slide deck. You get one clear, usable way forward you can act on the same afternoon.",
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="group bg-card p-7 transition-colors hover:bg-secondary md:p-9"
                >
                  <span className="font-display text-sm font-bold text-primary">{step.n}</span>
                  <h3 className="mt-3 font-display text-xl font-bold text-foreground md:text-2xl">
                    {step.h}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">{step.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="problems" className="scroll-mt-20 border-t border-border bg-card">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  What I solve
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
                  “Any problem” is not a figure of speech.
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                  I&apos;m not tied to one industry, because a fresh perspective doesn&apos;t need to be
                  an expert one — it needs to be an honest, curious one. If it&apos;s keeping you up, it
                  qualifies.
                </p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "A business idea that won't quite click",
                  'A team that keeps circling the same argument',
                  'A product nobody can explain in one sentence',
                  "A career move you can't see clearly",
                  "A creative project that's lost its thread",
                  'A decision with too many good options',
                  'A process everyone hates but no one questions',
                  'A goal that feels impossibly far away',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border bg-background p-4"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 font-display text-sm font-bold text-primary"
                    >
                      →
                    </span>
                    <span className="text-sm leading-snug text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground md:px-14 md:py-20">
              <div className="relative z-10 max-w-2xl">
                <h2 className="font-display text-4xl font-bold leading-[0.98] tracking-tight text-balance md:text-6xl">
                  Tell me what&apos;s stuck.
                </h2>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-primary-foreground/85 text-pretty">
                  Send over the problem in whatever shape it&apos;s in — a paragraph, a voice note, a
                  half-formed hunch. Call or text me anytime and I&apos;ll come back with a different way
                  to look at it. First conversation&apos;s on me.
                </p>
                <div className="mt-8 flex flex-col gap-6">
                  {['(702) 686-2413', '(725) 306-0311', '(725) 329-2976', '(702) 897-2480'].map(
                    (phone) => {
                      const digits = '+1' + phone.replace(/\D/g, '')
                      return (
                        <div key={phone} className="flex flex-wrap items-center gap-3">
                          <span className="min-w-[9rem] font-display text-lg font-semibold tabular-nums text-primary-foreground">
                            {phone}
                          </span>
                          <a
                            href={`tel:${digits}`}
                            className="inline-flex items-center justify-center rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
                          >
                            Call
                          </a>
                          <a
                            href={`sms:${digits}`}
                            className="inline-flex items-center justify-center rounded-full border border-primary-foreground/40 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                          >
                            Text
                          </a>
                        </div>
                      )
                    },
                  )}
                  <div>
                    <a
                      href="mailto:sincitysfinest3@gmail.com"
                      className="inline-flex items-center justify-center rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                    >
                      Email me
                    </a>
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rotate-12 rounded-3xl border border-primary-foreground/20"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 right-24 h-72 w-72 -rotate-6 rounded-3xl border border-primary-foreground/15"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:px-8">
          <p className="font-display font-bold text-foreground">
            Jean Affi<span className="text-primary">.</span>
          </p>
          <p>Perspective-first problem solving. Based in Las Vegas, available remote.</p>
          <p>© 2026 Jean Affi — All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
