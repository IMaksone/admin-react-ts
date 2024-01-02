import { useState } from "react";
import SearchIssuance from "./SearchIssuance";

export const Index = () => {
  const [inputCount, setInputCount] = useState('');

  const inputEvent = (event : any) => {
    setInputCount(event.target.value);
  }

  return (
    <>
      <input onChange={inputEvent} value={inputCount}></input>
      <SearchIssuance issuance={inputCount}></SearchIssuance>
    </>
  )
}

export default Index;
