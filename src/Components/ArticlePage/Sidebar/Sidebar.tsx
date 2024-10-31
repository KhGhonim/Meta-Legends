import { useState } from "react";
import { articlesForBlog } from "../../../Context/DB";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("recent");

  const recentBlogs = [
    articlesForBlog[0],
    articlesForBlog[1],
    articlesForBlog[2],
    articlesForBlog[3],
    articlesForBlog[4],
    articlesForBlog[5],
    articlesForBlog[6],
  ];

  const mostViewed = [
    articlesForBlog[7],
    articlesForBlog[8],
    articlesForBlog[9],
    articlesForBlog[10],
    articlesForBlog[11],
    articlesForBlog[12],
    articlesForBlog[13],
  ];

  return (
    <div className="w-full">
      <div className="grid w-full grid-cols-2">
        <button
          className={`py-2 rounded-l-full px-4 font-semibold ${
            activeTab === "recent" ? "bg-purple-700 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("recent")}
        >
          Recent Blogs
        </button>
        <button
          className={`py-2 rounded-r-full px-4 font-semibold ${
            activeTab === "viewed" ? "bg-purple-700 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("viewed")}
        >
          Most Viewed
        </button>
      </div>

      <div className="p-4 border-dotted  border-gray-200 border-[1px] rounded-lg mt-4">
        {activeTab === "recent" ? (
          <div>
            <ul className="space-y-4 z-50">
              {recentBlogs.map((blog) => (
                <li
                  key={blog.id}
                  className="flex z-30 items-center space-x-4 border-b last:border-0  pb-4"
                >
                  <a
                    href={`/articles/${blog.id}`}
                    className="flex items-center space-x-4"
                  >
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-20 h-20 rounded-lg object-cover shadow-sm"
                    />
                    <div className="z-30">
                      <h3 className="font-semibold z-30 text-gray-800 hover:text-blue-600 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-sm z-30 text-gray-500">
                        {blog.comments} views
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <ul className="space-y-4">
              {mostViewed.map((blog) => (
                <li
                  key={blog.id}
                  className="flex items-center space-x-4 border-b last:border-0  pb-4"
                >
                  <a
                    href={`/articles/${blog.id}`}
                    className="flex items-center z-30 space-x-4"
                  >
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-20 h-20 rounded-lg object-cover shadow-sm"
                    />
                    <div className="z-30">
                      <h3 className="font-semibold z-30 text-gray-800 hover:text-blue-600 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-sm z-30 text-gray-500">
                        {blog.comments} views
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
