/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module "*.svg" {
  import { type StaticImageData } from "next/image";
  const content: StaticImageData;
  export default content;
} 

declare module "*.jpg" {
  import { type StaticImageData } from "next/image";
  const content: StaticImageData;
  export default content;
}

declare module "*.jpeg" {
  import { type StaticImageData } from "next/image";
  const content: StaticImageData;
  export default content;
}

declare module "*.png" {
  import { type StaticImageData } from "next/image";
  const content: StaticImageData;
  export default content;
}

declare module "*.gif" {
  import { type StaticImageData } from "next/image";
  const content: StaticImageData;
  export default content;
}

declare module "*.webp" {
  import { type StaticImageData } from "next/image";
  const content: StaticImageData;
  export default content;
}

declare module "*.avif" {
  import { type StaticImageData } from "next/image";
  const content: StaticImageData;
  export default content;
}

declare module "*.ico" {
  import { type StaticImageData } from "next/image";
  const content: StaticImageData;
  export default content;
}

declare module "*.bmp" {
  import { type StaticImageData } from "next/image";
  const content: StaticImageData;
  export default content;
}