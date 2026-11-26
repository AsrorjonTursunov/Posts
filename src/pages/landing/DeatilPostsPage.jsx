import { Link, useLocation } from "react-router-dom";

function DeatilPostsPage() {
  const post = useLocation().state;

  if (!post) {
    return <Link to="/posts">← Postlarni ko‘rish</Link>;
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-8">
      <Link to="/posts">← Back to Posts</Link>

      <div className="mt-8">
        <span className="rounded-full bg-indigo-600 px-3 py-1 text-sm text-white">
          {post.category}
        </span>

        <h1 className="mt-4 text-4xl font-bold">{post.title}</h1>

        <p className="my-4 text-sm text-gray-500">
          {post.author} · {new Date(post.createdAt).toLocaleDateString("uz-UZ")}
        </p>

        <img
          src={post.image}
          alt={post.title}
          className="aspect-video w-full rounded-xl object-cover"
        />

        <p className="mt-6 whitespace-pre-line leading-7">
          {post.content || post.excerpt}
        </p>
      </div>
    </div>
  );
}

export default DeatilPostsPage;
