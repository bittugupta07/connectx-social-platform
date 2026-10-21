import { NavLink } from "react-router-dom";
import { House, Compass, Bell, Bookmark, UserRound, Settings, Sparkles } from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: House },
  { to: "/explore", label: "Explore", icon: Compass },
  { to: "/notifications", label: "Notifications", icon: Bell },
  { to: "/bookmarks", label: "Bookmarks", icon: Bookmark },
  { to: "/profile", label: "My profile", icon: UserRound }
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
        <div className="mb-5 flex items-center gap-3 rounded-xl bg-blue-50 p-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-white"><Sparkles size={21} /></div>
          <div><p className="font-extrabold tracking-tight">ConnectX</p><p className="text-xs text-slate-500">Your social space</p></div>
        </div>
        <nav className="space-y-1">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${isActive ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}>
              <Icon size={19} /> {label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-6 border-t border-slate-100 pt-4">
          <p className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400">Your space</p>
          <p className="mt-2 px-3 text-xs leading-5 text-slate-500">A place to share ideas, discover people, and keep conversations going.</p>
          <div className="mt-4 flex items-center gap-2 px-3 text-xs text-slate-400"><Settings size={14} /> Made for community</div>
        </div>
      </div>
    </aside>
  );
}