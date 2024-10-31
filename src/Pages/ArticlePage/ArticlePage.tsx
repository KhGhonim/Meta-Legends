import { useParams } from "react-router-dom";
import Article from "../../Components/ArticlePage/Article/Article";
import CommentSection from "../../Components/ArticlePage/CommentSection/CommentSection";
import Sidebar from "../../Components/ArticlePage/Sidebar/Sidebar";
import { articlesForBlog } from "../../Context/DB";
import CatagoryAndSocial from "../../Components/ArticlePage/CatagoryAndSocial/CatagoryAndSocial";
import NextAndPervious from "../../Components/ArticlePage/NextAndPervious/NextAndPervious";

export interface ArticleProps {
  article: {
    id: number;
    title: string;
    img: string;
    category: string;
    date: string;
    comments: number;
  };
}

export default function ArticlePage() {
  const params = useParams().slug;

  const article = articlesForBlog.find(
    (article) => article.id === Number(params)
  );

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container mx-auto lg:pt-32 w-full h-full">
      <div className="flex flex-col lg:flex-row gap-8">
        <main className="lg:w-2/3">
          <Article article={article} />
          <NextAndPervious/>
          <CommentSection />

        </main>
        <aside className=" hidden lg:w-1/3 lg:flex  flex-col">
          <Sidebar />
          <CatagoryAndSocial />
        </aside>
      </div>
    </div>
  );
}
