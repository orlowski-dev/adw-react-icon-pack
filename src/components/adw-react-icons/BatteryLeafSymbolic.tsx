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
        <path d="m 8 5 s 1.652344 1.101562 5 2 c 1.886719 0.863281 2.4375 3.0625 1.703125 5.003906 l -4.703125 -3.003906 l 5.773438 5.683594 c 0.753906 0.628906 -0.359376 1.839844 -1.199219 1 l -1.574219 -1.683594 c -4.164062 0.425781 -5 -1.417969 -5 -4 z m 0 0"/>
        <path d="m 5 0 c -1 0 -1 1 -1 1 v 1 h -1 s -0.707031 -0.015625 -1.449219 0.355469 c -0.738281 0.371093 -1.550781 1.3125 -1.550781 2.644531 v 8 s -0.015625 0.707031 0.355469 1.445312 c 0.371093 0.742188 1.3125 1.554688 2.644531 1.554688 h 6 s 0.707031 0.015625 1.449219 -0.355469 c 0.28125 -0.140625 0.578125 -0.371093 0.832031 -0.671875 c -1.203125 -0.070312 -2.175781 -0.375 -2.875 -0.972656 h -5.40625 c -0.554688 0 -1 -0.445312 -1 -1 v -8 c 0 -0.554688 0.445312 -1 1 -1 h 6 c 0.523438 0 0.945312 0.398438 0.992188 0.90625 c 0.523437 0.230469 1.179687 0.488281 2.007812 0.753906 v -0.660156 c 0 -1.332031 -0.8125 -2.273438 -1.550781 -2.644531 c -0.742188 -0.371094 -1.449219 -0.355469 -1.449219 -0.355469 h -1 v -1 c 0 -1 -1 -1 -1 -1 z m -2 7 v 6 h 4.605469 c -0.488281 -0.894531 -0.609375 -1.953125 -0.605469 -3 v -3 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwBatteryLeafSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBatteryLeafSymbolic;
