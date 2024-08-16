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
      <g fill="#2e3436">
        <path d="m 7.996094 0 c -2.832032 0 -5.289063 2 -5.871094 4.777344 c -0.527344 2.535156 0.691406 5.035156 2.875 6.328125 l 0.003906 0.898437 c 0 0.550782 0.445313 0.996094 1 0.996094 h 4 c 0.550782 0 0.996094 -0.445312 1 -0.996094 v -0.902344 c 2.183594 -1.292968 3.398438 -3.796874 2.871094 -6.328124 c -0.582031 -2.777344 -3.042969 -4.773438 -5.875 -4.773438 z m 0 2 c 1.902344 0 3.53125 1.320312 3.917968 3.183594 c 0.390626 1.859375 -0.570312 3.722656 -2.3125 4.484375 c -0.363281 0.15625 -0.597656 0.515625 -0.597656 0.914062 v 0.417969 h -2.003906 v -0.417969 c 0 -0.398437 -0.234375 -0.753906 -0.601562 -0.914062 c -1.738282 -0.761719 -2.703126 -2.625 -2.316407 -4.484375 c 0.390625 -1.859375 2.015625 -3.183594 3.914063 -3.183594 z m -1.996094 12 v 1 c 0 0.554688 0.449219 1 1 1 h 2 c 0.554688 0 1 -0.445312 1 -1 v -1 z m 0 0"/>
        <path d="m 6.648438 6.144531 c -0.195313 0.195313 -0.195313 0.515625 0 0.710938 l 1 1 c 0.191406 0.191406 0.511718 0.191406 0.707031 0 l 1 -1 c 0.191406 -0.195313 0.191406 -0.515625 0 -0.710938 c -0.195313 -0.191406 -0.515625 -0.191406 -0.707031 0 l -0.648438 0.648438 l -0.644531 -0.648438 c -0.195313 -0.191406 -0.515625 -0.191406 -0.707031 0 z m 0 0" fill-opacity="0.34902"/>
    </g>
    </svg>
  );
};

const AdwEmojiobjectssymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEmojiobjectssymbolic;
