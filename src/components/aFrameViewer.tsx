// @ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import 'mind-ar';


export function AFrameViewer({ data }) {
  const sceneRef = useRef(null);
  const card = data.cards[0];
  useEffect(() => {
    const scene = sceneRef.current;
    const arSystem = scene.systems["mindar-image-system"];
    console.log(arSystem);
    scene.addEventListener("renderstart", () => {
      arSystem.start(); // start AR
    });
  }, []);

  return (
    <div className="absolute w-full mt-48">
      <a-scene
        ref={sceneRef}
        mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.mind; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;"
        color-space="sRGB"
        embedded
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: true"
        device-orientation-permission-ui="enabled: true"
      >
        <a-assets>
          {/*<img id="card" src={card.imgURL} />*/}
          <img
            id="card"
            src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.png"
          />

          <a-asset-item
            id="avatarModel"
            src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/softmind/scene.gltf"
          ></a-asset-item>
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: true"></a-camera>

        <a-entity mindar-image-target="targetIndex: 0">
          <a-plane
            src="#card"
            position="0 0 0"
            height="0.552"
            width="1"
            rotation="0 0 0"
          ></a-plane>
          <a-gltf-model
            rotation="0 0 0 "
            position="0 0 0.1"
            scale="0.005 0.005 0.005"
            src="#avatarModel"
            animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
          ></a-gltf-model>
        </a-entity>
      </a-scene>
    </div>
  );
}
