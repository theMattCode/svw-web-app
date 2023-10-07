export type ImageDimensions = {
  width: number;
  height: number;
};

export function calcImageDimensionsForWidth(
  source: ImageDimensions,
  targetWidth: number
): ImageDimensions {
  const ratio = source.width / source.height;
  return {
    width: targetWidth,
    height: Math.floor(targetWidth / ratio),
  };
}

export function calcImageDimensionsForHeight(
  source: ImageDimensions,
  targetHeight: number
): ImageDimensions {
  const ratio = source.width / source.height;
  return {
    width: Math.floor(targetHeight * ratio),
    height: targetHeight,
  };
}
