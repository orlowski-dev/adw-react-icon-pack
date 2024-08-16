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
        <path d="m 7.96875 5.96875 c 0.542969 -0.015625 1.046875 0.488281 1.03125 1.03125 v 1 c 0.007812 0.527344 -0.472656 1 -1 1 s -1.007812 -0.472656 -1 -1 v -1 c -0.007812 -0.464844 0.355469 -0.914062 0.8125 -1 c 0.050781 -0.015625 0.101562 -0.023438 0.15625 -0.03125 z m 0.03125 4.03125 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/>
        <path d="m 8 1.371094 c -0.769531 0 -1.535156 0.375 -1.941406 1.125 l -4.878906 9.0625 c -0.816407 1.515625 0.332031 3.441406 2.054687 3.441406 h 9.53125 c 1.722656 0 2.871094 -1.925781 2.054687 -3.441406 l -4.882812 -9.0625 c -0.402344 -0.75 -1.167969 -1.125 -1.9375 -1.125 z m -0.179688 2.070312 c 0.101563 -0.191406 0.257813 -0.191406 0.359376 0 l 4.878906 9.066406 c 0.144531 0.261719 0.003906 0.492188 -0.292969 0.492188 h -9.53125 c -0.296875 0 -0.4375 -0.230469 -0.296875 -0.492188 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwWarningoutlinesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwWarningoutlinesymbolic;
