import { OrbitingCircles } from "./OrbitingCircles";
import { Binary, Smartphone } from "lucide-react";
import { siFlutter, siJupyter, siPython } from "simple-icons";

export function Frameworks() {
  const skills = [
    { name: "Auth0", src: "assets/logos/auth0.svg" },
    { name: "CSS", src: "assets/logos/css3.svg" },
    { name: "Git", src: "assets/logos/git.svg" },
    { name: "GitHub", src: "assets/logos/github.svg" },
    { name: "HTML", src: "assets/logos/html5.svg" },
    { name: "JavaScript", src: "assets/logos/javascript.svg" },
    { name: "Microsoft", src: "assets/logos/microsoft.svg" },
    { name: "React", src: "assets/logos/react.svg" },
    { name: "React Native", component: Smartphone },
    { name: "Flutter", icon: siFlutter },
    { name: "Python", icon: siPython },
    { name: "Assembly", component: Binary },
    { name: "Jupyter Notebook", icon: siJupyter },
    { name: "Tailwind CSS", src: "assets/logos/tailwindcss.svg" },
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill) => (
          <Icon key={skill.name} skill={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill) => (
          <Icon key={skill.name} skill={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ skill }) => {
  if (skill.icon) {
    return (
      <svg
        aria-label={skill.name}
        role="img"
        viewBox="0 0 24 24"
        className="size-full transition-transform duration-200 hover:scale-110"
        style={{ color: `#${skill.icon.hex}` }}
      >
        <path fill="currentColor" d={skill.icon.path} />
      </svg>
    );
  }

  if (skill.component) {
    const SkillIcon = skill.component;
    return <SkillIcon aria-label={skill.name} className="size-7 text-aqua" />;
  }

  return (
    <img
      src={skill.src}
      alt={skill.name}
      className="size-full rounded-sm object-contain transition-transform duration-200 hover:scale-110"
    />
  );
};