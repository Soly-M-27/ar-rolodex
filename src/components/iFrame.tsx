export function iFrame() {
  `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="../../libs/mindar/mindar-image.prod.js"></script>
    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
    <script src="../../libs/mindar/mindar-image-aframe.prod.js"></script>
  </head>
  <body>
    <a-scene mindar-image="imageTargetSrc: ../../assets/targets/MindMaps/CM_Black.mind" color-space="RGB8" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <a-asset-item id="LogoModel" src="../../assets/models/GLB_Maps/CM360_Gold.glb"></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        <a-gltf-model rotation="0 0 0 " position="0 -0.4 0" scale="1.0 1.0 1.0" src="#LogoModel">
      </a-entity>
    </a-scene>
  </body>
</html>`;
}
