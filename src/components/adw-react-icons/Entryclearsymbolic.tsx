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
      <path d="m 7.007812 2.011719 c -0.832031 0 -1.554687 0.347656 -2.292968 0.78125 c -0.734375 0.4375 -1.460938 1.003906 -2.125 1.601562 c -0.664063 0.597657 -1.257813 1.222657 -1.710938 1.796875 c -0.222656 0.289063 -0.414062 0.558594 -0.570312 0.835938 c -0.152344 0.277344 -0.3007815 0.527344 -0.3007815 0.984375 c 0 0.460937 0.1484375 0.710937 0.3007815 0.988281 c 0.15625 0.277344 0.347656 0.546875 0.570312 0.835938 c 0.453125 0.574218 1.046875 1.199218 1.710938 1.796874 c 0.664062 0.597657 1.390625 1.164063 2.125 1.597657 c 0.738281 0.4375 1.460937 0.78125 2.292968 0.78125 h 6 c 1.648438 0 3 -1.351563 3 -3 v -6 c 0 -1.644531 -1.351562 -3 -3 -3 z m 1 3 c 0.265626 0.003906 0.519532 0.105469 0.707032 0.292969 l 1.292968 1.296874 l 1.296876 -1.296874 c 0.1875 -0.1875 0.441406 -0.289063 0.703124 -0.292969 c 0.265626 0.003906 0.519532 0.105469 0.707032 0.292969 c 0.390625 0.390624 0.390625 1.027343 0 1.414062 l -1.292969 1.292969 l 1.292969 1.292969 c 0.390625 0.390624 0.390625 1.027343 0 1.414062 c -0.386719 0.390625 -1.023438 0.390625 -1.410156 0 l -1.296876 -1.292969 l -1.292968 1.292969 c -0.386719 0.390625 -1.023438 0.390625 -1.410156 0 c -0.390626 -0.386719 -0.390626 -1.023438 0 -1.414062 l 1.292968 -1.292969 l -1.292968 -1.292969 c -0.390626 -0.386719 -0.390626 -1.023438 0 -1.414062 c 0.1875 -0.1875 0.441406 -0.289063 0.703124 -0.292969 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwEntryclearsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEntryclearsymbolic;
