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
      <path d="m 8 1.003906 c 2.050781 0 4.097656 0.78125 5.65625 2.339844 c 3.117188 3.117188 3.117188 8.195312 0 11.3125 c -0.390625 0.390625 -1.023438 0.390625 -1.414062 0 c -0.390626 -0.390625 -0.390626 -1.023438 0 -1.414062 c 0.378906 -0.378907 0.699218 -0.796876 0.957031 -1.242188 c 1.332031 -2.296875 1.015625 -5.269531 -0.957031 -7.242188 c -2.351563 -2.351562 -6.132813 -2.351562 -8.484376 0 c -2.351562 2.351563 -2.351562 6.132813 0 8.484376 c 0.390626 0.390624 0.390626 1.023437 0 1.414062 c -0.390624 0.390625 -1.023437 0.390625 -1.414062 0 c -3.117188 -3.117188 -3.117188 -8.195312 0 -11.3125 c 1.558594 -1.558594 3.605469 -2.339844 5.65625 -2.339844 z m 5.199219 10.996094 l -1.367188 0.363281 l -2.835937 -1.632812 c -0.617188 0.355469 -1.378906 0.355469 -1.996094 0 c -0.957031 -0.550781 -1.285156 -1.773438 -0.730469 -2.730469 c 0.550781 -0.957031 1.773438 -1.285156 2.730469 -0.734375 c 0.617188 0.359375 0.996094 1.019531 0.996094 1.730469 l 2.835937 1.636718 z m 0 0" fill="currentColor"/>
    <path d="m 4 9 c 0.003906 1.058594 0.429688 2.074219 1.179688 2.820312 l -2.128907 2.128907 c -1.3125 -1.3125 -2.050781 -3.09375 -2.050781 -4.949219 z m 0 0" fill="#2e3436" fill-opacity="0.34902"/>
    </svg>
  );
};

const AdwPowerprofilepowersaverrtlsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPowerprofilepowersaverrtlsymbolic;
