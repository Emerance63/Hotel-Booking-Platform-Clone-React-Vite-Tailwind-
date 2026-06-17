export default function OffersSection() {
  return (
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
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
          alt="Beach"
          className="mt-4 h-24 w-24 rounded-lg object-cover md:mt-0"
        />
      </div>
    </section>
  );
}
