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
        <path d="m -0.015625 4 v 2 c 0 0.550781 0.449219 1 1 1 c 0.546875 0 1 0.453125 1 1 s -0.453125 1 -1 1 c -0.550781 0 -1 0.449219 -1 1 v 2 c 0 1.660156 1.339844 3 3 3 h 10.011719 c 1.660156 0 3 -1.339844 3 -3 v -2 c 0 -0.550781 -0.449219 -1 -1 -1 c -0.546875 0 -1 -0.453125 -1 -1 s 0.453125 -1 1 -1 c 0.550781 0 1 -0.449219 1 -1 v -2 c 0 -1.660156 -1.339844 -3 -3 -3 h -10.011719 c -1.660156 0 -3 1.339844 -3 3 z m 13.011719 -1 c 0.554687 0 1 0.445312 1 1 v 2 l 1 -1 c -1.664063 0 -3 1.339844 -3 3 s 1.335937 3 3 3 l -1 -1 v 2 c 0 0.554688 -0.445313 1 -1 1 h -10.011719 c -0.554687 0 -1 -0.445312 -1 -1 v -2 l -1 1 c 1.660156 0 3 -1.339844 3 -3 s -1.339844 -3 -3 -3 l 1 1 v -2 c 0 -0.554688 0.445313 -1 1 -1 z m 0 0"/>
        <path d="m 5.015625 12 v -1.535156 l 3.460937 -3.164063 c 0.375 -0.375 0.210938 -0.996093 -0.210937 -1.210937 c -0.480469 -0.246094 -1.265625 -0.007813 -1.265625 0.910156 h -2 c 0 -0.554688 -0.007812 -1.351562 0.238281 -1.75 c 0.253907 -0.398438 0.605469 -0.707031 1.0625 -0.921875 c 0.453125 -0.21875 0.988281 -0.328125 1.597657 -0.328125 c 0.632812 0 1.179687 0.101562 1.644531 0.300781 c 0.460937 0.203125 0.816406 0.488281 1.070312 0.855469 c 0.253907 0.363281 0.378907 0.789062 0.378907 1.28125 c 0 0.304688 -0.0625 0.605469 -0.191407 0.90625 c -0.121093 0.296875 -0.347656 0.625 -0.671875 0.988281 c -0.324218 0.367188 -0.789062 0.796875 -1.394531 1.292969 l -0.464844 0.386719 l 2.71875 -0.011719 v 2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTicketsecondclasssymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTicketsecondclasssymbolic;
