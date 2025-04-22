export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">About DARE Framework</h2>
          <p className="mt-4 text-lg text-gray-600">
            The Design AI Reliable Engagement (DARE) Framework provides designers, agencies, and organizations with a structured approach for adopting artificial intelligence in design workflows—from UI and UX to motion and branding.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Community-Driven</h3>
              <p className="mt-2 text-gray-600">
                Inspired by models like Creative Commons, the DARE Framework is open for public contribution and adaptation, creating a living system that evolves with AI technology.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Human-Centered</h3>
              <p className="mt-2 text-gray-600">
                DARE emphasizes that AI should enhance—not replace—human creativity, establishing guardrails that preserve the integrity of design work while leveraging AI's advantages.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Transparent</h3>
              <p className="mt-2 text-gray-600">
                The framework provides clear guidelines on disclosing AI usage in design work, helping establish ethical standards and build trust with clients and users.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Practical</h3>
              <p className="mt-2 text-gray-600">
                Each level of the framework includes specific tools, processes, and considerations, making it immediately applicable to real-world design challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
