import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-r from-[rgb(27,17,38)] to-[rgb(24,17,36)]">
      <div className="block lg:hidden fixed bottom-0 left-[50%] translate-x-[-50%] top-[30%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(112,0,255,.50),rgba(255,255,255,0))]"></div>
      <div className="hidden lg:block fixed bottom-0 left-[20%] translate-x-[-0%] top-[0%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(112,0,255,.40),rgba(255,255,255,0))]"></div>
      <div className="hidden lg:block fixed bottom-0 left-[80%] translate-x-[-100%] top-[40%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(204,0,255,.20),rgba(255,255,255,0))]"></div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
