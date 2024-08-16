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
        <path d="m 1.65625 11.714844 l 2.34375 -2.292969 v -6.421875 l -1.707031 0.707031 l 3 3 l -0.292969 -0.707031 v 5.414062 l 3.707031 -3.707031 l -1.707031 -0.707031 v 3.496094 c 0 1.386718 1.117188 2.503906 2.507812 2.503906 c 1.386719 -0.003906 2.496094 -1.121094 2.492188 -2.503906 v -1.988282 c 0 -0.273437 0.234375 -0.507812 0.503906 -0.507812 c 0.269532 0.003906 0.496094 0.230469 0.496094 0.507812 v 3.492188 c 0 1.109375 0.890625 2 2 2 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 v -3.484375 c 0.007812 -1.386719 -1.097656 -2.507813 -2.492188 -2.515625 c -1.390624 0 -2.507812 1.117188 -2.507812 2.507812 v 1.992188 c 0 0.269531 -0.226562 0.5 -0.496094 0.5 c -0.273437 0 -0.503906 -0.230469 -0.503906 -0.503906 v -5.910156 l -3.707031 3.707031 l 1.707031 0.707031 v -3.414062 l -5 -5 v 8.414062 l 0.300781 -0.714844 l -2.042969 2 c -0.394531 0.386719 -0.402343 1.019532 -0.015624 1.414063 c 0.386718 0.394531 1.019531 0.402343 1.414062 0.015625 z m 0 0"/>
        <g fill-rule="evenodd">
            <path d="m 7.980469 1 h 1.019531 v 1 h -1.019531 z m 0 0"/>
            <path d="m 7.980469 3 h 1.019531 v 1 h -1.019531 z m 0 0"/>
            <path d="m 8 5 h 1.019531 v 1 h -1.019531 z m 0 0"/>
            <path d="m 7.980469 12 h 1.019531 v 1 h -1.019531 z m 0 0"/>
            <path d="m 7.980469 14 h 1.019531 v 1 h -1.019531 z m 0 0"/>
        </g>
    </g>
    </svg>
  );
};

const AdwSmoothenSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSmoothenSymbolic;
