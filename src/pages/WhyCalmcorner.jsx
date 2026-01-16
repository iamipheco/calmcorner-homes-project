import React from 'react'

const WhyCalmcorner = () => {
  return (
    <div>
      
    </div>
  )
}

export default WhyCalmcorner




// import { Layout } from "@/components/Layout";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { Shield, Award, Clock, Users, FileCheck, HeartHandshake, Banknote, ArrowRight, CheckCircle2 } from "lucide-react";

// const reasons = [
//   {
//     icon: Shield,
//     title: "100% Verified Properties",
//     description: "Every property we list undergoes thorough legal verification. We ensure clean titles and proper documentation.",
//   },
//   {
//     icon: Banknote,
//     title: "Flexible Payment Plans",
//     description: "We understand that buying property is a major investment. That's why we offer flexible payment options that work for you.",
//   },
//   {
//     icon: Clock,
//     title: "15+ Years Experience",
//     description: "With over a decade in the industry, we've built expertise and relationships that benefit our clients.",
//   },
//   {
//     icon: Users,
//     title: "Expert Team",
//     description: "From real estate agents to architects and lawyers, our team of professionals ensures smooth transactions.",
//   },
//   {
//     icon: FileCheck,
//     title: "Transparent Process",
//     description: "No hidden fees, no surprises. We keep you informed at every step of your property journey.",
//   },
//   {
//     icon: HeartHandshake,
//     title: "After-Sales Support",
//     description: "Our relationship doesn't end at purchase. We provide ongoing support for all your property needs.",
//   },
// ];

// const testimonials = [
//   {
//     quote: "Calmcorner made buying our first home stress-free. Their team was professional and patient throughout the entire process.",
//     author: "Oluwaseun & Aisha Bakare",
//     role: "Homeowners, Lekki",
//   },
//   {
//     quote: "I've purchased three plots of land through Calmcorner. Their documentation is always perfect, and the payment plans are very flexible.",
//     author: "Chief Emmanuel Okonkwo",
//     role: "Real Estate Investor",
//   },
//   {
//     quote: "The quality of construction exceeded our expectations. Calmcorner delivered our dream home on time and within budget.",
//     author: "Dr. Ngozi Eze",
//     role: "Homeowner, Victoria Island",
//   },
// ];

// export default function WhyCalmcorner() {
//   return (
//     <Layout>
//       {/* Hero */}
//       <section className="py-20 md:py-28 bg-primary">
//         <div className="container text-center">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary-foreground mb-6">
//             Why Choose Calmcorner?
//           </h1>
//           <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
//             We're not just selling properties. We're building lasting relationships 
//             and helping you achieve your real estate dreams.
//           </p>
//         </div>
//       </section>

//       {/* Reasons */}
//       <section className="py-20 md:py-28">
//         <div className="container">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {reasons.map((reason, index) => (
//               <div 
//                 key={index} 
//                 className="bg-card border border-border rounded-xl p-8 hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
//               >
//                 <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-6">
//                   <reason.icon className="w-7 h-7 text-primary" />
//                 </div>
//                 <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{reason.title}</h3>
//                 <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="py-16 bg-cream">
//         <div className="container">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             <div>
//               <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">500+</p>
//               <p className="text-muted-foreground">Properties Sold</p>
//             </div>
//             <div>
//               <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">98%</p>
//               <p className="text-muted-foreground">Client Satisfaction</p>
//             </div>
//             <div>
//               <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">15+</p>
//               <p className="text-muted-foreground">Years Experience</p>
//             </div>
//             <div>
//               <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">50+</p>
//               <p className="text-muted-foreground">Team Members</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 md:py-28">
//         <div className="container">
//           <div className="text-center max-w-2xl mx-auto mb-16">
//             <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
//               Testimonials
//             </span>
//             <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
//               What Our Clients Say
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div 
//                 key={index} 
//                 className="bg-card border border-border rounded-xl p-8 relative"
//               >
//                 <div className="text-5xl font-serif text-primary/20 absolute top-4 left-6">"</div>
//                 <p className="text-foreground mb-6 pt-8 leading-relaxed italic">
//                   {testimonial.quote}
//                 </p>
//                 <div>
//                   <p className="font-serif font-semibold text-foreground">{testimonial.author}</p>
//                   <p className="text-sm text-muted-foreground">{testimonial.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Promise */}
//       <section className="py-20 md:py-28 bg-secondary">
//         <div className="container">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
//                 Our Promise
//               </span>
//               <h2 className="text-3xl md:text-4xl font-serif font-semibold text-secondary-foreground mb-6">
//                 Your Trust, Our Commitment
//               </h2>
//               <p className="text-secondary-foreground/80 mb-8 leading-relaxed">
//                 When you choose Calmcorner, you're choosing a partner who values your 
//                 investment as much as you do. We're committed to delivering excellence 
//                 in every interaction, every transaction, and every project.
//               </p>
//               <ul className="space-y-4 mb-8">
//                 {[
//                   "Thorough property verification before listing",
//                   "Transparent pricing with no hidden fees",
//                   "Professional legal support throughout",
//                   "Dedicated account manager for each client",
//                 ].map((item, index) => (
//                   <li key={index} className="flex items-center gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
//                     <span className="text-secondary-foreground">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//               <Button variant="hero" size="lg" asChild>
//                 <Link to="/contact">
//                   Experience the Difference
//                   <ArrowRight className="w-4 h-4" />
//                 </Link>
//               </Button>
//             </div>
//             <div className="flex justify-center">
//               <div className="relative">
//                 <Award className="w-48 h-48 text-primary/20" />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="text-center">
//                     <p className="text-xl font-serif font-bold text-secondary-foreground">Best</p>
//                     <p className="text-sm text-secondary-foreground/70">Real Estate 2023</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }
