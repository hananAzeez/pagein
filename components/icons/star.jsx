const Star = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <g clip-path="url(#clip0_355_131)">
        <mask
          id="mask0_355_131"
          style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <path d="M32 0H0V32H32V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_355_131)">
          <path
            d="M16 0C16.5432 8.60154 23.3984 15.4568 32 16C23.3984 16.5432 16.5432 23.3984 16 32C15.4568 23.3984 8.60154 16.5432 0 16C8.60154 15.4568 15.4568 8.60154 16 0Z"
            fill="#777777"
            fill-opacity="0.3"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_355_131">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Star;
