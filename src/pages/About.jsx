import React from 'react'

const About = () => {
  return (
    <div>
      
    </div>
  )
}

export default About





// import { Layout } from "../components/Layout";
// import { Link } from "react-router-dom";
// import { Users, Target, Heart, Award, ArrowRight, CheckCircle2 } from "lucide-react";
// import heroImage from "../../src/assets/hero-home.jpg";
// import property2 from "../../src/assets/property-2.jpg";

// const team = [
//   { name: "Adebayo Johnson", role: "Founder & CEO", initials: "AJ" },
//   { name: "Chioma Okafor", role: "Head of Operations", initials: "CO" },
//   { name: "Emeka Nwosu", role: "Chief Architect", initials: "EN" },
//   { name: "Funke Adeleke", role: "Sales Director", initials: "FA" },
// ];

// const values = [
//   {
//     icon: Target,
//     title: "Excellence",
//     description: "We strive for excellence in every project, ensuring the highest quality standards.",
//   },
//   {
//     icon: Heart,
//     title: "Integrity",
//     description: "Honesty and transparency are at the core of everything we do.",
//   },
//   {
//     icon: Users,
//     title: "Customer Focus",
//     description: "Our clients are our priority. We listen, understand, and deliver.",
//   },
//   {
//     icon: Award,
//     title: "Innovation",
//     description: "We embrace modern technology and innovative approaches in real estate.",
//   },
// ];

// const milestones = [
//   { year: "2009", event: "Company Founded", description: "Started with a vision to transform real estate in Nigeria" },
//   { year: "2012", event: "100th Property Sold", description: "Reached our first major milestone" },
//   { year: "2016", event: "Expanded Services", description: "Added construction and property management" },
//   { year: "2020", event: "Award Recognition", description: "Named Best Real Estate Company" },
//   { year: "2024", event: "500+ Properties", description: "Over 500 successful property transactions" },
// ];

// export default function About() {
//   return (
//     <Layout>
//       {/* Hero */}
//       <section className="relative py-28 md:py-36 overflow-hidden">
//         <div className="absolute inset-0">
//           <img src={property2} alt="About Calmcorner" className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-secondary/90" />
//         </div>
//         <div className="container relative z-10">
//           <div className="text-center max-w-3xl mx-auto">
//             <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up">
//               Our Story
//             </span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-secondary-foreground mb-6 animate-fade-up delay-100">
//               About Calmcorner
//             </h1>
//             <p className="text-xl text-secondary-foreground/80 animate-fade-up delay-200">
//               Building dreams, creating homes since 2009
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Story */}
//       <section className="py-20 md:py-28">
//         <div className="container">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
//                 Who We Are
//               </span>
//               <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
//                 A Legacy of Trust and Excellence
//               </h2>
//               <p className="text-muted-foreground mb-6 leading-relaxed">
//                 Calmcorner Homes & Properties Ltd was founded in 2009 with a simple vision: 
//                 to make property ownership accessible, transparent, and rewarding for every Nigerian.
//               </p>
//               <p className="text-muted-foreground mb-6 leading-relaxed">
//                 Over the years, we have grown from a small team of passionate real estate 
//                 enthusiasts to one of Nigeria's most trusted property development companies. 
//                 Our journey has been marked by numerous successful projects, thousands of 
//                 satisfied clients, and a commitment to continuous improvement.
//               </p>
//               <p className="text-muted-foreground leading-relaxed">
//                 Today, we continue to uphold the values that have defined us from the 
//                 beginning: integrity, quality, and an unwavering dedication to our clients' success.
//               </p>
//             </div>
//             <div className="relative">
//               <div className="aspect-square rounded-2xl bg-accent p-8 flex items-center justify-center">
//                 <div className="text-center">
//                   <p className="text-6xl md:text-7xl font-serif font-bold text-primary mb-2">15+</p>
//                   <p className="text-xl text-foreground font-medium">Years of Excellence</p>
//                 </div>
//               </div>
//               <div className="absolute -bottom-6 -left-6 bg-primary rounded-xl p-6 shadow-card">
//                 <p className="text-3xl font-serif font-bold text-primary-foreground">500+</p>
//                 <p className="text-primary-foreground/80 text-sm">Properties Delivered</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-20 md:py-28 bg-muted">
//         <div className="container">
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
//               <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
//                 <T arget className="w-7 h-7 text-primary-foreground" />
//               </div>
//               <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
//               <p className="text-muted-foreground leading-relaxed">
//                 To provide exceptional real estate services that empower individuals and 
//                 families to achieve their property ownership dreams through integrity, 
//                 innovation, and customer-centric solutions.
//               </p>
//             </div>
//             <div className="bg-secondary rounded-2xl p-8 md:p-12 shadow-soft">
//               <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
//                 <Award className="w-7 h-7 text-primary-foreground" />
//               </div>
//               <h3 className="font-serif text-2xl font-semibold text-secondary-foreground mb-4">Our Vision</h3>
//               <p className="text-secondary-foreground/80 leading-relaxed">
//                 To be Nigeria's most trusted and preferred real estate company, known 
//                 for delivering quality properties, exceptional service, and creating 
//                 lasting value for our clients and communities.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values */}
//       <section className="py-20 md:py-28">
//         <div className="container">
//           <div className="text-center max-w-2xl mx-auto mb-16">
//             <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
//               Our Values
//             </span>
//             <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
//               What Drives Us
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {values.map((value, index) => (
//               <div key={index} className="bg-card rounded-xl p-6 text-center shadow-soft hover:shadow-hover transition-all duration-300 group">
//                 <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
//                   <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
//                 </div>
//                 <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{value.title}</h3>
//                 <p className="text-muted-foreground text-sm">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Timeline */}
//       <section className="py-20 md:py-28 bg-muted">
//         <div className="container">
//           <div className="text-center max-w-2xl mx-auto mb-16">
//             <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
//               Our Journey
//             </span>
//             <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
//               Key Milestones
//             </h2>
//           </div>

//           <div className="max-w-3xl mx-auto">
//             {milestones.map((milestone, index) => (
//               <div key={index} className="flex gap-6 mb-8 last:mb-0">
//                 <div className="flex flex-col items-center">
//                   <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
//                     <span className="text-primary-foreground font-bold text-sm">{milestone.year}</span>
//                   </div>
//                   {index < milestones.length - 1 && (
//                     <div className="w-0.5 h-full bg-border mt-2" />
//                   )}
//                 </div>
//                 <div className="pb-8">
//                   <h4 className="font-serif font-semibold text-foreground text-lg">{milestone.event}</h4>
//                   <p className="text-muted-foreground text-sm">{milestone.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team */}
//       <section className="py-20 md:py-28">
//         <div className="container">
//           <div className="text-center max-w-2xl mx-auto mb-16">
//             <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
//               Our Team
//             </span>
//             <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
//               Meet the Experts
//             </h2>
//             <p className="text-muted-foreground">
//               Our dedicated team brings decades of combined experience in real estate, 
//               architecture, and customer service.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {team.map((member, index) => (
//               <div key={index} className="text-center group">
//                 <div className="w-28 h-28 rounded-2xl bg-accent mx-auto mb-4 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
//                   <span className="text-2xl font-serif font-bold text-primary group-hover:text-primary-foreground transition-colors duration-300">
//                     {member.initials}
//                   </span>
//                 </div>
//                 <h3 className="font-serif text-lg font-semibold text-foreground">{member.name}</h3>
//                 <p className="text-muted-foreground text-sm">{member.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 md:py-28 bg-primary">
//         <div className="container text-center">
//           <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground mb-6">
//             Ready to Work With Us?
//           </h2>
//           <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
//             Join thousands of satisfied clients who have trusted Calmcorner with their property dreams.
//           </p>
//           <Button variant="secondary" size="xl" asChild>
//             <Link to="/contact">
//               Contact Us Today
//               <ArrowRight className="w-5 h-5" />
//             </Link>
//           </Button>
//         </div>
//       </section>
//     </Layout>
//   );
// }