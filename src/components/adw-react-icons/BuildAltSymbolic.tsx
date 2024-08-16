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
      <path d="m 10.785156 1.082031 c 0.558594 0.511719 1.222656 1.207031 2.179688 2.167969 c 0.28125 0.28125 0.390625 0.746094 0.175781 1.246094 c -0.097656 0.25 -0.039063 0.53125 0.152344 0.71875 c 0.261719 0.253906 0.679687 0.253906 0.945312 0 c 0.261719 -0.261719 0.792969 -0.085938 0.921875 0.042968 l 0.480469 0.480469 v -0.003906 c 0.394531 0.390625 0.394531 1.027344 0 1.417969 l -2.363281 2.367187 c -0.390625 0.390625 -1.027344 0.390625 -1.417969 0 l -0.460937 -0.523437 c -0.261719 -0.261719 -0.261719 -0.683594 0 -0.945313 c 0.261718 -0.261719 0.261718 -0.683593 0 -0.945312 c -0.261719 -0.253907 -0.746094 -0.296875 -1.011719 -0.042969 l -1.171875 1.105469 l -2.441406 -2.445313 s 0.839843 -0.828125 1.085937 -1.066406 c 0.617187 -0.625 0.0625 -1.152344 -0.210937 -1.417969 c -0.664063 -0.660156 -2.039063 -0.921875 -2.976563 -0.882812 c -0.292969 0.011719 -0.558594 -0.167969 -0.660156 -0.441407 c -0.097657 -0.277343 -0.003907 -0.585937 0.234375 -0.761718 c 2.753906 -1.1601565 5.453125 -1.1601565 6.539062 -0.070313 z m -2.449218 8.035157 l -5.289063 5.277343 c -0.371094 0.375 -0.671875 0.625 -1.019531 0.625 c -1.089844 -0.027343 -1.9726565 -0.910156 -2.0000002 -2 c 0 -0.53125 0.1289062 -0.726562 0.5039062 -1.097656 l 5.296875 -5.273437 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwBuildAltSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBuildAltSymbolic;
