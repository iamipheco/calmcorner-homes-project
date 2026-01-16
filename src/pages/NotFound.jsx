import React from 'react'

const NotFound = () => {
  return (
    <div>
      
    </div>
  )
}

export default NotFound



// import { Link, useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import { Layout } from "@/components/Layout";
// import { Button } from "@/components/ui/button";
// import { Home } from "lucide-react";

// const NotFound = () => {
//   const location = useLocation();

//   useEffect(() => {
//     console.error("404 Error: User attempted to access non-existent route:", location.pathname);
//   }, [location.pathname]);

//   return (
//     <Layout>
//       <section className="min-h-[70vh] flex items-center justify-center">
//         <div className="container text-center">
//           <p className="text-8xl font-serif font-bold text-primary mb-4">404</p>
//           <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
//             Page Not Found
//           </h1>
//           <p className="text-muted-foreground mb-8 max-w-md mx-auto">
//             Sorry, the page you're looking for doesn't exist or has been moved.
//           </p>
//           <Button size="lg" asChild>
//             <Link to="/">
//               <Home className="w-4 h-4" />
//               Back to Home
//             </Link>
//           </Button>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default NotFound;
