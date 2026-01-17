import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import clsx from "clsx";
import Logo from "../assets/calmcorner-logo.png";

const navigation = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Our Properties", href: "/properties" },
  { name: "Why Calmcorner", href: "/whycalmcorner" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Calmcorner Logo"
            className="w-12 object-contain"
          />
          <div>
            <span className="font-serif text-xl font-semibold text-[#000813]">
              Calmcorner
            </span>
            <span className="block text-xs text-gray-500 -mt-0.5">
              Homes & Properties Ltd
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={clsx(
                "text-sm font-medium transition-colors",
                location.pathname === item.href
                  ? "text-lime-600"
                  : "text-gray-600 hover:text-lime-500"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+2348131565165"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-lime-600 transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-lime-500 px-4 py-2 text-sm font-medium text-white hover:bg-lime-600/90 transition"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={clsx(
                  "block py-3 px-4 rounded-lg text-sm font-medium transition",
                  location.pathname === item.href
                    ? "bg-green-50 text-lime-600"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-gray-200">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full rounded-lg bg-lime-500 px-4 py-3 text-center text-sm font-medium text-white hover:bg-lime-600/90 transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
