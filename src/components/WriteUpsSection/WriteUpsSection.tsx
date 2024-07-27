"use client";

import { WRITEUPS } from "@/components/WriteUpsSection/constants";
import { WriteUpSectionProvider, useWriteUpSectionContext } from "./providers";
import { Filter } from "@/components/core/Filter";
import { WriteUp } from "@/components/WriteUpsSection/components";
import { WriteUpTag } from "@/types/structures.types";
import styles from "./WriteUpsSection.module.scss";

interface WriteUpsSectionProps {
  title: string;
  subtitle: string;
}

const writeUpSectionFilters = Object.values(WriteUpTag);

export const WriteUpsSectionContent = () => {
  const { filters } = useWriteUpSectionContext();

  //todo: fix this
  const writeUpsToDisplay = WRITEUPS.filter((writeup) =>
    writeup.tags.includes(filters[0] as WriteUpTag),
  );

  return (
    <div className={styles["writeups"]}>
      {writeUpsToDisplay.map((writeup, index) => (
        <WriteUp key={index} {...writeup} />
      ))}
    </div>
  );
};

export const WriteUpsSection = ({ title, subtitle }: WriteUpsSectionProps) => {
  return (
    <WriteUpSectionProvider>
      <div className={styles["writeups-section-wrapper"]}>
        <h3 className={styles["title"]}>{title}</h3>
        <p className={styles["subtitle"]}>{subtitle}</p>
        <Filter options={writeUpSectionFilters} />
        <WriteUpsSectionContent />
      </div>
    </WriteUpSectionProvider>
  );
};
