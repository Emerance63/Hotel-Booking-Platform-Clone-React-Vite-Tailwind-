export default function SignupSection() {
  return (
    <section className="mt-10 rounded-xl border border-gray-200 p-6">
      <h2 className="text-2xl font-bold">Travel more, spend less</h2>
      <div className="mt-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h3 className="font-semibold">Sign in, save money</h3>
          <p className="mt-1 text-sm text-gray-500">
            Save 10% or more at participating properties - just look for the
            blue Genius label.
          </p>
          <div className="mt-4 flex gap-3">
            <button className="rounded bg-[#0071c2] px-4 py-2 text-white">
              Sign in
            </button>
            <button className="rounded border border-[#0071c2] px-4 py-2 text-[#0071c2]">
              Register
            </button>
          </div>
        </div>
        <div className="rounded-xl bg-blue-50 px-6 py-4 text-center text-[#003b95]">
          <div><img src="/public/giftbox.png" alt="Genius" className="w-20" /></div>
          <div className="font-bold">Genius</div>
        </div>
      </div>
    </section>
  );
}
