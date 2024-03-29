import { Link } from "react-router-dom";
import { Sidebar } from ".";
import { useAuthState } from "react-firebase-hooks/auth";
import { SidebarContext } from "../context/SidebarContext";
import { useContext } from "react";
import { projectAuth } from "../firebase/config";

//assets
import DashboardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";
import TempleIcon from "../assets/temple.svg";

type Props = {};

export function SidebarNav({}: Props) {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
  const [user, ..._] = useAuthState(projectAuth);
  if (!user) {
    return;
  }
  return (
    <Sidebar
      show={sidebarOpen}
      setShow={setSidebarOpen}
      className="bg-green-400"
    >
      <div className="p-4">
        <img src={TempleIcon} />
        <img src={user.photoURL || ""} className="rounded-full w-52" />
        <ul>
          <li>
            <Link to="/Dashboard" className="flex ml-4 gap-2">
              <img src={DashboardIcon} alt="dashboard icon" />
              <span className="font-bold">Dashboard</span>
            </Link>{" "}
          </li>
          <li>
            <Link to="/" className="flex ml-4 gap-2">
              <img src={AddIcon} alt="dashboard icon" />
              <span className="font-bold">New Build</span>
            </Link>{" "}
          </li>
        </ul>
      </div>
    </Sidebar>
  );
}
