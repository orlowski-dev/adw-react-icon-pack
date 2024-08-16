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
        <path d="m 3.957031 5.988281 c -0.101562 0.003907 -0.203125 0.023438 -0.300781 0.058594 c -0.738281 0.109375 -2.65625 0.691406 -2.65625 3.953125 v 5 h 4 v -4.691406 c 0.101562 0.070312 0.203125 0.136718 0.304688 0.195312 c 0.578124 0.320313 1.15625 0.433594 1.695312 0.476563 v -0.980469 h 1 v -1 c -0.003906 0 -0.003906 0 -0.007812 0 c -0.773438 0.003906 -1.3125 -0.023438 -1.71875 -0.25 c -0.40625 -0.222656 -0.871094 -0.703125 -1.324219 -2.066406 c -0.136719 -0.429688 -0.542969 -0.714844 -0.992188 -0.695313 z m 0 0"/>
        <path d="m 12 1 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m -0.042969 4.988281 c -0.414062 0.015625 -0.777343 0.292969 -0.90625 0.695313 c -0.453125 1.363281 -0.917969 1.84375 -1.324219 2.066406 c -0.40625 0.226562 -0.945312 0.253906 -1.722656 0.25 h -0.003906 v 1 h -1 v 0.980469 c 0.167969 0.011719 0.332031 0.015625 0.492188 0.015625 c 0.003906 0 0.003906 0.003906 0.007812 0.003906 h 0.492188 h 0.011718 h 0.496094 c 0.003906 0 0.003906 -0.003906 0.007812 -0.003906 c 0.671876 -0.007813 1.429688 -0.074219 2.1875 -0.492188 c 0.101563 -0.058594 0.203126 -0.125 0.304688 -0.195312 v 4.691406 h 4 v -5 c 0 -3.261719 -1.917969 -3.84375 -2.652344 -3.953125 c -0.101562 -0.035156 -0.203125 -0.054687 -0.304687 -0.058594 c -0.03125 -0.003906 -0.058594 -0.003906 -0.085938 0 z m 0 0" fill-opacity="0.5"/>
        <path d="m 4 1 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwHandshakeSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwHandshakeSymbolic;
