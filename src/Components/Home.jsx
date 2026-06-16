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

      <main />

      <Footer />
    </div>
  );
}
