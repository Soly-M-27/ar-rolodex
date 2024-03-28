import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { ref, getDownloadURL } from "firebase/storage";
import { useUploadFile } from "react-firebase-hooks/storage";
import { doc, setDoc } from "firebase/firestore";
import { projectAuth, db, projectStorage } from "../firebase/config";
import { useState, MouseEventHandler } from "react";
import { Navigate } from "react-router-dom";
import { User, UserCredential, updateProfile } from "firebase/auth";

type Props = {};

export function SignUp({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setdisplayName] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [createUser, user, loading, error] =
    useCreateUserWithEmailAndPassword(projectAuth);

  const [updateProfile, updating, a_error] = useUpdateProfile(projectAuth);
  const [uploadFile, uploading, snapshot, use_error] = useUploadFile();

  const handleSubmit = async () => {
    console.log("Login?: ", email, password);
    const res = await createUser(email, password);
    if (!res) {
      console.log("User does not exist", user);
      return "No user!";
    }

    await updateProfile({ displayName });

    const uploadPath = `thumbnails/${res.user.uid}/${thumbnail?.name}`;
    const FileRef = ref(projectStorage, uploadPath);

    if (thumbnail) {
        const result = await uploadFile(FileRef, thumbnail, {
            contentType: 'image/jpeg'
        });
    }
    const imgURL = await getDownloadURL(FileRef);
    await updateProfile({ photoURL: imgURL });
    console.log("photoURL: ", imgURL);

    await setDoc(doc(db, "users", res.user.uid), {
      online: true,
      displayName,
      photoURL: imgURL,
    });
  };

  const handleFileChange = (e: any) => {
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      console.log("Please select a file");
    }
    if (!selected.type.includes("image")) {
      console.log("Selected file must be an image");
    }
    if (!(selected.size > 100000)) {
      console.log("Image file size must be less than 100kb");
    }
    setThumbnail(selected);
    console.log("Thumbnail updated");
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
    <div className="flex flex-col justify-center gap-4">
      <h2>Log In</h2>
      <label>
        <span className="mr-2">email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span className="mr-2">password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span className="mr-2">display name:</span>
        <input
          type="text"
          onChange={(e) => setdisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span className="mr-2">profile picture:</span>
        <input type="file" onChange={handleFileChange} />
      </label>
      <button className="bg-green-500" onClick={() => handleSubmit()}>
        Log In
      </button>
    </div>
  );
}
