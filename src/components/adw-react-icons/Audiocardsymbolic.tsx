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
      <path d="m 6 0 v 6.0625 c -0.164062 -0.035156 -0.332031 -0.050781 -0.5 -0.050781 c -1.378906 0 -2.492188 1.113281 -2.496094 2.492187 c 0 1.378906 1.117188 2.496094 2.496094 2.496094 c 1.367188 -0.003906 2.476562 -1.101562 2.492188 -2.46875 h 0.007812 v -4.53125 h 3 l -3 -4 z m 7 0 c -0.550781 0 -1 0.449219 -1 1 v 14 h 2 v -3 h 2 v -3 h -2 v -1 h 2 v -3 h -2 v -3 h 2 v -2 z m -10 2 c -1.332031 0 -2.273438 0.8125 -2.644531 1.550781 c -0.371094 0.742188 -0.355469 1.449219 -0.355469 1.449219 v 6 s -0.015625 0.707031 0.355469 1.449219 c 0.367187 0.738281 1.3125 1.550781 2.644531 1.550781 h 8 v -2 h -8 c -0.667969 0 -0.726562 -0.1875 -0.855469 -0.449219 c -0.128906 -0.257812 -0.144531 -0.550781 -0.144531 -0.550781 v -6 s 0.015625 -0.292969 0.144531 -0.550781 c 0.128907 -0.261719 0.1875 -0.449219 0.855469 -0.449219 h 2 v -2 z m 11 4 h 1 v 1 h -1 z m 0 4 h 1 v 1 h -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwAudiocardsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAudiocardsymbolic;
