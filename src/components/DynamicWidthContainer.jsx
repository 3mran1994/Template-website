"use client";
import React, { useRef, useEffect, useState } from "react";

export default function DynamicWidthContainer({ children }) {
  const h1Ref = useRef(null);
  const hiddenH1Ref = useRef(null);
  const [width, setWidth] = useState(null);

  // Find the h1 child
  let h1Child = null;
  let otherChildren = [];
  React.Children.forEach(children, (child) => {
    if (child.type === "h1") {
      h1Child = child;
    } else {
      otherChildren.push(child);
    }
  });

  useEffect(() => {
    if (hiddenH1Ref.current) {
      setWidth(hiddenH1Ref.current.scrollWidth);
    }
  }, [hiddenH1Ref.current, h1Child?.props.children]);

  return (
    <>
      {/* Hidden h1 for measurement */}
      <div style={{ position: "absolute", visibility: "hidden", left: "-9999px", top: 0 }}>
        {h1Child && React.cloneElement(h1Child, { ref: hiddenH1Ref })}
      </div>
      {/* Visible container with measured width */}
      <div style={width ? { width } : {}}>
        {h1Child && React.cloneElement(h1Child, { ref: h1Ref })}
        {otherChildren}
      </div>
    </>
  );
}
