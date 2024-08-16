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
      <g fill="#2e3436">
        <path d="m 11 7 c -1.921875 0 -3.5 1.578125 -3.5 3.5 s 1.578125 3.5 3.5 3.5 c 0.601562 0 1.167969 -0.152344 1.664062 -0.425781 l 1.628907 1.632812 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 c 0.1875 -0.1875 0.292969 -0.441406 0.292969 -0.707031 s -0.105469 -0.519531 -0.292969 -0.707031 l -1.632812 -1.632813 c 0.269531 -0.496094 0.425781 -1.0625 0.425781 -1.660156 c 0 -1.921875 -1.578125 -3.5 -3.5 -3.5 z m 0 2 c 0.839844 0 1.5 0.660156 1.5 1.5 s -0.660156 1.5 -1.5 1.5 s -1.5 -0.660156 -1.5 -1.5 s 0.660156 -1.5 1.5 -1.5 z m 0 0"/>
        <path d="m 5 1 c -0.550781 0 -1 0.449219 -1 1 v 1 h 8 v -1 c 0 -0.550781 -0.449219 -1 -1 -1 z m -3 3 c -1.109375 0 -2 0.890625 -2 2 v 4 c 0 1.109375 0.890625 2 2 2 v 1 c 0 1.089844 0.910156 2 2 2 h 7 c -1.539062 0 -2.914062 -0.796875 -3.730469 -2 h -3.269531 v -3 h 2.53125 c 0.25 -2.230469 2.175781 -4 4.46875 -4 c 2.460938 0 4.5 2.039062 4.5 4.5 c 0 0.316406 -0.035156 0.628906 -0.097656 0.929688 c 0.367187 -0.363282 0.597656 -0.867188 0.597656 -1.429688 v -4 c 0 -1.109375 -0.890625 -2 -2 -2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwDocumentPrintPreviewSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDocumentPrintPreviewSymbolic;
