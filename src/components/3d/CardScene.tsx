"use client";

import { Canvas } from "@react-three/fiber";

export default function CardScene() {
  return (
    <Canvas
      aria-label="Three-dimensional scene"
      camera={{
        position: [0, 0, 7],
        fov: 40,
        near: 0.1,
        far: 100,
      }}
      dpr={[1, 1.5]}
      frameloop="demand"
      gl={{ antialias: true, alpha: false }}
      fallback={<div className="scene-unavailable" aria-hidden="true" />}
    >
      <color attach="background" args={["#0c1015"]} />
      {/* v0.2 introduces a stationary, perfectly centered business card mesh. */}
    </Canvas>
  );
}
