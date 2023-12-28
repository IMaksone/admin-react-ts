import { useEffect, useMemo, useState } from "react";

const useCounters = () => {
  const [firstCounter, setFirstCounter] = useState<number>(0);
  const [secondCounter, setSecondCounter] = useState<number>(0);

    const thirdCounter = useMemo(() => {
      return firstCounter + secondCounter;
    }, [firstCounter, secondCounter]);
  
  useEffect(() => {
    if (firstCounter > 0 && firstCounter % 2 === 0) {
      setSecondCounter(secondCounter + 1);
      setFirstCounter(0);
    }
    if (thirdCounter === 5) {
      setFirstCounter(0);
      setSecondCounter(0);
    }
  }, [firstCounter, secondCounter, thirdCounter]);
  return {
    firstCounter,
    secondCounter,
    thirdCounter,
    setCounter : () => {
      setFirstCounter(firstCounter + 1);
    }
  }
}

export const Index = () => {

  const {firstCounter, secondCounter, thirdCounter, setCounter} = useCounters();

  return (
    <div>
      <button onClick={() => setCounter()}>Клик</button>
      <div>First counter {firstCounter}</div>
      <div>Second counter {secondCounter}</div>
      <div>Third counter {thirdCounter}</div>
    </div>
  )
}

export default Index;


//Единственный хук для счетчиков, который возвращает сетер для счетчиков и значения счетчиков.
