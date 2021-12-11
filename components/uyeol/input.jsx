import { useEffect } from "react";
import useInput from "../../hooks/useInput";

const Input = (props) => {
  const { ref, setter, type, value } = useInput();

  useEffect(() => {
    props?.whenValueChange?.(value);
  }, [value]);

  useEffect(() => {
    props?.getProperties?.({
      ref,
      setter,
      value,
      type,
    });
  }, []);

  return (
    <input
      ref={ref}
      {...props}
      onChange={(e) => {
        setter(e.target.value);
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
        return e.target.value < props.maxLength;
      }}
      {...props}
    />
  );
};

Input.Pin = (props) => {
  return (
    <Input
      type="password"
      onChange={(e) => {
        return e.target.value.length < props.maxLength;
      }}
      {...props}
    />
  );
};

export default Input;
