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
      <g font-weight="400" fill="#474747"><path d="M3.702 1C2.17 1 .984 2.32.984 3.844v8.344c0 1.524 1.185 2.843 2.718 2.843h8.58c1.532 0 2.75-1.32 2.75-2.844V3.845c0-1.525-1.218-2.844-2.75-2.844zm.782 1.031c3.526.256 5.317.134 7.047 0 .754-.058 1.532.616 1.532 1.438v7.375c0 .665-.532 1.095-1.188 1.187-2.836.397-4.753.44-7.673 0-.655-.099-1.187-.522-1.187-1.187V3.5c0-.822.714-1.524 1.469-1.469z" style="line-height:normal;-inkscape-font-specification:'Bitstream Vera Sans';text-indent:0;text-align:start;text-decoration-line:none;text-transform:none;marker:none" color="#bebebe" font-family="Bitstream Vera Sans" overflow="visible"/><path d="M10.564 5.977l-2.939.044.016 1 2.879-.043c.2.018.33.076.396.135.067.06.105.121.105.293l-.008.604H8.517l.037.002a1.457 1.457 0 00-1.164.43 1.558 1.558 0 00-.416 1.023c-.013.367.092.75.352 1.053.26.303.687.496 1.162.482h3.482l.051-3.59v-.004c0-.402-.16-.786-.435-1.035-.276-.249-.63-.364-.998-.393zM8.48 9.01h2.519l-.014.99H8.457c-.22.007-.302-.051-.371-.133a.553.553 0 01-.112-.367.587.587 0 01.141-.371c.079-.083.163-.134.363-.12zm2.862-5.985l-3 1 .316.95 3-1z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal;marker:none" color="#000" font-family="sans-serif" overflow="visible"/></g>
    </svg>
  );
};

const AdwAccessoriescharactermapsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAccessoriescharactermapsymbolic;
