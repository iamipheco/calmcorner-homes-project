import {
  ArrowRight,
  Home,
  Building2,
  Hammer,
  Users,
  ClipboardCheck,
  Shield,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle2,
} from "lucide-react";
import HeroSlider from "../components/HeroSlider";
import PropertyCard from "../components/PropertyCard";
import { Link } from "react-router-dom";
import FeatureCard from "../components/FeaturedCard";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

const stats = [
  { value: "100+", label: "Properties Sold" },
  { value: "3+", label: "Years Experience" },
  { value: "99%", label: "Happy Clients" },
  { value: "1+", label: "Active Projects" },
];

const services = [
  {
    icon: Home,
    title: "Land Sales",
    description:
      "Premium plots in prime locations with verified titles and secure transactions.",
  },
  {
    icon: Building2,
    title: "Property Development",
    description:
      "From concept to completion, we create exceptional residential and commercial spaces.",
  },
  {
    icon: Hammer,
    title: "Home Construction",
    description:
      "Custom home building with quality materials and expert craftsmanship.",
  },
  {
    icon: Users,
    title: "Real Estate Consultancy",
    description:
      "Expert guidance for buying, selling, and investing in properties.",
  },
  {
    icon: ClipboardCheck,
    title: "Property Management",
    description:
      "Professional management to protect and maximize your investments.",
  },
  {
    icon: Shield,
    title: "Legal & Documentation",
    description:
      "Assistance with property legalities, contracts, and verified documentation.",
  },
];

const propertiees = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: "₦85,000,000",
    title: "Modern Villa in Lekki Phase 1",
    location: "Lekki, Lagos",
    beds: 4,
    baths: 5,
    size: "350 sqm",
    tag: "For Sale",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    price: "₦120,000,000",
    title: "Luxury Apartment with Ocean View",
    location: "Victoria Island, Lagos",
    beds: 3,
    baths: 4,
    size: "280 sqm",
    tag: "For Sale",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    price: "₦55,000,000",
    title: "Family Home in Ajah",
    location: "Ajah, Lagos",
    beds: 5,
    baths: 4,
    size: "420 sqm",
    tag: "For Sale",
  },
];

const Index = () => {
  return (
    <div>
      <HeroSlider />

      <section className="bg-gray-100">
        {/* Stats Banner */}
        <div className="bg-lime-500 text-white py-6 md:py-8">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <h3 className="text-xl md:text-2xl font-bold">{stat.value}</h3>
                <p className="text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-lime-500 text-sm font-semibold tracking-wide mb-2">
                WHAT WE OFFER
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Services
              </h2>
              <p className="text-slate-600 text-sm md:text-base">
                From finding the perfect land to building your dream home, we
                provide comprehensive real estate solutions.
              </p>
            </div>

            {/* Services */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={Home}
                title="Land Sales"
                text="Premium plots in prime locations with verified titles and secure transactions."
              />

              <ServiceCard
                icon={Building2}
                title="Property Development"
                text="From concept to completion, we create exceptional residential and commercial spaces."
              />

              <ServiceCard
                icon={Hammer}
                title="Home Construction"
                text="Custom home building with quality materials and expert craftsmanship."
              />

              <ServiceCard
                icon={Users}
                title="Real Estate Consultancy"
                text="Expert guidance for buying, selling, and investing in properties."
              />

              <ServiceCard
                icon={ClipboardCheck}
                title="Property Management"
                text="Professional management to protect and maximize your investments."
              />

              <ServiceCard
                icon={ShieldCheck}
                title="Legal & Documentation"
                text="Assistance with property legalities, contracts, and verified documentation."
              />
            </div>

            {/* Button */}
            <div className="flex justify-center mt-14">
              <Link
                to="/services"
                className="group flex items-center gap-2 border border-lime-500 text-lime-500 px-6 py-3 rounded-full hover:bg-lime-500 hover:text-white transition"
              >
                View All Services
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </Link>
            </div>
          </div>
        </section>
        {/* Properties listing */}
        <section className="py-16 p-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-xs font-semibold text-lime-600 uppercase mb-1">
                  Featured Listings
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">
                  Premium Properties
                </h2>
              </div>

              <Link
                to="/properties"
                className="hidden sm:flex items-center gap-2 border border-lime-500 text-lime-600 px-4 py-2 rounded-full text-sm hover:bg-green-50 transition"
              >
                View All Properties →
              </Link>
            </div>

            {/* Cards */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {propertiees.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-center items-center ">
            <Link
              to="/properties"
              className="sm:hidden  border border-lime-500 text-lime-600 px-4 py-2 rounded-full text-sm hover:bg-green-50 transition"
            >
              View All Properties →
            </Link>
          </div>
        </section>

        {/* why choose card */}
        <section className="bg-slate-900 p-10 py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* LEFT CONTENT */}
              <div>
                <p className="text-lime-400 uppercase text-xs font-semibold tracking-wider mb-4">
                  Why Choose Calmcorner
                </p>

                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-6 leading-tight">
                  Your Peace of Mind <br className="hidden sm:block" />
                  is Our Priority
                </h2>

                <p className="text-gray-300 max-w-xl mb-8 leading-relaxed">
                  With over 15 years of experience in the Nigerian real estate
                  market, we’ve built a reputation for integrity, quality, and
                  customer satisfaction. Every property we handle comes with
                  verified documentation and our commitment to transparency.
                </p>

                {/* FEATURES LIST */}
                <ul className="space-y-4 mb-10">
                  {[
                    "100% verified and legally documented properties",
                    "Flexible payment plans to suit your budget",
                    "Expert team of architects, builders, and agents",
                    "Comprehensive after-sales support",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-lime-400 mt-1" size={18} />
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full text-sm font-medium transition"
                >
                  Learn More About Us
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* RIGHT CARDS */}
              <div className="grid sm:grid-cols-2 gap-6">
                <FeatureCard
                  icon={<ShieldCheck size={22} />}
                  title="Verified Properties"
                  description="Every property undergoes thorough legal verification for your peace of mind."
                />

                <FeatureCard
                  icon={<Award size={22} />}
                  title="Award-Winning Service"
                  description="Recognized for excellence in customer service and property delivery."
                />

                <FeatureCard
                  icon={<Clock size={22} />}
                  title="Timely Delivery"
                  description="We honor our commitments and deliver projects on schedule."
                />

                <FeatureCard
                  icon={<Users size={22} />}
                  title="Expert Team"
                  description="Dedicated professionals with deep real estate expertise."
                />
              </div>
            </div>
          </div>
        </section>

        {/*CTA card */}
        <section className="relative bg-lime-50 py-20 px-6">
          <div className="mx-auto max-w-5xl text-center">
            {/* Heading */}
            <h2 className="text-2xl md:text-2xl lg:text-5xl font-serif font-semibold text-gray-900 mb-6 leading-tight">
              Ready to Find Your Dream Property?
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Let our team of experts guide you through the process. Whether
              you’re buying, selling, or building, we’re here to support you
              every step of the way.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-500 px-8 py-3 text-sm font-medium text-white hover:bg-lime-600 transition w-full sm:w-auto"
              >
                Get in Touch
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/properties"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-lime-500 px-8 py-3 text-sm font-medium text-lime-600 hover:bg-lime-100 transition w-full sm:w-auto"
              >
                Browse Properties
              </Link>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Index;