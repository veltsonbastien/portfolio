"use client";

import { createContext, useContext, useState, ReactNode, useMemo } from "react";

interface PageContext {
  showModal: string | null;
  setShowModal: (modal: string | null) => void;
}

const PageContext = createContext<PageContext>({} as PageContext);

interface PageContextProps {
  children: ReactNode;
}

export const PageProvider = ({ children }: PageContextProps) => {
  const [showModal, setShowModal] = useState<string | null>(null);

  const value = useMemo(
    () => ({
      showModal,
      setShowModal,
    }),
    [showModal],
  );

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }
  return context;
};
