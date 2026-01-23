import { Link } from "react-router-dom";
import {
  Home,
  Building2,
  Hammer,
  Users,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

/* =======================
   SERVICE IMAGES
======================= */
import landImage from "../assets/Land-sale.png";
import developmentImage from "../assets/property-development.jpg";
import constructionImage from "../assets/home-construction.png";
import consultancyImage from "../assets/real-estate-consultant.png";
import managementImage from "../assets/Property-management.jpg";

/* =======================
   SERVICES DATA
======================= */
const services = [
  {
    icon: Home,
    title: "Land Sales",
    image: landImage,
    description:
      "Premium plots of land in prime locations across Nigeria. All properties come with verified titles, proper documentation, and secure transaction processes.",
    features: ["Verified titles", "Prime locations", "Flexible payment", "Legal support"],
  },
  {
    icon: Building2,
    title: "Property Development",
    image: developmentImage,
    description:
      "Comprehensive property development services from concept to completion. We create residential and commercial spaces that exceed expectations.",
    features: ["Master planning", "Quality construction", "Modern designs", "Timely delivery"],
  },
  {
    icon: Hammer,
    title: "Home Construction",
    image: constructionImage,
    description:
      "Custom home building tailored to your unique vision. Our experienced team handles every detail from foundation to finishing touches.",
    features: ["Custom designs", "Premium materials", "Expert craftsmen", "Warranty included"],
  },
  {
    icon: Users,
    title: "Real Estate Consultancy",
    image: consultancyImage,
    description:
      "Expert guidance for all your real estate decisions. Whether buying, selling, or investing, we provide insights that drive success.",
    features: ["Market analysis", "Investment advice", "Due diligence", "Negotiation support"],
  },
  {
    icon: ClipboardCheck,
    title: "Property Management",
    image: managementImage,
    description:
      "Professional management services to protect and maximize your real estate investments. We handle tenants, maintenance, and more.",
    features: ["Tenant screening", "Rent collection", "Maintenance", "Financial reporting"],
  },
];

/* =======================
   SERVICE CARD
======================= */
function ServiceCard({ service, reverse }) {
  const { icon: Icon, title, description, features, image } = service;

  return (
    <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
      
      {/* Text */}
      <div className={`p-8 md:p-12 ${reverse ? "md:order-2" : ""}`}>
        <div className="w-16 h-16 rounded-2xl bg-lime-100 flex items-center justify-center mb-6">
          <Icon className="w-8 h-8 text-lime-700" />
        </div>

        <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
          {title}
        </h3>

        <p className="text-gray-600 mb-6">{description}</p>

        <ul className="grid grid-cols-2 gap-3 mb-8">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
              <span className="text-sm text-gray-800">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white transition"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Image */}
      <div className={`relative min-h-[300px] ${reverse ? "md:order-1" : ""}`}>
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
    </div>
  );
}

/* =======================
   MAIN PAGE
======================= */
export default function Services() {
  return (
    <div className="font-sans">
      
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center px-6">
          <span className="inline-block px-4 py-2 rounded-full bg-lime-500/20 text-lime-700 text-sm font-medium mb-6">
            What We Offer
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
            Our Services
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-lime-600 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lime-100 mb-8 max-w-2xl mx-auto text-lg">
          Let us help you achieve your real estate goals. Contact our team today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-lime-700 rounded-full font-medium hover:bg-gray-100 transition"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white rounded-full font-medium hover:bg-white hover:text-lime-700 transition"
          >
            View Properties
          </Link>
        </div>
      </section>
    </div>
  );
}
