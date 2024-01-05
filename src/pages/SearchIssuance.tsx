import { AnyRecord } from "dns";
import { useState, useEffect, useRef } from "react";

const searchRequests = ['Какой-то', 'смачный', 'текст', 'для', 'проверки'];

export const SearchIssuance = ({issuance, onClickCheck} : any) => {
  const [issuanceArr, setIssuanceArr] = useState(searchRequests);

  useEffect(() => {  
    let newRequests = searchRequests.filter((el) => {
      return el.includes(issuance);
    })
    if (newRequests[0] === issuance) {
      newRequests = [];
    }
    setIssuanceArr(newRequests);
  }, [issuance])

  const styles = {
      width: '200px',
      margin: '1px',
      border: 'solid 1px',
  }

  const clickedName  = (event: any) => {
    onClickCheck(event.target.innerHTML);
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
      <div
        style={{
          width: '100px',
          height: '100xp'
        }}
      >{listItems}</div>
  )
}

export default SearchIssuance;
