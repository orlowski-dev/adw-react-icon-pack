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
      <path d="m 7.5 0 c -4.128906 0 -7.5 3.371094 -7.5 7.5 s 3.371094 7.5 7.5 7.5 s 7.5 -3.371094 7.5 -7.5 s -3.371094 -7.5 -7.5 -7.5 z m 0 2 c 0.257812 0 0.503906 0.023438 0.75 0.054688 c 0.191406 0.261718 0.382812 0.59375 0.550781 1.027343 c 0.105469 0.277344 0.203125 0.585938 0.289063 0.917969 h -3.179688 c 0.085938 -0.332031 0.183594 -0.640625 0.289063 -0.917969 c 0.167969 -0.433593 0.359375 -0.765625 0.550781 -1.027343 c 0.246094 -0.03125 0.492188 -0.054688 0.75 -0.054688 z m -2.085938 0.40625 c -0.050781 0.109375 -0.105468 0.203125 -0.148437 0.316406 c -0.148437 0.386719 -0.269531 0.820313 -0.378906 1.277344 h -1.617188 c 0.570313 -0.691406 1.296875 -1.246094 2.144531 -1.59375 z m 4.171876 0 c 0.847656 0.347656 1.574218 0.902344 2.144531 1.59375 h -1.617188 c -0.109375 -0.457031 -0.230469 -0.890625 -0.378906 -1.277344 c -0.042969 -0.113281 -0.097656 -0.207031 -0.148437 -0.316406 z m -6.980469 2.59375 h 2.082031 c -0.097656 0.628906 -0.148438 1.300781 -0.167969 2 h -2.480469 c 0.0625 -0.714844 0.253907 -1.390625 0.566407 -2 z m 3.09375 0 h 3.601562 c 0.101563 0.617188 0.15625 1.292969 0.179688 2 h -3.960938 c 0.023438 -0.707031 0.078125 -1.382812 0.179688 -2 z m 4.613281 0 h 2.082031 c 0.3125 0.609375 0.503907 1.285156 0.566407 2 h -2.480469 c -0.019531 -0.699219 -0.070313 -1.371094 -0.167969 -2 z m -8.273438 3 h 2.480469 c 0.019531 0.699219 0.070313 1.375 0.167969 2 h -2.082031 c -0.3125 -0.609375 -0.503907 -1.285156 -0.566407 -2 z m 3.480469 0 h 3.960938 c -0.023438 0.707031 -0.078125 1.382812 -0.179688 2 h -3.601562 c -0.101563 -0.617188 -0.15625 -1.292969 -0.179688 -2 z m 4.960938 0 h 2.480469 c -0.0625 0.714844 -0.253907 1.390625 -0.566407 2 h -2.082031 c 0.097656 -0.625 0.148438 -1.300781 0.167969 -2 z m -7.210938 3 h 1.617188 c 0.109375 0.457031 0.230469 0.890625 0.378906 1.273438 c 0.042969 0.117187 0.097656 0.210937 0.148437 0.320312 c -0.847656 -0.347656 -1.574218 -0.902344 -2.144531 -1.59375 z m 2.640625 0 h 3.179688 c -0.085938 0.332031 -0.183594 0.640625 -0.289063 0.917969 c -0.167969 0.433593 -0.359375 0.765625 -0.550781 1.027343 c -0.246094 0.03125 -0.496094 0.054688 -0.75 0.054688 s -0.503906 -0.023438 -0.75 -0.054688 c -0.191406 -0.261718 -0.382812 -0.59375 -0.550781 -1.027343 c -0.105469 -0.277344 -0.203125 -0.585938 -0.289063 -0.917969 z m 4.203125 0 h 1.617188 c -0.570313 0.691406 -1.296875 1.246094 -2.144531 1.59375 c 0.050781 -0.109375 0.105468 -0.203125 0.148437 -0.320312 c 0.148437 -0.382813 0.269531 -0.816407 0.378906 -1.273438 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwGlobesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwGlobesymbolic;
