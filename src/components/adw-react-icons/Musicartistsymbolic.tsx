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
        <path d="m 8.003906 2 c -1.660156 0 -3 1.34375 -3 3 s 1.339844 3 3 3 c 1.65625 0 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m 0 2 c 0.550782 0 1 0.449219 1 1 s -0.449218 1 -1 1 c -0.554687 0 -1 -0.449219 -1 -1 s 0.445313 -1 1 -1 z m 0 0"/>
        <path d="m 13.003906 9 v 3.269531 c -0.304687 -0.175781 -0.648437 -0.269531 -1 -0.269531 c -1.105468 0 -2 0.894531 -2 2 s 0.894532 2 2 2 c 1.101563 0 2 -0.894531 2 -2 v -3 h 2 v -2 z m 0 0"/>
        <path d="m 6.003906 9 s -0.960937 -0.015625 -1.949218 0.480469 c -0.988282 0.496093 -2.050782 1.6875 -2.050782 3.519531 v 1 c -0.007812 0.359375 0.183594 0.695312 0.496094 0.878906 c 0.308594 0.179688 0.695312 0.179688 1.007812 0 c 0.308594 -0.183594 0.5 -0.519531 0.496094 -0.878906 v -1 c 0 -1.167969 0.433594 -1.476562 0.945313 -1.730469 c 0.511719 -0.253906 1.054687 -0.269531 1.054687 -0.269531 h 5 c 0.359375 0.003906 0.695313 -0.183594 0.875 -0.496094 c 0.183594 -0.3125 0.183594 -0.695312 0 -1.007812 c -0.179687 -0.3125 -0.515625 -0.5 -0.875 -0.496094 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwMusicartistsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMusicartistsymbolic;
