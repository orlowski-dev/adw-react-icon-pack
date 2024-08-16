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
      <path d="m 8 0 c -1.382812 0 -2.761719 0.359375 -4 1.074219 c -2.472656 1.425781 -4 4.070312 -4 6.925781 h 2 c 0 -2.144531 1.140625 -4.121094 3 -5.195312 c 1.859375 -1.074219 4.140625 -1.074219 6 0 c 1.859375 1.074218 3 3.050781 3 5.195312 h 2 c 0 -2.855469 -1.527344 -5.5 -4 -6.925781 c -1.238281 -0.714844 -2.617188 -1.074219 -4 -1.074219 z m 2.992188 4.917969 c -0.269532 0.003906 -0.527344 0.109375 -0.714844 0.304687 l -1.777344 1.777344 c -0.691406 -0.183594 -1.425781 0.011719 -1.929688 0.515625 c -0.78125 0.78125 -0.78125 2.046875 0 2.828125 c 0.777344 0.78125 2.046876 0.78125 2.824219 0 c 0.503907 -0.503906 0.703125 -1.242188 0.519531 -1.929688 l 1.773438 -1.777343 c 0.644531 -0.625 0.203125 -1.714844 -0.695312 -1.71875 z m -8.992188 7.082031 v 4 l 4 -2 z m 7 0 v 4 l 3 -2 z m 3 2 v 2 l 3 -2 l -3 -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPlaybackspeedsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPlaybackspeedsymbolic;
