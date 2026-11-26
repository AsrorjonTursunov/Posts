import { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";

const categories = ["All", "Technology", "Productivity", "Design"];

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [message, setMessage] = useState("Yuklanmoqda...");

  useEffect(() => {
    async function getPosts() {
      try {
        const res = await fetch("https://blogify-oquvchi.vercel.app/api/posts");
        if (!res.ok) throw new Error();

        const data = await res.json();
        setPosts(data.posts);
        setMessage("");
      } catch {
        setMessage("Postlarni yuklab bo‘lmadi.");
      }
    }

    getPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const title = post.title.toLowerCase();
    const searchMatch = title.includes(search.toLowerCase().trim());
    const categoryMatch =
      category === "All" ||
      post.category?.toLowerCase() === category.toLowerCase();

    return searchMatch && categoryMatch;
  });

  return (
    <div>
      <section className="bg-[#f4f1fc] px-4 py-14 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">Explore Our Posts</h1>

        <p className="mt-3 text-gray-500">
          Discover amazing content from talented writers across various topics
        </p>

        <input
          type="search"
          aria-label="Search posts"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-6 w-full max-w-lg rounded-lg border border-gray-200 bg-white px-4 py-3"
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 flex justify-center">
          <div className="flex flex-wrap justify-center rounded-lg bg-gray-100 p-1">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-md px-3 py-2 text-sm ${
                  category === item ? "bg-white font-semibold" : "text-gray-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {message && <p className="text-center">{message}</p>}

        {!message && filteredPosts.length === 0 && (
          <p className="text-center">Post topilmadi.</p>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default PostsPage;
