export default function PropertyTypeSection({ propertyTypes }) {
  return (
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
  );
}
