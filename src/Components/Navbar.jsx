import React from 'react'

function Navbar() {
  return (
     <header className="bg-[#003b95] text-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="text-2xl font-bold">Booking.com</div>

            <div className="hidden items-center gap-4 text-sm md:flex">
              <span>USD</span>
              <span>List your property</span>
              <button className="rounded border border-white px-4 py-2 font-medium">
                Register
              </button>
              <button className="rounded bg-white px-4 py-2 font-medium text-[#003b95]">
                Sign in
              </button>
            </div>
          </div>

          <nav className="mt-6 flex flex-wrap gap-3 text-sm">
            {["Stays", "Flights", "Car rental", "Attractions", "Airport taxis"].map(
              (item, i) => (
                <button
                  key={item}
                  className={`rounded-full px-4 py-2 ${
                    i === 0
                      ? "border border-white bg-white/10"
                      : "text-white/90 hover:bg-white/10"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </nav>

          <div className="pb-24 pt-12">
            <h1 className="text-4xl font-bold sm:text-5xl">Find your next stay</h1>
            <p className="mt-3 text-lg text-white/90">
              Search deals on hotels, homes, and much more...
            </p>
          </div>
        </div>
      </header>
  )
}

export default Navbar
