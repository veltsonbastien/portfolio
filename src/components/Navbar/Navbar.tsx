import { NavbarProps } from "@/types/structures.types";
import styles from "./Navbar.module.scss";

export const Navbar = ({ image, links }: NavbarProps) => {
  return (
    <nav className={styles["navbar-wrapper"]}>
      <img src={image} alt="logo" />
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
