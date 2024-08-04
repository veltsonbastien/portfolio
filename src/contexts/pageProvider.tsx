"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useEffect,
} from "react";

interface PageContext {
  showModal: string | null;
  setShowModal: (modal: string | null) => void;
  isMobile: boolean;
}

const PageContext = createContext<PageContext>({} as PageContext);

interface PageContextProps {
  children: ReactNode;
}

export const PageProvider = ({ children }: PageContextProps) => {
  const [showModal, setShowModal] = useState<string | null>(null);

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const value = useMemo(
    () => ({
      showModal,
      setShowModal,
      isMobile,
    }),
    [showModal, isMobile],
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
