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
      <path d="m 11.847656 1 c -1.109375 -0.027344 -2.1875 0.371094 -3.003906 1.121094 l -0.863281 0.769531 l -0.859375 -0.769531 c -1.136719 -1.019532 -2.734375 -1.355469 -4.1875 -0.875 c -1.453125 0.476562 -2.539063 1.695312 -2.8476565 3.195312 c -0.3085935 1.496094 0.2109375 3.046875 1.3554685 4.058594 l 6.539063 5.828125 l 6.542969 -5.828125 c 1.332031 -1.152344 1.820312 -3.003906 1.226562 -4.664062 c -0.589844 -1.660157 -2.140625 -2.785157 -3.902344 -2.835938 z m 0 0" fill="#2e3436" fill-rule="evenodd"/>
    </svg>
  );
};

const AdwEmblemFavoriteSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEmblemFavoriteSymbolic;
