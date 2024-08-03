"use client";

import React, { useState, useMemo } from "react";
import { useWriteUpSectionContext } from "@/components/WriteUpsSection/providers";
import { generateColorFromText } from "@/utils";
import styles from "./FilterButton.module.scss";

interface FilterButtonProps {
  text: string;
}

export const FilterButton = ({ text }: FilterButtonProps) => {
  const { filters, addFilter, removeFilter } = useWriteUpSectionContext();
  const [selected, setSelected] = useState(false);
  const textColor = useMemo(() => generateColorFromText(text), [text]);
  const isActive = useMemo(() => filters.includes(text), [filters, text]);

  const handleClick = () => {
    if (!selected) addFilter(text);
    else removeFilter(text);

    setSelected(!selected);
  };

  return (
    <div
      style={{ color: textColor }}
      className={`${styles["filter-button-wrapper"]} ${isActive ? styles["active"] : ""}`}
      onClick={() => handleClick()}
    >
      {text}
    </div>
  );
};
