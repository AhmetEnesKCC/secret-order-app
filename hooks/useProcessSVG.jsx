import { useEffect, useState } from "react";

const useProcessSVG = (Component, id) => {
  const [props, setProps] = useState("");

  useEffect(() => {
    const element = document.querySelector("#" + id);
    setProps(element.getBBox());
  }, []);

  const ProcessedComponent = () => {
    return (
      <Component
        viewBox={`${props.x - 10} ${props.y - 10} ${props.width - 20} ${
          props.height - 20
        }`}
        width={props.width + 20 + "px"}
        width={props.height + 20 + "px"}
      />
    );
  };

  return ProcessedComponent;
};

export default useProcessSVG;
