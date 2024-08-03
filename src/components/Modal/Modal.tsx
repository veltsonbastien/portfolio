"use client";

import Markdown from "react-markdown";
import { Spinner } from "@nextui-org/spinner";
import { usePageContext } from "@/contexts";
import { useGetS3Document } from "@/hooks";
import styles from "./Modal.module.scss";

export const Modal = () => {
  const { showModal, setShowModal } = usePageContext();
  const { data, isLoading, error } = useGetS3Document(
    showModal ? `writeups/${showModal}.md` : null,
  );

  const handleClose = () => {
    setShowModal(null);
  };

  return showModal ? (
    <div className={styles["modal-wrapper"]}>
      <div className={styles["modal"]}>
        <div className={styles["exit"]} onClick={handleClose}>
          &times;
        </div>
        {/* todo: implement this header */}
        {/*<div className={styles["header"]}>*/}
        {/*  <h2 className={styles["title"]}>Basic Title</h2>*/}
        {/*  <p className={styles["subtitle"]}>Some random subtitle stuff</p>*/}
        {/*</div>*/}
        <div className={styles["content"]}>
          {isLoading ? (
            <div className={styles["loading"]}>
              <Spinner
                label="Fetching that write up for you..."
                color="warning"
                size="lg"
              />
            </div>
          ) : data ? (
            <Markdown>{data}</Markdown>
          ) : (
            <p>Uh oh, where's the write up... </p>
          )}
        </div>
      </div>
    </div>
  ) : null;
};
