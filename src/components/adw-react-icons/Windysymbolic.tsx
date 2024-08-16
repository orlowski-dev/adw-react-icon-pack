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
      <path d="m 5.542969 1.003906 c -0.132813 -0.003906 -0.269531 0.003906 -0.402344 0.019532 c -0.53125 0.070312 -1.042969 0.308593 -1.441406 0.707031 c -0.257813 0.253906 -0.363281 0.625 -0.273438 0.976562 c 0.09375 0.351563 0.367188 0.621094 0.71875 0.714844 c 0.351563 0.089844 0.722657 -0.015625 0.972657 -0.277344 c 0.164062 -0.164062 0.398437 -0.191406 0.597656 -0.078125 c 0.199218 0.113282 0.289062 0.339844 0.230468 0.5625 c -0.058593 0.226563 -0.25 0.371094 -0.476562 0.371094 h -5.46875 v 2 h 5.46875 c 1.125 0 2.121094 -0.765625 2.410156 -1.855469 c 0.289063 -1.085937 -0.1875 -2.246093 -1.160156 -2.808593 c -0.367188 -0.210938 -0.773438 -0.320313 -1.175781 -0.332032 z m 6.769531 1 c -1.546875 0.085938 -2.902344 1.203125 -3.238281 2.765625 c -0.113281 0.542969 0.230469 1.074219 0.773437 1.1875 c 0.539063 0.117188 1.070313 -0.230469 1.183594 -0.769531 c 0.167969 -0.78125 0.886719 -1.285156 1.675781 -1.175781 c 0.792969 0.113281 1.34375 0.796875 1.289063 1.59375 c -0.054688 0.796875 -0.699219 1.394531 -1.496094 1.394531 h -12.5 v 2 h 12.5 c 1.828125 0 3.363281 -1.429688 3.492188 -3.257812 c 0.128906 -1.824219 -1.195313 -3.453126 -3.003907 -3.710938 c -0.226562 -0.03125 -0.453125 -0.039062 -0.675781 -0.027344 z m -12.3125 7.996094 v 2 h 10 h 0.003906 c 0.464844 0 0.859375 0.3125 0.96875 0.769531 s -0.105468 0.914063 -0.523437 1.125 c -0.417969 0.210938 -0.910157 0.105469 -1.210938 -0.25 c -0.355469 -0.425781 -0.984375 -0.480469 -1.410156 -0.125 c -0.421875 0.355469 -0.476563 0.984375 -0.121094 1.40625 c 0.441407 0.53125 1.042969 0.875 1.691407 1.011719 c 0.644531 0.132812 1.332031 0.054688 1.949218 -0.257812 c 1.238282 -0.621094 1.890625 -2.023438 1.574219 -3.371094 c -0.320313 -1.347656 -1.535156 -2.308594 -2.921875 -2.308594 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwWindysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwWindysymbolic;
