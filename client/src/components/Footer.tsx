export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <svg className="h-10 w-10 text-white opacity-80" viewBox="0 0 40 40" fill="currentColor">
                <path d="M20 3C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3zm8 21h-8v8h-4v-8H8v-4h8v-8h4v8h8v4z"></path>
              </svg>
              <span className="ml-2 text-xl font-bold">DARE Framework</span>
            </div>
            <p className="mt-4 text-gray-400">
              A collaborative framework for integrating AI into design processes responsibly and effectively.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-100 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Case Studies</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Tools Directory</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Research Papers</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-100 mb-4">Legal</h3>
            <div className="flex items-center mb-4">
              <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
                <img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-sa.svg" alt="Creative Commons BY-SA License" className="h-8" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              DARE Framework is licensed under a <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="text-blue-300 hover:text-blue-200" target="_blank" rel="noopener noreferrer">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} DARE Framework. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
