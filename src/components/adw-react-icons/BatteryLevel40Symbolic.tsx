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
      <path d="m 7 0 c -1 0 -1 1 -1 1 v 1 h -1.007812 s -0.710938 -0.015625 -1.449219 0.355469 c -0.738281 0.371093 -1.550781 1.3125 -1.550781 2.644531 v 8 s -0.015626 0.707031 0.355468 1.449219 c 0.367188 0.738281 1.308594 1.550781 2.644532 1.550781 h 6 s 0.707031 0.015625 1.445312 -0.355469 c 0.738281 -0.371093 1.554688 -1.3125 1.554688 -2.644531 v -8 c 0 -1.332031 -0.816407 -2.273438 -1.554688 -2.644531 c -0.738281 -0.371094 -1.445312 -0.355469 -1.445312 -0.355469 h -0.992188 l -0.011719 -1 c -0.007812 -1 -1 -1 -1 -1 z m 3.992188 4 c 0.550781 0 1 0.445312 1 1 v 8 c 0 0.554688 -0.449219 1 -1 1 h -6 c -0.554688 0 -1 -0.445312 -1 -1 v -8 c 0 -0.554688 0.445312 -1 1 -1 z m -5.992188 6 v 3 h 6 v -3 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwBatteryLevel40Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBatteryLevel40Symbolic;
