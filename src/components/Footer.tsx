export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-gray-400 text-sm">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <a 
            href="/privacy-policy" 
            className="hover:text-purple-400 transition-colors"
          >
            Privacy Policy
          </a>
          <span className="text-gray-600">•</span>
          <a 
            href="/security-policy" 
            className="hover:text-purple-400 transition-colors"
          >
            Security Policy
          </a>
        </div>
        <p>© {new Date().getFullYear()} Ace Fortuna LLC. All rights reserved.</p>
      </div>
    </footer>
  );
} 