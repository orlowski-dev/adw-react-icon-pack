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
        <path d="m 1.5 0.46875 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 z m 0 0"/>
        <path d="m 6.226562 1.167969 c -1.425781 0.023437 -2.246093 1.316406 -2.570312 2.613281 v 0.039062 l -0.191406 0.65625 l 3.523437 3.523438 h 7.027344 c 0.554687 0 1 -0.445312 1 -1 s -0.445313 -1 -1 -1 h -1 l -0.640625 -2.207031 c -0.195312 -0.847657 -1.046875 -1.738281 -2.140625 -1.738281 c -0.320313 0 -0.632813 0.070312 -0.917969 0.203124 c -0.40625 0.191407 -0.796875 0.128907 -1.097656 -0.207031 c -0.484375 -0.550781 -1.191406 -0.878906 -1.949219 -0.882812 c -0.015625 0 -0.03125 0 -0.042969 0 z m -4.210937 4.832031 c -0.554687 0 -1 0.445312 -1 1 s 0.445313 1 1 1 h 2.847656 l -2 -2 z m 2.5 2.984375 c -1.378906 0 -2.5 1.121094 -2.5 2.5 s 1.121094 2.5 2.5 2.5 c 1.070313 0 2.019531 -0.679687 2.367187 -1.691406 c 0.039063 -0.070313 0.0625 -0.152344 0.066407 -0.234375 c 0.027343 -0.109375 0.042969 -0.222656 0.054687 -0.335938 c 0.078125 -0.246094 0.242188 -0.457031 0.476563 -0.589844 c 0.121093 -0.070312 0.257812 -0.105468 0.394531 -0.125 l -0.785156 -0.785156 c -0.035156 0.015625 -0.074219 0.023438 -0.105469 0.039063 c -0.078125 0.046875 -0.136719 0.105469 -0.207031 0.15625 c -0.414063 -0.875 -1.292969 -1.433594 -2.261719 -1.433594 z m 7 0 c -0.925781 0 -1.777344 0.515625 -2.210937 1.335937 l 0.769531 0.761719 c 0.179687 -0.648437 0.769531 -1.09375 1.441406 -1.09375 c 0.828125 -0.003906 1.5 0.667969 1.496094 1.496094 c 0 0.671875 -0.445313 1.261719 -1.09375 1.441406 l 0.765625 0.769531 c 0.820312 -0.433593 1.332031 -1.285156 1.332031 -2.210937 c 0 -1.378906 -1.121094 -2.5 -2.5 -2.5 z m -7 1.003906 c 0.828125 -0.003906 1.5 0.667969 1.496094 1.496094 c 0.003906 0.027344 0 0.054687 0 0.082031 c -0.019531 0.070313 -0.019531 0.148438 -0.03125 0.226563 c -0.144531 0.691406 -0.753907 1.191406 -1.464844 1.191406 c -0.828125 0 -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.496094 1.5 -1.496094 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwScreenPrivacy7DisabledSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwScreenPrivacy7DisabledSymbolic;
