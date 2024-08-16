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
        <path d="m 7.996094 0 c -2.835938 0 -5.292969 2 -5.871094 4.777344 c -0.527344 2.535156 0.6875 5.035156 2.871094 6.324218 l 0.003906 0.898438 c 0 0.554688 0.449219 1 1 1 h 4 c 0.550781 0 1 -0.445312 1 -1 v -0.898438 c 2.183594 -1.292968 3.402344 -3.796874 2.871094 -6.332031 c -0.582032 -2.773437 -3.039063 -4.769531 -5.875 -4.769531 z m 0 2 c 1.898437 0 3.527344 1.320312 3.917968 3.179688 c 0.386719 1.863281 -0.574218 3.726562 -2.3125 4.484374 c -0.363281 0.160157 -0.597656 0.519532 -0.601562 0.914063 v 0.421875 h -2.003906 v -0.417969 c 0 -0.398437 -0.234375 -0.753906 -0.597656 -0.914062 c -1.742188 -0.761719 -2.703126 -2.625 -2.316407 -4.484375 s 2.011719 -3.183594 3.914063 -3.183594 z m 0 0"/>
        <path d="m 6 15 c 0 0.554688 0.445312 1 1 1 h 2 c 0.554688 0 1 -0.445312 1 -1 v -1 h -4 z m 0 0"/>
        <path d="m 6.644531 6.144531 c -0.195312 0.195313 -0.195312 0.515625 0 0.707031 l 1 1 c 0.195313 0.195313 0.511719 0.195313 0.707031 0 l 1 -1 c 0.195313 -0.191406 0.195313 -0.511718 0 -0.707031 c -0.195312 -0.191406 -0.511718 -0.191406 -0.707031 0 l -0.648437 0.648438 l -0.644532 -0.648438 c -0.195312 -0.191406 -0.511718 -0.191406 -0.707031 0 z m 0 0" fill-opacity="0.5"/>
    </g>
    </svg>
  );
};

const AdwLightbulbsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLightbulbsymbolic;
