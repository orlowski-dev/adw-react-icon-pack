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
        <path d="m 7.5 0 c -4.128906 0 -7.5 3.371094 -7.5 7.5 s 3.371094 7.5 7.5 7.5 s 7.5 -3.371094 7.5 -7.5 s -3.371094 -7.5 -7.5 -7.5 z m 0 2 c 3.050781 0 5.5 2.449219 5.5 5.5 s -2.449219 5.5 -5.5 5.5 s -5.5 -2.449219 -5.5 -5.5 s 2.449219 -5.5 5.5 -5.5 z m 0 0"/>
        <path d="m 4.207031 3.097656 c -1.332031 1 -2.140625 2.542969 -2.207031 4.203125 l 0.210938 0.214844 l 0.882812 0.878906 v 0.886719 l 0.882812 0.878906 v 1.589844 c 0.273438 0.230469 0.570313 0.433594 0.882813 0.605469 v -0.429688 l 0.882813 -0.878906 v -0.886719 l 0.882812 -0.878906 l -0.882812 -0.886719 l -0.882813 -0.878906 h -1.765625 v -0.886719 h 0.882812 v -0.878906 l 0.882813 -0.886719 h 0.882813 v -0.878906 l -0.882813 -0.886719 z m 5.066407 0 v 0.886719 h -0.882813 l -0.882813 0.878906 l 0.882813 0.886719 l 0.882813 -0.886719 h 1.765624 l 0.910157 1.324219 v 0.441406 l 0.855469 0.886719 v -1.535156 c -0.335938 -1.152344 -1.039063 -2.164063 -2 -2.882813 z m 3.53125 4.417969 l -0.910157 0.050781 l -0.855469 -0.9375 v -0.21875 h -1.078124 l -0.441407 -0.664062 h -1.128906 l -0.882813 0.882812 v 0.882813 l 0.882813 0.882812 h 0.882813 l 0.46875 0.664063 v 1.765625 l 1.191406 1.011719 c 0.371094 -0.296876 0.703125 -0.640626 0.988281 -1.023438 v -2.417969 z m 0 0" fill-opacity="0.35"/>
    </g>
    </svg>
  );
};

const AdwGlobeAltSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwGlobeAltSymbolic;
