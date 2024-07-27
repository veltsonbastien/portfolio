import {
  useState,
  useContext,
  useMemo,
  useCallback,
  createContext,
  ReactNode,
} from "react";

interface WriteUpSectionContextProps {
  filters: string[];
  setFilters: (filters: string[]) => void;
  addFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
  clearFilters: () => void;
}

const WriteUpSectionContext = createContext<WriteUpSectionContextProps>(
  {} as WriteUpSectionContextProps,
);

interface WriteUpSectionProviderProps {
  children: ReactNode;
}
export const WriteUpSectionProvider = ({
  children,
}: WriteUpSectionProviderProps) => {
  const [filters, setFilters] = useState<string[]>([]);
  console.log("filters: ", filters);

  const addFilter = useCallback(
    (filter: string) => {
      const newFilters = [...filters, filter];
      setFilters(newFilters);
    },
    [filters, setFilters],
  );

  const removeFilter = useCallback(
    (filter: string) => {
      const newFilters = filters.filter((el) => el !== filter);
      setFilters(newFilters);
    },
    [filters, setFilters],
  );

  const clearFilters = useCallback(() => {
    setFilters([]);
  }, [setFilters]);

  const value = useMemo(
    () => ({
      filters,
      setFilters,
      addFilter,
      removeFilter,
      clearFilters,
    }),
    [filters, addFilter, removeFilter, clearFilters],
  );

  return (
    <WriteUpSectionContext.Provider value={value}>
      {children}
    </WriteUpSectionContext.Provider>
  );
};

export const useWriteUpSectionContext = () => useContext(WriteUpSectionContext);
