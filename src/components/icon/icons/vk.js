import React from "react";

export default () => {
  const style = {
    st1: { fill: "#900" }
  };
  return (
    <g>
      <path
        d="M24,18.6c0,3-2.4,5.4-5.4,5.4H5.4c-3,0-5.4-2.4-5.4-5.4V5.4C0,2.4,2.4,0,5.4,0h13.2c3,0,5.4,2.4,5.4,5.4V18.6z
		"
      />
      <path
        style={style.st1}
        d="M11.8,16.4h0.9c0,0,0.3,0,0.4-0.2c0.1-0.1,0.1-0.4,0.1-0.4s0-1.2,0.6-1.4c0.6-0.2,1.3,1.2,2.1,1.7
		c0.6,0.4,1,0.3,1,0.3l2.1,0c0,0,1.1-0.1,0.6-0.9c0-0.1-0.3-0.6-1.5-1.8c-1.3-1.2-1.1-1,0.4-3.1c1-1.3,1.3-2,1.2-2.4
		C19.6,7.9,18.9,8,18.9,8l-2.3,0c0,0-0.2,0-0.3,0.1c-0.1,0.1-0.2,0.2-0.2,0.2s-0.4,1-0.9,1.8c-1,1.8-1.4,1.9-1.6,1.7
		c-0.4-0.3-0.3-1-0.3-1.6c0-1.7,0.3-2.4-0.5-2.6c-0.3-0.1-0.4-0.1-1.1-0.1c-0.8,0-1.5,0-1.9,0.2C9.5,7.9,9.3,8.2,9.4,8.2
		c0.2,0,0.5,0.1,0.7,0.3c0.2,0.3,0.2,1.1,0.2,1.1s0.1,2-0.3,2.3c-0.3,0.2-0.7-0.2-1.7-1.8C7.9,9.3,7.5,8.4,7.5,8.4S7.5,8.2,7.3,8.1
		C7.2,8,7,8,7,8L4.8,8c0,0-0.3,0-0.5,0.2c-0.1,0.1,0,0.4,0,0.4S6,12.6,8,14.6C9.8,16.5,11.8,16.4,11.8,16.4L11.8,16.4L11.8,16.4z"
      />
    </g>
  );
};
