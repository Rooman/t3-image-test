// For importing SVGs as React components (if using @svgr/webpack or similar)
declare module "*.svg?react" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

// For importing SVG as URL string
declare module "*.svg?url" {
  const content: string;
  export default content;
}