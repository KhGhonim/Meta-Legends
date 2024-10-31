import { useEffect, useRef, useState } from "react";
import { filterCategories, products } from "../../../Context/DB";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export default function FilterSection() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [openAccordion, setOpenAccordion] = useState<number>(0);
  const filteredProducts = products.filter((product) => {
    if (!product.catagory) return false;
    return (
      activeFilters.length === 0 || activeFilters.includes(product.catagory)
    );
  });
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    // Prevent closing if it's the last open accordion
    if (openAccordion === index) return;
    setOpenAccordion(index);
  };
  const clearFilters = () => setActiveFilters([]);

  const handleFilter = (category: string) => {
    if (activeFilters.includes(category)) {
      setActiveFilters(activeFilters.filter((item) => item !== category));
    } else {
      setActiveFilters([...activeFilters, category]);
    }
  };

  useEffect(() => {
    // Update maxHeight for each open accordion on initial load
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight =
          openAccordion === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [openAccordion]);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6  lg:container lg:mx-auto text-white min-h-screen">
      {/* Left sidebar with accordion */}
      <div className="w-full md:w-1/4 z-30 h-full p-4 rounded-lg">
        {/* Category Accordion */}
        {filterCategories?.map((category, index) => {
          const isOpen = openAccordion === index;

          return (
            <div key={index}>
              <div
                onClick={() => toggleAccordion(index)}
                className="flex justify-between bg-[#0f0f0f]/65 rounded-lg items-center w-full p-2 my-2 cursor-pointer"
              >
                <div className="w-full text-lg capitalize px-4 py-2 rounded">
                  {category.name}
                </div>
                <MdOutlineKeyboardArrowDown
                  className={`${
                    isOpen ? "rotate-180" : "rotate-0"
                  } text-3xl transition-transform duration-300`}
                />
              </div>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight: isOpen
                    ? `${contentRefs.current[index]?.scrollHeight}px`
                    : "0px",
                }}
                className={`transition-max-height duration-500 overflow-hidden bg-[#0f0f0f]/65 px-6 flex flex-col rounded text-white`}
              >
                <div className="py-4">
                  {category.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className="flex items-center justify-center space-y-1 gap-3"
                    >
                      <input
                        type="checkbox"
                        name={category.name}
                        value={option}
                        checked={activeFilters.includes(option)}
                        onChange={() => handleFilter(option)}
                      />
                      <label
                        onClick={() => handleFilter(option)}
                        className="w-full text-white capitalize text-sm cursor-pointer"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main content area */}
      <div className="flex-1 space-y-4 z-30">
        {/* Active filters */}
        <div className="flex flex-wrap gap-2 items-center bg-[#0f0f0f]/65 p-4 rounded-lg">
          <span className="font-bold mr-2">
            Filters: {activeFilters.length}
          </span>
          {activeFilters.map((filter, index) => (
            <button
              key={index}
              className="px-2 py-1 flex items-center border border-[#ddddd] rounded-xl"
              onClick={() =>
                setActiveFilters(
                  activeFilters.filter((item) => item !== filter)
                )
              }
            >
              {filter}{" "}
              <span className="ml-2 text-red-500">
                <IoClose />
              </span>
            </button>
          ))}
          {activeFilters.length > 0 && (
            <button
              onClick={clearFilters}
              className="ml-auto text-blue-400 hover:text-blue-300"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts?.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800  z-10 overflow-hidden hover:border-purple-500 cursor-pointer hover:drop-shadow-custom rounded-3xl p-5 transition-all duration-300 ease-in-out transform backdrop-blur-[250px] bg-transparent bg-opacity-30 border border-[#dddd] shadow-2xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
