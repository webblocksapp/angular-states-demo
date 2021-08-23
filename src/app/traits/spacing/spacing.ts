import { ElementRef } from '@angular/core';
import { ColSize, PaddingSize } from '@app-types';
import { GuttersSize } from '@app/types/gutters-size';

export interface Spacing {
  class: string;
  xs: ColSize;
  sm: ColSize;
  md: ColSize;
  lg: ColSize;
  xl: ColSize;
  xxl: ColSize;
  padding: PaddingSize;
  paddingTop: PaddingSize;
  paddingRight: PaddingSize;
  paddingBottom: PaddingSize;
  paddingLeft: PaddingSize;
  paddingX: PaddingSize;
  paddingY: PaddingSize;
  p: PaddingSize;
  pt: PaddingSize;
  pr: PaddingSize;
  pb: PaddingSize;
  pl: PaddingSize;
  px: PaddingSize;
  py: PaddingSize;
  spacing: GuttersSize;
  spacingX: GuttersSize;
  spacingY: GuttersSize;
  initElRef: (hostElRef: ElementRef) => void;
}
