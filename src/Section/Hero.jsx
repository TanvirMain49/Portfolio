import { lazy, Suspense } from "react";
import HeroText from "../Components/HeroText";
import ParallaxBackground from "../Components/ParallaxBackground";
import { useMediaQuery } from "react-responsive";
import Loader from "../Components/Loader";

const HeroScene = lazy(() => import("../Components/HeroScene"));

export default function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section id="home" className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Suspense fallback={<Loader />}>
          <HeroScene isMobile={isMobile} />
        </Suspense>
      </figure>
    </section>
  );
}
