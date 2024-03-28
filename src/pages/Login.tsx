import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { projectAuth } from "../firebase/config";
import { Navigate } from "react-router-dom";
import { useState } from "react";

type Props = {};

export function Login({}: Props) {
  const [user, loading, error] = useAuthState(projectAuth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    console.log("Login?: ", email, password);
    signInWithEmailAndPassword(projectAuth, email, password);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log("error: ", error);
  }
  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
        <h2>Log In</h2>
        <label>
          <span>email:</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button className="bg-green-500" onClick={handleSubmit}>
          Log In
        </button>
    </div>
  );
}
