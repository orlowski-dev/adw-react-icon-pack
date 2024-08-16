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
      <path d="m 7 0 c -1.621094 0 -3.066406 0.78125 -3.980469 1.988281 l -1.519531 -1.519531 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 l -1.792969 -1.792969 c 0.1875 -0.527343 0.292969 -1.089843 0.292969 -1.675781 v -6 c 0 -2.753906 -2.246094 -5 -5 -5 z m 0 2 h 2 c 1.679688 0 3 1.320312 3 3 v 5.96875 l -3.277344 -3.28125 c 0.171875 -0.175781 0.277344 -0.417969 0.277344 -0.6875 v -3 c 0 -0.554688 -0.445312 -1 -1 -1 s -1 0.445312 -1 1 v 1.96875 l -2.554688 -2.554688 c 0.523438 -0.855468 1.460938 -1.414062 2.554688 -1.414062 z m -5 3.089844 v 5.910156 c 0 2.753906 2.246094 5 5 5 h 2 c 1.097656 0 2.117188 -0.359375 2.945312 -0.964844 l -1.433593 -1.433594 c -0.445313 0.25 -0.957031 0.398438 -1.511719 0.398438 h -2 c -1.679688 0 -3 -1.320312 -3 -3 v -3.910156 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMousewirelessdisabledsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMousewirelessdisabledsymbolic;
