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
        <path d="m 15 7 h -1 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 1 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m -2.753906 -4.660156 l -0.707032 0.707031 c -0.390624 0.390625 -0.390624 1.023437 0 1.414063 c 0.390626 0.390624 1.023438 0.390624 1.414063 0 l 0.707031 -0.707032 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 s -1.023437 -0.390625 -1.414062 0 z m -5.242188 -1.347656 v 1 c 0 0.550781 0.449219 1 1 1 c 0.554688 0 1 -0.449219 1 -1 v -1 c 0 -0.554688 -0.445312 -1.0000005 -1 -1.0000005 c -0.550781 0 -1 0.4453125 -1 1.0000005 z m -4.660156 2.75 l 0.707031 0.707031 c 0.253907 0.253906 0.621094 0.355469 0.96875 0.261719 c 0.34375 -0.09375 0.613281 -0.363282 0.707031 -0.707032 c 0.089844 -0.347656 -0.007812 -0.714844 -0.261718 -0.96875 l -0.707032 -0.707031 c -0.253906 -0.253906 -0.621093 -0.351563 -0.964843 -0.257813 c -0.347657 0.089844 -0.617188 0.359376 -0.710938 0.707032 c -0.089843 0.34375 0.007813 0.714844 0.261719 0.964844 z m -1.347656 5.242187 h 1 c 0.550781 0 1 -0.445313 1 -1 c 0 -0.550781 -0.449219 -1 -1 -1 h -1 c -0.554688 0 -1.00000025 0.449219 -1.00000025 1 c 0 0.554687 0.44531225 1 1.00000025 1 z m 2.753906 4.664063 l 0.707031 -0.707032 c 0.390625 -0.390625 0.390625 -1.027344 0 -1.414062 c -0.390625 -0.390625 -1.027343 -0.390625 -1.414062 0 l -0.710938 0.707031 c -0.386719 0.390625 -0.386719 1.023437 0 1.414063 c 0.390625 0.390624 1.027344 0.390624 1.417969 0 z m 5.242188 1.347656 v -1 c 0 -0.554688 -0.449219 -1 -1 -1 c -0.554688 0 -1 0.445312 -1 1 v 1 c 0 0.550781 0.445312 1 1 1 c 0.550781 0 1 -0.449219 1 -1 z m 4.660156 -2.753906 l -0.707032 -0.707032 c -0.253906 -0.253906 -0.621093 -0.351562 -0.96875 -0.261718 c -0.34375 0.09375 -0.613281 0.363281 -0.707031 0.710937 c -0.09375 0.34375 0.007813 0.710937 0.261719 0.964844 l 0.707031 0.707031 c 0.25 0.253906 0.621094 0.351562 0.964844 0.261719 c 0.347656 -0.09375 0.617187 -0.363281 0.707031 -0.707031 c 0.09375 -0.347657 -0.003906 -0.714844 -0.257812 -0.96875 z m 0 0"/>
        <path d="m 8 10 c -1.097656 0 -2 -0.902344 -2 -2 s 0.902344 -2 2 -2 s 2 0.902344 2 2 s -0.902344 2 -2 2 z m 0 -6 c -2.214844 0 -4 1.785156 -4 4 s 1.785156 4 4 4 s 4 -1.785156 4 -4 s -1.785156 -4 -4 -4 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwWeatherclearsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwWeatherclearsymbolic;
