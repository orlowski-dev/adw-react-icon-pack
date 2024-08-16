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
      <path d="m 6 0 v 1.394531 c -1.867188 0.769531 -3.269531 2.574219 -3.78125 4.769531 c -0.714844 0.304688 -1.21875 1.015626 -1.21875 1.835938 s 0.503906 1.527344 1.210938 1.835938 c 0.683593 2.921874 2.953124 5.164062 5.789062 5.164062 s 5.105469 -2.242188 5.789062 -5.164062 c 0.707032 -0.308594 1.210938 -1.015626 1.210938 -1.835938 s -0.503906 -1.53125 -1.214844 -1.835938 c -0.511718 -2.195312 -1.914062 -4 -3.785156 -4.769531 v -1.394531 z m 1 1 h 2 v 2 h -2 z m -1 2.683594 v 0.316406 h 4 v -0.316406 c 0.824219 0.597656 1.476562 1.550781 1.792969 2.722656 c -0.480469 0.367188 -0.792969 0.949219 -0.792969 1.59375 s 0.3125 1.222656 0.792969 1.589844 c -0.546875 2.027344 -2.09375 3.410156 -3.792969 3.410156 s -3.246094 -1.382812 -3.792969 -3.410156 c 0.480469 -0.367188 0.792969 -0.945313 0.792969 -1.589844 s -0.3125 -1.222656 -0.792969 -1.589844 c 0.316407 -1.175781 0.96875 -2.128906 1.792969 -2.726562 z m -3 3.316406 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m 10 0 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDrawOvalSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDrawOvalSymbolic;
