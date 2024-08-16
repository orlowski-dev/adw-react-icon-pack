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
      <path d="m 8.097656 -0.0820312 c -0.273437 -0.0078126 -0.539062 0.0976562 -0.734375 0.2929692 l -7.070312 7.070312 c -0.2851565 0.285156 -0.371094 0.714844 -0.214844 1.089844 c 0.152344 0.375 0.515625 0.617187 0.921875 0.617187 h 2 v 6 c 0 0.550781 0.449219 1 1 1 h 8 c 0.550781 0 1 -0.449219 1 -1 v -6 h 2.140625 c 0.40625 0 0.769531 -0.242187 0.925781 -0.617187 s 0.070313 -0.804688 -0.21875 -1.089844 l -7.070312 -7.070312 c -0.179688 -0.179688 -0.421875 -0.2851568 -0.679688 -0.2929692 z m -0.027344 2.4140622 l 4.65625 4.65625 h -0.726562 c -0.550781 0 -1 0.449219 -1 1 v 2.011719 h -6 v -2.011719 c 0 -0.550781 -0.449219 -1 -1 -1 h -0.585938 z m -3.070312 9.667969 h 6 v 1.988281 h -6 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwKeyboardcapslockwidesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwKeyboardcapslockwidesymbolic;
