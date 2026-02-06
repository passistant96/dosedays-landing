import Link from 'next/link'

export default function Terms() {
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
          
          <h1 className="text-3xl md:text-4xl font-semibold mb-8">Terms of Service</h1>
          
          <p className="text-lg text-[#A4B494] mb-12">
            By using Dose, you agree to these terms. They&apos;re straightforward.
          </p>

          <div className="space-y-8 text-[#A4B494]">
            <section>
              <h2 className="text-xl font-semibold text-[#FAF8F5] mb-3">What Dose Is</h2>
              <p>
                Dose is a personal tracking and journaling app for wellness practices. 
                It helps you log entries, track patterns, and reflect on your experience 
                over time.
              </p>
            </section>
            
            <div className="bg-amber-900/20 border border-amber-700/30 rounded-2xl p-6">
              <p className="font-medium text-amber-200">
                <strong>Important:</strong> Dose is not a medical device and does not provide 
                medical advice, diagnosis, or treatment recommendations. It&apos;s a personal 
                journal. nothing more. Always consult a healthcare professional before 
                making decisions about your health.
              </p>
            </div>

            <section>
              <h2 className="text-xl font-semibold text-[#FAF8F5] mb-3">Age Requirement</h2>
              <p>
                Dose is intended for users aged 17 and older. By using this app, you 
                confirm you meet this age requirement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FAF8F5] mb-3">Your Responsibility</h2>
              <p className="mb-3">You are solely responsible for:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>The accuracy of information you enter</li>
                <li>Decisions you make based on your own data</li>
                <li>Complying with laws in your jurisdiction</li>
                <li>Backing up any data you want to keep</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FAF8F5] mb-3">What We Provide</h2>
              <p>
                We provide the app &quot;as is&quot; and make no warranties about its accuracy, 
                reliability, or suitability for any particular purpose. We&apos;re building 
                this in public and improving based on feedback. things may change.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FAF8F5] mb-3">Subscriptions</h2>
              <p>
                Premium features require a subscription, processed through the App Store. 
                You can manage or cancel your subscription in your iPhone&apos;s Settings → 
                Apple ID → Subscriptions. Refunds are handled by Apple according to their 
                policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FAF8F5] mb-3">Acceptable Use</h2>
              <p>
                Don&apos;t use Dose for anything illegal or harmful. Don&apos;t attempt to 
                reverse-engineer, copy, or redistribute the app.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FAF8F5] mb-3">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, we are not liable for any indirect, 
                incidental, or consequential damages arising from your use of Dose. Our 
                total liability is limited to the amount you paid for the app (if any).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#FAF8F5] mb-3">Contact</h2>
              <p>
                Questions? <a href="mailto:info@dosedays.me" className="text-[#8B9E82] hover:text-[#A4B494]">info@dosedays.me</a>
              </p>
            </section>

            <p className="text-sm text-[#A4B494]/60 pt-8 border-t border-white/10">Last updated: February 2026</p>
          </div>
        </div>
      </article>
    </div>
  )
}
