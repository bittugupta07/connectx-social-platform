export const currentUser = {
  id: "me",
  name: "Bitu Gupta",
  handle: "@bitugupta",
  avatar: "https://i.pravatar.cc/120?img=12",
  bio: "Frontend developer in progress ✨ Sharing ideas, learning in public, and building cool things."
};

export const seedPosts = [
  {
    id: "p1",
    user: { name: "Aarav Sharma", handle: "@aaravcodes", avatar: "https://i.pravatar.cc/120?img=11" },
    time: "18 min ago",
    text: "Small progress is still progress. Spent today polishing a React component and learned more than I expected. Keep showing up! 🚀",
    image: "",
    likes: 24,
    comments: 6,
    tags: ["React", "BuildInPublic"],
    liked: false,
    bookmarked: false
  },
  {
    id: "p2",
    user: { name: "Meera Kapoor", handle: "@meeradesigns", avatar: "https://i.pravatar.cc/120?img=47" },
    time: "1 hour ago",
    text: "A reminder for designers and developers: the best interface is not the one with the most features. It's the one that helps people do what they came to do. 💙",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    likes: 58,
    comments: 12,
    tags: ["Design", "UX"],
    liked: false,
    bookmarked: false
  },
  {
    id: "p3",
    user: { name: "Kabir Verma", handle: "@kabirbuilds", avatar: "https://i.pravatar.cc/120?img=13" },
    time: "3 hours ago",
    text: "What are you building this week? Drop your project below — let's support each other and share feedback. 👇",
    image: "",
    likes: 17,
    comments: 9,
    tags: ["Community", "IndieDev"],
    liked: false,
    bookmarked: false
  }
];