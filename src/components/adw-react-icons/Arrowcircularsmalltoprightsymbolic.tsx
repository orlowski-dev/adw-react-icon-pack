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
      <path d="m 7.710938 2.007812 c -0.191407 0.007813 -0.371094 0.035157 -0.5625 0.0625 c -1.523438 0.214844 -2.980469 1.023438 -3.96875 2.34375 c -1.980469 2.640626 -1.421876 6.425782 1.21875 8.40625 c 2.640624 1.980469 6.425781 1.421876 8.40625 -1.21875 c 0.121093 -0.171874 0.1875 -0.382812 0.1875 -0.59375 c 0 0 0.007812 -1.007812 -1 -1 c -0.316407 0 -0.625 0.152344 -0.8125 0.40625 c -1.332032 1.777344 -3.816407 2.113282 -5.59375 0.78125 c -1.777344 -1.332031 -2.113282 -3.816406 -0.78125 -5.59375 c 1.332031 -1.777343 3.816406 -2.113281 5.59375 -0.78125 c 0.429687 0.320313 0.769531 0.730469 1.03125 1.1875 h -1.4375 c -0.550782 0 -1 0.445313 -1 1 c 0 0 0.007812 0.992188 1.007812 1 h 4.992188 v -5 c 0.007812 -1.007812 -1 -1 -1 -1 c -0.550782 0 -1 0.445313 -1 1 v 1.6875 c -0.382813 -0.578124 -0.851563 -1.082031 -1.40625 -1.5 c -1.15625 -0.867187 -2.53125 -1.253906 -3.875 -1.1875 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwArrowcircularsmalltoprightsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrowcircularsmalltoprightsymbolic;
