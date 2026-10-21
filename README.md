# ConnectX — Twitter-Inspired Social Media Platform

A responsive social media frontend built with **React, React Router, Tailwind CSS, and Lucide icons**. This project is designed around the internship brief: users can publish posts, like posts, view a timeline, and navigate Home, Profile, and Explore pages.

## Features
- Responsive desktop, tablet, and mobile layout
- Home timeline with sample community posts
- Create a post (280-character limit)
- Like / unlike posts
- Add comments to a post
- Bookmark / remove bookmarks
- Search posts, people, and topics
- Explore page with clickable topic chips
- Profile page with user details and own posts
- Notifications page (sample/demo notifications)
- Mobile bottom navigation
- LocalStorage persistence for posts, likes, and bookmarks
- Reusable components and React Router navigation

## Run locally
Install Node.js (LTS), then open a terminal in this folder and run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Notes
- This is a frontend demonstration using local sample data; it does not provide real multi-user authentication or a remote database.
- The image and avatar URLs are remote demo assets and require an internet connection.
- The internship brief allows mock APIs; a backend can be connected later if needed.
- For a fresh demo, clear the browser's localStorage key `connectx-posts` or use DevTools → Application → Local Storage.

## Project structure
```text
src/
  components/  Reusable top bar, sidebar, post composer, post card, right panel
  data/        Sample users and posts
  pages/       Explore, Profile, Notifications, Bookmarks
  App.jsx      Routes and shared post state
  main.jsx     React entry point
  index.css    Tailwind directives and global styles
```

## Assignment mapping
- Component-based React architecture: `components/` and `pages/`
- Responsive Tailwind UI: grid layout, desktop sidebars, mobile bottom navigation
- Posts, likes, timeline: `CreatePost.jsx`, `PostCard.jsx`, `App.jsx`
- Routing for Home, Profile, Explore: React Router routes in `App.jsx`
- Extensibility and documentation: reusable components and this README
