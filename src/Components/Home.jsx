import { useState } from "react";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
const propertyTypes = [
  {
    title: "Hotels",
    image:
      "[images.unsplash.com](https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop)",
  },
  {
    title: "Apartments",
    image:
      "[images.unsplash.com](https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop)",
  },
  {
    title: "Resorts",
    image:
      "[images.unsplash.com](https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop)",
  },
  {
    title: "Villas",
    image:
      "[images.unsplash.com](https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop)",
  },
];

const uniqueProperties = [
  {
    id: 1,
    type: "Hotel",
    name: "Hotel Club du Lac Tanganyika",
    location: "Bujumbura, Burundi",
    rating: 8.3,
    label: "Very Good",
    reviews: 177,
    price: 180,
    image:
      "[images.unsplash.com](https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop)",
  },
  {
    id: 2,
    type: "Hotel",
    name: "The Residence Zanzibar",
    location: "Kizimkazi, Tanzania",
    rating: 8.0,
    label: "Excellent",
    reviews: 308,
    price: 450,
    image:
      "[images.unsplash.com](https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop)",
    badge: "Genius",
  },
  {
    id: 3,
    type: "Resort",
    name: "2 Friends Beach Hotel",
    location: "Entebbe, Uganda",
    rating: 8.6,
    label: "Excellent",
    reviews: 274,
    price: 135,
    image:
      "[images.unsplash.com](https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop)",
  },
  {
    id: 4,
    type: "Guesthouse",
    name: "Distant Relatives Ecolodge & Backpackers",
    location: "Kilifi, Kenya",
    rating: 8.8,
    label: "Excellent",
    reviews: 321,
    price: 26,
    image:
      "[images.unsplash.com](https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop)",
    badge: "Genius",
  },
];

const weekendDeals = [
  {
    id: 5,
    name: "KIGALI GARDEN SUIT AND HOMESTAY",
    location: "Kigali, Rwanda",
    rating: 7.6,
    label: "Good",
    reviews: 29,
    price: 37,
    nights: 2,
    image:
      "[images.unsplash.com](https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop)",
    badge: "Genius",
    deal: "Getaway Deal",
    oldPrice: 56,
  },
  {
    id: 6,
    name: "Kivu Hilltop beach Hotel & Apartment",
    location: "Gisenyi, Rwanda",
    rating: 8.8,
    label: "Excellent",
    reviews: 5,
    price: 86,
    nights: 2,
    image:
      "[images.unsplash.com](https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop)",
  },
  {
    id: 7,
    name: "IKORO RESORT Musanze",
    location: "Ruhengeri, Rwanda",
    rating: 8.3,
    label: "Very Good",
    reviews: 8,
    price: 96,
    nights: 2,
    image:
      "[images.unsplash.com](https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop)",
    badge: "Genius",
    deal: "Getaway Deal",
    oldPrice: 132,
  },
  {
    id: 8,
    name: "Hotel Saint Jean Leopold",
    location: "Kigali, Rwanda",
    rating: 7.0,
    label: "Good",
    reviews: 22,
    price: 24,
    nights: 2,
    image:
      "[images.unsplash.com](https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=1200&auto=format&fit=crop)",
    badge: "Genius",
    deal: "Getaway Deal",
    oldPrice: 32,
  },
];

const homesGuestsLove = [
  {
    id: 9,
    name: "Aparthotel Stare Miasto",
    location: "Old Town, Poland, Krakow",
    rating: 8.8,
    label: "Excellent",
    reviews: 3111,
    price: 174,
    image:
      "[images.unsplash.com](https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop)",
  },
  {
    id: 10,
    name: "NERO Boutique Hotel",
    location: "Greece, Imerovigli",
    rating: 9.6,
    label: "Exceptional",
    reviews: 106,
    price: 633,
    image:
      "[images.unsplash.com](https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop)",
  },
  {
    id: 11,
    name: "7Seasons Apartments Budapest",
    location: "06. Terezvaros, Hungary, Budapest",
    rating: 8.8,
    label: "Excellent",
    reviews: 10341,
    price: 136,
    image:
      "[images.unsplash.com](https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop)",
  },
  {
    id: 12,
    name: "Numa Florence Vita",
    location: "Santa Maria Novella, Italy, Florence",
    rating: 9.0,
    label: "Wonderful",
    reviews: 995,
    price: 410,
    image:
      "[images.unsplash.com](https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop)",
  },
];

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

function PropertyCard({ item, liked, onToggle }) {
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

export default function Home() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      
      <main className="mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="rounded-xl border-4 border-[#febb02] bg-white shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="border-b border-gray-200 p-4 md:col-span-4 md:border-b-0 md:border-r">
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full outline-none placeholder:text-sm"
              />
            </div>
            <div className="border-b border-gray-200 p-4 md:col-span-4 md:border-b-0 md:border-r">
              <input
                type="text"
                placeholder="Check-in date  —  Check-out date"
                className="w-full outline-none placeholder:text-sm"
              />
            </div>
            <div className="border-b border-gray-200 p-4 md:col-span-3 md:border-b-0 md:border-r">
              <input
                type="text"
                placeholder="2 adults · 0 children · 1 room"
                className="w-full outline-none placeholder:text-sm"
              />
            </div>
            <div className="md:col-span-1">
              <button className="h-full w-full bg-[#0071c2] px-6 py-4 font-semibold text-white">
                Search
              </button>
            </div>
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Offers</h2>
          <p className="mt-1 text-sm text-gray-500">
            Promotions, deals, and special offers for you
          </p>
          <div className="mt-4 flex flex-col items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm md:flex-row">
            <div>
              <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600">
                Escape for less with our Getaway Deals
              </span>
              <h3 className="mt-3 text-2xl font-bold">No catch. Just getaways.</h3>
              <p className="mt-1 text-sm text-gray-500">
                At least 15% off select stays worldwide - just book and go.
              </p>
              <button className="mt-4 rounded bg-[#0071c2] px-4 py-2 text-sm font-semibold text-white">
                Save with a Getaway Deal
              </button>
            </div>
            <img
              src="[images.unsplash.com](https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop)"
              alt="Beach"
              className="mt-4 h-24 w-24 rounded-lg object-cover md:mt-0"
            />
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Browse by property type</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {propertyTypes.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-52 w-full rounded-xl object-cover"
                />
                <h3 className="mt-3 font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-bold">Stay at our top unique properties</h2>
          <p className="mt-1 text-sm text-gray-500">
            From castles and villas to boats and igloos, we've got it all
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {uniqueProperties.map((item) => (
              <PropertyCard
                key={item.id}
                item={item}
                liked={!!favorites[item.id]}
                onToggle={() => toggleFavorite(item.id)}
              />
            ))}
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-bold">Deals for the weekend</h2>
          <p className="mt-1 text-sm text-gray-500">Save on stays for June 19 - June 21</p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {weekendDeals.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-44 w-full object-cover"
                  />
                  <HeartButton
                    active={!!favorites[item.id]}
                    onClick={() => toggleFavorite(item.id)}
                  />
                </div>
                <div className="p-3">
                  {item.badge && (
                    <span className="rounded bg-blue-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                      {item.badge}
                    </span>
                  )}
                  <h3 className="mt-2 line-clamp-2 text-sm font-bold">{item.name}</h3>
                  <p className="mt-1 text-xs text-gray-500">{item.location}</p>
                  <Rating
                    rating={item.rating}
                    label={item.label}
                    reviews={item.reviews}
                  />
                  {item.deal && (
                    <span className="mt-2 inline-block rounded bg-green-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                      {item.deal}
                    </span>
                  )}
                  <div className="mt-3 text-right">
                    <div className="text-xs text-gray-500">
                      {item.nights} nights{" "}
                      {item.oldPrice && (
                        <span className="ml-1 text-red-500 line-through">
                          US${item.oldPrice}
                        </span>
                      )}
                    </div>
                    <div className="text-lg font-bold">US${item.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Homes guests love</h2>
            <a href="#" className="text-sm font-medium text-[#0071c2]">
              Discover homes
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homesGuestsLove.map((item) => (
              <PropertyCard
                key={item.id}
                item={item}
                liked={!!favorites[item.id]}
                onToggle={() => toggleFavorite(item.id)}
              />
            ))}
          </div>
        </section>
        <section className="mt-10 rounded-xl border border-gray-200 p-6">
          <h2 className="text-2xl font-bold">Travel more, spend less</h2>
          <div className="mt-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="font-semibold">Sign in, save money</h3>
              <p className="mt-1 text-sm text-gray-500">
                Save 10% or more at participating properties - just look for the
                blue Genius label.
              </p>
              <div className="mt-4 flex gap-3">
                <button className="rounded bg-[#0071c2] px-4 py-2 text-white">
                  Sign in
                </button>
                <button className="rounded border border-[#0071c2] px-4 py-2 text-[#0071c2]">
                  Register
                </button>
              </div>
            </div>
            <div className="rounded-xl bg-blue-50 px-6 py-4 text-center text-[#003b95]">
              <div className="text-3xl">🎁</div>
              <div className="font-bold">Genius</div>
            </div>
          </div>
        </section>
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
              {[
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
              ].map((item) => (
                <span key={item}>{item} ·</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
