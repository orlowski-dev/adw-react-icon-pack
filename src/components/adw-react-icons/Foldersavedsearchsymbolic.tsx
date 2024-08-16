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
      <path d="m 6.605469 0.0585938 c -3.578125 0 -6.5 2.9218752 -6.5 6.5000002 s 2.921875 6.496094 6.5 6.496094 c 1.429687 0 2.753906 -0.464844 3.828125 -1.253907 l 2.972656 2.972657 c 0.957031 0.941406 2.363281 -0.496094 1.40625 -1.4375 l -2.957031 -2.957032 c 0.78125 -1.074218 1.25 -2.394531 1.25 -3.820312 c 0 -3.578125 -2.925781 -6.5000002 -6.5 -6.5000002 z m 0 2.0000002 c 2.496093 0 4.5 2.003906 4.5 4.5 s -2.003907 4.496094 -4.5 4.496094 c -2.5 0 -4.5 -2 -4.5 -4.496094 s 2 -4.5 4.5 -4.5 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwFoldersavedsearchsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFoldersavedsearchsymbolic;
