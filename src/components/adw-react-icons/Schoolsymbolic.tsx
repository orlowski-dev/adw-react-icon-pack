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
      <path d="m 6.96875 2.96875 l -6.46875 3.5 l 6.5 4.09375 l 5.800781 -3.53125 h 0.207031 v 2.871094 c -0.003906 0.03125 -0.007812 0.066406 -0.007812 0.101562 s 0.003906 0.070313 0.007812 0.105469 v 0.914063 c 0.027344 0.695312 0.441407 1.210937 0.800782 1.554687 c 0.359375 0.339844 0.714844 0.535156 0.714844 0.535156 l 0.488281 -0.875 s -0.253907 -0.140625 -0.515625 -0.386719 c -0.253906 -0.242187 -0.460938 -0.550781 -0.484375 -0.84375 c 0.550781 -0.003906 0.996093 -0.453124 0.996093 -1.003906 c -0.003906 -0.554687 -0.449218 -1.003906 -1 -1.003906 v -2.96875 h -1.316406 z m 0.03125 3.03125 c 0.550781 0 1 0.222656 1 0.5 s -0.449219 0.5 -1 0.5 s -1 -0.222656 -1 -0.5 s 0.449219 -0.5 1 -0.5 z m -3.96875 3.421875 c -0.011719 0.089844 -0.03125 0.179687 -0.03125 0.273437 c 0 1.824219 1.789062 3.304688 4 3.304688 s 4 -1.480469 4 -3.304688 c 0 -0.070312 -0.027344 -0.136718 -0.03125 -0.207031 l -3.96875 2.511719 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSchoolsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSchoolsymbolic;
