import * as React from "react";

const InfoIcon = (props) => (
  <svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 0C6.272 0 0 6.272 0 14s6.272 14 14 14 14-6.272 14-14S21.728 0 14 0Zm1.4 7h-2.8v2.8h2.8V7Zm0 12.6c0 .77-.63 1.4-1.4 1.4-.77 0-1.4-.63-1.4-1.4V14c0-.77.63-1.4 1.4-1.4.77 0 1.4.63 1.4 1.4v5.6ZM2.8 14c0 6.174 5.026 11.2 11.2 11.2 6.174 0 11.2-5.026 11.2-11.2 0-6.174-5.026-11.2-11.2-11.2C7.826 2.8 2.8 7.826 2.8 14Z"
      fill="#565656"
    />
  </svg>
);

export default InfoIcon;
