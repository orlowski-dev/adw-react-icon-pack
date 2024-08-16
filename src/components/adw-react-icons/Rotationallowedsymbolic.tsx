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
      <path d="m 6.976562 -0.0195312 c -0.800781 0.0078124 -1.59375 0.3125002 -2.203124 0.9101562 l -2.773438 2.707031 v -0.597656 c 0 -0.550781 -0.449219 -1 -1 -1 s -1 0.449219 -1 1 v 3 c 0 0.550781 0.449219 1 1 1 h 3 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -0.574219 l 2.753907 -2.707031 c 0.367187 -0.359375 1.246093 -0.367188 1.601562 -0.019531 l 5.519531 5.4375 c 0.390625 0.390624 1.023438 0.382812 1.410157 -0.011719 c 0.390624 -0.390625 0.382812 -1.023438 -0.007813 -1.410157 l -5.519531 -5.417968 c -0.613282 -0.601563 -1.410156 -0.8906252 -2.207032 -0.8906252 z m -4.828124 8.0312502 c -0.316407 -0.046875 -0.636719 0.058593 -0.859376 0.289062 c -0.386718 0.390625 -0.386718 1.023438 0.007813 1.410157 l 5.484375 5.378906 c 0.617188 0.609375 1.4375 0.875 2.242188 0.882812 c 0.804687 0.007813 1.636718 -0.246094 2.265624 -0.871094 l 2.710938 -2.6875 v 0.585938 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -3 c 0 -0.550781 -0.449219 -1 -1 -1 h -3 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 0.585938 l -2.710938 2.710938 c -0.15625 0.15625 -0.476562 0.285156 -0.832031 0.28125 c -0.355469 0 -0.691407 -0.140626 -0.863281 -0.304688 l -5.480469 -5.398438 c -0.148438 -0.148437 -0.339844 -0.246093 -0.550781 -0.277343 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwRotationallowedsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRotationallowedsymbolic;
