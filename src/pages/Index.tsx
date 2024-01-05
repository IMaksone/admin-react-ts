import { useState, useRef, useEffect } from "react";
import SearchIssuance from "./SearchIssuance";

export const Index = () => {
  const [inputCount, setInputCount] = useState('');
  const [mouseIn, setMouseIn] = useState<boolean>();
  const refSearchIssuance = useRef<any>();

  const inputEvent = (event : any) => {
    setInputCount(event.target.value);
  }
  
  useEffect(() => {
    const closeSearch = (e : any) => {
      if (!refSearchIssuance.current?.contains(e.target)) {
        setMouseIn(false);
      }
    };
    document.addEventListener('click', closeSearch);
  }, [])

  return (
    <>
      <input 
        onClick={() => setMouseIn(true)} 
        onChange={inputEvent} 
        value={inputCount}
        ref={refSearchIssuance}
        >
      </input>
      {mouseIn && 
      <SearchIssuance 
        issuance={inputCount}
        onClickCheck={setInputCount}
      ></SearchIssuance>}
    </>
  )
}

export default Index;
