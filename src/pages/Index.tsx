import { useEffect, useState } from "react";

export const Index = () => {
  const [divArr, setDivArr] = useState<any>([]);

  const clickBtn = () => {
    const divEl = 1;
    const newArr = [...divArr, divEl];
    setDivArr(newArr);
  } 

  return (
    <div>
      <button onClick={clickBtn}>Кнопка</button>
      <div>{divArr.map((el: any, i: number) => <div key={i}></div>)}</div>
    </div>
  )
}

//Создать два стэйта один из них счетчик, второй тоже счетчик будет добавляться 1 когда в первом стайте будет четное число. 
//Второй стейт меня черeз useEffect();
//Вместе со вторым стейтом первый стейт обнуляется

export default Index;

