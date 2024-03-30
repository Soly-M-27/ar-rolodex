import { Link } from "react-router-dom";
import { Sidebar } from ".";
import { useAuthState } from "react-firebase-hooks/auth";
import { SidebarContext } from "../context/SidebarContext";
import { useContext } from "react";
import { projectAuth } from "../firebase/config";
import { signOut } from "firebase/auth";

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
      className="bg-gray-800"
    >
      <div className="p-4">
        <img src={user.photoURL || ""} className="rounded-full w-52" />
        <ul>
          <img className="ml-4" src={TempleIcon} />
          <li>
            <Link to="/" className="flex ml-4 gap-2">
              <img src={DashboardIcon} alt="dashboard icon" />
              <span className="font-bold">Dashboard</span>
            </Link>{" "}
          </li>
          <li>
            <Link to="/" className="flex ml-4 gap-2">
              <img src={AddIcon} alt="dashboard icon text-white" />
              <span className="font-bold">New Build</span>
            </Link>{" "}
          </li>
          <li>
            <button className="bg-blue-800 px-3 ml-4 mt-2 rounded" onClick={() => signOut(projectAuth)}>
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </Sidebar>
  );
}
