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
        <path d="m 2.992188 12.125 l 0.875 -7.007812 c 0.007812 -0.058594 0.074218 -0.117188 0.132812 -0.117188 c 0.085938 0 0.164062 0.0625 0.179688 0.152344 l 0.667968 4.027344 c 0.175782 1.050781 1.085938 1.820312 2.152344 1.820312 c 1.046875 0 1.957031 -0.710938 2.210938 -1.726562 l 0.515624 -2.0625 c 0.03125 -0.121094 0.148438 -0.210938 0.273438 -0.210938 c 0.085938 0 0.164062 0.0625 0.179688 0.152344 l 0.667968 4.027344 c 0.175782 1.050781 1.085938 1.820312 2.152344 1.820312 c 1.058594 0 1.96875 -0.746094 2.175781 -1.785156 l 0.804688 -4.019532 c 0.109375 -0.539062 -0.242188 -1.066406 -0.785157 -1.175781 c -0.539062 -0.109375 -1.066406 0.242188 -1.175781 0.785157 l -0.804687 4.019531 c -0.019532 0.101562 -0.109375 0.175781 -0.214844 0.175781 c -0.085938 0 -0.164062 -0.0625 -0.179688 -0.152344 l -0.667968 -4.027344 c -0.175782 -1.050781 -1.085938 -1.820312 -2.152344 -1.820312 c -1.046875 0 -1.957031 0.710938 -2.210938 1.726562 l -0.515624 2.0625 c -0.03125 0.121094 -0.148438 0.210938 -0.273438 0.210938 c -0.085938 0 -0.164062 -0.0625 -0.179688 -0.152344 l -0.667968 -4.027344 c -0.175782 -1.050781 -1.085938 -1.820312 -2.152344 -1.820312 c -1.082031 0 -1.980469 0.792969 -2.117188 1.867188 l -0.875 7.007812 c -0.070312 0.550781 0.320313 1.050781 0.867188 1.117188 c 0.550781 0.070312 1.050781 -0.320313 1.117188 -0.867188 z m 0 0"/>
        <g fill-rule="evenodd">
            <path d="m 13 13 h 2 v 2 h -2 z m -4 0 h 2 v 2 h -2 z m -4 0 h 2 v 2 h -2 z m -4 0 h 2 v 2 h -2 z m 0 0"/>
            <path d="m 13 1 h 2 v 2 h -2 z m -4 0 h 2 v 2 h -2 z m -4 0 h 2 v 2 h -2 z m -4 0 h 2 v 2 h -2 z m 0 0"/>
        </g>
    </g>
    </svg>
  );
};

const AdwNormalizesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNormalizesymbolic;
