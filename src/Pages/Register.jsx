import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#003b95] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="text-xl font-bold">Booking.com</div>
          <div className="flex items-center gap-4 text-sm">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white bg-white text-[#003b95]">
              US
            </span>
            <button className="rounded-full border border-white px-3 py-2 text-white/90 hover:bg-white/10">
              ?
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-70px)] max-w-3xl flex-col justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
          <h1 className="text-2xl font-bold">Sign in or create an account</h1>
          <p className="mt-3 text-sm text-gray-600">
            You can sign in using your Booking.com account to access our
            services.
          </p>

          <div className="mt-8 space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Email address
              <input
                type="email"
                placeholder="Enter your email address"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </label>

            <button className="w-full rounded-xl bg-[#0071c2] px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700">
              Continue with email
            </button>

            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span className="flex-1 border-t border-gray-200" />
              <span>or use one of these options</span>
              <span className="flex-1 border-t border-gray-200" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-gray-300">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="Google"
                  className="mx-auto h-6 w-6"
                />
              </button>
              <button className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-gray-300">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="Apple"
                  className="mx-auto h-6 w-6"
                />
              </button>
              <button className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-gray-300">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                  alt="Facebook"
                  className="mx-auto h-6 w-6"
                />
              </button>
            </div>

            <p className="text-center text-sm text-gray-500">
              Lost access to your email?{" "}
              <Link to="#" className="font-medium text-blue-600">
                Recover your account
              </Link>
            </p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-5 text-center text-sm text-gray-500">
            By signing in or creating an account, you agree with our{" "}
            <Link to="#" className="text-blue-600">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link to="#" className="text-blue-600">
              Privacy Statement
            </Link>
            .
          </div>
        </div>
      </main>
    </div>
  );
}
