import styles from "./Hero.module.scss";

interface HeroProps {
  title: string;
  subtitle: string;
}

export const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <div className={styles["hero-wrapper"]}>
      <h1>{title}</h1>
      <div className={styles["hero-name-section"]}>
        <p className={styles["name"]}>Veltson Bastien</p>
        <p className={styles["subtitle"]}>{subtitle}</p>
      </div>
    </div>
  );
};
