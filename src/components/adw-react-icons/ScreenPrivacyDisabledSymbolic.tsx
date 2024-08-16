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
      <path d="m 1.53125 0.46875 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 l -1.945312 -1.945312 c 0.847656 -0.527344 1.414062 -1.449219 1.414062 -2.523438 v -6 c 0 -1.660156 -1.339844 -3 -3 -3 h -8 c -0.554688 0 -1.070312 0.160156 -1.515625 0.421875 z m 2.53125 2.53125 h 0.199219 l -0.097657 0.097656 z m 2.675781 0 h 0.699219 l -1.6875 1.6875 l -0.351562 -0.351562 z m 2.824219 0 h 1.230469 l -3.367188 3.363281 l -0.613281 -0.613281 z m 2.609375 0.035156 c 0.316406 0.054688 0.578125 0.246094 0.714844 0.523438 l -4.132813 4.132812 l -0.617187 -0.617187 z m -11.171875 1.023438 v 5.941406 c 0 1.660156 1.339844 3 3 3 h 5.941406 l -2 -2 h -1.785156 l 0.894531 -0.894531 l -0.355469 -0.355469 l -1.25 1.25 h -1.238281 l 1.867188 -1.867188 l -0.707031 -0.707031 l -2.160157 2.15625 c -0.121093 -0.164062 -0.207031 -0.359375 -0.207031 -0.582031 v -0.4375 l 1.75 -1.75 l -1.0625 -1.0625 l -0.6875 0.6875 v -0.699219 l 0.339844 -0.339843 z m 12 0.09375 v 5.847656 c 0 0.535156 -0.417969 0.960938 -0.949219 0.988281 l -2.941406 -2.941406 z m -5 9.847656 c -5 0 -5 1 -5 1 c 0 1 1 1 1 1 h 8 c 0.328125 0 0.539062 -0.109375 0.6875 -0.253906 l -1.542969 -1.546875 c -0.730469 -0.113281 -1.71875 -0.199219 -3.144531 -0.199219 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwScreenPrivacyDisabledSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwScreenPrivacyDisabledSymbolic;
