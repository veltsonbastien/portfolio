import { useMemo } from "react";
import { WriteUpTag } from "@/types/structures.types";
import { generateColorFromText } from "@/utils";
import styles from "./Tag.module.scss";

interface TagProps {
  text: WriteUpTag;
}

export const Tag = ({ text }: TagProps) => {
  const tagColor = useMemo(
    () => generateColorFromText(text.toLowerCase()),
    [text],
  );

  return (
    <div
      className={styles["tag-wrapper"]}
      style={{ color: tagColor, borderColor: tagColor }}
    >
      {text}
    </div>
  );
};
