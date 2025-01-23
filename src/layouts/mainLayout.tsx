import { Outlet } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent";

const MainLayout = () => {
  return (
    <>
      <NavBarComponent />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
