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
        <path d="m 5.957031 0 c -3.285156 0 -5.9648435 2.679688 -5.9648435 5.960938 c 0 1.363281 0.4609375 2.636718 1.2304685 3.652343 c 0.332032 0.441407 0.960938 0.527344 1.402344 0.191407 c 0.4375 -0.332032 0.523438 -0.957032 0.191406 -1.398438 c -0.519531 -0.683594 -0.824218 -1.53125 -0.824218 -2.445312 c 0 -2.199219 1.761718 -3.960938 3.964843 -3.960938 c 1.613281 0 3.0625 0.976562 3.667969 2.472656 c 0.191406 0.472656 0.710938 0.726563 1.203125 0.585938 c 0.222656 -0.0625 0.445313 -0.097656 0.671875 -0.097656 c 1.390625 0 2.5 1.109374 2.5 2.5 c 0 0.695312 -0.277344 1.3125 -0.726562 1.765624 c -0.390626 0.390626 -0.386719 1.023438 0.003906 1.410157 c 0.390625 0.390625 1.023437 0.390625 1.414062 -0.003907 c 0.808594 -0.808593 1.308594 -1.9375 1.308594 -3.171874 c 0 -2.472657 -2.027344 -4.5 -4.5 -4.5 c -0.148438 0 -0.289062 0.050781 -0.4375 0.0625 c -1.050781 -1.824219 -2.960938 -3.023438 -5.105469 -3.023438 z m 0 0"/>
        <path d="m 5 8 c -0.550781 0 -1 0.449219 -1 1 v 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -1 c 0 -0.550781 -0.449219 -1 -1 -1 z m 6 0 c -0.550781 0 -1 0.449219 -1 1 v 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -1 c 0 -0.550781 -0.449219 -1 -1 -1 z m -3 1 c -0.550781 0 -1 0.449219 -1 1 v 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -1 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0"/>
        <path d="m 5 12 c -0.550781 0 -1 0.449219 -1 1 v 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -1 c 0 -0.550781 -0.449219 -1 -1 -1 z m 6 0 c -0.550781 0 -1 0.449219 -1 1 v 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -1 c 0 -0.550781 -0.449219 -1 -1 -1 z m -3 1 c -0.550781 0 -1 0.449219 -1 1 v 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -1 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwRainScatteredOutlineSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRainScatteredOutlineSymbolic;
