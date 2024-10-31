import { Link } from "react-router-dom";
import { articles } from "../../../Context/DB";

interface Article {
  id: number;
  date: string;
  category: string;
  comments: number;
  title: string;
  image?: string;
}

export default function Articles() {
  return (
    <section id="blog" className=" text-white p-3 md:p-5 lg:p-8">
      <div className="max-w-7xl mx-auto lg:px-5">
        <div className="flex flex-row gap-6">
          <div className=" w-full   md:w-3/6 h-full flex flex-col">
            <div
              key={articles[0]?.id}
              className={`border-[1px] border-gray-600 rounded-lg h-full w-full p-5 lg:p-10`}
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 CTSButton little cursor-pointer transition-all duration-300 rounded-full flex items-center justify-center text-sm font-bold">
                  {articles[0]?.id}
                </div>
                <span className="text-sm text-gray-400">
                  {articles[0]?.date} / {articles[0]?.category} /{" "}
                  {articles[0]?.comments} Comments
                </span>
              </div>
              <h2 className="text-xl font-bold mb-4">{articles[0]?.title}</h2>

              <img
                src={articles[0]?.image}
                alt={articles[0]?.title}
                className="w-full h-96 object-cover rounded-lg mb-4"
                loading="lazy"
              />

              <div className="flex flex-row items-center group cursor-pointer py-6">
                <div
                  className={`w-8 group-hover:w-16 transition-all duration-500  transform h-full border-[#dddddd6d] group-hover:border-[#ffffff] border-dotted border-[1px] mr-2`}
                ></div>

                <p className="hidden group-hover:block hover:text-purple-700  transition-all duration-500 text-gray-500 text-xs">
                  Read More
                </p>
              </div>
            </div>
            <Link
              className="w-full mt-8 z-50 CTSButton little text-white py-3 px-10 rounded-lg"
              to={"blog"}
            >
              READ ALL ARTICLES
            </Link>
          </div>

          <div className="hidden w-3/6 md:flex flex-col gap-5">
            {articles?.map((article: Article, i: number) => {
              return (
                <div
                  key={i}
                  className={`border-[1px] border-gray-600 rounded-lg p-5 `}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 CTSButton little cursor-pointer transition-all duration-300 rounded-full flex items-center justify-center text-sm font-bold">
                      {article?.id + 1}
                    </div>
                    <span className="text-sm text-gray-400">
                      {article?.date} / {article?.category} /{" "}
                      {article?.comments} Comments
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-4">{article?.title}</h2>
                  <div className="flex flex-row items-center group cursor-pointer py-1 px-2">
                    <div
                      className={`w-8 group-hover:w-16 transition-all duration-500 transform h-full border-[#dddddd6d] group-hover:border-[#ffffff] border-dotted border-[1px] mr-2`}
                    ></div>

                    <p className="opacity-0 group-hover:opacity-100 hover:text-purple-500 group-hover:scale-100 transition-all duration-500 text-gray-500 text-xs">
                      Read More
                    </p>
                  </div>
                </div>
              );
            })}

            <p className="mt-8 text-center text-xs text-gray-400">
              We're a team of creatives who are excited about unique ideas and
              create consectetur adipiscing elit. Etiam vitae purus a lectus
              semper.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
