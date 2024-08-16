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
      <path d="m 10 3 c -1.5625 0.003906 -2.980469 0.914062 -3.632812 2.332031 c -0.421876 -0.21875 -0.890626 -0.332031 -1.367188 -0.332031 c -1.65625 0 -3 1.34375 -3 3 c 0 0.347656 0.0625 0.695312 0.183594 1.019531 c -1.246094 0.160157 -2.183594 1.222657 -2.183594 2.480469 c 0 1.378906 1.121094 2.5 2.5 2.5 h 10.5 c 1.65625 0 3 -1.34375 3 -3 c 0 -1.332031 -0.882812 -2.507812 -2.164062 -2.878906 c 0.109374 -0.363282 0.164062 -0.742188 0.164062 -1.121094 c 0 -2.210938 -1.789062 -4 -4 -4 z m 0 1 h 0.003906 c 1.664063 0 2.996094 1.332031 2.996094 3 c 0 0.285156 -0.042969 0.566406 -0.121094 0.839844 l -0.28125 0.960937 l 0.960938 0.28125 c 0.859375 0.25 1.441406 1.023438 1.441406 1.917969 c 0 1.117188 -0.882812 2 -2 2 h -10.5 c -0.839844 0 -1.5 -0.660156 -1.5 -1.5 c 0 -0.761719 0.554688 -1.390625 1.3125 -1.488281 l 1.242188 -0.15625 l -0.429688 -1.179688 c -0.082031 -0.21875 -0.125 -0.445312 -0.125 -0.675781 c 0 -1.117188 0.882812 -2 2 -2 c 0.316406 0 0.628906 0.074219 0.914062 0.21875 l 0.929688 0.480469 l 0.433594 -0.949219 c 0.488281 -1.066406 1.550781 -1.746094 2.722656 -1.75 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCloudoutlinethinsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCloudoutlinethinsymbolic;
