import { ArticleProps } from "../../../Pages/ArticlePage/ArticlePage";

export default function Article({ article }: ArticleProps) {
  return (
    <article className="p-3 sm:p-6 mx-auto mt-8 ">
      <h1 className="font-serif z-50 text-3xl text-center sm:text-5xl capitalize mb-4 text-slate-50 leading-tight">
        {article.title}
      </h1>
      <div className="w-full z-50 mb-6 overflow-hidden rounded-lg shadow-lg">
        <img
          src={article.img}
          alt={article.title}
          className="w-full h-full z-30 rounded-lg"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="bg-purple-500 z-50 text-white px-4 py-1 rounded-full inline-block mb-8 text-sm font-semibold">
          Catagory: {article.category}
        </div>

        <div className="bg-purple-800 z-50 text-white px-4 py-1 rounded-full inline-block mb-8 text-sm font-semibold">
          Date: {article.date}
        </div>
      </div>
      <p className="leading-relaxed z-50 text-[#dddd]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p className="leading-relaxed z-50 text-[#dddd]">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p className="leading-relaxed z-50 text-[#dddd] my-5">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
        qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet.
      </p>
      <p className="leading-relaxed z-50 text-[#dddd]">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
        sit amet.
      </p>
    </article>
  );
}
