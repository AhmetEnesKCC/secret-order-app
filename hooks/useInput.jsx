import { useEffect, useRef, useState } from "react";

const useInput = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(null);

  return {
    value: inputValue,
    ref: inputRef,
    setter: setInputValue,
  };
};

export default useInput;
