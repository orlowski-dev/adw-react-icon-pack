"use client";

import { createElement, type HTMLAttributes, useId } from "react";

interface Props {
  title?: string;
  size?: number;
  wrapper?: "div" | "span";
  wrapperProps?:
    | HTMLAttributes<HTMLDivElement>
    | HTMLAttributes<HTMLSpanElement>;
}

const SvgTemplate = ({ title, size }: Props) => {
  const id = useId();
  const sizeEm = size ? `${size / 16}em` : "1.5em";

  return (
    <svg
      height={sizeEm}
      viewBox="0 0 16 16"
      width={sizeEm}
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={title ? id : undefined}
    >
      {title ? <title id={id}>{title}</title> : undefined}
      <g fill="currentColor">
        <path d="m 15 13.003906 h -1 c -0.550781 0 -1 0.449219 -1 1 c 0 0.554688 0.449219 1 1 1 h 1 c 0.550781 0 1 -0.445312 1 -1 c 0 -0.550781 -0.449219 -1 -1 -1 z m -2.753906 -4.660156 l -0.707032 0.707031 c -0.390624 0.390625 -0.390624 1.023438 0 1.414063 c 0.390626 0.390625 1.023438 0.390625 1.414063 0 l 0.707031 -0.707032 c 0.390625 -0.390624 0.390625 -1.023437 0 -1.414062 s -1.023437 -0.390625 -1.414062 0 z m -9.902344 1.40625 l 0.707031 0.707031 c 0.253907 0.25 0.621094 0.351563 0.96875 0.257813 c 0.34375 -0.089844 0.613281 -0.363282 0.707031 -0.707032 c 0.089844 -0.347656 -0.007812 -0.714843 -0.261718 -0.96875 l -0.707032 -0.707031 c -0.253906 -0.25 -0.621093 -0.351562 -0.964843 -0.257812 c -0.347657 0.089843 -0.617188 0.363281 -0.710938 0.707031 c -0.089843 0.347656 0.007813 0.714844 0.261719 0.96875 z m -1.347656 5.242188 h 1 c 0.550781 0 1 -0.449219 1 -1 c 0 -0.554688 -0.449219 -1 -1 -1 h -1 c -0.554688 0 -1.00000025 0.445312 -1.00000025 1 c 0 0.550781 0.44531225 1 1.00000025 1 z m 0 0"/>
        <path d="m 7.996094 8.992188 c -0.554688 0 -1 -0.449219 -1 -1 v -3 h -2 v -1 h 0.003906 c 0 -0.265626 0.101562 -0.519532 0.289062 -0.707032 l 2 -2 c 0.390626 -0.390625 1.023438 -0.390625 1.414063 0 l 2 2 c 0.183594 0.1875 0.289063 0.441406 0.285156 0.707032 h 0.007813 v 1 h -2 v 3 c 0 0.550781 -0.449219 1 -1 1 z m 0 0"/>
        <path d="m 5.996094 13.992188 c 0 -1.101563 0.898437 -2 2 -2 c 1.097656 0 2 0.898437 2 2 c 0 0.550781 0.445312 1 1 1 c 0.550781 0 1 -0.449219 1 -1 c 0 -2.214844 -1.785156 -4 -4 -4 s -4 1.785156 -4 4 c 0 0.550781 0.445312 1 1 1 c 0.550781 0 1 -0.449219 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwDaytimesunrisesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDaytimesunrisesymbolic;
