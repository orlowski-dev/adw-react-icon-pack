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
        <path d="m 1 3 h 14 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 h -14 c -0.550781 0 -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/>
        <path d="m 4 4 v -1.5 c 0 -1.386719 1.113281 -2.5 2.5 -2.5 h 2.980469 c 1.382812 0 2.5 1.113281 2.5 2.5 v 1.5 h -2 v -1.5 c 0 -0.269531 -0.230469 -0.5 -0.5 -0.5 h -2.980469 c -0.269531 0 -0.5 0.230469 -0.5 0.5 v 1.5 z m 0 0"/>
        <path d="m 3.957031 4.289062 l -0.316406 1.0625 c -0.722656 2.402344 -0.78125 4.957032 -0.171875 7.394532 l 0.015625 0.070312 c 0.175781 0.695313 0.800781 1.183594 1.515625 1.183594 h 6 c 0.714844 0 1.339844 -0.488281 1.515625 -1.183594 l 0.015625 -0.070312 c 0.609375 -2.4375 0.550781 -4.992188 -0.171875 -7.394532 l -0.316406 -1.0625 l 1.914062 -0.578124 l 0.320313 1.066406 c 0.824218 2.746094 0.890625 5.667968 0.195312 8.453125 l -0.015625 0.070312 c -0.398437 1.589844 -1.820312 2.699219 -3.457031 2.699219 h -6 c -1.636719 0 -3.058594 -1.109375 -3.457031 -2.699219 l -0.015625 -0.070312 c -0.695313 -2.785157 -0.628906 -5.707031 0.195312 -8.453125 l 0.320313 -1.066406 z m 0 0"/>
        <path d="m 6.5 7.191406 c -0.695312 1.679688 -0.527344 3.1875 0.007812 4.636719 c 0.0625 0.167969 0.03125 0.355469 -0.082031 0.492187 c -0.117187 0.140626 -0.296875 0.207032 -0.472656 0.175782 s -0.324219 -0.152344 -0.382813 -0.324219 c -0.605468 -1.632813 -0.816406 -3.375 0.003907 -5.363281 c 0.105469 -0.253906 0.398437 -0.375 0.65625 -0.269532 c 0.253906 0.105469 0.375 0.398438 0.269531 0.652344 z m 0 0"/>
        <path d="m 10.429688 6.808594 c 0.800781 1.945312 0.636718 3.699218 0.007812 5.367187 c -0.097656 0.257813 -0.386719 0.390625 -0.644531 0.292969 c -0.257813 -0.097656 -0.390625 -0.386719 -0.292969 -0.644531 c 0.550781 -1.464844 0.683594 -2.992188 0.007812 -4.632813 c -0.105468 -0.257812 0.015626 -0.546875 0.269532 -0.652344 c 0.253906 -0.105468 0.546875 0.015626 0.652344 0.269532 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwUserTrashFullSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwUserTrashFullSymbolic;
