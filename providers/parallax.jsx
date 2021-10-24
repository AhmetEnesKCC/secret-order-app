import React, { createRef, useEffect, useRef, useState } from "react";

function Parallax({
  children,
  vertical = true,
  horizontal = true,
  maxDegree = 15,
}) {
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [sizes, setSizes] = useState({ width: 0, height: 0 });
  const [allowTransition, setAllowTransition] = useState(false);
  const childrenRef = useRef(null);

  const handle_pixel = (string) => parseInt(string.replace("px", ""));

  const handleResize = () => {
    if (childrenRef.current) {
      setTransform("");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (childrenRef.current) {
      console.log(childrenRef);
    }
  }, [childrenRef]);

  const handleMouseOver = (e) => {
    setAllowTransition(false);

    const { width: element_width, height: element_height } =
      window.getComputedStyle(childrenRef.current);
    setSizes({
      width: handle_pixel(element_width),
      height: handle_pixel(element_height),
    });
  };
  const handleMouseOut = (e) => {
    setTransform({ x: 0, y: 0 });
    setAllowTransition(true);
  };

  const handleMouseMove = (e) => {
    if (sizes.width && sizes.height) {
      let transformX =
        ((sizes.width / 2 - e.nativeEvent.layerX) / (sizes.width / 2)) *
        maxDegree;
      let transformY =
        ((sizes.height / 2 - e.nativeEvent.layerY) / (sizes.height / 2)) *
        maxDegree;
      setTransform({
        x: transformX,
        y: transformY,
      });
    }
  };

  return React.cloneElement(children, {
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    onMouseMove: handleMouseMove,
    style: {
      transition: allowTransition ? "0.8s linear" : "none",
      transform: `rotateX(${vertical ? transform.x : 0}deg) rotateY(${
        horizontal ? transform.y : 0
      }deg)`,
    },
    ref: childrenRef,
  });
}

export default Parallax;
