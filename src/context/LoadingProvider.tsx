import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoadingState] = useState(0);

  const setLoading = (percent: number) => {
    setLoadingState((prev) => {
      const clamped = Math.max(0, Math.min(100, percent));
      const next = Math.max(prev, clamped);

      console.log("setLoading called", {
        prev,
        incoming: percent,
        next,
      });

      return next;
    });
  };

  const value = useMemo(
    () => ({
      isLoading,
      setIsLoading,
      setLoading,
    }),
    [isLoading]
  );

  return (
    <LoadingContext.Provider value={value}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};