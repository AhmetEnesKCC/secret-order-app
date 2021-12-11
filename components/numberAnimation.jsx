import { useEffect, useLayoutEffect, useState } from "react";

const NumberAnimation = ({ base, top, second }) => {
  const [number, setNumber] = useState(base);
  const second_real = second / (top - base) / 1000;

  let numberInterval;

  numberInterval = setInterval(() => {
    setNumber(number + 1);
  }, second_real);

  useEffect(() => {
    if (number >= top) {
      clearInterval(numberInterval);
    }
    return () => {
      clearInterval(numberInterval);
    };
  }, [number]);

  return <>{number}</>;
};

export default NumberAnimation;
