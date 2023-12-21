import { useEffect, useState } from "react";

export const Index = () => {
  const [apiCount, setApiCount] = useState<any>({});
  const [apiError, setApiError] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`http://www.boredapi.com/api/activity`);
        const data = await response.json();
        setApiCount(data);
        setApiError(null);
      } catch (error) {
        console.error("Ошибка:", error);
        setApiError(`Ошибка: ${error}`);
      }
    })();
    
  }, [setApiCount]);
  return (<div>
    {apiCount.activity && <div>{apiCount.activity}</div>}
    {apiError && <div>{apiError}</div>}
  </div>
  )
}

export default Index;