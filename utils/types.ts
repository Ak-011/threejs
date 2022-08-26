export type NextImageSrc =
    | {
          src: string;
          height: number;
          width: number;
          blurDataURL?: string;
      }
    | string;

export type windowDimensionsTypes = {
    width: number | undefined;
    height: number | undefined;
};
