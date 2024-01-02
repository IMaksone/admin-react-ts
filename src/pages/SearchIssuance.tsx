import { AnyRecord } from "dns";
import { useState, useEffect } from "react";

const searchRequests = ['Какой-то', 'смачный', 'текст', 'для', 'проверки'];

export const SearchIssuance = ({issuance, onClickChange} : any) => {
  const [issuanceArr, setIssuanceArr] = useState(searchRequests);

  useEffect(() => {  
    let newRequests : string[] = [];

    searchRequests.forEach((el) => {
      if (el.includes(issuance)) {
        newRequests.push(el);
      }
    setIssuanceArr(newRequests);
  })}, [issuance])

  const styles = {
      width: '200px',
      margin: '1px',
      border: 'solid 1px',
  }

  const clickedName  = (event : any) => {
    console.log(event.target.value);
  }
  


  const listItems = 
    issuanceArr.map((el : any, i) =>
        <div 
          key={i} 
          style={styles}
          onClick={clickedName}
        >{ el }</div>
  );

  return (
      <div>{listItems}</div>
  )
}

export default SearchIssuance;
