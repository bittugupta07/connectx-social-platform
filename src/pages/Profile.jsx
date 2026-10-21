import { MapPin, CalendarDays, Link as LinkIcon, Pencil, MessageCircle, Heart } from "lucide-react";
import { currentUser } from "../data/seedPosts";
export default function Profile({ posts }) {
  const mine = posts.filter(p => p.user.handle === currentUser.handle);
  return <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
    <div className="h-36 bg-gradient-to-r from-brand-900 via-blue-700 to-sky-400 sm:h-48"/>
    <div className="px-5 pb-6 sm:px-8">
      <div className="-mt-12 flex items-end justify-between"><img src={currentUser.avatar} alt={currentUser.name} className="h-24 w-24 rounded-full border-4 border-white object-cover sm:h-28 sm:w-28"/><button className="mb-2 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-bold hover:bg-slate-50"><Pencil size={15}/> Edit profile</button></div>
      <h1 className="mt-4 text-2xl font-extrabold">{currentUser.name}</h1><p className="text-sm text-slate-400">{currentUser.handle}</p><p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">{currentUser.bio}</p>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400"><span className="flex items-center gap-1"><MapPin size={14}/> India</span><span className="flex items-center gap-1"><CalendarDays size={14}/> Joined recently</span><span className="flex items-center gap-1"><LinkIcon size={14}/> connectx.social</span></div>
      <div className="mt-4 flex gap-5 text-sm"><p><strong>{mine.length}</strong> <span className="text-slate-400">Posts</span></p><p><strong>128</strong> <span className="text-slate-400">Following</span></p><p><strong>246</strong> <span className="text-slate-400">Followers</span></p></div>
      <div className="mt-6 border-t border-slate-100 pt-5"><h2 className="font-extrabold">Your posts</h2>{mine.length ? <div className="mt-3 space-y-3">{mine.map(p=><div key={p.id} className="rounded-xl border border-slate-100 p-4"><p className="text-sm leading-6">{p.text}</p><div className="mt-3 flex gap-4 text-xs text-slate-400"><span className="flex items-center gap-1"><Heart size={14}/> {p.likes} likes</span><span className="flex items-center gap-1"><MessageCircle size={14}/> {p.comments} comments</span></div></div>)}</div>:<p className="mt-3 rounded-xl bg-slate-50 p-5 text-sm text-slate-500">Your posts will appear here when you share something from Home.</p>}</div>
    </div>
  </div>;
}