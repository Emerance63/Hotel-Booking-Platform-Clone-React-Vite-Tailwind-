import { useState } from "react";
import PropertyCard from "./PropertyCard";

export default function PropertiesGrid({ title, description, properties }) {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],//spread function
      
    }));
  };

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold">{title}</h2>
      {description && (
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      )}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {properties.map((item) => (
          <PropertyCard
            key={item.id}
            item={item}
            liked={!!favorites[item.id]}
            onToggle={() => toggleFavorite(item.id)}
          />
        ))}
      </div>
    </section>
  );
}
