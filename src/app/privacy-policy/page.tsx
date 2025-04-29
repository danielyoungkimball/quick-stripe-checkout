export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            This Privacy Policy explains how Ace Fortuna LLC, operating Joji&apos;s Snack Fund, collects, uses, and protects your information 
            when you use our website and make donations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-4">We collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Payment information (processed securely by Stripe)</li>
            <li>Device and browser information</li>
            <li>Usage data and analytics</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process your donations</li>
            <li>Improve our website and services</li>
            <li>Send you important updates about Joji&apos;s Snack Fund</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal information. 
            All payment data is processed securely through Stripe, and we never store your 
            full credit card information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal information</li>
            <li>Request correction of your data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:joji@corporate-100.com" className="text-purple-400 hover:text-purple-300">
              joji@corporate-100.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
} 