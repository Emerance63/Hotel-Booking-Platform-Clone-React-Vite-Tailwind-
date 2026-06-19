import { useState } from "react";
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
  const destinations = ["Kigali", "Nairobi", "Kampala", "Paris"];
  const [destination, setDestination] = useState("");
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);

  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 5)); // June 2026

  // Format date for display
  const formatDate = (date) => {
    if (!date) return "";
    const options = { weekday: "short", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const dateRangeDisplay =
    checkIn && checkOut
      ? `${formatDate(checkIn)} — ${formatDate(checkOut)}`
      : "Check-in date  —  Check-out date";

  // Generate calendar days
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handleDateClick = (day) => {
    const selectedDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day,
    );
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(selectedDate);
      setCheckOut(null);
    } else {
      if (selectedDate < checkIn) {
        setCheckOut(checkIn);
        setCheckIn(selectedDate);
      } else {
        setCheckOut(selectedDate);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="rounded-xl border-4 border-[#febb02] bg-white shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="relative border-b border-gray-200 p-4 md:col-span-4 md:border-b-0 md:border-r">
              <input
                type="text"
                value={destination}
                onFocus={() => setShowDestinationDropdown(true)}
                onChange={(e) => setDestination(e.target.value)}
                onBlur={() =>
                  setTimeout(() => setShowDestinationDropdown(false), 150)
                }
                placeholder="Where are you going?"
                className="w-full bg-transparent outline-none text-sm"
              />
              {showDestinationDropdown && (
                <div className="absolute left-0 top-full z-10 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-lg">
                  {destinations.map((place) => (
                    <button
                      key={place}
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        setDestination(place);
                        setShowDestinationDropdown(false);
                      }}
                      className="w-full px-4 py-3 text-left text-sm hover:bg-gray-100"
                    >
                      {place}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="relative border-b border-gray-200 p-4 md:col-span-4 md:border-b-0 md:border-r">
              <input
                type="text"
                value={dateRangeDisplay}
                onFocus={() => setShowDatePicker(true)}
                onBlur={() => setTimeout(() => setShowDatePicker(false), 150)}
                readOnly
                className="w-full bg-transparent outline-none text-sm cursor-pointer"
              />
              {showDatePicker && (
                <div className="absolute left-0 top-full z-10 mt-2 w-max rounded-xl border border-gray-200 bg-white shadow-lg p-4">
                  <div className="flex gap-4">
                    {[0, 1].map((offset) => {
                      const displayMonth = new Date(currentMonth);
                      displayMonth.setMonth(displayMonth.getMonth() + offset);
                      const daysInMonth = getDaysInMonth(displayMonth);
                      const firstDay = getFirstDayOfMonth(displayMonth);
                      const days = [];

                      for (let i = 0; i < firstDay; i++) days.push(null);
                      for (let i = 1; i <= daysInMonth; i++) days.push(i);

                      return (
                        <div key={offset}>
                          <h3 className="font-bold text-center mb-3">
                            {displayMonth.toLocaleDateString("en-US", {
                              month: "long",
                              year: "numeric",
                            })}
                          </h3>
                          <div className="grid grid-cols-7 gap-1 text-center text-xs">
                            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(
                              (d) => (
                                <div key={d} className="w-6 h-6 font-semibold">
                                  {d}
                                </div>
                              ),
                            )}
                            {days.map((day, i) => (
                              <button
                                key={i}
                                type="button"
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => day && handleDateClick(day)}
                                disabled={!day}
                                className={`w-6 h-6 rounded text-xs ${
                                  !day
                                    ? "cursor-default"
                                    : checkIn &&
                                        checkOut &&
                                        new Date(
                                          displayMonth.getFullYear(),
                                          displayMonth.getMonth(),
                                          day,
                                        ) >= checkIn &&
                                        new Date(
                                          displayMonth.getFullYear(),
                                          displayMonth.getMonth(),
                                          day,
                                        ) <= checkOut
                                      ? "bg-blue-200"
                                      : checkIn &&
                                          new Date(
                                            displayMonth.getFullYear(),
                                            displayMonth.getMonth(),
                                            day,
                                          ).getTime() === checkIn.getTime()
                                        ? "bg-blue-600 text-white font-bold"
                                        : checkOut &&
                                            new Date(
                                              displayMonth.getFullYear(),
                                              displayMonth.getMonth(),
                                              day,
                                            ).getTime() === checkOut.getTime()
                                          ? "bg-blue-600 text-white font-bold"
                                          : "hover:bg-gray-100"
                                }`}
                              >
                                {day}
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
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
