import { ImageDimensions } from "#/lib/image";

export type Image = ImageDimensions & {
  src: string;
  alt?: string;
};
