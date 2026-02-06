"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function DoseLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

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
                href="https://apps.apple.com/app/dose" 
                className="text-sm px-6 py-2.5 bg-[#8B9E82] text-[#1a1f16] rounded-full hover:bg-[#A4B494] transition-colors font-medium"
              >
                Download
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
      <section className="pt-32 pb-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <p className="text-sm tracking-[0.2em] uppercase text-[#8B9E82] mb-6">
              Now on iOS
            </p>

            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1] mb-8 tracking-tight">
              Track your rhythm,{" "}
              <span className="italic text-[#A4B494]">not just your doses</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-[#A4B494] leading-relaxed max-w-2xl mb-12 font-light">
              The first microdosing companion that understands integration days. 
              Log doses, reflections, and moods. See patterns emerge over time.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a 
                href="https://apps.apple.com/app/dose"
                className="px-8 py-4 bg-[#8B9E82] text-[#1a1f16] rounded-full text-base font-medium hover:bg-[#A4B494] transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download for iOS
              </a>
              <a 
                href="#features"
                className="px-8 py-4 text-[#FAF8F5] border border-white/20 rounded-full text-base font-medium hover:border-[#8B9E82] transition-colors"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 flex justify-center">
            <div className="flex gap-8 bg-[#2a2f26] px-8 py-4 rounded-full shadow-lg border border-white/10">
              <div className="text-center">
                <div className="text-2xl font-medium text-[#8B9E82]">100%</div>
                <div className="text-xs text-[#A4B494]/60 uppercase tracking-wider">Private</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-medium text-[#8B9E82]">v1.0</div>
                <div className="text-xs text-[#A4B494]/60 uppercase tracking-wider">Launch</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-medium text-[#8B9E82]">Free</div>
                <div className="text-xs text-[#A4B494]/60 uppercase tracking-wider">To Start</div>
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
            <div className="grid grid-cols-2 gap-6">
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
                title: "Log in Seconds",
                description: "One tap to record your dose, mood, and notes. No friction, no complexity.",
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
                title: "Guided Breathwork",
                description: "Built-in breathing exercises for before, during, or after your experience.",
                detail: "Box, relaxing, energizing",
              },
              {
                title: "100% Private",
                description: "All data stays on your device. No accounts, no cloud, no tracking.",
                detail: "Local-first",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group border-b border-white/10 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/5 px-6 -mx-6 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-2xl mb-2 group-hover:translate-x-2 transition-transform">
                    {feature.title}
                  </h3>
                  <p className="text-[#A4B494]">{feature.description}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#8B9E82] px-4 py-2 rounded-full bg-[#8B9E82]/10">
                    {feature.detail}
                  </span>
                  <svg className="w-5 h-5 text-[#A4B494]/50 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
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
              <p className="text-sm text-[#1a1f16]/60 text-center">Log Dose</p>
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
              <p className="text-sm text-[#1a1f16]/60 text-center">Breathwork</p>
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
              <p className="text-sm text-[#1a1f16]/60 text-center">Deep Insights</p>
            </div>
            <div className="space-y-2">
              <div className="overflow-hidden rounded-[2rem]">
                <Image
                  src="/screenshots/settings.png"
                  alt="Settings screen"
                  width={280}
                  height={607}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-[#1a1f16]/60 text-center">Your Data</p>
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
                  Custom protocol builder
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
                Send us feedback →
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
            Download Dose and start tracking today. Free to use, premium features when you&apos;re ready.
          </p>
          <a 
            href="https://apps.apple.com/app/dose"
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#8B9E82] text-[#1a1f16] rounded-full text-lg font-medium hover:bg-[#A4B494] transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download for iOS
          </a>
          <p className="text-sm text-[#A4B494]/60 mt-6">Free to download. Premium optional.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-6">
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

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 mt-8 border-t border-white/10 text-sm text-[#A4B494]/60">
            <p>© 2026 Dose. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
