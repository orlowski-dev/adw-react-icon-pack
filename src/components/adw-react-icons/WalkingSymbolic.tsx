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
        <path d="m 8.332031 4.960938 l -1.867187 0.019531 c -0.417969 0.003906 -0.816406 0.183593 -1.089844 0.5 l -0.839844 0.957031 c -0.277344 0.316406 -0.496094 0.6875 -0.640625 1.085938 l -0.78125 2.1875 c -0.257812 0.492187 0.015625 1.179687 0.542969 1.359374 c 0.527344 0.175782 1.175781 -0.210937 1.269531 -0.757812 l 0.796875 -2.164062 c 0.054688 -0.152344 0.136719 -0.292969 0.242188 -0.414063 l 0.105468 -0.117187 v 2.980468 l -2.023437 3.886719 c -0.253906 0.488281 -0.0625 1.09375 0.425781 1.347656 c 0.488282 0.253907 1.09375 0.066407 1.347656 -0.421875 l 2.015626 -3.824218 l -0.144532 -0.441407 l 0.230469 0.410157 l 2.0625 3.863281 c 0.25 0.488281 0.851563 0.683593 1.34375 0.4375 c 0.414063 -0.210938 0.628906 -0.679688 0.515625 -1.132813 l 0.007812 -0.003906 l -0.011718 -0.027344 c -0.019532 -0.0625 -0.042969 -0.125 -0.074219 -0.183594 l -2.03125 -3.996093 c -0.011719 -0.011719 -0.019531 -0.027344 -0.03125 -0.042969 l -0.632813 -1.25 v -1.695312 l 2.269532 2.027343 c 0.367187 0.382813 1.070312 0.367188 1.421875 -0.035156 c 0.351562 -0.402344 0.277343 -1.101563 -0.152344 -1.417969 l -2.988281 -2.65625 c -0.355469 -0.3125 -0.8125 -0.484375 -1.289063 -0.480468 z m 0 0"/>
        <path d="m 10.125 1.933594 c 0 1.070312 -0.867188 1.933594 -1.9375 1.933594 c -1.066406 0 -1.933594 -0.863282 -1.933594 -1.933594 c 0 -1.070313 0.867188 -1.933594 1.933594 -1.933594 c 1.070312 0 1.9375 0.863281 1.9375 1.933594 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwWalkingSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwWalkingSymbolic;
