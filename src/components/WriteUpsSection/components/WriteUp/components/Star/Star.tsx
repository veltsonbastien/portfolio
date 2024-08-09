"use client";

import { useState } from "react";
import { RJPINK } from "@/constants";
import { usePageContext } from "@/providers";
import { useFavoriteStatus } from "./hooks";

interface StarProps {
  writeUpTitle: string;
}

export const Star = ({ writeUpTitle }: StarProps) => {
  const { isMobile } = usePageContext();
  const { isFavorited, updateFavoriteState } = useFavoriteStatus(writeUpTitle);
  const [hover, setHover] = useState(isFavorited);
  const [selected, setSelected] = useState<boolean>(false);

  const SIZE = isMobile ? 30 : 20;

  const handleClick = () => {
    updateFavoriteState();
    setSelected(!selected);
  };

  return (
    <div
      onMouseOver={() => setHover(!isMobile && true)}
      onMouseOut={() => setHover(!isMobile && false)}
      onClick={handleClick}
      style={{ padding: 5 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={SIZE}
        height={SIZE}
        viewBox="0 0 24 24"
      >
        <path
          stroke={RJPINK}
          strokeWidth="2"
          fill={selected ? RJPINK : hover ? "#ffc3c7" : "#fff"}
          d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
        />
      </svg>
    </div>
  );
};
