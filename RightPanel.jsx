import { TrendingUp, UserPlus, ArrowUpRight } from "lucide-react";

const trends = [
  { category: "Technology · Trending", tag: "ReactJS", posts: "2,481 posts" },
  { category: "Community · Popular", tag: "BuildInPublic", posts: "1,205 posts" },
  { category: "Design · Trending", tag: "UIDesign", posts: "986 posts" },
  { category: "Career · This week", tag: "DevLife", posts: "742 posts" }
];
const people = [
  { name: "Ananya Mehta", handle: "@ananyamakes", avatar: "https://i.pravatar.cc/100?img=44" },
  { name: "Rohan Das", handle: "@rohan.codes", avatar: "https://i.pravatar.cc/100?img=59" },
  { name: "Sara Khan", handle: "@saracreates", avatar: "https://i.pravatar.cc/100?img=49" }
];

export default function RightPanel() {
  return <aside className="hidden w-72 shrink-0 xl:block">
    <div className="sticky top-24 space-y-4">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <div className="mb-4 flex items-center justify-between"><h2 className="font-extrabold">Trending topics</h2><TrendingUp size={18} className="text-brand-600"/></div>
        {trends.map((t, i) => <button key={t.tag} className="block w-full rounded-xl px-2 py-3 text-left transition hover:bg-slate-50"><p className="text-[11px] text-slate-400">{t.category}</p><p className="mt-0.5 font-extrabold text-slate-800">#{t.tag}</p><p className="text-xs text-slate-400">{t.posts}</p></button>)}
        <button className="mt-2 flex items-center gap-1 text-sm font-bold text-brand-600">Explore trends <ArrowUpRight size={16}/></button>
      </section>
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <div className="mb-4 flex items-center justify-between"><h2 className="font-extrabold">People to follow</h2><UserPlus size={18} className="text-brand-600"/></div>
        {people.map(person => <div key={person.handle} className="flex items-center gap-3 py-3"><img src={person.avatar} alt={person.name} className="h-10 w-10 rounded-full object-cover"/><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">{person.name}</p><p className="truncate text-xs text-slate-400">{person.handle}</p></div><button className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold transition hover:border-brand-600 hover:bg-brand-50 hover:text-brand-700">Follow</button></div>)}
      </section>
      <p className="px-2 text-xs leading-6 text-slate-400">About · Guidelines · Privacy · Terms<br/>© 2026 ConnectX Social</p>
    </div>
  </aside>;
}