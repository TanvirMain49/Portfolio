import { Suspense } from "react";
import { Astronaut } from "./Astronaut";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { easing } from "maath";
import Loader from "./Loader";

export default function HeroScene({ isMobile }) {
  return (
    <Canvas camera={{ position: [0, 1, 3] }}>
      <Suspense fallback={<Loader />}>
        <Float>
          <Astronaut
            scale={isMobile ? 0.23 : undefined}
            position={isMobile ? [0, -2.1, 0] : undefined}
          />
          <Rig />
        </Float>
      </Suspense>
    </Canvas>
  );
}

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}
