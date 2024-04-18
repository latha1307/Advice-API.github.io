import { useEffect, useState } from "react"
import PropTypes from "prop-types" 

export const AdviceApp = () => {
  const [advice, setAdvice] = useState("Please Click Button to Get Advice");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c+1);
  }
  useEffect(function () {
    getAdvice();
  },[]);
  return (
    <>
        <div>
            <h3>{advice}</h3>
            <button onClick={getAdvice}>Get Advice</button>
            <Counter count={count}/>
        </div>
    </>
  );
};
function Counter(props){
    return(
    <p>
        You have read <b>{props.count}</b> pieieces of advice
    </p>
);
}

Counter.propTypes = {
    count: PropTypes.number.isRequired,
}