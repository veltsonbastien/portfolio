import {
  EXPERIENCE_SECTION_SUBTITLE,
  EXPERIENCE_SECTION_TITLE,
  HERO_H1_TEXT,
  JOB_TITLE,
  WRITEUPS_SECTION_SUBTITLE,
  WRITEUPS_SECTION_TITLE,
} from "@/constants";
import { ExperienceSection, Hero, WriteUpsSection } from "@/components";
import { ResponsiveNavbar } from "./components";
import styles from "@/app/page.module.css";

export const PageContent = () => {
  return (
    <main className={styles.main}>
      <ResponsiveNavbar />
      <Hero title={HERO_H1_TEXT} subtitle={JOB_TITLE} />
      <div className={styles["body"]}>
        <ExperienceSection
          title={EXPERIENCE_SECTION_TITLE}
          subtitle={EXPERIENCE_SECTION_SUBTITLE}
        />
        <WriteUpsSection
          title={WRITEUPS_SECTION_TITLE}
          subtitle={WRITEUPS_SECTION_SUBTITLE}
        />
      </div>
      <div className={styles["footer"]}>
        Veltson Bastien © {new Date().getFullYear()}
      </div>
    </main>
  );
};
