import React from "react";

export default (prop) => {
  return (
    <g fill="none" stroke={prop.color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <line x1="3" x2="21" y1="12" y2="12" />
      <line x1="3" x2="21" y1="6" y2="6" />
      <line x1="3" x2="21" y1="18" y2="18" />
    </g>
  );
};