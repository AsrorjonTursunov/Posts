import React from "react";

import { Link } from "react-router-dom";

//icons
import { FaArrowRightLong } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";

function PostCard({ post }) {
  console.log(post);
  let { id, author, category, image, title, updateAt, excerpt, createdAt } =
    post;
  return (
    <div className="max-w-[384px] rounded-2xl overflow-hidden">
      <div className="relative">
        <img src={image} alt="" />
        <p className="py-0.5 px-2.5 w-fit  absolute top-5 left-4 text-white bg-blue-800 rounded-2xl">
          {category}
        </p>
      </div>
      <div className="p-6 border-2 border-gray-300 overflow-hidden">
        <p className="flex gap-2  text-gray-400 mb-3">
          <CiCalendarDate />
          <span>
            {" "}
            {new Date(createdAt).toLocaleString("uz-UZ", {
              timeZone: "Asia/Tashkent",
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </span>
        </p>

        <h3 className="font-bold text-3xl mb-2">{title}</h3>

        <p className=" mb-4 text-gray-400">{excerpt}</p>

        <Link
          to="/detail"
          state={post}
          className="flex items-center gap-1 text-indigo-600"
        >
          Read More <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
