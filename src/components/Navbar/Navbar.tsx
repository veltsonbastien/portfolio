import styles from "./Navbar.module.scss";
import { SiteLink } from "@/types/structures.types";

interface NavbarProps {
  image: string;
  links: SiteLink[];
}

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
