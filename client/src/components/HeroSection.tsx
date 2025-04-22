import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-blue-800 overflow-hidden">
      <div className="absolute inset-0">
        <svg className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/4 lg:translate-x-1/4 xl:-translate-y-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="pattern-squares" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="rgba(255, 255, 255, 0.1)" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#pattern-squares)" />
        </svg>
      </div>
      <div className="relative pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Design AI Reliable</span>
              <span className="block text-blue-100">Engagement Framework</span>
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              A collaborative framework for the strategic adoption of AI in design processes—balancing innovation with human creativity.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:flex sm:justify-center">
              <div className="rounded-md shadow">
                <a href="#framework" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Explore Framework
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="#contribute" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                  Contribute
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
