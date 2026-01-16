

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-lime-400/40 transition">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-lime-500/20 text-lime-400">
        {icon}
      </div>

      <h3 className="text-white font-serif font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-300 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}