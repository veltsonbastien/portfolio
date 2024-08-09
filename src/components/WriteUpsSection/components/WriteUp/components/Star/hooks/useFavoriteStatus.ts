"use client";

import { useState, useEffect } from "react";

export const useFavoriteStatus = (writeUpTitle: string) => {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const favoriteWriteUps = JSON.parse(
        localStorage.getItem("favoriteWriteUps") || "[]",
      );
      setIsFavorited(favoriteWriteUps.includes(writeUpTitle));
    }
  }, [writeUpTitle]);

  const updateFavoriteState = () => {
    if (typeof window !== "undefined") {
      const favoriteWriteUps = JSON.parse(
        localStorage.getItem("favoriteWriteUps") || "[]",
      );

      if (isFavorited) {
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
      setIsFavorited(!isFavorited);
    }
  };

  return { isFavorited, updateFavoriteState };
};
