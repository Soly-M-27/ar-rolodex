import { useAuthState } from "react-firebase-hooks/auth";
import { projectAuth } from "../firebase/config";
import { Navigate, Link } from "react-router-dom";
import { useCollection } from "react-firebase-hooks/firestore";
import { getFirestore, collection, query, where } from "firebase/firestore";
import { app } from "../firebase/config";
import Card from "../components/Card";

type Props = {};

export function Home({}: Props) {
  const [user, loading, error] = useAuthState(projectAuth);
  const [documents, _, error_c] = useCollection(
    query(
      collection(getFirestore(app), "BusinessCards"),
      where("uid", "==", user?.uid || "")
    ),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const data = documents?.docs.map((doc) => doc.data())[0];
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
    return (
      <div className="flex justify-center mt-20">
        <Link className="bg-blue-500 rounded px-4" to={"/create"}>
          create your card
        </Link>
      </div>
    );
  }
  console.log("data: ", data);
  if (!data) {
    return;
  }
  return (
    <>
      <div className="grid gap-4 m-4 md:grid-cols-2 lg:grid-cols-4">
        {data.cards?.map((card: any, id: number) => {
          return (
            <>
              <Card
                key={id}
                NameBusiness={card.businessName}
                Link_Tree_Link={card.linkTree}
                Location={card.location}
                phone_number={card.phoneNumber}
                social_links={card.socialsValues}
                mindURL={card.mindURL}
                imgURL={card.imgURL}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
