import React, { useEffect, useState } from 'react';

const useFetch = (url, options = {}) => {
  const [data, setdata] = useState(null);
  const [pending, setpending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setpending(true);
      const response = await fetch(url, { ...options });
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const result = await response.json();
      setdata(result);
      setError(false);
      setpending(false);
    } catch {
      setError(`${e}, some Error Occured`);
      setpending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, error, pending };
};

export default useFetch;
