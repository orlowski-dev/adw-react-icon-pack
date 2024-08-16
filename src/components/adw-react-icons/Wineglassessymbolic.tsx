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
      <path d="m 1 0 v 7 c 0 1.863281 1.273438 3.421875 3 3.859375 v 3.140625 h -1 s -1 0 -1 1 v 1 h 12 v -1 c 0 -1 -1 -1 -1 -1 h -1 v -3.140625 c 1.726562 -0.4375 3 -1.996094 3 -3.859375 v -7 z m 6 2 v 3 h -4 v -3 z m 6 3 h -4 v -3 h 4 z m -10 1.023438 h 4 v 0.976562 c 0 1.085938 -0.890625 1.980469 -1.980469 1.980469 h -0.042969 c -1.085937 0 -1.976562 -0.894531 -1.976562 -1.980469 z m 6 0 h 4 v 0.976562 c 0 1.085938 -0.890625 1.980469 -1.980469 1.980469 h -0.042969 c -1.085937 0 -1.976562 -0.894531 -1.976562 -1.980469 z m -1 3.617187 c 0.519531 0.585937 1.214844 1.019531 2 1.21875 v 3.140625 h -1 c -1 0 -1 1 -1 1 s 0 -1 -1 -1 h -1 v -3.140625 c 0.785156 -0.199219 1.480469 -0.632813 2 -1.21875 z m 0 0" fill="currentColor" fill-rule="evenodd"/>
    </svg>
  );
};

const AdwWineglassessymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwWineglassessymbolic;
