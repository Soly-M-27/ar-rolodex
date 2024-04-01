// @ts-nocheck
import React, { useState, useRef, useEffect } from "react";

export function AFrameViewer({ data }) {
  const sceneRef = useRef(null);
  const card = data.cards[0]



  return (
    <div>
      <a-scene
        ref={sceneRef}
        mindar-image={`imageTargetSrc: ${card.mindURL}; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;`}
        color-space="sRGB"
        embedded
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
      >

      </a-scene>
    </div>
  );
}
