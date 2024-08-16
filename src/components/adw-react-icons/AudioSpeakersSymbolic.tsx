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
      <path d="m 12.039062 0.00390625 c -0.257812 -0.01171875 -0.523437 0.07421875 -0.726562 0.28124975 l -3.3125 3.292969 v 1.421875 h 1.390625 l 3.304687 -3.300781 c 0.40625 -0.402344 0.359376 -1.039063 0.03125 -1.390625 c -0.175781 -0.183594 -0.429687 -0.292969 -0.6875 -0.30468775 z m -5.039062 1.00390575 c -0.296875 -0.003906 -0.578125 0.125 -0.769531 0.351563 l -3.230469 3.640625 h -1 c -1.09375 0 -2 0.84375 -2 2 v 2 c 0 1.089844 0.910156 2 2 2 h 1 l 3.230469 3.640625 c 0.210937 0.253906 0.492187 0.363281 0.769531 0.359375 z m 1 5.992188 v 2 h 6 c 0.75 0 1 -0.5 1 -1 s -0.25 -1 -1 -1 z m 0 4 v 1.421875 l 3.324219 3.292969 c 0.402343 0.410156 1.0625 0.347656 1.414062 -0.023438 c 0.328125 -0.351562 0.371094 -0.988281 -0.03125 -1.390625 l -3.316406 -3.300781 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwAudioSpeakersSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAudioSpeakersSymbolic;
