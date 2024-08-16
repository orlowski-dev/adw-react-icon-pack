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
      <path d="m 4.996094 0 c -1.03125 0.00390625 -1.386719 1.371094 -0.484375 1.871094 l 0.488281 0.273437 v 2.683594 c -0.128906 0.207031 -0.25 0.390625 -0.441406 0.714844 c -0.269532 0.472656 -0.601563 1.0625 -0.964844 1.707031 c -0.722656 1.296875 -1.554688 2.910156 -2.203125 4.09375 c -0.574219 1.046875 -0.550781 2.453125 0.300781 3.511719 c 0.671875 0.902343 1.738282 1.140625 2.617188 1.140625 h 7.351562 c 0.878906 0 1.949219 -0.238282 2.621094 -1.140625 c 0.851562 -1.058594 0.867188 -2.464844 0.296875 -3.511719 c -1.164063 -2.371094 -2.472656 -4.316406 -3.5625 -6.496094 v -2.699218 l 0.488281 -0.277344 c 0.902344 -0.5 0.546875 -1.871094 -0.484375 -1.871094 z m 2.003906 2 h 2.015625 v 3.105469 c 0 0.152343 0.035156 0.304687 0.101563 0.441406 c 1.203124 2.457031 2.574218 4.441406 3.6875 6.714844 c 0.003906 0.011719 0.011718 0.027343 0.015624 0.039062 c 0.242188 0.441407 0.257813 0.882813 -0.097656 1.316407 c -0.011718 0.011718 -0.023437 0.027343 -0.035156 0.042968 c -0.144531 0.199219 -0.488281 0.335938 -1.027344 0.335938 h -7.351562 c -0.539063 0 -0.882813 -0.136719 -1.027344 -0.335938 c -0.011719 -0.015625 -0.023438 -0.027344 -0.035156 -0.042968 c -0.351563 -0.433594 -0.339844 -0.875 -0.097656 -1.316407 c 0.644531 -1.179687 1.472656 -2.789062 2.191406 -4.070312 c 0.359375 -0.644531 0.6875 -1.230469 0.953125 -1.683594 c 0.261719 -0.453125 0.488281 -0.8125 0.515625 -0.847656 c 0.125 -0.171875 0.191406 -0.378907 0.191406 -0.589844 z m 0 0" fill="#2e3436"/>
    <path d="m 6.21875 9 l -2.21875 4 h 8 l -2.21875 -4 z m 0 0" fill="currentColor" fill-opacity="0.34902"/>
    </svg>
  );
};

const AdwApplicationssciencesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwApplicationssciencesymbolic;
