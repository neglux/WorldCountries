import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch(url);
      const fetchedData = await response.json();
      setData(fetchedData);
      setIsLoading(false);
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { isLoading, data };
};

export default useFetch;
