import { ColSize, PaddingSize } from '@app-types';
import { Spacing } from '@app/traits/spacing/spacing';
import { GuttersSize } from '@app/types/gutters-size';

export class SpacingTrait implements Spacing {
  class: string;

  /**
   * Column properties
   */
  set xs(value: ColSize) {
    this.class += ` col-xs-${value} `;
  }

  set sm(value: ColSize) {
    this.class += ` col-sm-${value} `;
  }

  set md(value: ColSize) {
    this.class += ` col-md-${value} `;
  }

  set lg(value: ColSize) {
    this.class += ` col-lg-${value} `;
  }

  set xl(value: ColSize) {
    this.class += ` col-xl-${value} `;
  }

  set xxl(value: ColSize) {
    this.class += ` col-xxl-${value} `;
  }

  /**
   * Padding properties
   */
  set padding(value: PaddingSize) {
    if (!this.p) this.class += ` p-${value}`;
  }

  set paddingTop(value: PaddingSize) {
    if (!this.pt) this.class += ` pt-${value}`;
  }

  set paddingRight(value: PaddingSize) {
    if (!this.pr) this.class += ` pe-${value}`;
  }

  set paddingBottom(value: PaddingSize) {
    if (!this.pb) this.class += ` pb-${value}`;
  }

  set paddingLeft(value: PaddingSize) {
    if (!this.pl) this.class += ` ps-${value}`;
  }

  set paddingX(value: PaddingSize) {
    if (!this.px) this.class += ` px-${value}`;
  }

  set paddingY(value: PaddingSize) {
    if (!this.py) this.class += ` py-${value}`;
  }

  set p(value: PaddingSize) {
    if (!this.padding) this.class += ` p-${value}`;
  }

  set pt(value: PaddingSize) {
    if (!this.paddingTop) this.class += ` pt-${value}`;
  }

  set pr(value: PaddingSize) {
    if (!this.paddingRight) this.class += ` pe-${value}`;
  }

  set pb(value: PaddingSize) {
    if (!this.paddingBottom) this.class += ` pb-${value}`;
  }

  set pl(value: PaddingSize) {
    if (!this.paddingLeft) this.class += ` ps-${value}`;
  }

  set px(value: PaddingSize) {
    if (!this.paddingX) this.class += ` px-${value}`;
  }

  set py(value: PaddingSize) {
    if (!this.paddingY) this.class += ` py-${value}`;
  }

  /**
   * Gutters properties
   */
  set spacing(value: GuttersSize) {
    this.class += ` g-${value}`;
  }

  set spacingX(value: GuttersSize) {
    this.class += ` gx-${value}`;
  }

  set spacingY(value: GuttersSize) {
    this.class += ` gy-${value}`;
  }
}
