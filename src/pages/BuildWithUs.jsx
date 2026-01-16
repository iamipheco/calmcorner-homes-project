import React from 'react'

const BuildWithUs = () => {
  return (
    <div>
      
    </div>
  )
}

export default BuildWithUs



// import { Link } from "react-router-dom";
// import { ArrowRight, Ruler, Hammer, PaintBucket, Home, CheckCircle2, ClipboardList } from "lucide-react";
// import property3 from "../../src/assets/property-3.jpg";

// const buildingProcess = [
//   {
//     step: "01",
//     icon: ClipboardList,
//     title: "Consultation",
//     description: "We meet to understand your vision, requirements, and budget. Our team provides expert guidance on feasibility and options.",
//   },
//   {
//     step: "02",
//     icon: Ruler,
//     title: "Design",
//     description: "Our architects create detailed designs tailored to your preferences. We refine until you're completely satisfied.",
//   },
//   {
//     step: "03",
//     icon: Hammer,
//     title: "Construction",
//     description: "Quality construction by our experienced team using premium materials. Regular updates and site inspections.",
//   },
//   {
//     step: "04",
//     icon: PaintBucket,
//     title: "Finishing",
//     description: "Interior finishing, landscaping, and final touches. We ensure every detail meets our high standards.",
//   },
//   {
//     step: "05",
//     icon: Home,
//     title: "Handover",
//     description: "Final walkthrough and documentation. We hand you the keys to your dream home with full warranty.",
//   },
// ];

// const packages = [
//   {
//     name: "Standard Build",
//     price: "From ₦35M",
//     features: ["3-4 Bedroom Bungalow", "Basic finishes", "12-month timeline", "1-year warranty"],
//   },
//   {
//     name: "Premium Build",
//     price: "From ₦65M",
//     features: ["4-5 Bedroom Duplex", "Premium finishes", "18-month timeline", "2-year warranty"],
//     featured: true,
//   },
//   {
//     name: "Luxury Build",
//     price: "From ₦120M",
//     features: ["Custom Design", "Luxury finishes", "Custom timeline", "5-year warranty"],
//   },
// ];

// export default function BuildWithUs() {
//   return (
//     <Layout>
//       {/* Hero */}
//       <section className="relative py-32 md:py-40">
//         <div className="absolute inset-0">
//           <img src={property3} alt="Build with Calmcorner" className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-secondary/85" />
//         </div>
//         <div className="container relative z-10 text-center">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-secondary-foreground mb-6">
//             Build With Us
//           </h1>
//           <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
//             Turn your dream home into reality with our expert construction services
//           </p>
//           <Button variant="hero" size="xl" asChild>
//             <Link to="/contact">Start Your Project</Link>
//           </Button>
//         </div>
//       </section>

//       {/* Process */}
//       <section className="py-20 md:py-28">
//         <div className="container">
//           <div className="text-center max-w-2xl mx-auto mb-16">
//             <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
//               Our Process
//             </span>
//             <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
//               From Vision to Reality
//             </h2>
//             <p className="text-muted-foreground">
//               Our streamlined building process ensures your project is delivered on time, 
//               within budget, and exceeds expectations.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
//             {buildingProcess.map((item, index) => (
//               <div key={index} className="relative">
//                 <Card className="h-full hover:shadow-hover transition-all duration-300">
//                   <CardContent className="p-6">
//                     <div className="text-4xl font-serif font-bold text-primary/20 mb-4">{item.step}</div>
//                     <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
//                       <item.icon className="w-6 h-6 text-primary" />
//                     </div>
//                     <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.title}</h3>
//                     <p className="text-muted-foreground text-sm">{item.description}</p>
//                   </CardContent>
//                 </Card>
//                 {index < buildingProcess.length - 1 && (
//                   <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Packages */}
//       <section className="py-20 md:py-28 bg-cream">
//         <div className="container">
//           <div className="text-center max-w-2xl mx-auto mb-16">
//             <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
//               Build Packages
//             </span>
//             <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
//               Choose Your Package
//             </h2>
//             <p className="text-muted-foreground">
//               Flexible packages designed to meet various needs and budgets. 
//               All packages include project management and quality assurance.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {packages.map((pkg, index) => (
//               <Card 
//                 key={index} 
//                 className={`relative overflow-hidden ${pkg.featured ? 'border-primary shadow-card' : ''}`}
//               >
//                 {pkg.featured && (
//                   <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
//                     Most Popular
//                   </div>
//                 )}
//                 <CardContent className={`p-8 ${pkg.featured ? 'pt-14' : ''}`}>
//                   <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{pkg.name}</h3>
//                   <p className="text-3xl font-serif font-bold text-primary mb-6">{pkg.price}</p>
//                   <ul className="space-y-3 mb-8">
//                     {pkg.features.map((feature, i) => (
//                       <li key={i} className="flex items-center gap-3">
//                         <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
//                         <span className="text-muted-foreground text-sm">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <Button 
//                     variant={pkg.featured ? "default" : "outline"} 
//                     className="w-full"
//                     asChild
//                   >
//                     <Link to="/contact">Get Started</Link>
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 md:py-28 bg-secondary">
//         <div className="container text-center">
//           <h2 className="text-3xl md:text-4xl font-serif font-semibold text-secondary-foreground mb-6">
//             Ready to Build Your Dream Home?
//           </h2>
//           <p className="text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
//             Schedule a free consultation with our team to discuss your project requirements.
//           </p>
//           <Button variant="hero" size="xl" asChild>
//             <Link to="/contact">
//               Book a Consultation
//               <ArrowRight className="w-5 h-5" />
//             </Link>
//           </Button>
//         </div>
//       </section>
//     </Layout>
//   );
// }
