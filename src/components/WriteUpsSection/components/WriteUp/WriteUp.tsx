"use client";

import { useRouter } from "next/navigation";
import { usePageContext } from "@/providers";
import { WriteUpTag } from "@/types/structures.types";
import { Button, Tag } from "@/components";
import { Star } from "./components";
import styles from "./WriteUp.module.scss";

interface WriteUpProps {
  title: string;
  description: string;
  cta: string;
  link: string;
  tags: WriteUpTag[];
  documentId?: string | undefined;
}

export const WriteUp = ({
  title,
  description,
  cta,
  link,
  tags,
  documentId,
}: WriteUpProps) => {
  const router = useRouter();
  const { setShowModal } = usePageContext();
  const openLink = (link: string) => router.push(link);
  const openModal = (id: string) => setShowModal(id);

  return (
    <div className={styles["writeup-wrapper"]}>
      <div className={styles["title-wrapper"]}>
        <span className={styles["star"]}>
          <Star writeUpTitle={title} />
        </span>
        <h4 className={styles["title"]}>{title}</h4>
      </div>
      <p className={styles["description"]}>{description}</p>
      <Button
        onClick={
          documentId ? () => openModal(documentId) : () => openLink(link)
        }
      >
        {cta}
      </Button>
      <div className={styles["tags"]}>
        {tags.map((tag, i) => (
          <Tag key={i} text={tag} />
        ))}
      </div>
    </div>
  );
};
