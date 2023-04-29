import { Outlet } from "react-router-dom";
import Navabar from "./components/Navabar";

export default function WebsiteLayout() {

  return (
    <div>
      <Navabar />
      <Outlet />
    </div>
  );
}
