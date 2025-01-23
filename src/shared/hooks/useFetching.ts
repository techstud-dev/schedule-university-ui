import { useState } from "react";

export const useFetching = (
  callback: (...args: unknown[]) => Promise<void>
): [() => Promise<void>, boolean, string] => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async (...args: unknown[]) => {
    setError(""); 
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("Произошла неизвестная ошибка");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
}
