import { WRITEUPS } from "@/components/WriteUpsSection/constants";
import { WriteUp } from "@/components/WriteUpsSection/components";
import styles from "./WriteUpsSection.module.scss";

interface WriteUpsSectionProps {
  title: string;
  subtitle: string;
}

export const WriteUpsSection = ({ title, subtitle }: WriteUpsSectionProps) => {
  return (
    <div className={styles["writeups-section-wrapper"]}>
      <h3 className={styles["title"]}>{title}</h3>
      <p className={styles["subtitle"]}>{subtitle}</p>
      <div className={styles["writeups"]}>
        {WRITEUPS.map((writeup, index) => (
          <WriteUp key={index} {...writeup} />
        ))}
      </div>
    </div>
  );
};
