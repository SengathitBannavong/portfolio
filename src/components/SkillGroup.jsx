import { FaCode, FaLaptopCode, FaWindows } from "react-icons/fa6";
import {
  SiCplusplus,
  SiCss,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJetbrains,
  SiLinux,
  SiMysql,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiRust,
  SiTailwindcss,
} from "react-icons/si";

const SKILL_ICON_COMPONENTS = {
  code: FaCode,
  cplusplus: SiCplusplus,
  css: SiCss,
  docker: SiDocker,
  express: SiExpress,
  figma: SiFigma,
  git: SiGit,
  html5: SiHtml5,
  javascript: SiJavascript,
  jetbrains: SiJetbrains,
  linux: SiLinux,
  mysql: SiMysql,
  nodedotjs: SiNodedotjs,
  openjdk: SiOpenjdk,
  postgresql: SiPostgresql,
  python: SiPython,
  react: SiReact,
  redis: SiRedis,
  rust: SiRust,
  tailwindcss: SiTailwindcss,
  vscode: FaLaptopCode,
  windows: FaWindows,
};

function SkillGroup({ group }) {
  const headingId = `skills-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <article className="skill-group" aria-labelledby={headingId}>
      <h3 id={headingId}>{group.title}</h3>
      <ul className="skill-items">
        {group.skills.map((skill) => {
          const normalizedSkill =
            typeof skill === "string"
              ? { name: skill, icon: "code" }
              : { name: skill.name, icon: skill.icon, color: skill.color };

          const rawSkillName = normalizedSkill.name;
          const skillName =
            typeof rawSkillName === "string"
              ? rawSkillName.trim()
              : typeof rawSkillName === "number"
                ? String(rawSkillName)
                : "";
          if (!skillName) {
            return null;
          }

          const iconKey = typeof normalizedSkill.icon === "string" ? normalizedSkill.icon : "code";
          const SkillLogo = SKILL_ICON_COMPONENTS[iconKey] ?? FaCode;
          const customColorStyle = normalizedSkill.color
            ? { "--skill-color": normalizedSkill.color }
            : undefined;

          return (
            <li
              className="skill-logo-item"
              key={`${group.title}-${skillName}`}
              title={skillName}
              aria-label={skillName}
              style={customColorStyle}
            >
              <SkillLogo className="skill-logo" aria-hidden="true" focusable="false" />
              <span className="sr-only">{skillName}</span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default SkillGroup;
