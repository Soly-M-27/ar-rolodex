import { useAuthState } from "react-firebase-hooks/auth";
import { projectAuth } from "../firebase/config";
import { Navigate } from "react-router-dom";
import { signOut } from "firebase/auth";

type Props = {};

export function Home({}: Props) {
  const [user, loading, error] = useAuthState(projectAuth);

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
    return <div>Loading...</div>
  }

  return (
    <>
      <div>Hello {user.displayName}!</div>
      <img src={user.photoURL || ''}></img>
      <button className="bg-red-500" onClick={() => signOut(projectAuth)}>
        Sign Out
      </button>
    </>
  );
}
