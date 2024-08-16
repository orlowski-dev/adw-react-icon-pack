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
        <path d="m 2.226562 8.113281 c -1.554687 1.554688 -1.554687 4.101563 0 5.65625 c 1.558594 1.558594 4.105469 1.558594 5.660157 0 l 5.945312 -5.941406 c 1.554688 -1.558594 1.558594 -4.105469 0 -5.664063 c -1.554687 -1.554687 -4.105469 -1.550781 -5.660156 0.003907 z m 1.414063 1.414063 l 5.945313 -5.945313 c 0.796874 -0.796875 2.035156 -0.796875 2.832031 -0.003906 c 0.796875 0.796875 0.796875 2.039063 0 2.835937 l -5.945313 5.941407 c -0.796875 0.796875 -2.035156 0.796875 -2.832031 0 c -0.792969 -0.796875 -0.792969 -2.035157 0 -2.828125 z m 0 0"/>
        <path d="m 6.613281 5.136719 l -1.410156 1.414062 l 4.246094 4.25 l 1.410156 -1.414062 z m 0 0"/>
        <path d="m 4.691406 5.648438 l 5.660156 5.660156 l 3.480469 -3.480469 c 1.554688 -1.558594 1.558594 -4.105469 0 -5.664063 c -1.554687 -1.554687 -4.105469 -1.550781 -5.660156 0.003907 z m 0 0" fill-opacity="0.333149"/>
    </g>
    </svg>
  );
};

const AdwPharmacySymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPharmacySymbolic;
