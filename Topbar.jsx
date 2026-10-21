import { Search, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Topbar({ search, setSearch }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 lg:hidden">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white"><Sparkles size={19} /></span>
          <span className="text-lg font-extrabold tracking-tight">Connect<span className="text-brand-600">X</span></span>
        </Link>
        <div className="relative hidden max-w-xl flex-1 sm:block lg:ml-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search posts, people, or topics..." className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100" />
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden text-sm font-semibold text-slate-600 md:block">Good things happen when we connect.</span>
          <img src="https://i.pravatar.cc/100?img=12" alt="Bitu Gupta profile" className="h-10 w-10 rounded-full border-2 border-white object-cover shadow" />
        </div>
      </div>
    </header>
  );
}