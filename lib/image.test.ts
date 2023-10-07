import {
  calcImageDimensionsForHeight,
  calcImageDimensionsForWidth,
} from "#/lib/image";
import { describe, expect, test } from "@jest/globals";

describe("Calculate image dimensions", () => {
  test.each`
    sourceWidth | sourceHeight | targetWidth | expectedWidth | expectedHeight
    ${1000}     | ${500}       | ${200}      | ${200}        | ${100}
    ${1234}     | ${543}       | ${300}      | ${300}        | ${132}
  `(
    "by width: $sourceWidth x $sourceHeight => $expectedWidth x $expectedHeight",
    ({
      sourceWidth,
      sourceHeight,
      targetWidth,
      expectedWidth,
      expectedHeight,
    }) => {
      const actual = calcImageDimensionsForWidth(
        { width: sourceWidth, height: sourceHeight },
        targetWidth
      );
      expect(actual).toEqual({ width: expectedWidth, height: expectedHeight });
    }
  );

  test.each`
    sourceWidth | sourceHeight | targetHeight | expectedWidth | expectedHeight
    ${1000}     | ${500}       | ${200}       | ${400}        | ${200}
    ${1234}     | ${543}       | ${300}       | ${681}        | ${300}
  `(
    "by height: $sourceWidth x $sourceHeight => $expectedWidth x $expectedHeight",
    ({
      sourceWidth,
      sourceHeight,
      targetHeight,
      expectedWidth,
      expectedHeight,
    }) => {
      const actual = calcImageDimensionsForHeight(
        { width: sourceWidth, height: sourceHeight },
        targetHeight
      );
      expect(actual).toEqual({ width: expectedWidth, height: expectedHeight });
    }
  );
});
