import { useWriteUpSectionContext } from "@/components/WriteUpsSection/providers";
import { FilterButton } from "./components";
import styles from "./Filter.module.scss";

interface FilterProps {
  title?: string;
  options: string[];
}

export const Filter = ({ title, options }: FilterProps) => {
  const { clearFilters } = useWriteUpSectionContext();

  return (
    <div className={styles["filter-wrapper"]}>
      {<p className={styles["filter-title"]}>{title ? title : "Filter:"}</p>}
      {options.map((option, i) => (
        <FilterButton key={i} text={option} />
      ))}
      <button
        type="button"
        className={styles["clear-filters-button"]}
        onClick={() => clearFilters()}
      >
        X
      </button>
    </div>
  );
};
