import { WriteUp as WriteUpProps } from "@/types/structures.types";
import styles from "./WriteUp.module.scss";

export const WriteUp = ({ title, description, cta, link }: WriteUpProps) => {
  return (
    <div className={styles["writeup-wrapper"]}>
      <h4 className={styles["title"]}>{title}</h4>
      <p className={styles["description"]}>{description}</p>
      <a className={styles["button"]} href={link}>
        {cta}
      </a>
    </div>
  );
};
