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
        <path d="m 8.765625 7.316406 c -0.726563 -0.703125 -1.179687 -1.691406 -1.179687 -2.78125 c 0 -0.71875 0.203124 -1.425781 0.578124 -2.035156 c 0.203126 -0.324219 0.199219 -0.738281 -0.003906 -1.0625 c -0.207031 -0.320312 -0.578125 -0.5 -0.957031 -0.457031 c -3.582031 0.40625 -6.277344 3.417969 -6.285156 7.023437 c 0 1.933594 0.777343 3.691406 2.042969 4.96875 c 0.25 0.257813 0.617187 0.359375 0.964843 0.269532 c 0.34375 -0.089844 0.617188 -0.359376 0.710938 -0.703126 c 0.09375 -0.347656 -0.003907 -0.714843 -0.253907 -0.96875 c -0.902343 -0.914062 -1.464843 -2.175781 -1.464843 -3.566406 c 0.003906 -2.570312 1.953125 -4.746094 4.507812 -5.035156 l -0.960937 -1.519531 c -0.574219 0.925781 -0.875 1.992187 -0.878906 3.082031 c 0 1.65625 0.683593 3.152344 1.785156 4.222656 c 0.398437 0.382813 1.03125 0.375 1.414062 -0.023437 c 0.386719 -0.394531 0.375 -1.027344 -0.019531 -1.414063 z m 0 0"/>
        <path d="m 8.113281 11.097656 l 1.515625 -0.613281 c -0.484375 -0.316406 -1.050781 -0.484375 -1.628906 -0.484375 c -1.660156 0 -3 1.339844 -3 3 s 1.339844 3 3 3 h 4 c 2.214844 0 4 -1.785156 4 -4 s -1.785156 -4 -4 -4 c -1.863281 0 -3.46875 1.285156 -3.886719 3.097656 z m 5.886719 0.902344 c 0 1.097656 -0.902344 2 -2 2 h -4 c -0.546875 0 -1 -0.453125 -1 -1 s 0.453125 -1 1 -1 c 0.191406 0 0.378906 0.054688 0.542969 0.160156 c 0.273437 0.179688 0.613281 0.210938 0.917969 0.089844 c 0.300781 -0.121094 0.527343 -0.382812 0.597656 -0.703125 c 0.210937 -0.902344 1.019531 -1.546875 1.941406 -1.546875 c 1.097656 0 2 0.902344 2 2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwMoonCloudsOutlineSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMoonCloudsOutlineSymbolic;
