import { Outlet } from "react-router-dom";
import Header from "../static/Header";
import Sider from "../static/Sider";
import { useSelector } from "react-redux";

const Layout = () => {
  const toggle = useSelector((state: any) => state.toggle);
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className="w-full flex h-screen">
        <div
          className={`${
            !toggle ? "w-[150px]" : "w-[50px]"
          } bg-green-500 h-screen max-sm:hidden`}
        >
          <Sider />
        </div>
        <div className="w-full h-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
