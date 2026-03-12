import {
  Smartphone,
  Shield,
  Users,
  Plane,
  MapPin,
  Calendar,
  Star,
} from "lucide-react";

export function Home() {
  const destinations = [
    {
      title: "Tropical Beaches",
      image:
        "https://images.unsplash.com/photo-1771767642966-b9e8d3dd9e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwdmFjYXRpb258ZW58MXx8fHwxNzcyNzkzMjE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Discover paradise destinations",
    },
    {
      title: "Mountain Escapes",
      image:
        "https://images.unsplash.com/photo-1713959989861-2425c95e9777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHRyYXZlbHxlbnwxfHx8fDE3NzI4NzI4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Explore scenic mountain views",
    },
    {
      title: "City Adventures",
      image:
        "https://images.unsplash.com/photo-1562351768-f68650f3ec54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMHN1bnNldHxlbnwxfHx8fDE3NzI3NjIyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Experience vibrant cityscapes",
    },
    {
      title: "Historic Sites",
      image:
        "https://images.unsplash.com/photo-1623438672645-f8bafb8cc2ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGxhbmRtYXJrJTIwdG91cmlzbXxlbnwxfHx8fDE3NzI4ODA5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Visit cultural landmarks",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="order-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-4 sm:mb-6">
                HolidayGet
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-3 sm:mb-4">
                Digital Travel Services Platform
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 max-w-xl mx-auto lg:mx-0">
                HolidayGet is a platform under development that
                provides travel-related digital services. The
                company is currently working on its product.
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
                A glimpse of our mobile application interface
                currently in development.
              </p>
              <a
                href="mailto:galitholidayget@gmail.com?subject=Inquiry%20about%20HolidayGet%20Platform"
                className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                Contact Us
              </a>
            </div>

            {/* Right side - App Screenshot */}
            <div className="flex justify-center lg:justify-end order-2">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <img
                  src="https://images.unsplash.com/photo-1689171758171-8eb09ca73a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9hdGlhJTIwaXNsYW5kcyUyMGFkcmlhdGljJTIwc2VhJTIwYWVyaWFsfGVufDF8fHx8MTc3MzMxMTE5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Croatian islands Adriatic Sea aerial view"
                  className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
              About HolidayGet Ltd
            </h2>
            <div className="text-gray-600 space-y-3 sm:space-y-4 text-center text-sm sm:text-base lg:text-lg">
              <p>
                HolidayGet Ltd is a technology company
                developing digital platform solutions.
              </p>
              <p>
                The company focuses on building travel and
                content services.
              </p>
              <p className="text-xs sm:text-sm">
                Founded in 2026.
              </p>
            </div>
          </div>

          {/* Service Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mt-8 sm:mt-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full mb-2 sm:mb-3">
                <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Travel Planning
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full mb-2 sm:mb-3">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Destinations
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full mb-2 sm:mb-3">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Booking
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full mb-2 sm:mb-3">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Explore Destinations
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Discover amazing places and experiences through
              our upcoming platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                    {destination.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {destination.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Our Product
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              HolidayGet platform is under development. The
              application will provide digital travel-related
              services in the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg mb-3 sm:mb-4">
                <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Platform Compatibility
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Designed to work across multiple platforms and
                devices.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg mb-3 sm:mb-4">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                User Friendly Experience
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Built with a focus on intuitive and accessible
                design.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg mb-3 sm:mb-4">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Secure Service
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Security and privacy are core priorities in our
                development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 px-4">
              Have questions about our platform? We'd love to
              hear from you.
            </p>
            <a
              href="mailto:galitholidayget@gmail.com?subject=Inquiry%20about%20HolidayGet%20Platform"
              className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}