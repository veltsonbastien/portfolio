import {
  NAVBAR_LINKS,
  HERO_H1_TEXT,
  JOB_TITLE,
  EXPERIENCE_SECTION_TITLE,
  EXPERIENCE_SECTION_SUBTITLE,
  WRITEUPS_SECTION_TITLE,
  WRITEUPS_SECTION_SUBTITLE,
} from "@/constants";
import { LOGO_IMAGE_LOCAL } from "@/components/Navbar/constants";
import { Navbar, Hero, ExperienceSection, WriteUpsSection } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar image={LOGO_IMAGE_LOCAL} links={NAVBAR_LINKS} />
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
}
