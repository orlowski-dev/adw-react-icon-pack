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
      <path d="m 14.691406 10.636719 c 0.8125 -0.816407 1.308594 -1.9375 1.308594 -3.171875 c 0 -2.492188 -2.007812 -4.5 -4.5 -4.5 c -0.417969 0 -0.828125 0.058594 -1.226562 0.171875 l 1.203124 0.585937 c -0.910156 -2.25 -3.09375 -3.722656 -5.519531 -3.722656 c -3.300781 0 -5.9648435 2.664062 -5.9648435 5.960938 c 0 1.367187 0.4570315 2.636718 1.2304685 3.652343 c 0.214844 0.285157 0.566406 0.4375 0.921875 0.390625 c 0.355469 -0.042968 0.660157 -0.273437 0.796875 -0.605468 c 0.140625 -0.328126 0.09375 -0.707032 -0.125 -0.992188 c -0.515625 -0.683594 -0.824218 -1.53125 -0.824218 -2.445312 c 0 -2.183594 1.777343 -3.960938 3.960937 -3.960938 c 1.613281 0 3.066406 0.980469 3.671875 2.472656 c 0.191406 0.476563 0.710938 0.726563 1.203125 0.585938 c 0.21875 -0.0625 0.445313 -0.09375 0.671875 -0.09375 c 1.375 0 2.5 1.121094 2.5 2.5 c 0 0.6875 -0.277344 1.308594 -0.726562 1.761718 c -0.390626 0.390626 -0.386719 1.023438 0.003906 1.414063 c 0.390625 0.386719 1.023437 0.386719 1.414062 -0.003906 z m 0 0" fill="currentColor"/>
    <path d="m 7 10 v 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -1 c 0 -0.550781 -0.449219 -1 -1 -1 s -1 0.449219 -1 1 z m -3 -1 v 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -1 c 0 -0.550781 -0.449219 -1 -1 -1 s -1 0.449219 -1 1 z m 6 0 v 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -1 c 0 -0.550781 -0.449219 -1 -1 -1 s -1 0.449219 -1 1 z m 0 0"/>
    <path d="m 7 14 v 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -1 c 0 -0.550781 -0.449219 -1 -1 -1 s -1 0.449219 -1 1 z m -3 -1 v 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -1 c 0 -0.550781 -0.449219 -1 -1 -1 s -1 0.449219 -1 1 z m 6 0 v 1 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -1 c 0 -0.550781 -0.449219 -1 -1 -1 s -1 0.449219 -1 1 z m 0 0"/>
    </svg>
  );
};

const AdwWeathershowerssymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwWeathershowerssymbolic;
