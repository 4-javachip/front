export default function BestRankIcon({ index }: { index: number }) {
  return (
    <>
      <svg
        width="27"
        height="38"
        viewBox="0 0 22 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-2 right-3 top-0"
      >
        <path
          d="M15.7419 26.0101C13.4562 27.6924 12.3133 28.5335 11 28.5335C9.68673 28.5335 8.54384 27.6924 6.25807 26.0101L3.25807 23.8022C1.65991 22.626 0.860829 22.0379 0.430415 21.1867C-1.10617e-06 20.3355 -1.01943e-06 19.3434 -8.45954e-07 17.3591L6.71624e-07 -5.738e-06L22 -3.8147e-06L22 17.359C22 19.3434 22 20.3355 21.5696 21.1867C21.1392 22.0379 20.3401 22.626 18.7419 23.8022L15.7419 26.0101Z"
          fill="#00A862"
        />
      </svg>
      <span
        className="absolute z-20 right-3 top-1 text-white text-xs
                flex justify-center w-[27px] h-[38px] leading-6"
      >
        {index}
      </span>
    </>
  );
}
