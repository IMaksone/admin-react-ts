import { useEffect, useState } from "react";

export const Index = () => {
  const [apiCount, setApiCount] = useState<any>({});
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`http://www.boredapi.com/api/activity`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      if (data.activity) {
        setApiCount(data);
        setApiError(null);
      } else {
        setApiError('Ошибка! Неверный путь')
      }
    })
  }, [setApiCount]);
  return (
    <div>
      {apiError && <div>{apiError}</div>}
      {apiCount.activity && <div>{apiCount.activity}</div>}
    </div>
  )
}

export default Index;