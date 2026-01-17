import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-lg text-center">
        {/* 404 */}
        <p className="text-8xl md:text-9xl font-serif font-bold text-lime-600 mb-4">
          404
        </p>

        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-8">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Action */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-lime-600"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Optional secondary link */}
        <div className="mt-4">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-sm font-medium text-lime-600 hover:underline"
          >
            <Home className="w-4 h-4" />
            Browse Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;