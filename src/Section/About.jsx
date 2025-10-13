import { useRef } from "react";
import { images } from "../Constant/image";
import Card from "../Components/Card";
import { Globe } from "../Components/globe";
import CopyEmailButton from "../Components/CopyEmailButton";
import { Frameworks } from "../Components/Frameworks";

function About() {
  const grid2Container = useRef();
  return (
    <section id="about" className="c-space section-spacing">
      <p className="subtext mb-2">Who I Am</p>
      <h2 className="text-heading">About me</h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src={images.Person}
            alt="coding"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-6 md:inset-y-3 lg:scale-[1.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Mahinul Tanvir Mahin</p>
            <p className="subtext">
              During the last year, I enhanced my full-stack skills to deliver interactive and responsive web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-non -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div ref={grid2Container} className="grid-default-color grid-2">
          <div className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              text="Efficiency"
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              containerRef={grid2Container}
            />
            <Card
              text="SOLID"
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              containerRef={grid2Container}
            />
            <Card
              text="Collaboration"
              style={{ rotate: "60deg", bottom: "30%", left: "70%" }}
              containerRef={grid2Container}
            />
            <Card
              text="Design Principles"
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              containerRef={grid2Container}
            />
            <Card
              text="Adaptable"
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              containerRef={grid2Container}
            />
            <Card
              text="Innovation"
              style={{ rotate: "-15deg", top: "10%", left: "38%" }}
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Bangladesh, and open to remote work worldwide
            </p>
          </div>

          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gpa-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tec Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
