import { useState, useEffect } from "react";

import { FaArrowRightLong } from "react-icons/fa6";
import PostCard from "./PostCard";

//rrd

import { useNavigate } from "react-router-dom";

function LatestPost() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPosts() {
      try {
        let res = await fetch("https://blogify-oquvchi.vercel.app/api/posts");
        if (!res.ok) {
          throw new Error("malumoatda muamo");
        }

        let data = await res.json();

        setPosts(data.posts);
      } catch (error) {
        console.log("error");
      }
    }
    getPosts();
  }, []);

  function handlePosts() {
    navigate("/posts");
  }

  return (
    <section>
      <div className="w-full max-w-7xl mx-auto py-10 ">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h3 className="font-bold text-2xl">Latest Posts</h3>
            <p className="text-gray-400">Check out our most recent articles</p>
          </div>
          <button
            onClick={handlePosts}
            className="border border-gray-300 flex items-center gap-2 rounded-2xl py-2 px-6.5 "
          >
            View All <FaArrowRightLong />
          </button>
        </div>
        <div className="flex gap-8.25">
          {posts.length &&
            posts.slice(posts.length - 3).map((post) => {
              return <PostCard key={post.id} post={post} />;
            })}
        </div>
      </div>
    </section>
  );
}

export default LatestPost;
