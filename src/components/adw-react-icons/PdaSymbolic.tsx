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
        <path d="m 4.183594 0 c -1.796875 0 -3.152344 1.339844 -3.152344 3 v 10 c 0 1.660156 1.355469 3 3.152344 3 h 7.570312 c 1.800782 0 3.246094 -1.339844 3.246094 -3 v -6.589844 l -1.976562 2.878906 v 3.710938 c 0 0.554688 -0.480469 1 -1.082032 1 h -7.914062 c -0.601563 0 -1.019532 -0.445312 -1.019532 -1 v -10 c 0 -0.554688 0.417969 -1 1.019532 -1 h 7.660156 l 1.320312 -1.75 c -0.382812 -0.144531 -0.8125 -0.25 -1.253906 -0.25 z m 0 0"/>
        <path d="m 14.039062 1.03125 s -2.515624 3.507812 -4.039062 5.96875 l -1.40625 1.167969 l 0.039062 1.574219 l -0.765624 1.246093 l 0.695312 -0.003906 l 0.742188 -0.582031 l 1.675781 -0.460938 l 0.59375 -1.484375 l 4.183593 -6.363281 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPdaSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPdaSymbolic;
