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
      <path d="m 8 0 c -0.769531 0 -1.539062 0.292969 -2.121094 0.875 l -5.003906 5.003906 c -1.164062 1.164063 -1.164062 3.078125 0 4.242188 l 5.003906 5.003906 c 1.164063 1.164062 3.078125 1.164062 4.242188 0 l 5.007812 -5.003906 c 1.164063 -1.164063 1.164063 -3.078125 0 -4.242188 l -5.007812 -5.003906 c -0.582032 -0.582031 -1.351563 -0.875 -2.121094 -0.875 z m 0.101562 1.988281 c 0.210938 0.023438 0.414063 0.117188 0.585938 0.28125 l -0.339844 0.113281 c -0.074218 -0.136718 -0.15625 -0.269531 -0.246094 -0.394531 z m -1.570312 1.058594 c 0.300781 0.421875 0.464844 0.929687 0.46875 1.453125 c 0 1.378906 -1.121094 2.5 -2.5 2.5 c -0.523438 -0.003906 -1.03125 -0.171875 -1.449219 -0.472656 z m 3.441406 0.503906 l 3.742188 3.742188 c 0.402344 0.402343 0.402344 1.011719 0 1.414062 l -0.253906 0.25 c -0.039063 -0.046875 -0.074219 -0.09375 -0.117188 -0.140625 l 0.621094 -0.855468 l -0.808594 -0.585938 l -0.621094 0.851562 c -0.167968 -0.078124 -0.347656 -0.136718 -0.535156 -0.175781 v -1.050781 h -1 v 1.050781 c -0.183594 0.039063 -0.363281 0.097657 -0.53125 0.175781 l -0.621094 -0.851562 l -0.804687 0.585938 l 0.617187 0.855468 c -0.125 0.136719 -0.238281 0.289063 -0.332031 0.453125 l -1 -0.324219 l -0.308594 0.949219 l 1 0.324219 c -0.011719 0.09375 -0.019531 0.1875 -0.019531 0.28125 s 0.007812 0.1875 0.019531 0.28125 l -1 0.324219 l 0.308594 0.949219 l 1 -0.324219 c 0.09375 0.164062 0.207031 0.316406 0.332031 0.453125 l -0.617187 0.855468 l 0.195312 0.140626 l -0.53125 0.53125 c -0.402343 0.40625 -1.011719 0.40625 -1.414062 0 l -4.902344 -4.902344 l 0.027344 -0.039063 l 0.207031 -0.289062 c 0.332031 0.152343 0.683594 0.269531 1.046875 0.339843 v 1.179688 h 1.652344 v -1.179688 c 0.363281 -0.070312 0.714843 -0.1875 1.046875 -0.339843 l 0.207031 0.289062 l 0.484375 0.667969 l 1.332031 -0.972656 l -0.480469 -0.667969 l -0.210937 -0.289063 c 0.25 -0.269531 0.46875 -0.566406 0.644531 -0.890624 l 0.339844 0.113281 l 0.785156 0.253906 l 0.511719 -1.566406 l -0.785156 -0.257813 l -0.339844 -0.109375 c 0.023437 -0.179687 0.039063 -0.363281 0.039063 -0.550781 s -0.015626 -0.371094 -0.039063 -0.550781 l 0.339844 -0.109375 l 0.785156 -0.257813 z m 1.527344 5.449219 c 0.527344 0 0.984375 0.265625 1.25 0.667969 l -2.078125 2.082031 c -0.40625 -0.269531 -0.671875 -0.722656 -0.671875 -1.25 c 0 -0.835938 0.667969 -1.5 1.5 -1.5 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwApplicationXExecutableSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwApplicationXExecutableSymbolic;
