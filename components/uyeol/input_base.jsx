import { useEffect } from "react";
import useInput from "../../hooks/useInput";

const Input = () => {
  const [inputValue, setInputValue, inputRef] = useInput();

  useEffect(() => {
    props?.onVelueChange?.(inputValue);
  }, [inputValue]);

  return (
    <input
      ref={inputRef}
      {...props}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
      children={null}
    />
  );
};

Input.Email = (props) => {
  return <Input type="email" {...props} />;
};

Input.Phone = (props) => {
  return (
    <Input
      type="tel"
      onChange={(e) => {
        return e.target.value.length < 10;
      }}
      {...props}
    />
  );
};

Input.Pin = (maxLength) => {
  return (
    <Input
      onChange={(e) => {
        return e.target.value.length < maxLength;
      }}
      {...props}
    />
  );
};

export default Input;
