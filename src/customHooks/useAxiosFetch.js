import { useState, useEffect } from "react";
import axiosInstance from "../axiosInstance";

function useAxiosFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let isMounted = true; // Track if the component is mounted

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axiosInstance(url, options);
        if (isMounted) {
          setData(response.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to avoid setting state on unmounted component
    return () => {
      isMounted = false;
    };
  }, [url, options]);

  return { data, loading, error };
}

export default useAxiosFetch;