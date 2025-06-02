import { type StaticImageData } from "next/image";

declare module "*.svg" {
  const content: StaticImageData;
  export default content;
} 

declare module "*.jpg" {
  const content: StaticImageData;
  export default content;
}

declare module "*.png" {
  const content: StaticImageData;
  export default content;
}