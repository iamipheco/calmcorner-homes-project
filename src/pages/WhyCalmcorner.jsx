import { Link } from "react-router-dom";
import {
  Shield,
  Award,
  Clock,
  Users,
  FileCheck,
  HeartHandshake,
  Banknote,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

/* =========================
   DATA
========================= */

const reasons = [
  {
    icon: Shield,
    title: "100% Verified Properties",
    description:
      "Every property we list undergoes thorough legal verification. We ensure clean titles and proper documentation.",
  },
  {
    icon: Banknote,
    title: "Flexible Payment Plans",
    description:
      "We understand that buying property is a major investment. That's why we offer flexible payment options that work for you.",
  },
  {
    icon: Clock,
    title: "3+ Years Experience",
    description:
      "With over a years in the industry, we've built expertise and relationships that benefit our clients.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "From real estate agents to architects and lawyers, our team of professionals ensures smooth transactions.",
  },
  {
    icon: FileCheck,
    title: "Transparent Process",
    description:
      "No hidden fees, no surprises. We keep you informed at every step of your property journey.",
  },
  {
    icon: HeartHandshake,
    title: "After-Sales Support",
    description:
      "Our relationship doesn't end at purchase. We provide ongoing support for all your property needs.",
  },
];

const testimonials = [
  {
    quote:
      "Calmcorner Homesmade buying our first landed proprties stress-free. Their team was professional and patient throughout the entire process.",
    author: "Oluwaseun & Aisha Bakare",
    role: "Land owners, Lekki",
  },
  {
    quote:
      "I've purchased three plots of land through Calmcorner Homes. Their documentation is always perfect, and the payment plans are very flexible.",
    author: "Chief Emmanuel Okonkwo",
    role: "Real Estate Investor",
  },
  {
    quote:
      "The quality of construction exceeded our expectations. Calmcorner Homes delivered our dream home on time and within budget.",
    author: "Dr. Ngozi Eze",
    role: "Land owner, Victoria Island",
  },
];

/* =========================
   PAGE
========================= */

export default function WhyCalmcorner() {
  return (
    <main>
      {/* HERO */}
      <section className="py-20 md:py-28 bg-gray-950 text-center">
        <div className="container mx-auto px-4">
          <span className="inline-block px-4 py-2 rounded-full bg-lime-500/20 text-lime-400 text-sm font-medium mb-6">
            Why Choose Us
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-6">
            Why Choose Calmcorner?
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We're not just selling properties. We're building lasting
            relationships and helping you achieve your real estate dreams.
          </p>
        </div>
      </section>

      {/* REASONS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white border-b rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition"
              >
                <div className="w-14 h-14 rounded-xl bg-lime-100 flex items-center justify-center mb-6">
                  <reason.icon className="w-7 h-7 text-lime-600" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ["100+", "Properties Sold"],
              ["98%", "Client Satisfaction"],
              ["3+", "Years Experience"],
              ["10+", "Team Members"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-4xl md:text-5xl font-serif font-bold text-lime-600 mb-2">
                  {value}
                </p>
                <p className="text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-lime-600 font-medium text-sm uppercase tracking-wider mb-3 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-gray-50  rounded-2xl p-8 relative"
              >
                <div className="text-5xl font-serif text-lime-200 absolute top-4 left-6">
                  "
                </div>
                <p className="text-gray-800 mb-6 pt-8 italic leading-relaxed">
                  {t.quote}
                </p>
                <div>
                  <p className="font-serif font-semibold text-gray-900">
                    {t.author}
                  </p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE / CTA */}
      <section className="py-20 md:py-28 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-lime-500 font-medium text-sm uppercase tracking-wider mb-3 block">
                Our Promise
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6">
                Your Trust, Our Commitment
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                When you choose Calmcorner Homes, you're choosing a partner who values
                your investment as much as you do.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Thorough property verification before listing",
                  "Transparent pricing with no hidden fees",
                  "Professional legal support throughout",
                  "Dedicated account manager for each client",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-500 shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-lime-500 text-white text-sm hover:bg-lime-600 transition"
              >
                Experience the Difference
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex justify-center">
              <Award className="w-48 h-48 text-lime-500/20" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
