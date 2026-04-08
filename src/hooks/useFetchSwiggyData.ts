import { useState, useEffect } from "react";
import type { SwiggyData } from "../types";

export const useFetchSwiggyData = () => {
  const [data, setData] = useState<SwiggyData>({ categories: [], restaurants: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        await new Promise((resolve) => setTimeout(resolve, 400));

        const response = await fetch("/data/db.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err: any) {
        setError(err.message || "An unexpected error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};
