import { EXPERIENCES } from "@/constants";
import { Experience } from "./components";
import styles from "./ExperienceSection.module.scss";

interface ExperienceSectionProps {
  title: string;
  subtitle: string;
}

export const ExperienceSection = ({
  title,
  subtitle,
}: ExperienceSectionProps) => {
  return (
    <div className={styles["experience-section-wrapper"]}>
      <h3 className={styles["title"]}>{title}</h3>
      <p className={styles["subtitle"]}>{subtitle}</p>
      <div className={styles["experiences"]}>
        {EXPERIENCES.map((experience, index) => (
          <Experience
            key={index}
            company={experience.company}
            role={experience.role}
            startDate={experience.startDate}
            endDate={experience.endDate}
          />
        ))}
      </div>
    </div>
  );
};
