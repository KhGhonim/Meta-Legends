import { Link } from "react-router-dom";
import Divider from "../../Components/Divider/Divider";
import ArticlesForBlogs from "../../Components/Blog/ArticlesForBlogs";

export default function Blog() {
  return (
    <div className="w-full h-full pt-20">
      <div id="blog" className="relative flex flex-col text-center my-10 w-full h-full">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold ">
          Blog Articles
        </h1>
        <h1 className="absolute inset-0 text-4xl md:text-6xl z-40  lg:text-7xl font-light text-white [text-shadow:3px_3px_0_#7000ff,-1px_-1px_0_#cc00ff,1px_-1px_0_#cc00ff,-1px_1px_0_#cc00ff,1px_1px_0_#cc00ff]">
          Blog Articles
        </h1>

        <div className="flex space-y-9 pt-6 flex-col justify-center items-center text-center">
          <p className="text-[#ddd] text-xl px-6">
            Discover the latest blog posts and tutorials on the Metaverse
          </p>
          <div className="text-[#ddd] text-xl px-6">
            <Link to={"/"}>Home</Link> / <Link to={"/blog"}>Blog Articles</Link>
          </div>
        </div>
      </div>
      <Divider />
      <ArticlesForBlogs />
    </div>
  );
}
