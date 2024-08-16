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
        <path d="m 8.003906 2 c -1.660156 0 -3 1.34375 -3 3 s 1.339844 3 3 3 c 1.65625 0 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.496094 0 -4.5 2.007812 -4.5 4.5 v 0.5 c 0 1 1 1 1 1 h 6.1875 c -0.113281 -0.316406 -0.1875 -0.648438 -0.1875 -1 c 0 -1.644531 1.351563 -3 3 -3 v -1.242188 c -0.714844 -0.480468 -1.574218 -0.757812 -2.5 -0.757812 z m 5.496094 4 c -0.5625 0 -0.996094 0.4375 -0.996094 1 s 0.433594 1 1 1 c 0.5625 0 1 -0.4375 1 -1 v -0.574219 l -0.503906 -0.289062 c -0.152344 -0.089844 -0.324219 -0.136719 -0.5 -0.136719 z m 0 0"/>
        <path d="m 13.003906 9 v 3.269531 c -0.304687 -0.175781 -0.648437 -0.269531 -1 -0.269531 c -1.105468 0 -2 0.894531 -2 2 s 0.894532 2 2 2 c 1.101563 0 2 -0.894531 2 -2 v -3 h 2 v -2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwMusicArtistSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMusicArtistSymbolic;
