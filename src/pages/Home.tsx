import { useAuthState } from "react-firebase-hooks/auth";
import { projectAuth } from "../firebase/config";
import { Navigate, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Sidebar } from "../components";
import { useState } from "react";

//assets
import DashboardIcon from '../assets/dashboard_icon.svg';
import AddIcon from '../assets/add_icon.svg';
import TempleIcon from '../assets/temple.svg';

type Props = {};

export function Home({}: Props) {
  const [user, loading, error] = useAuthState(projectAuth);
  const [show, setShow] = useState(false);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log("error: ", error);
  }
  if (!user) {
    return <Navigate to="/Login" />;
  }

  if (!user.displayName && !user.photoURL) {
    window.location.reload();
    return <div>Loading...</div>;
  }

  return (
    <>
      <Sidebar show={show} setShow={setShow} className="bg-green-400">
        <div className="p-4">
          <img src={TempleIcon}/>
          <img src={user.photoURL || ""} className="rounded-full w-52"/>
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
      <div>Hello {user.displayName}!</div>
      <img src={user.photoURL || ""}></img>
      <button className="bg-red-500" onClick={() => signOut(projectAuth)}>
        Sign Out
      </button>
      <button className="bg-green-500" onClick={() => setShow(true)}>
        Sidebar
      </button>
    </>
  );
}
