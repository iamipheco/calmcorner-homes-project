import { MapPin, BedDouble, Bath, Ruler } from "lucide-react";

export default function PropertyCard({
  image,
  price,
  title,
  location,
  beds,
  baths,
  size,
  tag,
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img src={image} alt={title} className="h-56 w-full object-cover" />

        <span className="absolute top-4 left-4 bg-lime-500 text-white text-xs font-medium px-3 py-1 rounded-full">
          {tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-lg font-semibold text-gray-900 mb-1">{price}</p>

        <h3 className="text-base font-medium text-gray-800 mb-2">{title}</h3>

        <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
          <MapPin size={14} />
          <span>{location}</span>
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
          <div className="flex items-center gap-1">
            <BedDouble size={16} />
            <span>{beds} Beds</span>
          </div>

          <div className="flex items-center gap-1">
            <Bath size={16} />
            <span>{baths} Baths</span>
          </div>

          <div className="flex items-center gap-1">
            <Ruler size={16} />
            <span>{size}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
