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
      <path d="m 8 1.992188 c -2.617188 0 -5.238281 0.933593 -7.195312 2.808593 l -0.496094 0.480469 c -0.3984378 0.378906 -0.410156 1.011719 -0.03125 1.410156 c 0.003906 0.003906 0.011718 0.011719 0.015625 0.015625 l 2.863281 2.863281 c 0.046875 0.074219 0.101562 0.144532 0.171875 0.207032 c 0.40625 0.371094 1.039063 0.339844 1.414063 -0.070313 l 0.496093 -0.546875 c 1.277344 -1.402344 4.160157 -1.496094 5.523438 0 l 0.5 0.546875 c 0.371093 0.410157 1.003906 0.441407 1.414062 0.070313 c 0.066407 -0.0625 0.117188 -0.128906 0.164063 -0.203125 l 2.867187 -2.867188 c 0.003907 -0.003906 0.011719 -0.011719 0.015625 -0.015625 c 0.378906 -0.398437 0.367188 -1.03125 -0.03125 -1.410156 l -0.496094 -0.480469 c -1.957031 -1.875 -4.578124 -2.808593 -7.195312 -2.808593 z m 0 2.039062 c 2.023438 0 4.042969 0.664062 5.5625 1.992188 l -1.550781 1.550781 c -1.105469 -1.070313 -2.582031 -1.585938 -4.042969 -1.574219 s -2.914062 0.546875 -3.976562 1.578125 l -1.554688 -1.554687 c 1.519531 -1.328126 3.539062 -1.992188 5.5625 -1.992188 z m 0 5.96875 c -0.511719 0 -1.023438 0.195312 -1.414062 0.585938 c -0.78125 0.78125 -0.78125 2.046874 0 2.828124 s 2.046874 0.78125 2.828124 0 s 0.78125 -2.046874 0 -2.828124 c -0.390624 -0.390626 -0.902343 -0.585938 -1.414062 -0.585938 z m 0 0" fill="currentColor" fill-opacity="0.34902"/>
    </svg>
  );
};

const AdwNetworkWirelessConnectedSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNetworkWirelessConnectedSymbolic;
