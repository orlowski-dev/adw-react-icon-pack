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
        <path d="m 6 4.5 c 0 0.828125 -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 s 1.5 0.671875 1.5 1.5 z m 0 0"/>
        <path d="m 4 0 c -2.214844 0 -4 1.785156 -4 4 v 3.089844 c 0 0.695312 0.230469 1.359375 0.640625 1.910156 h 2.773437 l -1.0625 -1.0625 c -0.226562 -0.226562 -0.351562 -0.53125 -0.351562 -0.847656 v -3.089844 c 0 -1.097656 0.902344 -2 2 -2 h 3.269531 c 0.203125 0 0.398438 0.082031 0.542969 0.226562 l 5.421875 5.417969 c 0.191406 0.195313 0.191406 0.515625 0 0.710938 l -4.96875 4.964843 c -0.144531 0.144532 -0.386719 0.144532 -0.53125 0 l -0.734375 -0.734374 v 2.621093 c 0.878906 0.414063 1.953125 0.253907 2.679688 -0.472656 l 4.96875 -4.964844 c 0.976562 -0.980469 0.976562 -2.558593 0 -3.539062 l -5.421876 -5.417969 c -0.519531 -0.523438 -1.222656 -0.8125 -1.957031 -0.8125 z m 0 0"/>
        <path d="m 2.015625 10 v 2 h -2 v 2 h 2 v 2 h 2 v -2 h 2 v -2 h -2 v -2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTagoutlineaddsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTagoutlineaddsymbolic;
