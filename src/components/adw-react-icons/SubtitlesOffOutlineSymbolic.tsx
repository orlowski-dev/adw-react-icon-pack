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
      <path d="m 1.53125 0.46875 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 l -0.386719 -0.386719 c 0.527344 -0.539062 0.855469 -1.273437 0.855469 -2.082031 v -8 c 0 -1.644531 -1.355469 -3 -3 -3 h -10 c -0.285156 0 -0.558594 0.042969 -0.824219 0.117188 z m 2.53125 2.53125 h 8.9375 c 0.570312 0 1 0.429688 1 1 v 8 c 0 0.269531 -0.097656 0.503906 -0.257812 0.683594 l -0.859376 -0.863282 c 0.070313 -0.085937 0.117188 -0.199218 0.117188 -0.320312 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 h -0.4375 l -1 -1 h 1.4375 c 0.277344 0 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 h -2.4375 z m -3.945312 0.183594 c -0.0742192 0.257812 -0.117188 0.53125 -0.117188 0.816406 v 8 c 0 1.644531 1.355469 3 3 3 h 8.9375 l -2 -2 h -6.9375 c -0.570312 0 -1 -0.429688 -1 -1 v -6.9375 z m 3.382812 5.816406 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 2 c 0.277344 0 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 z m 0 2 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 5.4375 l -1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSubtitlesOffOutlineSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSubtitlesOffOutlineSymbolic;
