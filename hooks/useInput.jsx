import { useEffect, useRef, useState } from "react";

const useInput = () => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState(null);

  return [inputValue, setInputValue, inputRef];
};

export default useInput();
