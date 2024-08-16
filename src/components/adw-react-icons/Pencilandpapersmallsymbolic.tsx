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
        <path d="m 7 8.769531 l 4.734375 -4.773437 c 0.15625 -0.15625 0.367187 -0.246094 0.589844 -0.246094 c 0.222656 0 0.4375 0.085938 0.59375 0.242188 l 0.042969 0.046874 c 0.328124 0.328126 0.328124 0.859376 0.003906 1.1875 l -4.734375 4.773438 h -1.230469 z m 0 0" fill-rule="evenodd"/>
        <path d="m 10.707031 4.292969 l -1.292969 -1.292969 h -3.414062 c -1.109375 0 -2 0.890625 -2 2 v 6 c 0 1.109375 0.890625 2 2 2 h 4 c 1.109375 0 2 -0.890625 2 -2 v -2 h -2 v 2 h -4 v -6 h 3 l -0.707031 -0.292969 l 1 1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPencilandpapersmallsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPencilandpapersmallsymbolic;
