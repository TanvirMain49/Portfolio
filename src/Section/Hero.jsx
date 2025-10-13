import React, { Suspense } from "react";
import HeroText from "../Components/HeroText";
import ParallaxBackground from "../Components/ParallaxBackground";
import { useMediaQuery } from "react-responsive";
import { Astronaut } from "../Components/Astronaut";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { easing } from "maath";
import Loader from "../Components/Loader";

export default function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section id="home" className="flex items-center justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>

          <Float>
            <Astronaut
              scale={isMobile && 0.23}
              position={isMobile && [0, -1.5, 0]}
            />
            <Rig />
          </Float>
          </Suspense>
        </Canvas>
      </figure>
    </section>
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
