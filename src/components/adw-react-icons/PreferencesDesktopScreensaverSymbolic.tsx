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
      <g fill="#474747"><path d="M12.109 5c.62.75.995 1.71.995 2.76a4.344 4.344 0 01-4.344 4.344c-1.05 0-2.01-.376-2.76-.995A5.055 5.055 0 0010.932 15 5.068 5.068 0 0016 9.932 5.055 5.055 0 0012.109 5zM6.511 1.79c.4 0 .721.322.721.721a.72.72 0 01-.72.721.72.72 0 01-.722-.72c0-.4.322-.722.721-.722zm4 1.023a.697.697 0 110 1.398.697.697 0 01-.699-.7c0-.387.312-.698.7-.698zm-3 1.977c.4 0 .721.322.721.721a.72.72 0 01-.72.721.72.72 0 01-.722-.72c0-.4.322-.722.721-.722z" style="marker:none" color="#bebebe" overflow="visible"/><path d="M3.505 7.505L2.76 5.25.505 4.505 2.76 3.76l.745-2.255.745 2.255 2.255.745-2.255.745z" style="marker:none" color="#000" overflow="visible"/></g>
    </svg>
  );
};

const AdwPreferencesDesktopScreensaverSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPreferencesDesktopScreensaverSymbolic;
