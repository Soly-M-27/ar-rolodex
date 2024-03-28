import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { projectAuth } from "../firebase/config";

type Props = {};

export function Navbar({}: Props) {
  const [user, ..._] = useAuthState(projectAuth);

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
            <div className="flex w-auto ml-auto gap-3 mr-2">
              <li>hello, {user.displayName}</li>
            </div>
          )}
        </ul>
      </div>
    </>
  );
}
