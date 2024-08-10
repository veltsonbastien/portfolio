"use client";

import { useState, useEffect } from "react";

export const useFavoriteStatus = () => {
  const [favoriteStatusLocalStorage, setFavoriteStatusLocalStorage] =
    useState<string[]>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const favoriteWriteUps = JSON.parse(
        localStorage.getItem("favoriteWriteUps") || "[]",
      );

      setFavoriteStatusLocalStorage(favoriteWriteUps);
    }
  }, []);

  const updateFavoriteState = (writeUpTitle: string) => {
    if (typeof window !== "undefined") {
      const favoriteWriteUps = JSON.parse(
        localStorage.getItem("favoriteWriteUps") || "[]",
      );

      if (favoriteStatusLocalStorage?.includes(writeUpTitle)) {
        localStorage.setItem(
          "favoriteWriteUps",
          JSON.stringify(
            favoriteWriteUps.filter((title: string) => title !== writeUpTitle),
          ),
        );
      } else {
        localStorage.setItem(
          "favoriteWriteUps",
          JSON.stringify([...favoriteWriteUps, writeUpTitle]),
        );
      }
    }
  };

  return { favoriteStatusLocalStorage, updateFavoriteState };
};
