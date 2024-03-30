import { useAuthState } from "react-firebase-hooks/auth";
import { projectAuth } from "../firebase/config";
import { Navigate } from "react-router-dom";
import { useCollection } from "react-firebase-hooks/firestore";
import { getFirestore, collection, query, where } from "firebase/firestore";
import { app } from "../firebase/config";

type Props = {};

export function Home({}: Props) {
  const [user, loading, error] = useAuthState(projectAuth);
  const [documents, loading_c, error_c] = useCollection(
    query(
      collection(getFirestore(app), "profile_info"),
      where("uid", "==", user?.uid || "")
    ),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const data = documents?.docs.map((doc) => doc.data());
  console.log("error_c: ", error_c);

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

  if (documents?.docs.length === 0) {
    return <div>""</div>;
  }

  return (
    <>
      {data?.map((card) => {
        return (
          <>
            <div>Name of Business: {card.NameBusiness}</div>
            <div>Location: {card.Location}</div>
            <div>Link Tree: {card.Link_Tree_Link}</div>
          </>
        );
      })}
    </>
  );
}
