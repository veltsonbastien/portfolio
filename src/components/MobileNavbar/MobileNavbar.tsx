"use client";

import { useState } from "react";
import { NavbarProps } from "@/types/structures.types";
import styles from "./MobileNavbar.module.scss";

export const MobileNavbar = ({ image, links }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles["navbar-wrapper"]}>
      <img src={image} alt="logo" />
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={styles["mobile-nav-button-wrapper"]}
      >
        {isOpen ? (
          <div className={styles["close"]}>&times;</div>
        ) : (
          <div className={styles["hamburger"]}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
      {isOpen ? (
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
};
