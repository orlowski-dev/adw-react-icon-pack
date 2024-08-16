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
        <path d="m 12.550781 3 c -0.488281 0.003906 -0.988281 0.195312 -1.429687 0.636719 l -7.625 7.625 c -0.316406 0.316406 -0.496094 0.75 -0.496094 1.199219 v 2.539062 h 2.539062 c 0.449219 0 0.882813 -0.179688 1.199219 -0.496094 l 7.625 -7.625 c 1.515625 -1.511718 0.066407 -3.714844 -1.601562 -3.871094 c -0.070313 -0.007812 -0.140625 -0.007812 -0.210938 -0.007812 z m -1.503906 3.054688 l 0.898437 0.898437 l -5.980468 5.980469 l -0.898438 -0.898438 z m 0 0"/>
        <path d="m 6.5 0 c -3.578125 0 -6.5 2.921875 -6.5 6.5 c 0 1.800781 0.742188 3.4375 1.9375 4.613281 l 1.40625 -1.40625 c -0.828125 -0.8125 -1.34375 -1.945312 -1.34375 -3.207031 c 0 -2.496094 2.003906 -4.5 4.5 -4.5 c 1.261719 0 2.394531 0.515625 3.210938 1.339844 l 1.40625 -1.40625 c -1.179688 -1.191406 -2.816407 -1.933594 -4.617188 -1.933594 z m 5.691406 10.757812 l -1.421875 1.421876 l 2.503907 2.507812 c 0.957031 0.9375 2.363281 -0.5 1.40625 -1.4375 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwEditFindReplaceSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEditFindReplaceSymbolic;
