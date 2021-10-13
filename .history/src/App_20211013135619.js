import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import styled from "styled-components";
import { Suspense } from "react";
import Earth from "./components/earth";
import "./index.css";
import HomePage from "./pages/HomePage";
import Example from "./pages/Landing";
import Hero from "./pages/Hero";
import Header from "./pages/Header";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
`;

function Box() {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={ref}
      position={[0, 2, 0]}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}
function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
}

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <HomePage /> */}
      <Hero />
      <Stats />
      {/* <Example></Example> */}
      {/* <CanvasContainer>
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </CanvasContainer> */}
    </div>
  );
}

export default App;
