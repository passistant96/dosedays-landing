import Link from 'next/link'

export default function Privacy() {
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
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="bg-primary/5 rounded-2xl p-6 mb-12">
            <p className="text-lg font-medium">
              The short version: Your data stays on your device. We don't collect it, 
              store it, or sell it. That's it.
            </p>
          </div>

          <div className="prose prose-lg prose-slate">
            <h2>Age Requirement</h2>
            <p>
              Dose is intended for users aged 17 and older. By using this app, you 
              confirm you meet this age requirement.
            </p>

            <h2>What We Collect</h2>
            <p>Nothing personally identifiable. Dose is designed to work entirely offline.</p>
            <ul>
              <li>Your doses, moods, reflections, and settings are stored locally on your iPhone.</li>
              <li>We don't require an account to use the app.</li>
              <li>We don't have servers that store your data.</li>
            </ul>

            <h2>Data Storage & Retention</h2>
            <p>
              All your data is stored locally on your device using secure iOS storage. 
              We have no servers, databases, or cloud systems storing your information.
            </p>
            <p>
              If you delete the app, your data is permanently removed from your device. 
              We cannot recover it because we never had it.
            </p>

            <h2>Analytics</h2>
            <p>We may use anonymous, aggregated analytics to understand how the app is used (e.g., which features are popular). This data:</p>
            <ul>
              <li>Cannot identify you personally</li>
              <li>Doesn't include any of your personal entries</li>
              <li>Is processed by industry-standard tools</li>
            </ul>

            <h2>In-App Purchases</h2>
            <p>
              If you purchase a premium subscription, the transaction is handled entirely 
              by Apple through the App Store. We don't see your payment details. We use 
              RevenueCat to manage subscription status—they receive only the information 
              necessary to process your subscription, not your personal journal entries.
            </p>

            <h2>Health Data</h2>
            <p>
              If you choose to connect Apple Health in a future update, that data will be 
              read locally and never uploaded anywhere. You'll always have full control 
              over what's shared and can disconnect at any time.
            </p>

            <h2>Third-Party Services</h2>
            <p>The app may use the following third-party services:</p>
            <ul>
              <li><strong>RevenueCat</strong> — Subscription management</li>
              <li><strong>Apple App Store</strong> — Payment processing</li>
            </ul>

            <h2>International Users (GDPR)</h2>
            <p>
              We comply with applicable data protection laws including GDPR. Since we 
              don't collect personal data, most provisions don't apply—but you have the 
              right to request information about your data at any time.
            </p>

            <h2>California Residents (CCPA)</h2>
            <p>
              We do not sell personal information. Since we don't collect personally 
              identifiable data, CCPA rights to access and delete don't apply in the 
              traditional sense—your data is already entirely in your control on your 
              own device.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Dose is not intended for users under 17. We do not knowingly collect 
              information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this policy occasionally. We'll note the date of any 
              changes at the bottom of this page.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about privacy? <a href="mailto:info@dosedays.me">info@dosedays.me</a>
            </p>

            <p className="text-muted text-sm mt-12">Last updated: February 2026</p>
          </div>
        </div>
      </article>
    </main>
  )
}
