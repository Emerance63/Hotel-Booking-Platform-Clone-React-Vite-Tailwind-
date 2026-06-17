function HeartButton({ active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm transition hover:scale-105"
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-5 w-5 transition ${
          active ? "fill-red-500 text-red-500" : "fill-white text-gray-500"
        }`}
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 21s-6.716-4.35-9.193-8.24C.908 9.77 2.03 5.94 5.61 4.73c2.14-.72 4.22.03 5.39 1.79 1.17-1.76 3.25-2.51 5.39-1.79 3.58 1.21 4.7 5.04 2.803 8.03C18.716 16.65 12 21 12 21z" />
      </svg>
    </button>
  );
}

function Rating({ rating, label, reviews }) {
  return (
    <div className="mt-2 flex items-center gap-2">
      <span className="rounded bg-[#003b95] px-1.5 py-1 text-xs font-bold text-white">
        {rating}
      </span>
      <div className="text-xs">
        <span className="font-medium text-gray-800">{label}</span>
        <span className="ml-1 text-gray-500">{reviews} reviews</span>
      </div>
    </div>
  );
}

export default function PropertyCard({ item, liked, onToggle }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="h-40 w-full object-cover"
        />
        <HeartButton active={liked} onClick={onToggle} />
      </div>

      <div className="p-3">
        <div className="text-[11px] text-gray-500">{item.type || "Hotel"}</div>
        <h3 className="line-clamp-2 text-sm font-bold text-gray-900">
          {item.name}
        </h3>
        <p className="mt-1 text-xs text-gray-500">{item.location}</p>

        {item.badge && (
          <span className="mt-2 inline-block rounded bg-blue-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">
            {item.badge}
          </span>
        )}

        <Rating
          rating={item.rating}
          label={item.label}
          reviews={item.reviews}
        />

        <div className="mt-3 text-right">
          {item.nights && (
            <div className="text-xs text-gray-500">
              {item.nights} nights{" "}
              {item.oldPrice && (
                <span className="ml-1 text-red-500 line-through">
                  US${item.oldPrice}
                </span>
              )}
            </div>
          )}
          <div className="text-xs text-gray-500">
            Starting from{" "}
            <span className="text-lg font-bold text-gray-900">
              US${item.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
