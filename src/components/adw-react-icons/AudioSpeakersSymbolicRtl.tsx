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
      <path d="m 3.960938 0.00390625 c -0.257813 0.01171875 -0.511719 0.12109375 -0.6875 0.30468775 c -0.332032 0.351562 -0.375 0.988281 0.03125 1.390625 l 3.304687 3.300781 h 1.390625 v -1.421875 l -3.3125 -3.292969 c -0.203125 -0.207031 -0.46875 -0.2929685 -0.726562 -0.28124975 z m 5.039062 1.00390575 v 13.992188 c 0.277344 0.003906 0.558594 -0.105469 0.765625 -0.359375 l 3.234375 -3.640625 h 1 c 1.089844 0 2 -0.910156 2 -2 v -2 c 0 -1.15625 -0.90625 -2 -2 -2 h -1 l -3.234375 -3.640625 c -0.1875 -0.226563 -0.46875 -0.355469 -0.765625 -0.351563 z m -7 5.992188 c -0.75 0 -1 0.5 -1 1 s 0.25 1 1 1 h 6 v -2 z m 4.609375 4 l -3.316406 3.300781 c -0.402344 0.402344 -0.359375 1.039063 -0.027344 1.390625 c 0.347656 0.371094 1.007813 0.433594 1.410156 0.023438 l 3.324219 -3.292969 v -1.421875 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwAudioSpeakersSymbolicRtl = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAudioSpeakersSymbolicRtl;
