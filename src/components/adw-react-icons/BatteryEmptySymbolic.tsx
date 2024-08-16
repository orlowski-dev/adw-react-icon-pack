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
      <path class="error" d="m 6 1 v 1 h -1 s -0.707031 -0.015625 -1.449219 0.355469 c -0.738281 0.371093 -1.550781 1.3125 -1.550781 2.644531 v 8 s -0.015625 0.707031 0.355469 1.449219 c 0.371093 0.738281 1.3125 1.550781 2.644531 1.550781 h 2 v -2 h -2 c -0.554688 0 -1 -0.445312 -1 -1 v -8 c 0 -0.554688 0.445312 -1 1 -1 h 6 c 0.554688 0 1 0.445312 1 1 v 2 h 2 v -2 c 0 -1.332031 -0.8125 -2.273438 -1.550781 -2.644531 c -0.742188 -0.371094 -1.449219 -0.355469 -1.449219 -0.355469 h -1 v -1 c 0 -1 -1 -1 -1 -1 h -2 s -1 0 -1 1 z m 3.5 7 c -0.832031 0 -1.5 0.667969 -1.5 1.5 v 5 c 0 0.832031 0.667969 1.5 1.5 1.5 h 5 c 0.832031 0 1.5 -0.667969 1.5 -1.5 v -5 c 0 -0.832031 -0.667969 -1.5 -1.5 -1.5 z m 1.5 1 h 2 v 2.5 s 0 0.5 -0.5 0.5 h -1 c -0.5 0 -0.5 -0.5 -0.5 -0.5 z m 0.5 4 h 1 c 0.277344 0 0.5 0.222656 0.5 0.5 v 1 c 0 0.277344 -0.222656 0.5 -0.5 0.5 h -1 c -0.277344 0 -0.5 -0.222656 -0.5 -0.5 v -1 c 0 -0.277344 0.222656 -0.5 0.5 -0.5 z m 0 0" fill="#ed333b"/>
    </svg>
  );
};

const AdwBatteryEmptySymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBatteryEmptySymbolic;
