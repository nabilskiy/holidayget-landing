import { Smartphone, Shield, Users, Globe, Clock, Check } from "lucide-react";

export function Product() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            Our Product
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            HolidayGet platform is under development. The application will provide 
            digital travel-related services in the future.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
              <Smartphone className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Platform Compatibility
            </h3>
            <p className="text-gray-600">
              Designed to work seamlessly across multiple platforms and devices, 
              ensuring accessibility for all users.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              User Friendly Experience
            </h3>
            <p className="text-gray-600">
              Built with a strong focus on intuitive design and user experience, 
              making it easy for everyone to use.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Secure Service
            </h3>
            <p className="text-gray-600">
              Security and privacy are fundamental priorities in our development 
              process and platform architecture.
            </p>
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Platform Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Cross-Platform Support
                </h4>
                <p className="text-sm text-gray-600">
                  Available on iOS, Android, and web platforms.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Modern Technology
                </h4>
                <p className="text-sm text-gray-600">
                  Built with cutting-edge development frameworks.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Scalable Architecture
                </h4>
                <p className="text-sm text-gray-600">
                  Designed to grow with user needs and demand.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Regular Updates
                </h4>
                <p className="text-sm text-gray-600">
                  Continuous improvement and feature development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Development Status */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Currently in Development
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are actively working on bringing this platform to life. 
            Our team is dedicated to creating a reliable and high-quality 
            service for our future users.
          </p>
        </div>
      </div>
    </div>
  );
}
