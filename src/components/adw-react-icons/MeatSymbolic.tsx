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
      <path d="m 12.5 0 c -0.828125 0 -1.5 0.671875 -1.5 1.5 c 0 0.546875 0.296875 1.046875 0.773438 1.3125 l -2.25 2.25 c -0.132813 0.109375 -0.070313 0.214844 -0.015626 0.3125 c 0.148438 0.234375 0.304688 0.4375 0.460938 0.59375 c 0.171875 0.171875 0.410156 0.347656 0.6875 0.519531 c 0.171875 0.125 0.304688 -0.03125 0.304688 -0.03125 l 2.230468 -2.230469 c 0.261719 0.476563 0.761719 0.773438 1.308594 0.773438 c 0.828125 0 1.5 -0.671875 1.5 -1.5 s -0.671875 -1.5 -1.5 -1.5 c -0.5 0 -0.5 -0.5 -0.5 -0.5 c 0 -0.828125 -0.671875 -1.5 -1.5 -1.5 z m -4.710938 2.402344 c -0.328124 -0.019532 -0.640624 0.261718 -0.722656 0.667968 c -0.144531 0.71875 -0.164062 1.132813 -1.066406 1.929688 c -0.558594 0.492188 -3 0.738281 -3 2 c 0 0 0 2 2 4 s 4 2 4 2 c 1 0 1.507812 -2.441406 2 -3 c 0.796875 -0.902344 0.851562 -0.417969 2.066406 -0.929688 c 0.472656 -0.203124 0.832032 -0.800781 0.644532 -1.277343 c -0.234376 -0.601563 -1.296876 -1.101563 -1.835938 -1.015625 c -0.523438 0.085937 -1.125 1.003906 -1.398438 0.839844 c -0.648437 -0.382813 -0.800781 -0.488282 -1.175781 -0.859376 c -0.164062 -0.164062 -0.890625 -0.824218 -0.90625 -1.371093 c -0.019531 -0.523438 0.886719 -0.785157 0.78125 -1.363281 c -0.113281 -0.644532 -0.679687 -1.582032 -1.386719 -1.621094 z m -4.140624 8.535156 l -0.835938 0.835938 c -0.265625 -0.476563 -0.765625 -0.773438 -1.3125 -0.773438 c -0.828125 0 -1.5 0.671875 -1.5 1.5 s 0.671875 1.5 1.5 1.5 c 0.5 0 0.5 0.335938 0.5 0.5 c 0 0.828125 0.671875 1.5 1.5 1.5 s 1.5 -0.671875 1.5 -1.5 c 0 -0.546875 -0.296875 -1.046875 -0.773438 -1.3125 l 0.835938 -0.835938 c -0.246094 -0.191406 -0.5 -0.414062 -0.75 -0.664062 s -0.472656 -0.503906 -0.664062 -0.75 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMeatSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMeatSymbolic;
