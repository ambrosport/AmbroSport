import { useEffect, useState } from 'react';

export function usePageLoad() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const onLoad = () => setIsLoaded(true);

    if (document.readyState === 'complete') {
      setIsLoaded(true);
    } else {
      window.addEventListener('load', onLoad);
    }

    // Fallback: reveal after 6s in case events don't fire
    const fallback = setTimeout(() => setIsLoaded(true), 6000);

    return () => {
      window.removeEventListener('load', onLoad);
      clearTimeout(fallback);
    };
  }, []);

  return isLoaded;
}