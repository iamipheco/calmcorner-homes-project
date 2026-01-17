import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import hero1 from "../assets/hero-home.jpg";
import hero2 from "../assets/property-1.jpg";
import hero3 from "../assets/property-2.jpg";

const slides = [
  {
    image: hero1,
    tag: "Your Trusted Real Estate Partner",
    title: "Find Your Perfect",
    highlight: "Dream Property",
    description:
      "Discover exceptional properties and build your dream home with Calmcorner. We offer premium land, expert construction, and comprehensive real estate services.",
  },
  {
    image: hero2,
    tag: "Premium Locations",
    title: "Invest in",
    highlight: "Prime Real Estate",
    description:
      "Secure high-value properties in Nigeria’s most sought-after locations with verified titles and flexible payment plans.",
  },
  {
    image: hero3,
    tag: "Build With Confidence",
    title: "Design & Build",
    highlight: "Your Dream Home",
    description:
      "From land acquisition to construction, our expert team handles every detail with precision and transparency.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-[85vh] lg:h-[92vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-30" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover relative z-10"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 z-20" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center z-30">
            <div className="container pt-4 px-4 md:px-6 max-w-2xl md:max-w-3xl">
              <span className="inline-block mb-4 px-4 py-1 rounded-full bg-green-700/20 text-[#89BB1D] text-xs md:text-sm font-medium animate-fade-up">
                {slide.tag}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-snug md:leading-tight mb-4 md:mb-6 animate-fade-up delay-100">
                {slide.title} <br />
                <span className="text-[#89BB1D]">{slide.highlight}</span>
              </h1>

              <p className="text-gray-200 text-sm md:text-lg mb-6 md:mb-8 max-w-full md:max-w-xl animate-fade-up delay-200">
                {slide.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up delay-300">
                <Link
                  to="/properties"
                  className="inline-flex items-center justify-center bg-lime-600 hover:bg-lime-500 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl text-sm md:text-base font-medium transition"
                >
                  Explore Properties
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-4 py-3 sm:px-6 sm:py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition text-sm md:text-base"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Mouse Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-40">
        <div className="w-6 h-10 md:w-7 md:h-11 rounded-full border-2 border-white/40 flex justify-center">
          <span className="w-1.5 h-3 bg-[#89BB1D] rounded-full mt-2 animate-scroll" />
        </div>
      </div>
    </section>
  );
}
