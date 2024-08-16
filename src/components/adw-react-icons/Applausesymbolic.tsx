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
        <path d="m 7.714844 5 c 0.972656 0.003906 1.839844 0.003906 2.402344 0.003906 c 1 -0.003906 1.445312 -0.984375 0.792968 -1.742187 l -0.441406 -0.507813 c -0.273438 -0.316406 -0.273438 -0.789062 0.003906 -1.105468 l -0.019531 0.023437 c 0.207031 -0.222656 0.566406 -0.230469 0.78125 -0.015625 c 0.003906 0.007812 0.011719 0.015625 0.019531 0.019531 l 2.546875 2.359375 c 0.003907 0.003906 0.007813 0.007813 0.007813 0.011719 c 0.4375 0.390625 0.6875 0.945313 0.691406 1.40625 v 4.085937 s 0.019531 1.429688 -1.527344 1.429688 c -0.414062 0 -0.75 0.335938 -0.75 0.75 s 0.335938 0.75 0.75 0.75 c 0.78125 0 1.421875 -0.324219 1.464844 -0.347656 c 0.789062 -0.375 1.5625 -1.167969 1.5625 -2.582032 v -4.089843 c -0.003906 -0.914063 -0.476562 -1.882813 -1.191406 -2.523438 l 0.011718 0.011719 l -2.546874 -2.359375 l 0.019531 0.015625 c -0.820313 -0.816406 -2.144531 -0.792969 -2.933594 0.050781 c -0.007813 0.007813 -0.011719 0.015625 -0.019531 0.019531 c -0.765625 0.882813 -0.765625 2.1875 -0.003906 3.070313 l 0.4375 0.507813 c 0.003906 0.003906 0 0 0 0 s -0.011719 -0.023438 -0.011719 -0.023438 s -0.015625 -0.039062 -0.015625 -0.039062 s -0.015625 -0.050782 -0.015625 -0.050782 s 0.265625 -0.585937 0.265625 -0.585937 s 0.042968 -0.019531 0.042968 -0.019531 s 0.042969 -0.015626 0.042969 -0.015626 s 0.03125 -0.003906 0.03125 -0.003906 s 0.003907 0 0 0 c -0.558593 0 -1.421875 0 -2.390625 -0.003906 c -0.414062 0 -0.75 0.332031 -0.753906 0.746094 c -0.003906 0.414062 0.332031 0.75 0.746094 0.753906 z m 0 0"/>
        <path d="m 2.015625 5.058594 c 0.285156 -0.285156 0.746094 -0.285156 1.027344 0 l 3.34375 3.339844 s 0.257812 0.257812 0.515625 0 c 0.257812 -0.253907 0 -0.511719 0 -0.511719 l -2.316406 -2.316407 c -0.285157 -0.285156 -0.285157 -0.742187 0 -1.027343 c 0.285156 -0.285157 0.746093 -0.285157 1.03125 0 l 4.242187 4.246093 c 0.070313 0.070313 0.128906 0.046876 0.128906 -0.054687 c 0 -0.335937 0.007813 -1.085937 0.007813 -1.746094 c 0.003906 -0.546875 0.445312 -0.988281 0.992187 -0.988281 h 0.023438 c 0.546875 0 0.988281 0.441406 0.988281 0.988281 v 3.210938 c 0.042969 0.773437 -0.242188 1.566406 -0.726562 2.058593 l -3.085938 3.085938 c -1.542969 1.542969 -3.085938 0 -3.085938 0 l -4.113281 -4.113281 c -0.285156 -0.285157 -0.285156 -0.746094 0 -1.03125 c 0.285157 -0.285157 0.742188 -0.285157 1.027344 0 l 1.800781 1.800781 s 0.257813 0.257812 0.515625 0 c 0.253907 -0.257812 0 -0.515625 0 -0.515625 l -3.34375 -3.339844 c -0.285156 -0.285156 -0.285156 -0.746093 0 -1.03125 c 0.285157 -0.285156 0.742188 -0.285156 1.027344 0 l 2.828125 2.828125 s 0.257812 0.257813 0.515625 0 c 0.257813 -0.253906 0 -0.511718 0 -0.511718 l -3.34375 -3.34375 c -0.285156 -0.285157 -0.285156 -0.742188 0 -1.027344 z m 0 0"/>
        <path d="m 5.765625 0.0195312 c -0.019531 0 -0.035156 0 -0.050781 0.0039063 c -1.664063 0.1640625 -3.054688 0.7656245 -4.042969 1.7578125 c -0.992187 0.992188 -1.570313 2.359375 -1.671875 3.96875 c -0.0078125 0.132812 0.0390625 0.261719 0.125 0.363281 c 0.085938 0.097657 0.210938 0.160157 0.34375 0.167969 c 0.273438 0.019531 0.515625 -0.191406 0.53125 -0.46875 c 0.089844 -1.414062 0.570312 -2.519531 1.378906 -3.324219 c 0.804688 -0.804687 1.949219 -1.324219 3.433594 -1.472656 c 0.273438 -0.027344 0.472656 -0.273437 0.449219 -0.546875 c -0.027344 -0.257812 -0.246094 -0.4492188 -0.496094 -0.4492188 z m 0.179687 1.9062498 c -0.019531 0 -0.035156 0 -0.050781 0.003907 c -1.15625 0.132812 -2.101562 0.546874 -2.773437 1.238281 c -0.316406 0.320312 -0.566406 0.691406 -0.761719 1.113281 c 0.34375 -0.042969 0.699219 0.042969 0.984375 0.265625 c 0.136719 -0.261719 0.296875 -0.488281 0.492188 -0.683594 c 0.492187 -0.503906 1.183593 -0.828125 2.171874 -0.941406 c 0.273438 -0.035156 0.46875 -0.28125 0.4375 -0.554687 c -0.03125 -0.257813 -0.25 -0.445313 -0.5 -0.441407 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwApplausesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwApplausesymbolic;
