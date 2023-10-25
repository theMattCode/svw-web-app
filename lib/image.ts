export type ImageDimensions = {
  width: number;
  height: number;
};

export function calcImageDimensionsForWidth(source: ImageDimensions | undefined, targetWidth: number): ImageDimensions {
  if (source === undefined) {
    return { width: 0, height: 0 };
  }
  const ratio = source.width / source.height;
  return {
    width: targetWidth,
    height: Math.floor(targetWidth / ratio),
  };
}

export function calcImageDimensionsForHeight(
  source: ImageDimensions | undefined,
  targetHeight: number
): ImageDimensions {
  if (source === undefined) {
    return { width: 0, height: 0 };
  }
  const ratio = source.width / source.height;
  return {
    width: Math.floor(targetHeight * ratio),
    height: targetHeight,
  };
}
