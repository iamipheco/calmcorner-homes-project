import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Victoria Island", "Lagos, Nigeria"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+234 123 456 7890", "+234 098 765 4321"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@calmcorner.com", "sales@calmcorner.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <span className="inline-block px-4 py-2 rounded-full bg-lime-500/20 text-lime-700 text-sm font-medium mb-6">
           Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg">
            Have a question or ready to start your property journey?  
            We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 -mt-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-lime-100 flex items-center justify-center">
                <info.icon className="w-6 h-6 text-lime-600" />
              </div>
              <h3 className="font-serif font-semibold mb-2">{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-gray-600 text-sm">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <span className="text-lime-600 font-medium text-sm uppercase tracking-wider block mb-3">
              Send a Message
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              We’re Here to Help
            </h2>
            <p className="text-gray-600 mb-8">
              Whether you're buying, selling, or investing, our experts are
              ready to assist you. Fill out the form and we’ll respond within 24
              hours.
            </p>

            {success && (
              <div className="mb-6 rounded-lg bg-lime-100 text-lime-700 px-4 py-3 text-sm">
                ✅ Your message has been sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-12 rounded-lg border px-4 focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-12 rounded-lg border px-4 focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-12 rounded-lg border px-4 focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full h-12 rounded-lg border px-4 focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your property needs..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-medium text-white hover:bg-lime-600 transition disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="relative rounded-2xl bg-lime-50 flex items-center justify-center min-h-[420px]">
            <div className="text-center px-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-lime-100 flex items-center justify-center">
                <MapPin className="w-10 h-10 text-lime-600" />
              </div>
              <h3 className="font-serif font-semibold text-xl mb-2">
                Our Office
              </h3>
              <p className="text-gray-600 mb-4">
                123 Victoria Island
                <br />
                Lagos, Nigeria
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-lime-600 hover:underline"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-lime-500 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">
          Prefer to Talk?
        </h2>
        <p className="text-white/90 mb-2">
          Call us directly at{" "}
          <a href="tel:+2341234567890" className="underline font-medium">
            +234 123 456 7890
          </a>
        </p>
        <p className="text-white/70 text-sm">
          Monday – Friday, 9:00 AM – 6:00 PM
        </p>
      </section>
    </>
  );
}
