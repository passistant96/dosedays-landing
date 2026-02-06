"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function DoseLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    if (!supabase) {
      setStatus("error");
      return;
    }
    
    setStatus("loading");
    try {
      const { error } = await supabase
        .from("email_signups")
        .insert([{ email }]);
      
      if (error) {
        if (error.code === "23505") {
          // Duplicate email
          setStatus("success");
        } else {
          throw error;
        }
      } else {
        setStatus("success");
      }
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1f16] text-[#FAF8F5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1f16]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="block">
              <Image
                src="/logo.svg"
                alt="Dose"
                width={80}
                height={32}
                className="h-8 w-auto"
              />
            </Link>

            {/* Nav Links - Desktop */}
            <div className="hidden md:flex items-center gap-12">
              <a href="#features" className="text-sm text-[#A4B494] hover:text-[#FAF8F5] transition-colors">
                Features
              </a>
              <a href="#privacy" className="text-sm text-[#A4B494] hover:text-[#FAF8F5] transition-colors">
                Privacy
              </a>
              <Link href="/privacy" className="text-sm text-[#A4B494] hover:text-[#FAF8F5] transition-colors">
                Policy
              </Link>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href="#signup" 
                className="text-sm px-5 py-2 bg-[#8B9E82] text-[#1a1f16] rounded-full hover:bg-[#A4B494] transition-colors font-medium"
              >
                Get Notified
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden pt-6 pb-4 border-t border-white/10 mt-4">
              <div className="flex flex-col gap-4">
                <a href="#features" className="text-lg text-[#A4B494]">Features</a>
                <a href="#privacy" className="text-lg text-[#A4B494]">Privacy</a>
                <Link href="/privacy" className="text-lg text-[#A4B494]">Policy</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="signup" className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              {/* Eyebrow */}
              <p className="text-sm tracking-[0.2em] uppercase text-[#8B9E82] mb-6">
                Coming Soon to iOS
              </p>

              {/* Main headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] mb-8 tracking-tight">
                Track your rhythm,{" "}
                <span className="italic text-[#A4B494]">not just your doses</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-[#A4B494] leading-relaxed max-w-xl mb-12 font-light">
                The first microdosing companion that understands integration days. 
                Log doses, reflections, and moods. See patterns emerge over time.
              </p>

              {/* CTA - Email Signup */}
              {status === "success" ? (
                <div className="flex items-center gap-3 text-[#8B9E82]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">You&apos;re on the list. We&apos;ll email you when we launch.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-row gap-2 items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 min-w-0 px-4 py-3 sm:px-6 sm:py-4 bg-[#2a2f26] border border-white/10 rounded-full text-sm sm:text-base text-[#FAF8F5] placeholder-[#A4B494]/50 focus:outline-none focus:border-[#8B9E82]"
                  />
                  <button 
                    type="submit"
                    disabled={status === "loading"}
                    className="px-4 py-3 sm:px-8 sm:py-4 bg-[#8B9E82] text-[#1a1f16] rounded-full text-sm sm:text-base font-medium hover:bg-[#A4B494] transition-colors disabled:opacity-50 whitespace-nowrap"
                  >
                    {status === "loading" ? "..." : "Notify Me"}
                  </button>
                </form>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm mt-2">Something went wrong. Try again?</p>
              )}
              <p className="text-sm text-[#A4B494]/60 mt-4">We&apos;ll only email you once when we launch. No spam.</p>
            </div>

            {/* Right: Phone Mockup */}
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/30 border border-white/10">
                  <Image
                    src="/screenshots/home.png"
                    alt="Dose app home screen"
                    width={280}
                    height={607}
                    className="w-[280px] h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 flex justify-center">
            <div className="flex gap-6 md:gap-8 bg-[#2a2f26] px-6 md:px-8 py-4 rounded-full shadow-lg border border-white/10">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-medium text-[#8B9E82]">100%</div>
                <div className="text-xs text-[#A4B494]/60 uppercase tracking-wider">Private</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-xl md:text-2xl font-medium text-[#8B9E82]">v1.0</div>
                <div className="text-xs text-[#A4B494]/60 uppercase tracking-wider">Launch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-[#8B9E82] text-[#1a1f16]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[#1a1f16]/60 mb-6">
                Why Dose
              </p>
              <h2 className="text-4xl md:text-5xl leading-tight mb-8">
                Other trackers miss{" "}
                <span className="italic text-[#1a1f16]/70">the full picture</span>
              </h2>
              <p className="text-lg text-[#1a1f16]/80 leading-relaxed mb-6">
                Microdosing isn&apos;t just about dose days. It&apos;s about the full cycle: 
                the dose, the integration, and the return to baseline.
              </p>
              <p className="text-lg text-[#1a1f16]/80 leading-relaxed">
                Dose understands that integration days matter. Track how you feel 
                across your entire rhythm and see what actually works for you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { number: "01", title: "Track", desc: "Log doses in seconds" },
                { number: "02", title: "Reflect", desc: "Capture thoughts daily" },
                { number: "03", title: "Understand", desc: "See patterns emerge" },
                { number: "04", title: "Own", desc: "Your data stays yours" },
              ].map((item) => (
                <div key={item.number} className="border border-[#1a1f16]/20 rounded-xl p-6 bg-[#1a1f16]/5">
                  <span className="text-sm text-[#1a1f16]/50 font-mono">{item.number}</span>
                  <h3 className="text-xl mt-4 mb-2 font-medium">{item.title}</h3>
                  <p className="text-sm text-[#1a1f16]/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.2em] uppercase text-[#8B9E82] mb-6">
              Features
            </p>
            <h2 className="text-4xl md:text-5xl">
              Built for{" "}
              <span className="italic text-[#A4B494]">microdosers</span>
            </h2>
          </div>

          <div className="space-y-1">
            {[
              {
                title: "One-Tap Logging",
                description: "Record your dose, mood, and notes in seconds. No friction, no complexity.",
                detail: "Quick capture",
              },
              {
                title: "Track Integration Days",
                description: "The day after matters. Track how you feel when the compound is working quietly.",
                detail: "Unique to Dose",
              },
              {
                title: "See Your Patterns",
                description: "After a few entries, insights emerge. Understand your optimal rhythm.",
                detail: "Deep insights",
              },
              {
                title: "Built-in Knowledge",
                description: "Curated articles on protocols, science, and integration. Learn at your own pace.",
                detail: "Library included",
              },
              {
                title: "100% Private",
                description: "All data stays on your device. No accounts, no cloud, no tracking.",
                detail: "Local-first",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="border-b border-white/10 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 -mx-6"
              >
                <div className="flex-1">
                  <h3 className="text-2xl mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#A4B494]">{feature.description}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-[#8B9E82] px-4 py-2 rounded-full bg-[#8B9E82]/10">
                    {feature.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Grid */}
      <section className="py-32 px-6 bg-[#8B9E82] text-[#1a1f16]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] uppercase text-[#1a1f16]/60 mb-6">
              The App
            </p>
            <h2 className="text-4xl md:text-5xl">
              Every screen,{" "}
              <span className="italic text-[#1a1f16]/70">thoughtfully crafted</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-6 max-w-xs sm:max-w-none mx-auto">
            <div className="space-y-2">
              <div className="overflow-hidden rounded-[2rem]">
                <Image
                  src="/screenshots/log-dose.png"
                  alt="Log dose screen"
                  width={280}
                  height={607}
                  className="w-full h-auto"
                />
              </div>
              <p className="hidden md:block text-sm text-[#1a1f16]/60 text-center">Log Dose</p>
            </div>
            <div className="space-y-2">
              <div className="overflow-hidden rounded-[2rem]">
                <Image
                  src="/screenshots/breathwork.png"
                  alt="Breathwork screen"
                  width={280}
                  height={607}
                  className="w-full h-auto"
                />
              </div>
              <p className="hidden md:block text-sm text-[#1a1f16]/60 text-center">Breathwork</p>
            </div>
            <div className="space-y-2">
              <div className="overflow-hidden rounded-[2rem]">
                <Image
                  src="/screenshots/insights.png"
                  alt="Insights screen"
                  width={280}
                  height={607}
                  className="w-full h-auto"
                />
              </div>
              <p className="hidden md:block text-sm text-[#1a1f16]/60 text-center">Deep Insights</p>
            </div>
            <div className="space-y-2">
              <div className="overflow-hidden rounded-[2rem]">
                <Image
                  src="/screenshots/journal.png"
                  alt="Journal screen"
                  width={280}
                  height={607}
                  className="w-full h-auto"
                />
              </div>
              <p className="hidden md:block text-sm text-[#1a1f16]/60 text-center">Journal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 p-4 bg-[#8B9E82]/10 rounded-full">
              <svg className="w-8 h-8 text-[#8B9E82]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Your data never leaves{" "}
              <span className="italic text-[#A4B494]">your device</span>
            </h2>
            <p className="text-lg text-[#A4B494] leading-relaxed mb-8">
              We don&apos;t have servers. We don&apos;t have accounts. We don&apos;t collect your data. 
              Everything you log stays on your iPhone, encrypted by iOS. When you delete 
              the app, it&apos;s gone. because we never had it.
            </p>
            <Link href="/privacy" className="text-[#8B9E82] font-medium hover:text-[#A4B494] transition-colors">
              Read our privacy policy →
            </Link>
          </div>
        </div>
      </section>

      {/* This is v1.0 */}
      <section className="py-32 px-6 bg-[#8B9E82] text-[#1a1f16]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="border border-[#1a1f16]/20 rounded-3xl p-8 md:p-12 bg-[#1a1f16]/5">
              <div className="text-sm font-medium text-[#1a1f16]/60 mb-3">This is v1.0</div>
              <h2 className="text-2xl md:text-3xl mb-4">
                We&apos;re just getting started
              </h2>
              <p className="text-[#1a1f16]/80 mb-6">
                Dose launched in February 2026. It&apos;s new, it&apos;s evolving, and it&apos;s 
                shaped by your feedback. We&apos;re building this in public. here&apos;s what&apos;s coming:
              </p>
              <ul className="space-y-3 text-[#1a1f16]/80 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#1a1f16] rounded-full"></span>
                  Health data correlations (sleep, HRV)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#1a1f16] rounded-full"></span>
                  Data export
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#1a1f16] rounded-full"></span>
                  Whatever you tell us matters most
                </li>
              </ul>
              <a href="mailto:info@dosedays.me" className="text-[#1a1f16] font-medium hover:text-[#1a1f16]/70 transition-colors">
                Get in touch →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
            Ready to understand{" "}
            <span className="italic text-[#A4B494]">your rhythm?</span>
          </h2>
          <p className="text-xl text-[#A4B494] mb-12 max-w-2xl mx-auto">
            Be the first to know when Dose launches. Free to use, premium features when you&apos;re ready.
          </p>
          <a 
            href="mailto:info@dosedays.me?subject=Notify%20me%20when%20Dose%20launches"
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#8B9E82] text-[#1a1f16] rounded-full text-lg font-medium hover:bg-[#A4B494] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Get Notified
          </a>
          <p className="text-sm text-[#A4B494]/60 mt-6">Launching soon on iOS.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <a href="/" className="mb-4 block">
                <Image
                  src="/logo.svg"
                  alt="Dose"
                  width={80}
                  height={32}
                  className="h-8 w-auto"
                />
              </a>
              <p className="text-[#A4B494]/60 text-sm max-w-xs">
                A mindful companion for tracking your microdosing journey. Built by microdosers.
              </p>
            </div>
            <div className="flex gap-8 text-sm">
              <Link href="/privacy" className="text-[#A4B494]/60 hover:text-[#FAF8F5] transition-colors">Privacy</Link>
              <Link href="/terms" className="text-[#A4B494]/60 hover:text-[#FAF8F5] transition-colors">Terms</Link>
              <a href="mailto:info@dosedays.me" className="text-[#A4B494]/60 hover:text-[#FAF8F5] transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-6 mt-6 border-t border-white/10 text-sm text-[#A4B494]/60">
            <p>© 2026 Dose. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
