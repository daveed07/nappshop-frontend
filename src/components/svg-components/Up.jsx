import React from "react";
import colors from "@constants/colors";

const Up = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill={colors.black}
      class="bi bi-chevron-up"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill-rule="evenodd"
        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
      />
    </svg>
  );
};

export default Up;
