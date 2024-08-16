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
      <path d="m 12.976562 0 c -0.324218 0.0078125 -0.625 0.171875 -0.808593 0.445312 c -1.433594 2.140626 -4.972657 3.269532 -7.125 3.503907 c -0.433594 0.042969 -1.339844 0.050781 -1.894531 0.050781 h -1.148438 c -1.09375 0 -2 0.90625 -2 2 v 3 c 0 1.09375 0.902344 2 1.996094 2.003906 l 1.148437 0.003906 c 0.054688 0 0.136719 0.003907 0.195313 0.003907 l 0.679687 3.199219 c 0.058594 0.257812 0.214844 0.484374 0.4375 0.628906 c 0.222657 0.144531 0.492188 0.195312 0.75 0.140625 c 0.261719 -0.058594 0.488281 -0.214844 0.632813 -0.4375 c 0.144531 -0.222657 0.195312 -0.492188 0.140625 -0.75 l -0.574219 -2.679688 c 2.171875 0.308594 5.40625 1.417969 6.761719 3.445313 c 0.246093 0.363281 0.703125 0.523437 1.121093 0.398437 c 0.421876 -0.128906 0.710938 -0.515625 0.710938 -0.957031 v -4.84375 l 1.734375 -0.695312 c 0.160156 -0.0625 0.265625 -0.21875 0.265625 -0.394532 v -1.132812 c 0 -0.171875 -0.105469 -0.328125 -0.265625 -0.390625 l -1.734375 -0.695313 v -4.847656 c 0 -0.441406 -0.289062 -0.828125 -0.707031 -0.9570312 c -0.105469 -0.03125 -0.210938 -0.04687505 -0.316407 -0.0429688 z m -0.976562 3.476562 v 8.054688 c -2.105469 -1.601562 -4.835938 -2.25 -6.746094 -2.457031 c -0.078125 -0.007813 -0.167968 -0.011719 -0.253906 -0.015625 v -3.101563 c 0.085938 -0.007812 0.175781 -0.011719 0.253906 -0.019531 c 1.910156 -0.207031 4.640625 -0.863281 6.746094 -2.460938 z m -8 2.515626 v 3.023437 c -0.308594 -0.003906 -0.613281 -0.003906 -0.84375 -0.007813 l -1.152344 -0.003906 c -0.015625 0 -0.003906 0.011719 -0.003906 -0.003906 v -3 h 1.148438 c 0.234374 0 0.542968 -0.003906 0.851562 -0.007812 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwBullhornSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBullhornSymbolic;
