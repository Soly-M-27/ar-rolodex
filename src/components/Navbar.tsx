import { useAuthState } from "react-firebase-hooks/auth";

import { Link } from "react-router-dom";
import { projectAuth } from "../firebase/config";
import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

//assets
import DashboardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";

type Props = {};

const Links = () => {
  return (
    <ul className="hidden lg:flex ml-auto">
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
  );
};

export function Navbar({}: Props) {
  const [user, ..._] = useAuthState(projectAuth);
  const { setSidebarOpen } = useContext(SidebarContext);

  return (
    <>
      <div className="bg-green-500 p-4">
        <ul className="flex">
          {!user && (
            <div className="flex w-auto ml-auto gap-3 mr-2">
              <Link to="/SignUp">
                <li>Signup</li>
              </Link>
              <Link to="/Login">
                <li>Login</li>
              </Link>
            </div>
          )}
          {user && (
            <div className="flex w-full gap-3 mr-2 text-xl">
              <div>Hello, {user.displayName}</div>
              <div
                className="ml-auto lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <FontAwesomeIcon icon={faBars} />
              </div>
              <Links/>
            </div>
          )}
        </ul>
      </div>
    </>
  );
}
