import * as React from "react";
import { TechImageProps } from "./types";

export const TechImage: React.FC<TechImageProps> = ({
  src,
  alt,
  className,
}) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className={`object-contain shrink-0 ${className}`}
  />
);
