import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "drei";

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <Box />
      </Canvas>
    </div>
  );
}

export default App;
