const features = [
  {
    title: "Personalized plans",
    text: "Smart workout splits, tailored recovery, and goals that adapt as you progress.",
    icon: SparkIcon,
  },
  {
    title: "AI coaching",
    text: "Real-time suggestions for reps, pacing, nutrition, and consistency.",
    icon: BrainIcon,
  },
  {
    title: "Live leaderboard",
    text: "Compete with friends, earn streaks, and turn every session into momentum.",
    icon: TrophyIcon,
  },
  {
    title: "Recovery first",
    text: "Sleep, mobility, and load management tools that keep performance sustainable.",
    icon: HeartPulseIcon,
  },
  {
    title: "Premium community",
    text: "Private challenges, coach-led rooms, and a feed built to keep you inspired.",
    icon: UsersIcon,
  },
  {
    title: "Nutrition tracking",
    text: "Fast calorie logging, meal guidance, and macros that stay on target.",
    icon: ClipboardIcon,
  },
];

const plans = [
  {
    name: "Gym member",
    price: "PKR 1,000",
    period: "/ month",
    accent: "from-lime-400/30 to-lime-400/10",
    button: "Get started",
    featured: true,
    bullets: [
      "Structured video-guided workouts",
      "AI calorie and protein tracking",
      "Progress dashboard and streaks",
      "Community challenges",
    ],
  },
  {
    name: "Home workout",
    price: "PKR 1,000",
    period: "/ month",
    accent: "from-cyan-400/25 to-sky-400/10",
    button: "Start free trial",
    featured: false,
    bullets: [
      "Bodyweight-first routines",
      "Smart meal guidance",
      "Weekly adaptive progressions",
      "Status and habit tracking",
    ],
  },
];

const champions = [
  {
    name: "Alex 'Titan'",
    level: "Level 42",
    tag: "Champion of March",
    glow: "from-amber-300 via-yellow-400 to-orange-400",
    shirt: "#0f4a7f",
  },
  {
    name: "Sarah Phoenix",
    level: "Level 38",
    tag: "Rising Star",
    glow: "from-lime-300 via-emerald-400 to-cyan-400",
    shirt: "#dfe7ef",
  },
  {
    name: "Marcus Vane",
    level: "Level 35",
    tag: "Endurance King",
    glow: "from-orange-300 via-amber-400 to-yellow-400",
    shirt: "#f0e6d8",
  },
];

const stats = [
  { value: "500+", label: "active members" },
  { value: "24/7", label: "AI support" },
  { value: "3", label: "training paths" },
  { value: "98%", label: "goal adherence" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#07111f] text-white">
      <section className="relative isolate overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at top left, rgba(111,255,43,0.22), transparent 28%), radial-gradient(circle at 80% 20%, rgba(0,229,255,0.18), transparent 25%), linear-gradient(180deg, rgba(7,17,31,0.82), rgba(7,17,31,0.96))",
          }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "96px 96px",
          }}
        />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-lime-400/20 blur-3xl" />
        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />

        <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="flex items-center gap-3 text-sm font-black tracking-[0.35em] text-white">
            <span className="grid h-10 w-10 place-items-center rounded-2xl border border-lime-400/40 bg-lime-400/10 text-lime-300 shadow-[0_0_30px_rgba(163,255,66,0.22)]">
              ⚡
            </span>
            BE-FIT
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/70 md:flex">
            {["Home", "About", "Gallery", "Store", "Business"].map((item) => (
              <a key={item} href="#" className="transition hover:text-lime-300">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 text-sm font-semibold">
            <a href="#pricing" className="rounded-full border border-white/10 px-4 py-2 text-white/80 transition hover:border-white/20 hover:bg-white/5">
              Login
            </a>
            <a href="#pricing" className="rounded-full bg-lime-400 px-4 py-2 text-[#06110a] shadow-[0_0_30px_rgba(163,255,66,0.35)] transition hover:-translate-y-px hover:bg-lime-300">
              Join now
            </a>
          </div>
        </header>

        <div id="top" className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 px-6 pb-24 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-28 lg:pt-18">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-lime-400/20 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.35em] text-lime-300 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_16px_rgba(163,255,66,0.9)]" />
              Built for disciplined athletes
            </div>
            <h1 className="max-w-2xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
              Push your <span className="text-lime-400">limits.</span>
              <br />
              Track your gains.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              BE-FIT is a high-performance training ecosystem with intelligent plans, calorie tracking,
              competition loops, and a premium experience designed to keep you consistent.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-xl bg-lime-400 px-6 py-4 text-sm font-black uppercase tracking-[0.22em] text-[#08150a] shadow-[0_18px_60px_rgba(163,255,66,0.28)] transition hover:-translate-y-0.5 hover:bg-lime-300"
              >
                Start your journey
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:border-lime-400/40 hover:bg-white/10"
              >
                Explore programs
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/8 bg-white/5 px-5 py-4 backdrop-blur">
                  <div className="text-2xl font-black tracking-tight text-white">{item.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.3em] text-white/45">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute inset-x-8 top-8 h-72 rounded-4xl bg-lime-400/20 blur-3xl" />
            <div className="relative w-full rounded-4xl border border-white/10 bg-[#0a1525]/85 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl" style={{ maxWidth: 530 }}>
              <div
                className="absolute inset-0 rounded-4xl"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(163,255,66,0.12), transparent 35%, rgba(0,229,255,0.06))",
                }}
              />

              <div className="relative grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(17,28,47,0.96),rgba(11,19,32,0.96))] p-5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/45">
                    <span>Daily pulse</span>
                    <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-2 py-1 text-lime-300">Live</span>
                  </div>
                  <div className="mt-6 flex items-end gap-4">
                    <div>
                      <div className="text-5xl font-black tracking-[-0.08em] text-white">1,284</div>
                      <div className="mt-2 text-sm text-white/45">calories burned</div>
                    </div>
                    <div className="flex flex-1 items-end gap-2">
                      {[42, 66, 55, 86, 78, 98].map((height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-full bg-linear-to-t from-lime-400 to-cyan-300"
                          style={{ height: `${height}px` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
                    {[
                      ["Lift", "Push day"],
                      ["Focus", "Peak zone"],
                      ["Streak", "12 days"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-white/8 bg-white/5 p-3">
                        <div className="text-[0.7rem] uppercase tracking-[0.28em] text-white/40">{label}</div>
                        <div className="mt-2 font-semibold text-white">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-3xl border border-lime-400/20 bg-lime-400/10 p-5">
                    <div className="text-xs uppercase tracking-[0.35em] text-lime-300">Today’s coach cue</div>
                    <p className="mt-3 text-lg font-semibold leading-7 text-white">
                      Increase tempo on the final set, then close with controlled breathing.
                    </p>
                    <div className="mt-5 flex items-center gap-3 text-sm text-white/60">
                      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10">✓</span>
                      Adaptive plan updated in real time
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="text-xs uppercase tracking-[0.35em] text-white/40">Leaderboard</div>
                    <div className="mt-4 space-y-3">
                      {[
                        ["Amina", "+320 pts"],
                        ["Zaid", "+284 pts"],
                        ["You", "+260 pts"],
                      ].map(([name, score], index) => (
                        <div key={name} className="flex items-center justify-between rounded-2xl border border-white/8 bg-[#0d1a2f] px-4 py-3">
                          <div className="flex items-center gap-3">
                            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/8 text-xs font-black text-white/80">0{index + 1}</span>
                            <span className="font-semibold text-white">{name}</span>
                          </div>
                          <span className="text-sm text-lime-300">{score}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-bold uppercase tracking-[0.45em] text-lime-300/85">Elevate your experience</div>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.05em] text-white sm:text-5xl">
            Everything you need to train harder, smarter, and longer.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map(({ title, text, icon: Icon }) => (
            <article key={title} className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-lime-400/25 hover:bg-white/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-300 ring-1 ring-inset ring-lime-400/20 transition group-hover:shadow-[0_0_32px_rgba(163,255,66,0.18)]">
                <Icon />
              </div>
              <h3 className="mt-5 text-xl font-black uppercase tracking-[-0.03em] text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/55">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="border-y border-white/5 bg-[#0a1627]">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-bold uppercase tracking-[0.45em] text-white/55">Choose your program</div>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.05em] text-white sm:text-5xl">
              Select the path that fits your lifestyle.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative overflow-hidden rounded-4xl border p-7 ${plan.featured ? "border-lime-400/30 bg-[linear-gradient(180deg,rgba(15,27,44,0.98),rgba(10,18,31,0.98))] shadow-[0_20px_70px_rgba(0,0,0,0.45)]" : "border-white/10 bg-white/5"}`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${plan.accent}`} />
                {plan.featured && (
                  <div className="absolute right-6 top-6 rounded-full bg-lime-400 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.35em] text-[#08150a]">
                    Popular
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-lime-400/10 text-lime-300 ring-1 ring-lime-400/20">
                    {plan.featured ? <DumbbellIcon /> : <HomeIcon />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-[-0.03em] text-white">{plan.name}</h3>
                    <div className="mt-1 flex items-end gap-2 text-white/50">
                      <span className="text-lime-300">{plan.price}</span>
                      <span>{plan.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="mt-8 space-y-4 text-sm text-white/70">
                  {plan.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-lime-400/15 text-[0.65rem] font-black text-lime-300 ring-1 ring-lime-400/20">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-xl border px-5 py-4 text-sm font-black uppercase tracking-[0.22em] transition ${plan.featured ? "border-lime-400 bg-lime-400 text-[#08150a] hover:bg-lime-300" : "border-lime-400/30 text-lime-300 hover:border-lime-400 hover:bg-white/5"}`}
                >
                  {plan.button}
                </a>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center text-xs font-bold uppercase tracking-[0.35em] text-lime-300">
            View full plans comparison →
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-bold uppercase tracking-[0.45em] text-white/55">Hall of champions</div>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.05em] text-white sm:text-5xl">
            Real members. Real momentum. Real results.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {champions.map((champion) => (
            <article key={champion.name} className="text-center">
              <div className={`mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-linear-to-br ${champion.glow} p-0.75 shadow-[0_0_40px_rgba(111,255,43,0.12)]`}>
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#eff4f8] text-[#0d1a2f]">
                  <div className="relative h-28 w-28 rounded-2xl border border-[#0d1a2f]/10 bg-white shadow-[0_16px_30px_rgba(0,0,0,0.08)]">
                    <div className="absolute inset-x-3 top-10 h-8 rounded-[40%] bg-[linear-gradient(90deg,transparent,rgba(13,26,47,0.18),transparent)]" />
                    <div className="absolute inset-x-0 bottom-0 h-16 rounded-b-2xl" style={{ backgroundColor: champion.shirt }} />
                    <div className="absolute left-1/2 top-4 h-10 w-10 -translate-x-1/2 rounded-full bg-[#f4d1b5]" />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="text-xs font-black uppercase tracking-[0.4em] text-lime-300">{champion.tag}</div>
                <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.03em] text-white">{champion.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.35em] text-white/45">{champion.level}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.3em] text-lime-300 transition hover:text-lime-200">
            Enter the full gallery
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section id="contact" className="border-t border-white/5 bg-black/20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
          <div>
            <a href="#top" className="flex items-center gap-3 text-sm font-black tracking-[0.35em] text-white">
              <span className="grid h-10 w-10 place-items-center rounded-2xl border border-lime-400/40 bg-lime-400/10 text-lime-300">⚡</span>
              BE-FIT
            </a>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
              The world’s most advanced gamified fitness platform. Train like a pro, track like an expert,
              and turn discipline into a lifestyle.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.35em] text-white/75">Navigation</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/55">
                <li><a href="#top" className="transition hover:text-lime-300">About us</a></li>
                <li><a href="#features" className="transition hover:text-lime-300">Gallery</a></li>
                <li><a href="#pricing" className="transition hover:text-lime-300">Fitness store</a></li>
                <li><a href="#contact" className="transition hover:text-lime-300">Business plans</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.35em] text-white/75">Subscribe</h3>
              <div className="mt-4 flex rounded-2xl border border-white/10 bg-white/5 p-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-white/30"
                />
                <button className="rounded-xl bg-lime-400 px-4 py-2 text-sm font-black uppercase tracking-[0.22em] text-[#08150a] transition hover:bg-lime-300">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 py-5 text-center text-[0.7rem] uppercase tracking-[0.35em] text-white/35">
          © 2026 BE-FIT Fitness Web App. All rights reserved.
        </div>
      </section>
    </main>
  );
}

function SparkIcon() {
  return <Glyph path="M13 2 9.5 9.5 2 13l7.5 3.5L13 24l3.5-7.5L24 13l-7.5-3.5L13 2Z" />;
}

function BrainIcon() {
  return <Glyph path="M8 6.5c-1.7 0-3 1.3-3 3 0 .7.2 1.3.6 1.8A3 3 0 0 0 6 18v1c0 1.7 1.3 3 3 3h2v-4h-1a2 2 0 1 1 0-4h1v-2H10a2 2 0 1 1 0-4h2V6.5h-4Zm8 0c1.7 0 3 1.3 3 3 0 .7-.2 1.3-.6 1.8A3 3 0 0 1 18 18v1c0 1.7-1.3 3-3 3h-2v-4h1a2 2 0 1 0 0-4h-1v-2h1a2 2 0 1 0 0-4h-1V6.5h4Z" />;
}

function TrophyIcon() {
  return <Glyph path="M7 4h10v2h4v4a5 5 0 0 1-5 5h-1.2A5.8 5.8 0 0 1 14 17.8V19h3v2H7v-2h3v-1.2A5.8 5.8 0 0 1 5.2 15H4a5 5 0 0 1-5-5V6h4V4h4Zm-5 4v2a3 3 0 0 0 3 3h.5c-.3-1-.5-2-.5-3V8H2Zm18 0h-3v2.5c0 1-.2 2-.5 3H19a3 3 0 0 0 3-3V8Z" />;
}

function HeartPulseIcon() {
  return <Glyph path="M13 22s-7-4.7-9.5-8.6C1.4 10.4 2.6 6.6 6 5.2c2.1-.9 4.6-.3 6 1.4 1.4-1.7 3.9-2.3 6-1.4 3.4 1.4 4.6 5.2 2.5 8.2C20 17.3 13 22 13 22Zm-7-9h3l2-4 2.5 6 1.5-3h3" />;
}

function UsersIcon() {
  return <Glyph path="M8.5 13a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Zm11 0a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0ZM1.5 22c0-3.3 2.7-6 6-6M14.5 16c3.3 0 6 2.7 6 6M10.5 7.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />;
}

function ClipboardIcon() {
  return <Glyph path="M9 4h6a2 2 0 0 1 2 2v1h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2V6a2 2 0 0 1 2-2Zm1 2v2h4V6h-4Zm-2 7h8M8 17h8" />;
}

function DumbbellIcon() {
  return <Glyph path="M3 10v4M6 8v8M18 8v8M21 10v4M6 12h12" />;
}

function HomeIcon() {
  return <Glyph path="M4 11.5 13 4l9 7.5V22h-6v-6H10v6H4V11.5Z" />;
}

function Glyph({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 26 26" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d={path} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
