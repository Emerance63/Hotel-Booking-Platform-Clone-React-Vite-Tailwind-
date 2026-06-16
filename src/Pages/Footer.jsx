import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-10 text-sm sm:grid-cols-3 lg:grid-cols-5">
        <div>
          <h3 className="font-bold text-gray-900">Support</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>Manage your trips</li>
            <li>Contact Customer Service</li>
            <li>Safety Resource Center</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-900">Discover</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>Genius loyalty program</li>
            <li>Seasonal and holiday deals</li>
            <li>Travel articles</li>
            <li>Booking.com for Business</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-900">Terms and settings</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>Privacy Notice</li>
            <li>Terms of Service</li>
            <li>Accessibility Statement</li>
            <li>Human Rights Statement</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-900">Partners</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>Extranet login</li>
            <li>Partner help</li>
            <li>List your property</li>
            <li>Become an affiliate</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-900">About</h3>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>About Booking.com</li>
            <li>How We Work</li>
            <li>Sustainability</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-500">
        Booking.com is part of Booking Holdings Inc., the world leader in online
        travel and related services.
      </div>
    </footer>
  );
};

export default Footer;
