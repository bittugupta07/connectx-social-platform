import { useState } from "react";
import { Heart, MessageCircle, Bookmark, Share2, MoreHorizontal, Send } from "lucide-react";

export default function PostCard({ post, onLike, onBookmark, onComment }) {
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const submitComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setComments((prev) => [...prev, comment.trim()]);
    onComment?.(post.id);
    setComment("");
  };
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft transition hover:shadow-md sm:p-5">
      <div className="flex items-start gap-3">
        <img src={post.user.avatar} alt={post.user.name} className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-slate-100" />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="truncate text-sm font-extrabold text-slate-900">{post.user.name}</p>
            <p className="truncate text-xs text-slate-400">{post.user.handle}</p>
            <span className="text-xs text-slate-300">·</span><p className="shrink-0 text-xs text-slate-400">{post.time}</p>
          </div>
          <button aria-label="More post options" className="ml-auto rounded-full p-1 text-slate-400 hover:bg-slate-100"><MoreHorizontal size={19} /></button>
        </div>
      </div>
      <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700">{post.text}</p>
      {post.image && <img src={post.image} alt="Post attachment" className="mt-4 max-h-[360px] w-full rounded-xl object-cover" />}
      {post.tags?.length > 0 && <div className="mt-3 flex flex-wrap gap-2">{post.tags.map(tag => <span key={tag} className="text-xs font-semibold text-brand-600">#{tag}</span>)}</div>}
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <div className="flex items-center gap-1 sm:gap-3">
          <button onClick={() => onLike(post.id)} className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-2 text-xs font-semibold transition hover:bg-rose-50 ${post.liked ? "text-rose-500" : "text-slate-500"}`}><Heart size={18} fill={post.liked ? "currentColor" : "none"} /> {post.likes}</button>
          <button onClick={() => setShowComments(v => !v)} className="inline-flex items-center gap-1.5 rounded-lg px-2 py-2 text-xs font-semibold text-slate-500 transition hover:bg-blue-50 hover:text-brand-600"><MessageCircle size={18} /> {post.comments + comments.length}</button>
          <button onClick={() => navigator.clipboard?.writeText(post.text)} className="inline-flex items-center gap-1.5 rounded-lg px-2 py-2 text-xs font-semibold text-slate-500 transition hover:bg-slate-100"><Share2 size={17} /><span className="hidden sm:inline">Share</span></button>
        </div>
        <button onClick={() => onBookmark(post.id)} aria-label="Bookmark post" className={`rounded-lg p-2 transition hover:bg-blue-50 ${post.bookmarked ? "text-brand-600" : "text-slate-400"}`}><Bookmark size={18} fill={post.bookmarked ? "currentColor" : "none"} /></button>
      </div>
      {showComments && <div className="mt-2 border-t border-slate-100 pt-3">
        {comments.map((c, i) => <p key={`${c}-${i}`} className="mb-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-600">{c}</p>)}
        <form onSubmit={submitComment} className="flex gap-2">
          <input value={comment} onChange={e => setComment(e.target.value)} placeholder="Write a comment..." className="min-w-0 flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm outline-none focus:border-brand-500" />
          <button disabled={!comment.trim()} className="rounded-full bg-brand-600 p-2 text-white disabled:opacity-40" aria-label="Send comment"><Send size={16}/></button>
        </form>
      </div>}
    </article>
  );
}