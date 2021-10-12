import { useEffect, useState } from 'react';

const useDebounceScreenWidth = (value) => {
  const [debouncedScreenWidth, setDebouncedScreenWidth] = useState(value);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedScreenWidth(value);
    }, 400);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return debouncedScreenWidth;
};

export { useDebounceScreenWidth };
