"use client";

import { WRITEUPS } from "@/components/WriteUpsSection/constants";
import { WriteUpSectionProvider, useWriteUpSectionContext } from "./providers";
import { Filter } from "@/components/core/Filter";
import { WriteUp } from "@/components/WriteUpsSection/components";
import { WriteUpTag, WriteUpType } from "@/types/structures.types";
import styles from "./WriteUpsSection.module.scss";

interface WriteUpsSectionProps {
  title: string;
  subtitle: string;
}

const writeUpSectionFilters = Object.values(WriteUpTag);

const filterWriteUps = (filters: string[]) => {
  const filteredWriteUps: WriteUpType[] = [];

  WRITEUPS.forEach((writeUp) => {
    writeUp.tags.forEach((tag) => {
      if (filters.includes(tag)) filteredWriteUps.push(writeUp);
    });
  });

  return filteredWriteUps;
};

export const WriteUpsSectionContent = () => {
  const { filters } = useWriteUpSectionContext();

  const writeUpsToDisplay = filters.length ? filterWriteUps(filters) : WRITEUPS;

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
        <Filter
          title={"Which write ups would you like to see?"}
          options={writeUpSectionFilters}
        />
        <WriteUpsSectionContent />
      </div>
    </WriteUpSectionProvider>
  );
};
