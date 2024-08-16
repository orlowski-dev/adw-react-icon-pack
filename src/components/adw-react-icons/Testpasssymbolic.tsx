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
        <path d="m 8.234375 1.003906 c -2.15625 -0.070312 -4.277344 0.859375 -5.683594 2.601563 c -1.871093 2.316406 -2.066406 5.582031 -0.484375 8.105469 c 1.582032 2.527343 4.601563 3.777343 7.503906 3.109374 c 2.90625 -0.667968 5.074219 -3.117187 5.390626 -6.082031 c 0.046874 -0.359375 -0.101563 -0.71875 -0.394532 -0.933593 c -0.292968 -0.21875 -0.679687 -0.257813 -1.011718 -0.109376 c -0.332032 0.152344 -0.554688 0.472657 -0.582032 0.835938 c -0.226562 2.121094 -1.769531 3.863281 -3.851562 4.34375 c -2.078125 0.476562 -4.226563 -0.414062 -5.359375 -2.222656 c -1.132813 -1.808594 -0.992188 -4.128906 0.347656 -5.792969 s 3.578125 -2.289063 5.585937 -1.5625 c 0.339844 0.128906 0.71875 0.066406 0.996094 -0.167969 c 0.28125 -0.230468 0.410156 -0.59375 0.34375 -0.949218 c -0.0625 -0.355469 -0.316406 -0.648438 -0.660156 -0.761719 c -0.699219 -0.253907 -1.421875 -0.390625 -2.140625 -0.414063 z m 0 0"/>
        <path d="m 13.167969 2.542969 l -5.292969 5.292969 l -2.417969 -2.417969 l -1.414062 1.414062 l 3.832031 3.832031 l 6.707031 -6.707031 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTestpasssymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTestpasssymbolic;
