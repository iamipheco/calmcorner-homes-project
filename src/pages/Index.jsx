import {
  ArrowRight,
  Home,
  Building2,
  Hammer,
  Users,
  ClipboardCheck,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import HeroSlider from "../components/HeroSlider";
import PropertyCard from "../components/PropertyCard";
import FeatureCard from "../components/FeaturedCard";
import ServiceCard from "../components/ServiceCard";

/* =======================
   DATA (UNCHANGED)
======================= */

const stats = [
  { value: "100+", label: "Properties Sold" },
  { value: "3+", label: "Years Experience" },
  { value: "99%", label: "Happy Clients" },
  { value: "1+", label: "Active Projects" },
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

/* =======================
   MOTION PRESETS
======================= */

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

/* =======================
   PAGE
======================= */

const Index = () => {
  return (
    <div className="font-sans text-slate-900">
      <HeroSlider />

      <section className="bg-gray-100">
        {/* ================= STATS ================= */}
        <div className="bg-lime-500 text-white py-6 md:py-8">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-sm md:text-base opacity-90">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= SERVICES ================= */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-5 md:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <p className="text-lime-500 text-sm font-semibold tracking-wide mb-2">
                WHAT WE OFFER
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Our Services
              </h2>
              <p className="text-slate-600 text-sm md:text-base">
                From finding the perfect land to building your dream home, we
                provide comprehensive real estate solutions.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              <motion.div variants={fadeUp}>
                <ServiceCard icon={Home} title="Land Sales" text="Premium plots in prime locations with verified titles and secure transactions." />
              </motion.div>

              <motion.div variants={fadeUp}>
                <ServiceCard icon={Building2} title="Property Development" text="From concept to completion, we create exceptional residential and commercial spaces." />
              </motion.div>

              <motion.div variants={fadeUp}>
                <ServiceCard icon={Hammer} title="Home Construction" text="Custom home building with quality materials and expert craftsmanship." />
              </motion.div>

              <motion.div variants={fadeUp}>
                <ServiceCard icon={Users} title="Real Estate Consultancy" text="Expert guidance for buying, selling, and investing in properties." />
              </motion.div>

              <motion.div variants={fadeUp}>
                <ServiceCard icon={ClipboardCheck} title="Property Management" text="Professional management to protect and maximize your investments." />
              </motion.div>

              <motion.div variants={fadeUp}>
                <ServiceCard icon={ShieldCheck} title="Legal & Documentation" text="Assistance with property legalities, contracts, and verified documentation." />
              </motion.div>
            </motion.div>

            <div className="flex justify-center mt-14">
              <Link
                to="/services"
                className="group flex items-center gap-2 border border-lime-500 text-lime-500 px-6 py-3 rounded-full hover:bg-lime-500 hover:text-white transition"
              >
                View All Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= PROPERTIES ================= */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-xs font-semibold text-lime-600 uppercase mb-1">
                  Featured Listings
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold">
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

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {propertiees.map((property) => (
                <motion.div key={property.id} variants={fadeUp}>
                  <PropertyCard {...property} />
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-6 flex justify-center sm:hidden">
              <Link
                to="/properties"
                className="border border-lime-500 text-lime-600 px-4 py-2 rounded-full text-sm hover:bg-green-50 transition"
              >
                View All Properties →
              </Link>
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE ================= */}
        <section className="bg-slate-900 py-16 px-6">
          <div className="container mx-auto grid lg:grid-cols-2 gap-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
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

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full text-sm font-medium transition"
              >
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-6"
            >
              <FeatureCard icon={<ShieldCheck size={22} />} title="Verified Properties" description="Every property undergoes thorough legal verification for your peace of mind." />
              <FeatureCard icon={<Award size={22} />} title="Award-Winning Service" description="Recognized for excellence in customer service and property delivery." />
              <FeatureCard icon={<Clock size={22} />} title="Timely Delivery" description="We honor our commitments and deliver projects on schedule." />
              <FeatureCard icon={<Users size={22} />} title="Expert Team" description="Dedicated professionals with deep real estate expertise." />
            </motion.div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-lime-50 py-20 px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-5xl text-center"
          >
            <h2 className="text-2xl md:text-2xl lg:text-5xl font-serif font-semibold mb-6">
              Ready to Find Your Dream Property?
            </h2>

            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Let our team of experts guide you through the process. Whether
              you’re buying, selling, or building, we’re here to support you
              every step of the way.
            </p>

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
          </motion.div>
        </section>
      </section>
    </div>
  );
};

export default Index;
