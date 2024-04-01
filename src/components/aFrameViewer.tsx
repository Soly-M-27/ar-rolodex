// @ts-nocheck
import React, { useState } from "react";

export function AFrameViewer({data}) {

  const [show, setShow] = useState(false);
  if (!show) {
    return <button onClick={() => setShow(true)}>Show AR</button>;
  }
  return <a-scene></a-scene>;
}
