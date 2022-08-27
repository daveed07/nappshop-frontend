import { useEffect, useState } from "react";

const useScript = (url) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector(`script[src="${url}"]`);

    if (existingScript) {
      setIsLoaded(true);
    } else {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.onload = () => {
        setIsLoaded(true);
      };
      document.body.appendChild(script);
    }
  }, [url]);
  return {
    isLoaded,
  };
};

export default useScript;
