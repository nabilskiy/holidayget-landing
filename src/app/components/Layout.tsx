import { Link, Outlet, useLocation } from "react-router";
import logo from "../../assets/logo.png";

export function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="HolidayGet" className="w-8 h-8" />
              <span className="text-xl font-semibold text-gray-900">HolidayGet Ltd</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`text-sm transition-colors ${
                  isActive("/") && location.pathname === "/"
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-sm transition-colors ${
                  isActive("/about")
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                About
              </Link>
              <Link
                to="/product"
                className={`text-sm transition-colors ${
                  isActive("/product")
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Product
              </Link>
              <Link
                to="/privacy-policy"
                className={`text-sm transition-colors ${
                  isActive("/privacy-policy")
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className={`text-sm transition-colors ${
                  isActive("/terms-of-service")
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Terms of Service
              </Link>
            </nav>

            {/* Mobile menu button - shows links in a simple column */}
            <div className="md:hidden">
              <details className="relative">
                <summary className="cursor-pointer text-gray-600 hover:text-gray-900 text-sm">
                  Menu
                </summary>
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <nav className="flex flex-col p-2">
                    <Link
                      to="/"
                      className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded"
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded"
                    >
                      About
                    </Link>
                    <Link
                      to="/product"
                      className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded"
                    >
                      Product
                    </Link>
                    <Link
                      to="/privacy-policy"
                      className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to="/terms-of-service"
                      className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded"
                    >
                      Terms of Service
                    </Link>
                  </nav>
                </div>
              </details>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2026 HolidayGet Ltd. All rights reserved.
            </p>
            <nav className="flex items-center gap-6">
              <Link
                to="/privacy-policy"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}