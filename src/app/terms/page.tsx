import Link from 'next/link'

export default function Terms() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">Dose.</Link>
        </div>
      </nav>

      <article className="section pt-32 md:pt-40">
        <div className="max-w-2xl mx-auto">
          <Link href="/" className="text-muted hover:text-foreground transition-colors mb-8 inline-block">
            ← Back to Dose
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          
          <p className="text-lg text-muted mb-12">
            By using Dose, you agree to these terms. They're straightforward.
          </p>

          <div className="prose prose-lg prose-slate">
            <h2>What Dose Is</h2>
            <p>
              Dose is a personal tracking and journaling app for wellness practices. 
              It helps you log entries, track patterns, and reflect on your experience 
              over time.
            </p>
            
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 my-8 not-prose">
              <p className="font-medium text-amber-900">
                <strong>Important:</strong> Dose is not a medical device and does not provide 
                medical advice, diagnosis, or treatment recommendations. It's a personal 
                journal—nothing more. Always consult a healthcare professional before 
                making decisions about your health.
              </p>
            </div>

            <h2>Age Requirement</h2>
            <p>
              Dose is intended for users aged 17 and older. By using this app, you 
              confirm you meet this age requirement.
            </p>

            <h2>Your Responsibility</h2>
            <p>You are solely responsible for:</p>
            <ul>
              <li>The accuracy of information you enter</li>
              <li>Decisions you make based on your own data</li>
              <li>Complying with laws in your jurisdiction</li>
              <li>Backing up any data you want to keep (the app stores data locally on your device)</li>
            </ul>

            <h2>What We Provide</h2>
            <p>
              We provide the app "as is" and make no warranties about its accuracy, 
              reliability, or suitability for any particular purpose. We're building 
              this in public and improving based on feedback—things may change.
            </p>

            <h2>Subscriptions</h2>
            <p>
              Premium features require a subscription, processed through the App Store. 
              You can manage or cancel your subscription in your iPhone's Settings → 
              Apple ID → Subscriptions. Refunds are handled by Apple according to their 
              policies.
            </p>

            <h2>Acceptable Use</h2>
            <p>
              Don't use Dose for anything illegal or harmful. Don't attempt to 
              reverse-engineer, copy, or redistribute the app.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, we are not liable for any indirect, 
              incidental, or consequential damages arising from your use of Dose. Our 
              total liability is limited to the amount you paid for the app (if any).
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may update these terms occasionally. Continued use of the app after 
              changes constitutes acceptance of the new terms.
            </p>

            <h2>Contact</h2>
            <p>
              Questions? <a href="mailto:info@dosedays.me">info@dosedays.me</a>
            </p>

            <p className="text-muted text-sm mt-12">Last updated: February 2026</p>
          </div>
        </div>
      </article>
    </main>
  )
}
