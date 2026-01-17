import { Link } from "react-router-dom";
import {
  Users,
  Target,
  Heart,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import property2 from "../../src/assets/property-2.jpg";

const team = [
  { name: "Kennedy Udemezue", role: "Founder & CEO", initials: "AJ" },
  { name: "Anyaefiena Ifechukwu", role: "Co-founder & Head of Operations", initials: "CO" },

];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in every project, ensuring the highest quality standards.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Honesty and transparency are at the core of everything we do.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Our clients are our priority. We listen, understand, and deliver.",
  },
  {
    icon: Award,
    title: "Innovation",
    description:
      "We embrace modern technology and innovative approaches in real estate.",
  },
];

const milestones = [
  {
    year: "2023",
    event: "Company Founded",
    description:
      "Started with a vision to transform real estate in Nigeria",
  },
  {
    year: "2024",
    event: "10th Property Sold",
    description: "Reached our first major milestone",
  },
  {
    year: "2025",
    event: "Expanded Services",
    description: "Added construction and property management",
  },
  {
    year: "2026",
    event: "Award Recognition",
    description: "We Named Fast Rising and Best Real Estate Company in Nigeria",
  },
  {
    year: "2027",
    event: "1000+ Properties",
    description: " We are working on Over 1000 successful property transactions",
  },
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={property2}
            alt="About Calmcorner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-lime-500/20 text-lime-400 text-sm font-medium mb-6">
            Our Story
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-6">
            About Calmcorner Homes & Properties Ltd
          </h1>
          <p className="text-lg text-white/80">
            Building dreams, creating homes since 2023
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-lime-600 text-sm uppercase font-medium block mb-3">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              A Legacy of Trust and Excellence
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Calmcorner Homes & Properties Ltd was founded in 2023 with a
              simple vision: to make landed property ownership accessible,
              transparent, and rewarding for every Nigerian and Diaspora.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From a small passionate team, we have grown into one of
              Nigeria’s most trusted real estate brands.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Integrity, quality, and commitment remain the foundation of
              everything we do.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-lime-50 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl font-serif font-bold text-lime-600">
                  3+
                </p>
                <p className="text-gray-800 font-medium">
                  Years of Excellence
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-lime-500 rounded-xl p-6 text-white shadow-lg">
              <p className="text-3xl font-serif font-bold">100+</p>
              <p className="text-sm text-white/80">
                Properties Delivered
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <Target className="w-10 h-10 text-lime-600 mb-4" />
            <h3 className="text-2xl font-serif font-semibold mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To empower individuals and families through transparent,
              customer-focused real estate solutions.
            </p>
          </div>

          <div className="bg-lime-600 rounded-2xl p-8 text-white shadow-sm">
            <Award className="w-10 h-10 mb-4" />
            <h3 className="text-2xl font-serif font-semibold mb-3">
              Our Vision
            </h3>
            <p className="text-white/90">
              To be Nigeria’s most trusted real estate brand, delivering
              lasting value.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <value.icon className="w-10 h-10 text-lime-600 mx-auto mb-4" />
                <h3 className="font-serif font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          {milestones.map((m, i) => (
            <div key={i} className="flex gap-6 mb-8">
              <div className="w-12 h-12 rounded-full bg-lime-500 text-white flex items-center justify-center font-bold">
                {m.year}
              </div>
              <div>
                <h4 className="font-semibold">{m.event}</h4>
                <p className="text-gray-600 text-sm">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-16">
            Meet the Experts
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i}>
                <div className="w-28 h-28 rounded-2xl bg-lime-50 mx-auto flex items-center justify-center mb-4">
                  <span className="text-2xl font-serif font-bold text-lime-600">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-lime-600 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6">
          Ready to Work With Us?
        </h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied clients who trust Calmcorner Homes and Properties Ltd.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-white text-lime-600 px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition"
        >
          Contact Us Today
          <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
