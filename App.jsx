import { useEffect, useMemo, useState } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { Plus, Search, House, Compass, Bell, UserRound } from "lucide-react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import RightPanel from "./components/RightPanel";
import CreatePost from "./components/CreatePost";
import PostCard from "./components/PostCard";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Bookmarks from "./pages/Bookmarks";
import { currentUser, seedPosts } from "./data/seedPosts";

function readSavedPosts() {
  try {
    const saved = localStorage.getItem("connectx-posts");
    return saved ? JSON.parse(saved) : seedPosts;
  } catch {
    return seedPosts;
  }
}

export default function App() {
  const [posts, setPosts] = useState(readSavedPosts);
  const [search, setSearch] = useState("");
  const location = useLocation();

  useEffect(() => { localStorage.setItem("connectx-posts", JSON.stringify(posts)); }, [posts]);

  const filteredPosts = useMemo(() => posts.filter(post => {
    const query = search.toLowerCase().trim();
    if (!query) return true;
    return `${post.user.name} ${post.user.handle} ${post.text} ${(post.tags || []).join(" ")}`.toLowerCase().includes(query);
  }), [posts, search]);

  const createPost = (text) => {
    const newPost = {
      id: `post-${Date.now()}`,
      user: { name: currentUser.name, handle: currentUser.handle, avatar: currentUser.avatar },
      time: "Just now", text, image: "", likes: 0, comments: 0, tags: [],
      liked: false, bookmarked: false
    };
    setPosts(prev => [newPost, ...prev]);
  };
  const toggleLike = (id) => setPosts(prev => prev.map(p => p.id === id ? { ...p, liked: !p.liked, likes: Math.max(0, p.likes + (p.liked ? -1 : 1)) } : p));
  const toggleBookmark = (id) => setPosts(prev => prev.map(p => p.id === id ? { ...p, bookmarked: !p.bookmarked } : p));
  const addComment = (id) => setPosts(prev => prev.map(p => p.id === id ? { ...p, comments: p.comments + 1 } : p));

  const titles = { "/": "Your feed", "/explore": "Explore", "/profile": "Profile", "/notifications": "Notifications", "/bookmarks": "Bookmarks" };
  const title = titles[location.pathname] || "ConnectX";

  return <div className="min-h-screen bg-[#f7f9fc] text-slate-800">
    <Topbar search={search} setSearch={setSearch}/>
    <main className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">Your community, your voice</p><h1 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h1><p className="mt-1 text-sm text-slate-500">Ideas are better when they're shared.</p></div>
        <Link to="/" className="hidden items-center gap-2 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700 sm:inline-flex"><Plus size={17}/> Create post</Link>
      </div>
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_288px]">
        <Sidebar/>
        <section className="min-w-0 space-y-5">
          <Routes>
            <Route path="/" element={<><CreatePost onCreate={createPost}/><div className="flex items-center justify-between"><h2 className="font-extrabold">Latest conversations</h2><span className="text-xs font-semibold text-slate-400">For you · Recent</span></div>{filteredPosts.length ? <div className="space-y-4">{filteredPosts.map(post=><PostCard key={post.id} post={post} onLike={toggleLike} onBookmark={toggleBookmark} onComment={addComment}/>)}</div> : <EmptySearch search={search}/>}</>}/>
            <Route path="/explore" element={<Explore posts={filteredPosts} search={search} setSearch={setSearch}/>}/>
            <Route path="/profile" element={<Profile posts={posts}/>}/>
            <Route path="/notifications" element={<Notifications/>}/>
            <Route path="/bookmarks" element={<Bookmarks posts={posts} onLike={toggleLike} onBookmark={toggleBookmark} onComment={addComment}/>}/>
            <Route path="*" element={<EmptySearch search="Page not found"/>}/>
          </Routes>
        </section>
        <RightPanel/>
      </div>
    </main>
    <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-slate-200 bg-white/95 px-2 py-2 backdrop-blur-lg lg:hidden">
      {[{to:"/",label:"Home",Icon:House},{to:"/explore",label:"Explore",Icon:Compass},{to:"/notifications",label:"Alerts",Icon:Bell},{to:"/profile",label:"Profile",Icon:UserRound}].map(({to,label,Icon})=><Link key={to} to={to} className={`flex flex-col items-center gap-1 rounded-xl py-1 text-[11px] font-semibold ${location.pathname===to?"text-brand-600":"text-slate-400"}`}><Icon size={20}/>{label}</Link>)}
    </nav>
    <button onClick={() => { window.scrollTo({top:0,behavior:"smooth"}); if(location.pathname!=="/") window.location.href="/"; }} className="fixed bottom-20 right-4 z-30 grid h-12 w-12 place-items-center rounded-full bg-brand-600 text-white shadow-lg transition hover:scale-105 sm:bottom-6 sm:right-6 lg:hidden" aria-label="Go to create post"><Plus size={23}/></button>
  </div>;
}

function EmptySearch({ search }) {
  return <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center"><Search size={28} className="mx-auto text-slate-300"/><h2 className="mt-3 font-bold">No posts found</h2><p className="mt-1 text-sm text-slate-500">No conversations match “{search}”. Try a different search.</p></div>;
}