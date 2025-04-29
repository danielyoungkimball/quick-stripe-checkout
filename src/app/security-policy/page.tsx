export default function SecurityPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Security Policy</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Reporting Security Vulnerabilities</h2>
          <p className="mb-4">
            We at Ace Fortuna LLC take the security of Joji&apos;s Snack Fund seriously. If you believe you&apos;ve found a security vulnerability, 
            please report it to us at security@sendmycatmoney.com.
          </p>
          <p>
            We will respond to all legitimate security reports within 48 hours and keep you updated on our progress.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Payment Security</h2>
          <p className="mb-4">
            All payments are processed securely through Stripe, a PCI Service Provider Level 1, 
            which is the highest grade of payment processing security.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>All payment data is encrypted in transit and at rest</li>
            <li>We never store your full credit card information</li>
            <li>All transactions are protected by SSL/TLS encryption</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your data:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Regular security audits and updates</li>
            <li>Secure data storage and transmission</li>
            <li>Limited access to personal information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>
            For any security-related questions or concerns, please contact us at{' '}
            <a href="mailto:security@sendmycatmoney.com" className="text-purple-400 hover:text-purple-300">
              security@sendmycatmoney.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
} 