export default function PopularDestinations() {
  const destinations = [
    "Countries",
    "Regions",
    "Cities",
    "Districts",
    "Airports",
    "Hotels",
    "Places of interest",
    "Vacation Homes",
    "Apartments",
    "Resorts",
    "Villas",
    "Hostels",
    "B&Bs",
    "Guest Houses",
    "Unique places to stay",
    "All destinations",
  ];

  return (
    <section className="mt-10 pb-12">
      <h2 className="text-2xl font-bold">Popular with travelers from Rwanda</h2>
      <div className="mt-4 flex gap-3">
        <button className="rounded-full border border-[#0071c2] px-4 py-2 text-sm font-medium text-[#0071c2]">
          Domestic cities
        </button>
        <button className="rounded-full px-4 py-2 text-sm text-gray-600">
          International cities
        </button>
        <button className="rounded-full px-4 py-2 text-sm text-gray-600">
          Countries
        </button>
      </div>
      <div className="mt-6 text-sm text-gray-500">
        Kigali hotels
        <div className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
          {destinations.map((item) => (
            <span key={item}>{item} ·</span>
          ))}
        </div>
      </div>
    </section>
  );
}
