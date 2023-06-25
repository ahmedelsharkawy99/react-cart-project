import { useCallback, useState } from "react";

function useHttp() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async (url, requestConfig = undefined) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await (requestConfig
        ? fetch(url, {
            method: "POST",
            body: JSON.stringify(requestConfig),
            headers: {
              "Content-Type": "application/json",
            },
          })
        : fetch(url));

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again!");
      }

      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return { sendRequest, data, isLoading, error };
}

export default useHttp;
