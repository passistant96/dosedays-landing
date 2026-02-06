import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">Dose.</div>
          <div className="flex items-center gap-6">
            <Link href="#features" className="text-muted hover:text-foreground transition-colors">Features</Link>
            <Link href="#privacy" className="text-muted hover:text-foreground transition-colors">Privacy</Link>
            <a 
              href="https://apps.apple.com/app/dose" 
              className="btn-primary text-sm"
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="section pt-32 md:pt-40">
        <div className="container-tight text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Now available on iOS
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Track your rhythm,<br />
            <span className="text-primary">not just your doses</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
            The first microdosing companion that understands integration days. 
            Log doses, reflections, and moods. See patterns emerge over time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://apps.apple.com/app/dose" className="btn-primary text-lg px-8 py-4">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </a>
            <a href="#features" className="btn-secondary text-lg px-8 py-4">
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="section pt-0">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Phone mockup placeholder - replace with actual screenshot */}
            <div className="aspect-[9/16] max-w-[280px] mx-auto bg-splash-bg rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full h-full bg-background rounded-[2.5rem] flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-primary mb-2">Dose.</div>
                  <p className="text-muted text-sm">App screenshot here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="section bg-foreground text-background">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <div className="text-accent font-medium mb-3">The problem</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Other trackers miss the full picture
              </h2>
              <p className="text-background/70 text-lg">
                Microdosing isn't just about dose days. It's about the full cycle: 
                the dose, the integration, and the return to baseline. Most apps 
                only track when you take something—not what happens after.
              </p>
            </div>
            <div>
              <div className="text-primary font-medium mb-3">Our approach</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Track your entire rhythm
              </h2>
              <p className="text-background/70 text-lg">
                Dose understands that integration days matter. Track how you feel 
                on dose days, integration days, and baseline days. See patterns 
                that reveal what actually works for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for microdosers</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Simple tools that fit into your life, not the other way around.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="⚡"
              title="Log in seconds"
              description="One tap to log your dose, mood, and notes. No friction, no complexity."
            />
            <FeatureCard 
              icon="📊"
              title="See your patterns"
              description="After a few entries, insights emerge. Understand your optimal rhythm."
            />
            <FeatureCard 
              icon="🌙"
              title="Track integration days"
              description="The day after matters. Track how you feel when the compound is working quietly."
            />
            <FeatureCard 
              icon="🧘"
              title="Guided breathwork"
              description="Built-in breathing exercises for before, during, or after your experience."
            />
            <FeatureCard 
              icon="📝"
              title="Reflection journal"
              description="Capture thoughts and observations. Build a record of your journey."
            />
            <FeatureCard 
              icon="🔒"
              title="100% private"
              description="All data stays on your device. No accounts, no cloud, no tracking."
            />
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="section bg-primary/5">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 p-4 bg-primary/10 rounded-full">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your data never leaves your device
            </h2>
            <p className="text-muted text-lg mb-8">
              We don't have servers. We don't have accounts. We don't collect your data. 
              Everything you log stays on your iPhone, encrypted by iOS. When you delete 
              the app, it's gone—because we never had it.
            </p>
            <Link href="/privacy" className="text-primary font-medium hover:underline">
              Read our privacy policy →
            </Link>
          </div>
        </div>
      </section>

      {/* This is v1.0 */}
      <section className="section">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto">
            <div className="bg-border/30 rounded-3xl p-8 md:p-12">
              <div className="text-sm font-medium text-primary mb-3">This is v1.0</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                We're just getting started
              </h2>
              <p className="text-muted mb-6">
                Dose launched in February 2026. It's new, it's evolving, and it's 
                shaped by your feedback. We're building this in public—here's what's 
                coming:
              </p>
              <ul className="space-y-3 text-muted mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Health data correlations (sleep, HRV)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Custom protocol builder
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Data export
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Whatever you tell us matters most
                </li>
              </ul>
              <a href="mailto:info@dosedays.me" className="text-primary font-medium hover:underline">
                Send us feedback →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-foreground text-background">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to understand your rhythm?
          </h2>
          <p className="text-background/70 text-lg max-w-xl mx-auto mb-10">
            Download Dose and start tracking today. Free to use, premium features 
            when you're ready.
          </p>
          <a href="https://apps.apple.com/app/dose" className="btn-primary bg-background text-foreground hover:bg-background/90 text-lg px-8 py-4">
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download for iOS
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-bold">Dose.</div>
          <div className="flex items-center gap-8 text-sm text-muted">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <a href="mailto:info@dosedays.me" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <div className="text-sm text-muted">
            © 2026 Dose. Built by microdosers.
          </div>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white border border-border hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted">{description}</p>
    </div>
  )
}
