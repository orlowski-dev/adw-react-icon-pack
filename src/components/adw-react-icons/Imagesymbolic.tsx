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
        <path d="m 9.460938 7.046875 c -0.476563 0.003906 -0.953126 0.226563 -1.238282 0.667969 l -0.984375 1.507812 c -0.316406 0.484375 -0.855469 0.777344 -1.4375 0.777344 h -3.332031 v 1 h 3.332031 c 0.917969 0 1.773438 -0.464844 2.273438 -1.230469 l 0.988281 -1.507812 c 0.199219 -0.3125 0.613281 -0.316407 0.820312 -0.007813 l 1.03125 1.519532 c 0.511719 0.757812 1.371094 1.210937 2.285157 1.210937 h 0.269531 v -1 h -0.269531 c -0.585938 0 -1.132813 -0.289063 -1.460938 -0.773437 l -1.027343 -1.519532 c -0.292969 -0.433594 -0.773438 -0.648437 -1.25 -0.644531 z m 0 0"/>
        <path d="m 5.453125 3.886719 c -0.859375 0 -1.566406 0.707031 -1.566406 1.566406 s 0.707031 1.566406 1.566406 1.566406 s 1.566406 -0.707031 1.566406 -1.566406 s -0.707031 -1.566406 -1.566406 -1.566406 z m 0 0.996093 c 0.320313 0 0.570313 0.25 0.570313 0.570313 s -0.25 0.570313 -0.570313 0.570313 s -0.570313 -0.25 -0.570313 -0.570313 s 0.25 -0.570313 0.570313 -0.570313 z m 0 0"/>
        <path d="m 11.96875 3 c 0.570312 0 1.03125 0.460938 1.03125 1.03125 v 7.9375 c 0 0.570312 -0.460938 1.03125 -1.03125 1.03125 h -7.9375 c -0.570312 0 -1.03125 -0.460938 -1.03125 -1.03125 v -7.9375 c 0 -0.570312 0.460938 -1.03125 1.03125 -1.03125 z m -10.96875 1.03125 v 7.9375 c 0 1.679688 1.351562 3.03125 3.03125 3.03125 h 7.9375 c 1.679688 0 3.03125 -1.351562 3.03125 -3.03125 v -7.9375 c 0 -1.679688 -1.351562 -3.03125 -3.03125 -3.03125 h -7.9375 c -1.679688 0 -3.03125 1.351562 -3.03125 3.03125 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwImagesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwImagesymbolic;
