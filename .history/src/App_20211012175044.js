import { Canvas, useFrame } from "@react-three/fiber";

function box() {
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
      <Canvas></Canvas>
    </div>
  );
}

export default App;
