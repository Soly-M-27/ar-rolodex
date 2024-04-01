// @ts-nocheck
import React, { useState } from "react";

export function AFrameViewer({}) {
  const [documents, _, error_c] = useCollection(
    query(
      collection(getFirestore(app), "BusinessCards"),
      where("uid", "==", user?.uid || "")
    ),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const [show, setShow] = useState(false);
  if (!show) {
    return <button onClick={() => setShow(true)}>Show AR</button>;
  }
  return <a-scene></a-scene>;
}
