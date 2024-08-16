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
        <path d="m 7.957031 2 c -0.082031 0 -0.164062 0.003906 -0.246093 0.007812 c -0.1875 0.011719 -0.375 0.03125 -0.5625 0.0625 c -1.582032 0.226563 -3.007813 1.070313 -3.96875 2.34375 c -0.804688 1.074219 -1.183594 2.332032 -1.179688 3.585938 h 2.003906 c 0 -0.832031 0.253906 -1.671875 0.796875 -2.398438 c 1.335938 -1.777343 3.820313 -2.113281 5.597657 -0.78125 c 0.429687 0.320313 0.769531 0.734376 1.03125 1.1875 h -1.4375 c -0.550782 0 -1 0.449219 -1 1 v 1 h 6 v -6 h -1 c -0.550782 0 -1 0.449219 -1 1 v 1.6875 c -1.113282 -1.695312 -3.007813 -2.710937 -5.039063 -2.695312 z m 0 0"/>
        <path d="m 8.035156 15.007812 c 0.082032 0 0.164063 -0.003906 0.246094 -0.007812 c 0.1875 -0.011719 0.375 -0.03125 0.5625 -0.0625 c 1.582031 -0.226562 3.007812 -1.066406 3.96875 -2.34375 c 0.804688 -1.074219 1.183594 -2.332031 1.179688 -3.585938 h -2.003907 c -0.003906 0.832032 -0.257812 1.675782 -0.796875 2.398438 c -1.335937 1.777344 -3.820312 2.113281 -5.597656 0.78125 c -0.429688 -0.320312 -0.769531 -0.734375 -1.03125 -1.1875 h 1.4375 c 0.550781 0 1 -0.449219 1 -1 v -1 h -6 v 6 h 1 c 0.550781 0 1 -0.449219 1 -1 v -1.6875 c 1.113281 1.695312 3.007812 2.710938 5.035156 2.695312 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwUpdatesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwUpdatesymbolic;
