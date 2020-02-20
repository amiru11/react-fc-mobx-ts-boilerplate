import { useState, useEffect, useCallback } from 'react';

const usePromise = (request, deps): [boolean, Promise<void>, string] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [resolve, setResolve] = useState<Promise<void>>(null);
  const [error, setError] = useState<string>(null);

  const fetchProcess = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    try {
      const result = await request();
      setResolve(result);
    } catch (err) {
      setError(error);
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    fetchProcess();
  }, [fetchProcess]);

  return [isLoading, resolve, error];
};

export default usePromise;
