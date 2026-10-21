import { Bell, Heart, UserPlus, MessageCircle, Sparkles } from "lucide-react";
const items = [
  { icon: Heart, color: "bg-rose-100 text-rose-600", text: <><b>Meera Kapoor</b> liked your post.</>, time: "12 min ago" },
  { icon: UserPlus, color: "bg-blue-100 text-blue-600", text: <><b>Rohan Das</b> started following you.</>, time: "1 hour ago" },
  { icon: MessageCircle, color: "bg-emerald-100 text-emerald-600", text: <><b>Aarav Sharma</b> replied to a conversation you follow.</>, time: "3 hours ago" },
  { icon: Sparkles, color: "bg-violet-100 text-violet-600", text: <>Your post is getting noticed. Keep sharing!</>, time: "Yesterday" }
];
export default function Notifications() {
  return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:p-7"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-brand-600"><Bell/></span><div><h1 className="text-xl font-extrabold">Notifications</h1><p className="text-sm text-slate-400">Stay in the loop with your community.</p></div></div><div className="mt-6 divide-y divide-slate-100">{items.map((item,i)=>{const Icon=item.icon;return <div key={i} className="flex gap-3 py-4"><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${item.color}`}><Icon size={18}/></span><div className="flex-1"><p className="text-sm leading-6 text-slate-700">{item.text}</p><p className="mt-1 text-xs text-slate-400">{item.time}</p></div><span className="mt-2 h-2 w-2 rounded-full bg-brand-500"/></div>})}</div></section>;
}