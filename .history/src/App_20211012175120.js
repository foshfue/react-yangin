import { Canvas, useFrame } from "@react-three/fiber";

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
        <Box />
      </Canvas>
    </div>
  );
}

export default App;
