import React from "react";

export default function Earth(props) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color="red" />
      </mesh>
    </>
  );
}
