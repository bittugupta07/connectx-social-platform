import { useState } from "react";
import { Image, Smile, Send } from "lucide-react";
import { currentUser } from "../data/seedPosts";

export default function CreatePost({ onCreate }) {
  const [text, setText] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onCreate(text.trim());
    setText("");
  };
  return (
    <form onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft sm:p-5">
      <div className="flex gap-3">
        <img src={currentUser.avatar} alt={currentUser.name} className="h-11 w-11 rounded-full object-cover" />
        <div className="min-w-0 flex-1">
          <textarea value={text} onChange={(e) => setText(e.target.value)} maxLength={280} rows={3} placeholder="What's on your mind, Bitu?" className="w-full resize-none border-0 bg-transparent py-2 text-sm leading-6 outline-none placeholder:text-slate-400" />
          <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
            <div className="flex items-center gap-1 text-slate-400">
              <span className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs"><Image size={16} /> <span className="hidden sm:inline">Photo</span></span>
              <span className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs"><Smile size={16} /> <span className="hidden sm:inline">Feeling</span></span>
              <span className="ml-1 text-xs">{text.length}/280</span>
            </div>
            <button disabled={!text.trim()} className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-40"><Send size={15} /> Post</button>
          </div>
        </div>
      </div>
    </form>
  );
}