import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const suggestedLanguages = [
    {
      label: "English (UK)",
      flagUrl: "https://flagcdn.com/w40/gb.png",
      alt: "UK flag",
    },
    {
      label: "Français",
      flagUrl: "https://flagcdn.com/w40/fr.png",
      alt: "France flag",
    },
    {
      label: "Русский",
      flagUrl: "https://flagcdn.com/w40/ru.png",
      alt: "Russia flag",
    },
    {
      label: "한국어",
      flagUrl: "https://flagcdn.com/w40/kr.png",
      alt: "South Korea flag",
    },
    {
      label: "Deutsch",
      flagUrl: "https://flagcdn.com/w40/de.png",
      alt: "Germany flag",
    },
  ];

  const languages = [
    {
      label: "English (US)",
      flagUrl: "https://flagcdn.com/w40/us.png",
      alt: "US flag",
    },
    {
      label: "English (UK)",
      flagUrl: "https://flagcdn.com/w40/gb.png",
      alt: "UK flag",
    },
    {
      label: "Deutsch",
      flagUrl: "https://flagcdn.com/w40/de.png",
      alt: "Germany flag",
    },
    {
      label: "Nederlands",
      flagUrl: "https://flagcdn.com/w40/nl.png",
      alt: "Netherlands flag",
    },
    {
      label: "Français",
      flagUrl: "https://flagcdn.com/w40/fr.png",
      alt: "France flag",
    },
    {
      label: "Español",
      flagUrl: "https://flagcdn.com/w40/es.png",
      alt: "Spain flag",
    },
    {
      label: "Español (AR)",
      flagUrl: "https://flagcdn.com/w40/ar.png",
      alt: "Argentina flag",
    },
    {
      label: "Español (MX)",
      flagUrl: "https://flagcdn.com/w40/mx.png",
      alt: "Mexico flag",
    },
    {
      label: "Català",
      flagUrl: "https://flagcdn.com/w40/ad.png",
      alt: "Andorra flag",
    },
    {
      label: "Italiano",
      flagUrl: "https://flagcdn.com/w40/it.png",
      alt: "Italy flag",
    },
    {
      label: "Português (PT)",
      flagUrl: "https://flagcdn.com/w40/pt.png",
      alt: "Portugal flag",
    },
    {
      label: "Português (BR)",
      flagUrl: "https://flagcdn.com/w40/br.png",
      alt: "Brazil flag",
    },
    {
      label: "Norsk",
      flagUrl: "https://flagcdn.com/w40/no.png",
      alt: "Norway flag",
    },
    {
      label: "Suomi",
      flagUrl: "https://flagcdn.com/w40/fi.png",
      alt: "Finland flag",
    },
    {
      label: "Svenska",
      flagUrl: "https://flagcdn.com/w40/se.png",
      alt: "Sweden flag",
    },
    {
      label: "Dansk",
      flagUrl: "https://flagcdn.com/w40/dk.png",
      alt: "Denmark flag",
    },
    {
      label: "Čeština",
      flagUrl: "https://flagcdn.com/w40/cz.png",
      alt: "Czech Republic flag",
    },
    {
      label: "Magyar",
      flagUrl: "https://flagcdn.com/w40/hu.png",
      alt: "Hungary flag",
    },
    {
      label: "Română",
      flagUrl: "https://flagcdn.com/w40/ro.png",
      alt: "Romania flag",
    },
    {
      label: "日本語",
      flagUrl: "https://flagcdn.com/w40/jp.png",
      alt: "Japan flag",
    },
    {
      label: "简体中文",
      flagUrl: "https://flagcdn.com/w40/cn.png",
      alt: "China flag",
    },
    {
      label: "繁體中文",
      flagUrl: "https://flagcdn.com/w40/tw.png",
      alt: "Taiwan flag",
    },
    {
      label: "Polski",
      flagUrl: "https://flagcdn.com/w40/pl.png",
      alt: "Poland flag",
    },
    {
      label: "Ελληνικά",
      flagUrl: "https://flagcdn.com/w40/gr.png",
      alt: "Greece flag",
    },
    {
      label: "Русский",
      flagUrl: "https://flagcdn.com/w40/ru.png",
      alt: "Russia flag",
    },
    {
      label: "Türkçe",
      flagUrl: "https://flagcdn.com/w40/tr.png",
      alt: "Turkey flag",
    },
    {
      label: "Български",
      flagUrl: "https://flagcdn.com/w40/bg.png",
      alt: "Bulgaria flag",
    },
    {
      label: "العربية",
      flagUrl: "https://flagcdn.com/w40/sa.png",
      alt: "Saudi Arabia flag",
    },
  ];

  return (
    <header className="bg-[#003b95] text-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div className="text-2xl font-bold">Booking.com</div>

          <div className="flex items-center gap-4 text-sm">
            <span>USD</span>
            <button
              type="button"
              onClick={() => setShowLanguageModal(true)}
              className="flex h-10 items-center justify-center rounded-full px-4 text-sm text-white hover:bg-white/10"
            >
              <img
                src="https://flagcdn.com/w20/us.png"
                alt="American flag"
                className="h-5 w-5 rounded-full"
              />
            </button>
            <span>List your property</span>
            <Link
              to="/register"
              className="rounded border border-white px-4 py-2 font-medium text-white hover:bg-white/10"
            >
              Register
            </Link>
            <Link
              to="/register"
              className="rounded bg-white px-4 py-2 font-medium text-[#003b95]"
            >
              Sign in
            </Link>
          </div>
          {showLanguageModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8">
              <div className="w-full max-w-4xl rounded-3xl bg-white p-6 text-gray-900 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">Select your language</h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Suggested for you
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowLanguageModal(false)}
                    className="text-2xl font-semibold text-gray-500 hover:text-gray-900"
                  >
                    ×
                  </button>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                  {suggestedLanguages.map((lang) => (
                    <button
                      key={lang.label}
                      type="button"
                      className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-left hover:border-blue-500"
                    >
                      <img
                        src={lang.flagUrl}
                        alt={lang.alt}
                        className="h-6 w-6 rounded-full object-cover"
                      />
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-8 border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    All languages
                  </h3>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    {languages.map((lang) => (
                      <button
                        key={lang.label}
                        type="button"
                        className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-left hover:border-blue-500"
                      >
                        <img
                          src={lang.flagUrl}
                          alt={lang.alt}
                          className="h-6 w-6 rounded-full object-cover"
                        />
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <nav className="mt-6 flex flex-wrap gap-3 text-sm">
          {[
            "Stays",
            "Flights",
            "Car rental",
            "Attractions",
            "Airport taxis",
          ].map((item, i) => (
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
          ))}
        </nav>

        <div className="pb-24 pt-12">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Find your next stay
          </h1>
          <p className="mt-3 text-lg text-white/90">
            Search deals on hotels, homes, and much more...
          </p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
