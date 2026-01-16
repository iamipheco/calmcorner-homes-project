export default function ServiceCard({ icon: Icon, title, text }) {
  return (
    <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition">
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-lime-100 flex items-center justify-center mb-4 transition group-hover:bg-lime-500">
        <Icon
          size={24}
          className="text-lime-500 transition group-hover:text-white"
        />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}
