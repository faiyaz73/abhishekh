import { Link } from "react-router";
import logo from '../../IMAGE/logo.jpeg';

export default function Topheader() {
  return (
    <header className="w-full border-b border-slate-200 bg-[#9CB6CD] shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 md:grid md:grid-cols-[auto_1fr_auto] md:gap-4 md:px-6 md:py-3">
        <a href="/" className="flex items-center justify-center">
          <img
            src={logo}
            alt="Jankalyan Care Foundation logo"
            className="h-12 w-auto rounded-md object-contain sm:h-14 md:h-16"
          />
        </a>

        <div className="text-center">
          <p className="text-base font-extrabold leading-tight text-red-700 sm:text-lg md:text-2xl lg:text-3xl">
            जनकल्याण केयर फाउंडेशन
          </p>
          <p className="mt-0.5 text-xs font-semibold text-slate-800 sm:text-sm md:text-base">
            Jankalyan Care Foundation
          </p>
        </div>

        <a
          href="#enquiry"
          className="inline-flex items-center justify-center rounded-md bg-red-700 px-3 py-2 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:px-4 sm:py-2.5 sm:text-sm md:px-5 md:py-3 md:text-base"
        >
          Enquiry Now
        </a>
      </div>
    </header>
  )
}
