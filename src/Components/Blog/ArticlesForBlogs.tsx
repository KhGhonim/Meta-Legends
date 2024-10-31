import { useState } from "react";
import { articlesForBlog } from "../../Context/DB";
import { Link } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  img: string;
  category: string;
  date: string;
  comments: number;
}
export default function ArticlesForBlogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of photos per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(articlesForBlog.length / itemsPerPage);

  // Get the photos for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPhotos = articlesForBlog.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Handle Next Page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle Previous Page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full h-full">
      <div className=" w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-3 md:px-10 lg:px-20">
        {currentPhotos?.map((article: Article, i: number) => {
          return (
            <Link
              to={`/articles/${article?.id}`}
              key={i}
              className={` z-30 hover:shadow-little-shadow transition-all duration-500  rounded-lg h-full w-full p-5 lg:p-10`}
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 text-[#ddd] CTSButton little cursor-pointer transition-all duration-300 rounded-full flex items-center justify-center text-sm font-bold">
                  {article?.id}
                </div>
                <span className="text-sm text-gray-400">
                  {article?.date} / {article?.category} / {article?.comments}{" "}
                  Comments
                </span>
              </div>
              <h2 className="text-xl font-bold mb-4 text-gray-300">
                {article?.title}
              </h2>

              <img
                src={article?.img}
                alt={article?.title}
                className="w-full h-96 object-cover rounded-lg mb-4"
              />

              <div className="flex flex-row items-center group cursor-pointer py-6">
                <div
                  className={`w-8 group-hover:w-16 transition-all duration-500  transform h-full border-[#dddddd6d] group-hover:border-[#ffffff] border-dotted border-[1px] mr-2`}
                ></div>

                <p className="hidden group-hover:block hover:text-purple-700  transition-all duration-500 text-gray-500 text-xs">
                  Read More
                </p>
              </div>
            </Link>
          );
        })}

        {/* Pagination Controls */}
      </div>

      <div className="mt-8   w-full flex justify-center space-x-8 items-center">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 z-30 rounded-full font-bold transition-all duration-500 ${
            currentPage === 1
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-blue-500 hover:to-purple-600 shadow-lg hover:scale-105"
          }`}
        >
          Previous
        </button>

        <span className="text-sm  z-30 md:text-base lg:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 z-30 rounded-full font-bold transition-all duration-500 ${
            currentPage === totalPages
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-purple-600 hover:to-blue-500 shadow-lg hover:scale-105"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
