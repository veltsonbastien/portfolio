import { WriteUpType as WriteUpProps } from "@/types/structures.types";
import { Tag } from "@/components";
import styles from "./WriteUp.module.scss";

export const WriteUp = ({
  title,
  description,
  cta,
  link,
  tags,
}: WriteUpProps) => {
  return (
    <div className={styles["writeup-wrapper"]}>
      <h4 className={styles["title"]}>{title}</h4>
      <p className={styles["description"]}>{description}</p>
      <a className={styles["button"]} href={link}>
        {cta}
      </a>
      <div className={styles["tags"]}>
        {tags.map((tag, i) => (
          <Tag key={i} text={tag} />
        ))}
      </div>
    </div>
  );
};
