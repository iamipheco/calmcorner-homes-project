import React from 'react'

const Services = () => {
  return (
    <div>
      
    </div>
  )
}

export default Services




// import { Link } from "react-router-dom";
// import { Home, Building2, Hammer, Users, ClipboardCheck, CheckCircle2, ArrowRight } from "lucide-react";
// import heroImage from "../assets/hero-home.jpg";

// const services = [
//   {
//     icon: Home,
//     title: "Land Sales",
//     description:
//       "Premium plots of land in prime locations across Nigeria. All properties come with verified titles, proper documentation, and secure transaction processes.",
//     features: ["Verified titles", "Prime locations", "Flexible payment", "Legal support"],
//   },
//   {
//     icon: Building2,
//     title: "Property Development",
//     description:
//       "Comprehensive property development services from concept to completion. We create residential and commercial spaces that exceed expectations.",
//     features: ["Master planning", "Quality construction", "Modern designs", "Timely delivery"],
//   },
//   {
//     icon: Hammer,
//     title: "Home Construction",
//     description:
//       "Custom home building tailored to your unique vision. Our experienced team handles every detail from foundation to finishing touches.",
//     features: ["Custom designs", "Premium materials", "Expert craftsmen", "Warranty included"],
//   },
//   {
//     icon: Users,
//     title: "Real Estate Consultancy",
//     description:
//       "Expert guidance for all your real estate decisions. Whether buying, selling, or investing, we provide insights that drive success.",
//     features: ["Market analysis", "Investment advice", "Due diligence", "Negotiation support"],
//   },
//   {
//     icon: ClipboardCheck,
//     title: "Property Management",
//     description:
//       "Professional management services to protect and maximize your real estate investments. We handle tenants, maintenance, and more.",
//     features: ["Tenant screening", "Rent collection", "Maintenance", "Financial reporting"],
//   },
// ];

// export default function Services() {
//   return (
//     <div className="font-sans">
//       {/* Hero */}
//       <section className="relative py-28 md:py-36 bg-gray-100 overflow-hidden">
//         <div className="container mx-auto text-center relative z-10 px-4">
//           <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
//             What We Offer
//           </span>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6">
//             Our Services
//           </h1>
//           <p className="text-lg text-gray-700 max-w-2xl mx-auto">
//             Comprehensive real estate solutions tailored to your needs. From land acquisition 
//             to property management, we've got you covered.
//           </p>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-20 md:py-28">
//         <div className="container mx-auto px-4 space-y-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
//             >
//               {/* Text Content */}
//               <div className={`p-8 md:p-12 ${index % 2 === 1 ? "md:order-2" : ""}`}>
//                 <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
//                   <service.icon className="w-8 h-8 text-green-700" />
//                 </div>
//                 <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">{service.title}</h3>
//                 <p className="text-gray-600 mb-6">{service.description}</p>
//                 <ul className="grid grid-cols-2 gap-3 mb-8">
//                   {service.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-2">
//                       <CheckCircle2 className="w-4 h-4 text-green-700 shrink-0" />
//                       <span className="text-gray-800 text-sm">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center gap-2 px-6 py-2 border border-green-700 rounded-md text-green-700 hover:bg-green-700 hover:text-white transition-colors"
//                 >
//                   Learn More <ArrowRight className="w-4 h-4" />
//                 </Link>
//               </div>

//               {/* Image */}
//               <div className={`relative overflow-hidden bg-gray-200 min-h-[300px] ${index % 2 === 1 ? "md:order-1" : ""}`}>
//                 <img
//                   src={heroImage}
//                   alt={service.title}
//                   className="absolute inset-0 w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-800/30 to-transparent" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 md:py-28 bg-green-700">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6">
//             Ready to Get Started?
//           </h2>
//           <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
//             Let us help you achieve your real estate goals. Contact our team today for a free consultation.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-700 rounded-md font-medium hover:bg-gray-100 transition-colors"
//             >
//               Contact Us <ArrowRight className="w-4 h-4" />
//             </Link>
//             <Link
//               to="/properties"
//               className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-green-700 transition-colors"
//             >
//               View Properties
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
