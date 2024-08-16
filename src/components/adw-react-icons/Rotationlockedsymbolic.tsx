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
      <g fill="#2e3436">
        <path d="m 6.976562 0 c -0.800781 0.0078125 -1.59375 0.3125 -2.203124 0.910156 l -2.773438 2.707032 v -0.597657 c 0 -0.550781 -0.449219 -1 -1 -1 s -1 0.449219 -1 1 v 3 c 0 0.550781 0.449219 1 1 1 h 3 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -0.574219 l 2.753907 -2.707031 c 0.367187 -0.359375 1.246093 -0.367188 1.601562 -0.019531 l 5.519531 5.4375 c 0.390625 0.390625 1.023438 0.382812 1.410157 -0.011719 c 0.390624 -0.390625 0.382812 -1.023438 -0.007813 -1.410156 l -5.519531 -5.417969 c -0.613282 -0.601563 -1.410156 -0.890625 -2.207032 -0.890625 z m -4.945312 8.019531 c -0.277344 -0.007812 -0.546875 0.097657 -0.742188 0.300781 c -0.386718 0.390626 -0.386718 1.023438 0.007813 1.410157 l 5.484375 5.378906 c 0.613281 0.605469 1.421875 0.867187 2.21875 0.878906 v -1.976562 c -0.339844 -0.011719 -0.65625 -0.148438 -0.816406 -0.304688 l -5.480469 -5.398437 c -0.152344 -0.148438 -0.34375 -0.246094 -0.550781 -0.277344 c -0.042969 -0.007812 -0.082032 -0.007812 -0.121094 -0.011719 z m 0 0" fill-opacity="0.34902"/>
        <path d="m 13 9.019531 c -1.097656 0 -2 0.902344 -2 2 v 1 h -1 v 4 h 6 v -4 h -1 v -1 c 0 -1.097656 -0.902344 -2 -2 -2 z m 0 1 c 0.5625 0 1 0.4375 1 1 v 1 h -2 v -1 c 0 -0.5625 0.4375 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwRotationlockedsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRotationlockedsymbolic;
