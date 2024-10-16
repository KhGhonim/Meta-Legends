import { useState } from "react";
import { Photos } from "../../../Context/DB";

export default function Cards() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of photos per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(Photos.length / itemsPerPage);

  // Get the photos for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPhotos = Photos.slice(indexOfFirstItem, indexOfLastItem);

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
    <div className="w-full h-full container mx-auto px-3 relative p-16">
      <div className="flex flex-col  space-y-4 mb-10">
        <h1 className="text-xl md:text-2xl lg:text-4xl text-[#dddd] font-bold">
          Similer Items
        </h1>
        <div className="w-56 h-0.5 bg-[#dddddd6d] relative ">
          <span className="w-1/6 bg-[#dddddd6d] absolute h-1/2  left-1/4 rotate-45"></span>
          <span className="w-1/6  bg-[#dddddd6d] absolute h-1/2  left-1/3 rotate-45"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {currentPhotos.map((item, i) => (
          <div
            key={i}
            className="w-96 h-96 z-10 overflow-hidden hover:border-purple-500 cursor-pointer hover:drop-shadow-custom rounded-3xl p-5 transition-all duration-300 ease-in-out transform backdrop-blur-[250px] bg-transparent bg-opacity-30 border border-[#dddd] shadow-2xl"
          >
            <img
              src={item.src}
              className="w-full h-full object-cover rounded-md"
              alt={item.alt}
            />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-8 flex justify-center space-x-8 items-center">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-full font-bold transition-all duration-500 ${
            currentPage === 1
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-blue-500 hover:to-purple-600 shadow-lg hover:scale-105"
          }`}
        >
      Previous
        </button>

        <span className="text-sm md:text-base lg:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-full font-bold transition-all duration-500 ${
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
