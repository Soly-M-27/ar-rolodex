import { useCollection } from "react-firebase-hooks/firestore";
import { AFrameViewer } from "../components"
import { collection, getFirestore, query, where } from "firebase/firestore";
import { app, projectAuth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

type Props = {}

export function Aframe({}: Props) {
  const [user, ..._] = useAuthState(projectAuth);
  const [documents,  ...__] = useCollection(
    query(
      collection(getFirestore(app), "BusinessCards"),
      where("uid", "==", user?.uid || "")
    ),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const data = documents?.docs.map((doc) => doc.data())[0];
  console.log(data)
  return (
    <AFrameViewer data={data}/>
  )
}
