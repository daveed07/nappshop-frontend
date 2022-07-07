import React from "react";
import colors from "@constants/colors";

const Dash = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill={colors.main}
      class="bi bi-dash"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
    </svg>
  );
};

export default Dash;
