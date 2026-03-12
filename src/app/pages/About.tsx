export function About() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
          About HolidayGet Ltd
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Company
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                HolidayGet Ltd is a technology company developing digital platform solutions.
              </p>
              <p>
                The company focuses on building travel and content services.
              </p>
              <p>
                Founded in 2026.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              We are committed to developing innovative digital solutions that enhance 
              the travel experience. Our platform is designed to provide users with 
              reliable and accessible travel-related services.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Development Status
            </h2>
            <p className="text-gray-600">
              Our platform is currently under active development. We are working 
              diligently to create a high-quality product that meets the needs of 
              our future users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
