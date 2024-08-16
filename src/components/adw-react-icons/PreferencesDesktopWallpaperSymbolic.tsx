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
      <g color="#000" font-weight="400" font-family="sans-serif" fill="#2e3436"><path d="M1.063 1.031a1 1 0 00-1 1v12a1 1 0 001 1H15.03a1 1 0 001-1v-12a1 1 0 00-1-1zm1 2H14.03v10H2.062z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1;marker:none" overflow="visible"/><path d="M9.406 7.969a1.919 1.919 0 00-1.474.676c-.2.234-.315.474-.418.664-.102.187-.2.342-.305.449a.87.87 0 01-.363.222h-.002c-.133.04-.313.051-.532.051h-5.28v1h5.28c.236 0 .518-.002.82-.093.303-.092.575-.258.792-.479a2.88 2.88 0 00.469-.672c.114-.21.205-.382.3-.494a.966.966 0 01.71-.324c.262 0 .546.131.724.332.105.118.205.296.33.51.127.215.278.455.502.671.226.22.503.384.81.473.308.09.596.092.84.092l2.422-.016v-1l-2.422.016a2.091 2.091 0 01-.56-.053.96.96 0 01-.395-.23 2.205 2.205 0 01-.334-.461c-.113-.192-.24-.433-.447-.666a1.979 1.979 0 00-1.467-.668zM5.531 5.031c-.822 0-1.5.678-1.5 1.5 0 .823.678 1.5 1.5 1.5.823 0 1.5-.677 1.5-1.5 0-.822-.677-1.5-1.5-1.5zm0 1c.282 0 .5.218.5.5 0 .282-.218.5-.5.5a.493.493 0 01-.5-.5c0-.282.218-.5.5-.5z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1;marker:none" overflow="visible"/></g>
    </svg>
  );
};

const AdwPreferencesDesktopWallpaperSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPreferencesDesktopWallpaperSymbolic;
