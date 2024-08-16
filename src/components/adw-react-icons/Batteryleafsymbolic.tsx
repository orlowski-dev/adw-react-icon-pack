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
        <path d="m 5 5 v 5.519531 c 0 3.027344 2.457031 5.480469 5.480469 5.480469 h 0.039062 c 1.105469 -0.003906 2.1875 -0.339844 3.097657 -0.96875 l 0.675781 0.675781 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 s 0.390625 -1.023437 0 -1.414062 l -0.164062 -0.167969 c -0.023438 -0.011719 -0.046875 -0.027344 -0.066407 -0.042969 l -3.90625 -3.90625 c -1.621093 -1.617187 -3.824218 -1.957031 -3.824218 -1.957031 c -0.273438 -0.039062 -0.464844 -0.292969 -0.421875 -0.566406 c 0.039062 -0.273438 0.292969 -0.460938 0.566406 -0.421875 c 0 0 2.496094 0.347656 4.386719 2.238281 l 3.246094 3.246094 c 0.308593 -0.691406 0.46875 -1.4375 0.476562 -2.195313 v -0.039062 c 0 -3.027344 -2.453125 -5.480469 -5.480469 -5.480469 z m 0 0"/>
        <path d="m 5 0 c -1 0 -1 1 -1 1 v 1 h -1 s -0.707031 -0.015625 -1.449219 0.355469 c -0.738281 0.371093 -1.550781 1.3125 -1.550781 2.644531 v 8 s -0.015625 0.707031 0.355469 1.445312 c 0.371093 0.742188 1.3125 1.554688 2.644531 1.554688 h 4 c -0.703125 -0.496094 -1.363281 -1.1875 -2 -2 h -2 c -0.554688 0 -1 -0.445312 -1 -1 v -8 c 0 -0.554688 0.445312 -1 1 -1 h 8.832031 c -0.273437 -0.804688 -0.847656 -1.375 -1.382812 -1.644531 c -0.742188 -0.371094 -1.449219 -0.355469 -1.449219 -0.355469 h -1 v -1 c 0 -1 -1 -1 -1 -1 z m -2 7 v 6 h 1 v -6 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwBatteryleafsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBatteryleafsymbolic;
