/// <reference types="next" />
/// <reference types="next/image-types/global" />

// Ensure these declarations are in the global scope
declare module "*.svg" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.jpg" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.jpeg" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.png" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.gif" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.webp" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.avif" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.ico" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.bmp" {
  const content: import("next/image").StaticImageData;
  export default content;
}