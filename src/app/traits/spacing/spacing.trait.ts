import { ElementRef } from '@angular/core';
import { ColSize, PaddingSize } from '@app-types';
import { Spacing } from '@app/traits/spacing/spacing';
import { GuttersSize } from '@app/types/gutters-size';
import { overrideCssClass } from '@app/utils/functions';

export class SpacingTrait implements Spacing {
  class: string;
  private elRef: ElementRef;

  /**
   * Column properties
   */
  set xs(value: ColSize) {
    this.setSpacingClass('col-xs-', value);
  }

  set sm(value: ColSize) {
    this.setSpacingClass('col-sm-', value);
  }

  set md(value: ColSize) {
    this.setSpacingClass('col-md-', value);
  }

  set lg(value: ColSize) {
    this.setSpacingClass('col-lg-', value);
  }

  set xl(value: ColSize) {
    this.setSpacingClass('col-xl-', value);
  }

  set xxl(value: ColSize) {
    this.setSpacingClass('col-xxl-', value);
  }

  /**
   * Padding properties
   */
  set padding(value: PaddingSize) {
    this.setSpacingClass('p-', value);
  }

  set paddingTop(value: PaddingSize) {
    this.setSpacingClass('pt-', value);
  }

  set paddingRight(value: PaddingSize) {
    this.setSpacingClass('pe-', value);
  }

  set paddingBottom(value: PaddingSize) {
    this.setSpacingClass('pb-', value);
  }

  set paddingLeft(value: PaddingSize) {
    this.setSpacingClass('ps-', value);
  }

  set paddingX(value: PaddingSize) {
    this.setSpacingClass('px-', value);
  }

  set paddingY(value: PaddingSize) {
    this.setSpacingClass('py-', value);
  }

  set p(value: PaddingSize) {
    this.setSpacingClass('p-', value);
  }

  set pt(value: PaddingSize) {
    this.setSpacingClass('pt-', value);
  }

  set pr(value: PaddingSize) {
    this.setSpacingClass('pr-', value);
  }

  set pb(value: PaddingSize) {
    this.setSpacingClass('pb-', value);
  }

  set pl(value: PaddingSize) {
    this.setSpacingClass('pl-', value);
  }

  set px(value: PaddingSize) {
    this.setSpacingClass('px-', value);
  }

  set py(value: PaddingSize) {
    this.setSpacingClass('py-', value);
  }

  /**
   * Gutters properties
   */
  set spacing(value: GuttersSize) {
    this.setSpacingClass('g-', value);
  }

  set spacingX(value: GuttersSize) {
    this.setSpacingClass('gx-', value);
  }

  set spacingY(value: GuttersSize) {
    this.setSpacingClass('gy-', value);
  }

  /**
   * Trait methods must be called inside the constructor of the component
   * that implemented the StylingTrait to take effect.
   */
  initElRef(hostElRef: ElementRef): void {
    this.elRef = hostElRef;
  }

  private setSpacingClass(prefix: string, value: any) {
    overrideCssClass(this.elRef, new RegExp(prefix), `${prefix}${value}`);
  }
}
