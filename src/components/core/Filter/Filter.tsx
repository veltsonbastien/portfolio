import { FilterButton } from "./components";
import styles from "./Filter.module.scss";

interface FilterProps {
  title?: string;
  options: string[];
}

export const Filter = ({ title, options }: FilterProps) => {
  return (
    <div className={styles["filter-wrapper"]}>
      {<p>{title ? title : "Filter"}:</p>}
      {options.map((option, i) => (
        <FilterButton key={i} text={option} />
      ))}
      <button> X </button>
    </div>
  );
};
