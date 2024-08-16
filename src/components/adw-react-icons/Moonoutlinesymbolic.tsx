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
      <path d="m 0.917969 8.003906 c 0 3.914063 3.164062 7.078125 7.078125 7.078125 c 3.605468 -0.007812 6.617187 -2.703125 7.023437 -6.285156 c 0.042969 -0.378906 -0.136719 -0.75 -0.457031 -0.957031 c -0.324219 -0.203125 -0.738281 -0.207032 -1.0625 -0.003906 c -0.609375 0.375 -1.316406 0.578124 -2.03125 0.578124 c -2.140625 0 -3.882812 -1.742187 -3.882812 -3.882812 c 0 -0.714844 0.203124 -1.421875 0.578124 -2.03125 c 0.203126 -0.324219 0.199219 -0.738281 -0.003906 -1.0625 c -0.207031 -0.320312 -0.578125 -0.5 -0.957031 -0.457031 c -3.582031 0.40625 -6.277344 3.417969 -6.285156 7.023437 z m 4.667969 -3.472656 c 0 3.253906 2.628906 5.882812 5.886718 5.882812 c 1.085938 0 2.152344 -0.304687 3.078125 -0.878906 l -1.519531 -0.960937 c -0.289062 2.554687 -2.464844 4.503906 -5.035156 4.507812 c -2.796875 0 -5.078125 -2.28125 -5.078125 -5.078125 c 0.003906 -2.570312 1.953125 -4.746094 4.507812 -5.035156 l -0.960937 -1.519531 c -0.574219 0.925781 -0.875 1.992187 -0.878906 3.082031 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMoonoutlinesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMoonoutlinesymbolic;
