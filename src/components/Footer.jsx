import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo-white.png";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <NavLink to="/" className="flex items-center gap-3 mb-4">
              <img
                src={Logo}
                alt="Calmcorner Logo"
                className="w-12 object-contain"
              />
              <div>
                <span className="block text-2xl font-semibold text-white">
                  Calmcorner
                </span>
                <span className="block text-xs text-slate-400 -mt-0.5">
                  Homes & Properties Ltd
                </span>
              </div>
            </NavLink>

            <p className="text-sm leading-relaxed mb-6">
              Your trusted partner in real estate. We deliver premium properties
              and exceptional services across Nigeria.
            </p>

            <div className="flex gap-3">
              <SocialIcon icon={Facebook} href="https://facebook.com" />
              <SocialIcon icon={Instagram} href="https://instagram.com" />
              <SocialIcon icon={Twitter} href="https://twitter.com" />
              <SocialIcon icon={Linkedin} href="https://linkedin.com" />
            </div>
          </div>

          {/* Company */}
          <FooterColumn title="Company">
            <FooterNavLink to="/about" text="About Us" />
            <FooterNavLink to="/services" text="Our Services" />
            <FooterNavLink to="/contact" text="Contact Us" />
          </FooterColumn>

          {/* Properties */}
          <FooterColumn title="Properties">
            <FooterNavLink to="/properties" text="All Properties" />
            <FooterNavLink to="/properties?type=land" text="Land for Sale" />
            <FooterNavLink to="/properties?type=homes" text="Homes for Sale" />
          </FooterColumn>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-lime-500 mt-0.5" />
                <span>123 Victoria Island, Lagos, Nigeria</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-lime-500" />
                <span>+234 123 456 7890</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-lime-500" />
                <span>info@calmcorner.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>© 2026 Calmcorner Homes & Properties Ltd. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <FooterNavLink to="/privacy-policy" text="Privacy Policy" />
            <FooterNavLink to="/terms" text="Terms of Service" />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ===========================
   Reusable Components
=========================== */

function FooterColumn({ title, children }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">{title}</h4>
      <ul className="space-y-3 text-sm">{children}</ul>
    </div>
  );
}

function FooterNavLink({ to, text }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `transition ${
            isActive ? "text-lime-400 font-medium" : "hover:text-white"
          }`
        }
      >
        {text}
      </NavLink>
    </li>
  );
}

function SocialIcon({ icon: Icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Social link"
      className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-lime-500 hover:text-slate-900 transition"
    >
      <Icon size={18} />
    </a>
  );
}