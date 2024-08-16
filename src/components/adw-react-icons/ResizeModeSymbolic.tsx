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
        <path d="m 9 1 c -0.714844 0 -1.371094 0.382812 -1.730469 1 h -1.269531 c -1.671875 0 -3 1.359375 -3 3.023438 v 3.246093 c -0.617188 0.355469 -1 1.015625 -1 1.730469 s 0.382812 1.371094 1 1.730469 v 3.269531 h 2 v -3.269531 c 0.617188 -0.355469 1 -1.015625 1 -1.730469 s -0.382812 -1.371094 -1 -1.730469 v -3.246093 c 0 -0.390626 0.636719 -1.023438 1 -1.023438 h 1.269531 c 0.355469 0.617188 1.015625 1 1.730469 1 s 1.371094 -0.382812 1.730469 -1 h 4.269531 v -2 h -4.269531 c -0.355469 -0.617188 -1.015625 -1 -1.730469 -1 z m 0 1 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m -5 7 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/>
        <path d="m 15 4 v 11 h -10 v -11 z m 0 0" fill-opacity="0.35"/>
    </g>
    </svg>
  );
};

const AdwResizeModeSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwResizeModeSymbolic;
