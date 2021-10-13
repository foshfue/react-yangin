import React from "react";

export default function Earth(props) {
  return (
    <>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
      </mesh>
    </>
  );
}
