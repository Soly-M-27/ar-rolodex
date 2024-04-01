import "aframe";
import "mind-ar";
import { Scene, Entity } from "aframe-react";

type Props = {};

export function AFrameViewer({ }: Props) {
  return (
      <Scene>
        <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
        <Entity particle-system={{preset: 'snow'}}/>
        <Entity light={{type: 'point'}}/>
        <Entity text={{value: 'Hello, WebVR!'}}/>
      </Scene>

  );
}
