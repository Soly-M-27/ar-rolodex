// @ts-nocheck
import React, { useState, useRef, useEffect } from "react";

export function AFrameViewer({ data }) {
  const sceneRef = useRef(null);
  const card = data.cards[0]
  useEffect(() => {
    const scene = sceneRef.current;
    const arSystem = scene.systems["mindar-image-system"];
    console.log(arSystem)
    scene.addEventListener('renderstart', () => {
      arSystem.start(); // start AR 
    });

  }, [])


  return (
    <div>
      <a-scene
        ref={sceneRef}
        mindar-image={`imageTargetSrc: ${card.mindURL}; autoStart: true; uiLoading: no; uiError: no; uiScanning: no;`}
        color-space="sRGB"
        embedded
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: true"
        device-orientation-permission-ui="enabled: true"
      >

        <a-assets>
          <img id="card" src={card.imgURL} />
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: true"></a-camera>

        <a-entity mindar-image-target="targetIndex: 0">
          <a-plane src="#card" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
        </a-entity>

      </a-scene>
    </div>
  );
}
