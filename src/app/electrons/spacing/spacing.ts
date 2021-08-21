import { ColSize, PaddingSize } from '@app-types';

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
  p: PaddingSize;
  pt: PaddingSize;
  pr: PaddingSize;
  pb: PaddingSize;
  pl: PaddingSize;
}
