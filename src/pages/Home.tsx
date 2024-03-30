import { useAuthState } from "react-firebase-hooks/auth";
import { projectAuth } from "../firebase/config";
import { Navigate } from "react-router-dom";
import { useCollection } from "react-firebase-hooks/firestore";
import { getFirestore, collection, query, where } from "firebase/firestore";
import { app } from "../firebase/config";
import Card from "../components/Card";

type Props = {};

export function Home({ }: Props) {
  const [user, loading, error] = useAuthState(projectAuth);
  const [documents, _, error_c] = useCollection(
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
  console.log("data: ", data);
  return (
    <>
      <div className="grid gap-4 m-4 md:grid-cols-2 lg:grid-cols-4">
        {data?.map((card, id) => {
          return (
            <>
              <Card key={id} NameBusiness={card.NameBusiness} Link_Tree_Link={card.Link_Tree_Link} Location={card.Location} phone_number={card.PhoneNum} social_links={card.Social_Media_Links} />
              <Card key={id +1} NameBusiness={card.NameBusiness} Link_Tree_Link={card.Link_Tree_Link} Location={card.Location} phone_number={card.PhoneNum} social_links={card.Social_Media_Links}/>
            </>
          );
        })}
      </div>
    </>
  );
}
