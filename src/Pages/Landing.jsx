import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PropertyTypeSection from "../Components/PropertyTypeSection";
import OffersSection from "../Components/OffersSection";
import SignupSection from "../Components/SignupSection";
import PopularDestinations from "../Components/PopularDestinations";
import PropertiesGrid from "../Components/PropertiesGrid";
import {
  propertyTypes,
  uniqueProperties,
  weekendDeals,
  homesGuestsLove,
} from "../Data/properties";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar  />

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

        <OffersSection />

        <PropertyTypeSection propertyTypes={propertyTypes} />

        <PropertiesGrid
          title="Stay at our top unique properties"
          description="From castles and villas to boats and igloos, we've got it all"
          properties={uniqueProperties}
        />

        <PropertiesGrid
          title="Deals for the weekend"
          description="Save on stays for June 19 - June 21"
          properties={weekendDeals}
        />

        <section className="mt-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Homes guests love</h2>
            <a href="#" className="text-sm font-medium text-[#0071c2]">
              Discover homes
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homesGuestsLove.map((item) => (
              <div key={item.id} className="text-center">
                {/* Can be replaced with PropertyCard if needed */}
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-3">
                    <h3 className="line-clamp-2 text-sm font-bold">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      {item.location}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="rounded bg-[#003b95] px-1.5 py-1 text-xs font-bold text-white">
                        {item.rating}
                      </span>
                      <span className="text-xs font-medium">{item.label}</span>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      From{" "}
                      <span className="font-bold text-gray-900">
                        US${item.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <SignupSection />
        <PopularDestinations />
      </main>

      <Footer />
    </div>
  );
}
