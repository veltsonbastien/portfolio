import styles from "./Experience.module.scss";

interface ExperienceProps {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
}

export const Experience = ({
  company,
  role,
  startDate,
  endDate = "Present",
}: ExperienceProps) => {
  return (
    <div className={styles["experience-wrapper"]}>
      <h3>{company}</h3>
      <div className={styles["experience-info"]}>
        <p className={styles["role"]}>{role}</p>
        <p className={styles["date"]}>
          {startDate} - {endDate}
        </p>
      </div>
    </div>
  );
};
