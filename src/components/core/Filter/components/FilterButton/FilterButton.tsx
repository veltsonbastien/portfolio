import React, { useState, useMemo } from "react";
import { useWriteUpSectionContext } from "@/components/WriteUpsSection/providers";
import { generateColorFromText } from "@/utils";
import styles from "./FilterButton.module.scss";

interface FilterButtonProps {
  text: string;
}

export const FilterButton = ({ text }: FilterButtonProps) => {
  const { addFilter, removeFilter } = useWriteUpSectionContext();
  const [selected, setSelected] = useState(false);
  const textColor = useMemo(() => generateColorFromText(text), [text]);

  const handleClick = () => {
    if (!selected) addFilter(text);
    else removeFilter(text);

    setSelected(!selected);
  };

  return (
    <div
      style={{ color: textColor }}
      className={`${styles["filter-button-wrapper"]} ${selected ? styles["active"] : ""}`}
      onClick={() => handleClick()}
    >
      {text}
    </div>
  );
};
