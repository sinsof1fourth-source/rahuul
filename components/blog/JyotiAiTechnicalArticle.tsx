import {
  ExternalLink,
  Compass,
  Cpu,
  Sparkles,
  Calendar,
  Activity,
  Smartphone,
  CheckCircle2,
  Shield,
  Layers,
} from 'lucide-react'

export function JyotiAiTechnicalArticle() {
  return (
    <div className="max-w-4xl space-y-16 text-foreground-muted leading-relaxed">
      {/* ── Executive Overview ── */}
      <section className="rounded-3xl border border-accent/30 bg-surface/40 p-8 sm:p-12 shadow-elevated">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-border-subtle/40 mb-6">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-light">
              Engineering Paper · Production Systems Architecture
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-1">
              Deterministic Astro-Numerology &amp; Offline Mobile Systems
            </h2>
          </div>
          <a
            href="https://jyotiai.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-xs font-mono font-semibold text-background hover:bg-accent-light transition-colors shrink-0"
          >
            Live Site (jyotiai.app) <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <p className="text-base sm:text-lg text-foreground">
          Most modern astrology and numerology applications operate as thin wrappers over remote REST endpoints. When a user queries a horoscope or requests a chart, the client makes an unencrypted or centralized API call transmitting highly sensitive personal identifiable information—exact birth dates, minute-precise birth times, and high-resolution GPS birth coordinates. Beyond severe privacy liabilities, remote architectures suffer from network latency, rate limits, and server-side failure modes.
        </p>
        <p className="mt-4 text-base">
          <strong className="text-foreground">JyotiAI</strong> was engineered to dismantle this dependency. By packaging deterministic astronomical algorithms, dual numerology matrices, and geometric chart visualizers directly into an offline-first mobile client built with React Native and Expo, all computations occur locally on the user&apos;s device in sub-millisecond execution cycles with zero network latency. Remote infrastructure is reserved strictly for vector-indexed semantic knowledge retrieval over authentic Vedic texts using Supabase <code className="text-accent-light font-mono text-xs bg-surface/80 px-1.5 py-0.5 rounded">pgvector</code>.
        </p>
      </section>

      {/* ── 1. Deterministic Vedic Astrological Engine ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-accent/10 p-2.5 text-accent-light border border-accent/20">
            <Compass className="h-5 w-5" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            1. The Deterministic Vedic Planetary Engine
          </h2>
        </div>

        <p>
          Vedic astrology (<em>Jyotish</em>) operates within the sidereal zodiac (<em>Nirayana</em>), accounting for the axial precession of the equinoxes. Tropical systems peg 0° Aries to the vernal equinox; the Vedic system corrects for the Earth&apos;s 25,772-year wobble using an offset parameter known as the <strong className="text-foreground">Ayanamsha</strong>.
        </p>

        <div className="p-6 rounded-2xl border border-border-subtle/80 bg-surface/60 font-mono text-xs sm:text-sm text-foreground overflow-x-auto space-y-2">
          <div className="text-accent-light">{'// Sidereal Planetary Longitude Calculation'}</div>
          <div>λ_sidereal = (λ_tropical - Ayanamsha_Lahiri) mod 360°</div>
          <div className="text-foreground-dim text-xs mt-1">
            * Lahiri Ayanamsha (Chitra Paksha) calibrated precisely to the epoch J2000.0 with annual precession delta: ~50.29&quot; / year.
          </div>
        </div>

        <p>
          The offline astrological engine implements:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono text-foreground">
          <li className="p-4 rounded-xl border border-border-subtle/60 bg-surface/40">
            <strong className="text-accent-light block mb-1">Ascendant (Lagna) Determination:</strong>
            Calculates Greenwich Mean Sidereal Time (GMST) and Local Sidereal Time (LST) from UTC timestamp and birth longitude to solve for the rising ecliptic degree on the eastern horizon.
          </li>
          <li className="p-4 rounded-xl border border-border-subtle/60 bg-surface/40">
            <strong className="text-accent-light block mb-1">12 Bhavas (Equal House Cusps):</strong>
            Constructs the 12 houses starting from the exact degree of the Ascendant, mapping planetary placements, house lordships, and mutual aspect matrices without external roundtrips.
          </li>
          <li className="p-4 rounded-xl border border-border-subtle/60 bg-surface/40">
            <strong className="text-accent-light block mb-1">27 Nakshatras &amp; 108 Padas:</strong>
            Partitions the 360° zodiac into 27 lunar mansions of 13°20&apos; (800 arcminutes) each, sub-divided into 4 padas of 3°20&apos; (200 arcminutes) each.
          </li>
          <li className="p-4 rounded-xl border border-border-subtle/60 bg-surface/40">
            <strong className="text-accent-light block mb-1">Vimshottari Dasha Engine:</strong>
            Evaluates the moon&apos;s exact nakshatra degree at birth to compute the remaining balance of the starting planetary dasha, generating the full 120-year chronological timeline (Mahadashas and Antardashas).
          </li>
        </ul>
      </section>

      {/* ── 2. Dual Numerology Computation Matrices ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-accent/10 p-2.5 text-accent-light border border-accent/20">
            <Cpu className="h-5 w-5" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            2. Dual Numerology Computation Matrices
          </h2>
        </div>

        <p>
          JyotiAI is designed with dual-engine architecture: evaluating both the ancient sound-vibrational <strong className="text-foreground">Chaldean</strong> system and the sequential <strong className="text-foreground">Pythagorean</strong> system simultaneously.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
          <div className="rounded-2xl border border-accent/20 bg-surface/60 p-5">
            <span className="text-accent-light font-bold block mb-3 uppercase tracking-wider">
              Chaldean Sound-Frequency Mapping (1–8)
            </span>
            <div className="space-y-1.5 text-foreground-dim">
              <div>1: A, I, J, Q, Y</div>
              <div>2: B, K, R</div>
              <div>3: C, G, L, S</div>
              <div>4: D, M, T</div>
              <div>5: E, H, N, X</div>
              <div>6: U, V, W</div>
              <div>7: O, Z</div>
              <div>8: F, P</div>
              <div className="text-amber-400/90 pt-1 border-t border-border-subtle/40">
                * Number 9 is reserved as sacred &amp; transformative; compound vibrations (11, 22, 33) preserved as Master Numbers.
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border-subtle/80 bg-surface/60 p-5">
            <span className="text-foreground font-bold block mb-3 uppercase tracking-wider">
              Pythagorean Alphabetical Matrix (1–9)
            </span>
            <div className="space-y-1.5 text-foreground-dim">
              <div>1: A, J, S | 2: B, K, T | 3: C, L, U</div>
              <div>4: D, M, V | 5: E, N, W | 6: F, O, X</div>
              <div>7: G, P, Y | 8: H, Q, Z | 9: I, R</div>
              <div className="text-foreground-muted pt-1 border-t border-border-subtle/40">
                * Root reduction of birth date gives Life Path; sum of vowels gives Soul Urge; sum of consonants gives Personality.
              </div>
            </div>
          </div>
        </div>

        <p>
          The engine calculates continuous temporal cycles without relying on arbitrary daily horoscopes:
        </p>
        <div className="p-5 rounded-2xl border border-border-subtle/60 bg-surface/40 font-mono text-xs text-foreground space-y-1.5">
          <div>Personal Year = DigitalRoot(BirthMonth + BirthDay + CurrentCalendarYear)</div>
          <div>Personal Month = DigitalRoot(PersonalYear + CurrentCalendarMonth)</div>
          <div>Personal Day = DigitalRoot(PersonalMonth + CurrentCalendarDay)</div>
        </div>
      </section>

      {/* ── 3. Visualizing Kundli & The Numerology Calendar ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-accent/10 p-2.5 text-accent-light border border-accent/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            3. Kundli Screen, Chart Renderer &amp; Calendar
          </h2>
        </div>

        <p>
          Rendering Vedic birth charts (Kundli) inside React Native traditionally requires heavy WebView bridges or heavyweight canvas packages. JyotiAI renders North Indian diamond charts and South Indian square matrices directly with lightweight vector primitives:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border-subtle/80 bg-surface/30 p-6 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent-light flex items-center gap-2">
              <Layers className="h-4 w-4" /> Kundli Chart Screen
            </span>
            <p className="text-sm">
              Draws the 12 houses with fixed geometric boundaries. The Ascendant (Lagna) is placed at House 1 (top central diamond in North Indian format); subsequent signs and planetary coordinates rotate counter-clockwise. Retrograde planetary indicators, combustion distances from the Sun, and friendly/enemy dignity states are calculated and styled dynamically.
            </p>
          </div>

          <div className="rounded-2xl border border-border-subtle/80 bg-surface/30 p-6 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent-light flex items-center gap-2">
              <Calendar className="h-4 w-4" /> Numerology Calendar
            </span>
            <p className="text-sm">
              A monthly timeline showing the user&apos;s daily vibrational cycle numbers (1–9). Color-coded affinity tags indicate days aligned with the native&apos;s Life Path or Destiny number, highlighting favorable windows for initiating projects, consolidating resources, or reflective inward contemplation.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. Forecast Engine: Ephemeris & Transits ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-accent/10 p-2.5 text-accent-light border border-accent/20">
            <Activity className="h-5 w-5" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            4. The Transits &amp; Daily Forecast Engine
          </h2>
        </div>

        <p>
          Rather than generating generic horoscope text, the <strong className="text-foreground">Forecast Engine</strong> computes real-time celestial deltas against the native natal chart. Current planetary longitudes (such as Saturn in Aquarius or Jupiter in Taurus) are compared to the native&apos;s natal Moon sign and Ascendant to determine active Gochara (transit) effects.
        </p>
        <p>
          By combining active planetary transits with the user&apos;s daily numerological cycle, JyotiAI delivers context-aware, grounded reflections across career, personal growth, relationships, and health focus—strictly framed as traditional self-inquiry, without supernatural fatalism or fortune-telling claims.
        </p>
      </section>

      {/* ── 5. Mobile Architecture & Vector Retrieval ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-accent/10 p-2.5 text-accent-light border border-accent/20">
            <Smartphone className="h-5 w-5" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            5. Client Architecture &amp; Supabase pgvector
          </h2>
        </div>

        <p>
          The mobile client is built on Expo (SDK 51/52) and TypeScript strict mode, with a clean separation of concerns:
        </p>

        <div className="rounded-2xl border border-border-subtle/80 bg-surface/40 p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs border-b border-border-subtle/40 pb-3">
            <span className="text-accent-light font-bold">Offline Client Kernel</span>
            <span className="text-foreground-dim">Zero Network Dependencies for Math</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-foreground">
            <div className="p-3 rounded-xl bg-surface/60 border border-border-subtle/50">
              <span className="text-foreground-dim block">Layer 1:</span>
              <strong className="text-foreground">Math Engines</strong>
              <p className="text-foreground-muted mt-1">Vedic chart math, Chaldean reduction, calendar matrix.</p>
            </div>
            <div className="p-3 rounded-xl bg-surface/60 border border-border-subtle/50">
              <span className="text-foreground-dim block">Layer 2:</span>
              <strong className="text-foreground">Zustand State</strong>
              <p className="text-foreground-muted mt-1">Immutable user profile, chart cache, entitlement state.</p>
            </div>
            <div className="p-3 rounded-xl bg-surface/60 border border-border-subtle/50">
              <span className="text-foreground-dim block">Layer 3:</span>
              <strong className="text-foreground">UI Components</strong>
              <p className="text-foreground-muted mt-1">Kundli vector renderer, Pattern Map, calendar grid.</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border-subtle/80 bg-surface/40 p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs border-b border-border-subtle/40 pb-3">
            <span className="text-accent-light font-bold">Cloud Knowledge Layer (Supabase + pgvector)</span>
            <span className="text-foreground-dim">PostgreSQL 16 · 9 Strict RLS Policies</span>
          </div>
          <p className="text-sm">
            For contextual guidance and assistant questions, Supabase handles knowledge retrieval over a curated corpus of 13 authentic classical Vedic sources chunked into 27 vector-indexed passages. When a user asks a reflective question, vector cosine similarity retrieves grounded classical insights without exposing user birth profiles to untrusted third parties.
          </p>
        </div>
      </section>

      {/* ── 6. Empirical Validation & Real Status ── */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-accent/10 p-2.5 text-accent-light border border-accent/20">
            <Shield className="h-5 w-5" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            6. Empirical Validation &amp; Implementation Status
          </h2>
        </div>

        <p>
          In alignment with our engineering principles—<em>Build systems in silence. Reveal results, not intentions</em>—we explicitly distinguish verified working code from operational rollout stages:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border-subtle/80 bg-surface/30 p-6 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent-light flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" /> Verified Implemented Capabilities
            </span>
            <ul className="text-xs font-mono text-foreground-muted space-y-2">
              <li>• <strong>96 / 96 Automated Tests Passing:</strong> Unit &amp; integration coverage for numerology reductions, house cusps, and RLS policies.</li>
              <li>• <strong>Deterministic Offline Math Kernel:</strong> Complete independence from external astrology APIs.</li>
              <li>• <strong>Interactive 3D Web Universe:</strong> Live Three.js static experience deployed on Cloudflare Workers at <a href="https://jyotiai.app" target="_blank" rel="noopener noreferrer" className="text-accent-light underline">jyotiai.app</a>.</li>
              <li>• <strong>RevenueCat Monetization Architecture:</strong> Free daily readings tier + Premium subscription tier (₹288/mo, ₹2,880/yr).</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <Activity className="h-4 w-4" /> In-Progress Store Rollout Status
            </span>
            <ul className="text-xs font-mono text-foreground-muted space-y-2">
              <li>• <strong>Google Play Closed Testing Track:</strong> Personal account ID 6720754810142205025; executing required 14-day closed tester verification with ≥12 opted-in testers.</li>
              <li>• <strong>Android Package:</strong> <code className="text-amber-300">ai.jyoti.app</code> built via EAS remote build profiles.</li>
              <li>• <strong>No Fabricated Metrics:</strong> No synthetic download numbers, fake customer reviews, or unverified claims.</li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-border-subtle/80 bg-surface/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold text-accent-light uppercase">Explore The Project</span>
            <p className="text-sm text-foreground-muted mt-0.5">
              Experience the living system of patterns on the official website.
            </p>
          </div>
          <a
            href="https://jyotiai.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-xs font-mono font-semibold text-background hover:bg-accent-light transition-colors shrink-0"
          >
            Visit jyotiai.app <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>
    </div>
  )
}
