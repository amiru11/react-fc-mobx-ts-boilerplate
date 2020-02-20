import { useState, useEffect, useCallback } from 'react';

const usePromise = (request, deps) => {
  const [resolve, setResolve] = useState<Promise<void>>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>(null);

  const fetchProcess = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await request();
      setResolve(result);
    } catch (err) {
      setError(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProcess();
  }, [fetchProcess]);

  return [isLoading, resolve, error];
};

export default usePromise;
