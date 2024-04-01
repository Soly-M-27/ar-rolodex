// @ts-nocheck
import React, { useState } from "react";

export function AFrameViewer({ }) {
  const [show, setShow] = useState(false);
  if (!show) {
    return (<button onClick={() => setShow(true)}>Show AR</button>)
  }
  return (
    <a-scene>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
    </a-scene>
  )
}
