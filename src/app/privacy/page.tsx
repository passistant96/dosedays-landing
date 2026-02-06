import Link from 'next/link'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#1a1f16] text-[#FAF8F5]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1f16]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold tracking-tight">Dose.</Link>
        </div>
      </nav>

      <article className="pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <Link href="/" className="text-[#A4B494] hover:text-[#FAF8F5] transition-colors mb-8 inline-block">
            ← Back to Dose
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-semibold mb-8">Privacy Policy</h1>
          
          <div className="bg-[#8B9E82]/10 rounded-2xl p-6 mb-12 border border-[#8B9E82]/20">
            <p className="text-lg font-medium text-[#A4B494]">
              The short version: Your data stays on your device. We don&apos;t collect it, 
              store it, or sell it. That&apos;s it.
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-8 text-[#A4B494]">
              <section>
                <h2 className="text-xl font-semibold text-[#FAF8F5] mb-3">Age Requirement</h2>
                <p>
                  Dose is intended for users aged 17 and older. By using this app, you 
                  confirm you meet this age requirement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#FAF8F5] mb-3">What We Collect</h2>
                <p className="mb-3">Nothing personally identifiable. Dose is designed to work entirely offline.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Your doses, moods, reflections, and settings are stored locally on your iPhone.</li>
                  <li>We don&apos;t require an account to use the app.</li>
                  <li>We don&apos;t have servers that store your data.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#FAF8F5] mb-3">Data Storage & Retention</h2>
                <p className="mb-3">
                  All your data is stored locally on your device using secure iOS storage. 
                  We have no servers, databases, or cloud systems storing your information.
                </p>
                <p>
                  If you delete the app, your data is permanently removed from your device. 
                  We cannot recover it because we never had it.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#FAF8F5] mb-3">Analytics</h2>
                <p className="mb-3">We may use anonymous, aggregated analytics to understand how the app is used. This data:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Cannot identify you personally</li>
                  <li>Doesn&apos;t include any of your personal entries</li>
                  <li>Is processed by industry-standard tools</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#FAF8F5] mb-3">In-App Purchases</h2>
                <p>
                  If you purchase a premium subscription, the transaction is handled entirely 
                  by Apple through the App Store. We don&apos;t see your payment details. We use 
                  RevenueCat to manage subscription status. they receive only the information 
                  necessary to process your subscription, not your personal journal entries.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#FAF8F5] mb-3">Health Data</h2>
                <p>
                  If you choose to connect Apple Health in a future update, that data will be 
                  read locally and never uploaded anywhere. You&apos;ll always have full control 
                  over what&apos;s shared and can disconnect at any time.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#FAF8F5] mb-3">International Users (GDPR)</h2>
                <p>
                  We comply with applicable data protection laws including GDPR. Since we 
                  don&apos;t collect personal data, most provisions don&apos;t apply. but you have the 
                  right to request information about your data at any time.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#FAF8F5] mb-3">California Residents (CCPA)</h2>
                <p>
                  We do not sell personal information. Since we don&apos;t collect personally 
                  identifiable data, CCPA rights to access and delete don&apos;t apply in the 
                  traditional sense. your data is already entirely in your control on your 
                  own device.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#FAF8F5] mb-3">Contact</h2>
                <p>
                  Questions about privacy? <a href="mailto:info@dosedays.me" className="text-[#8B9E82] hover:text-[#A4B494]">info@dosedays.me</a>
                </p>
              </section>

              <p className="text-sm text-[#A4B494]/60 pt-8 border-t border-white/10">Last updated: February 2026</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
