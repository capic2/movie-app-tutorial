import { describe, expect, it } from 'vitest';
import { getImageUrl, ImageType } from './images';

describe('images', () => {
  describe('getImageUrl', () => {
    it.each([
      { type: ImageType.W92, expected: 'w92' },
      { type: ImageType.W300, expected: 'w300' },
      { type: ImageType.W780, expected: 'w780' },
    ])('returns the  image url for %i', ({ type, expected }) => {
      expect(getImageUrl(type, '/path-to-image')).toStrictEqual(
        `https://image.tmdb.org/t/p/${expected}/path-to-image`
      );
    });

    it('returns default size if the type is not defined', () => {
      expect(getImageUrl(null, '/path-to-image')).toStrictEqual(
        `https://image.tmdb.org/t/p/original/path-to-image`
      );
    });
  });
});
