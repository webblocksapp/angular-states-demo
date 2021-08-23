import { Directive, ElementRef, Input } from '@angular/core';
import { ColSize, PaddingSize } from '@app-types';
import { GuttersSize } from '@app/types/gutters-size';
import { overrideCssClass } from '@app/utils/functions';

@Directive({
  exportAs: 'withSpacing',
  selector: `
    [xs],
    [sm],
    [md],
    [lg],
    [xl],
    [xxl],
    [padding],
    [paddingTop],
    [paddingRight],
    [paddingBottom],
    [paddingLeft],
    [paddingX],
    [paddingY],
    [p],
    [pt],
    [pr],
    [pb],
    [pl],
    [px],
    [py],
    [spacing],
    [spacingX],
    [spacingY]
  `,
})
export class SpacingDirective {
  /**
   * Column properties
   */
  @Input()
  set xs(value: ColSize) {
    this.setSpacingClass('col-xs-', value);
  }

  @Input()
  set sm(value: ColSize) {
    this.setSpacingClass('col-sm-', value);
  }

  @Input()
  set md(value: ColSize) {
    this.setSpacingClass('col-md-', value);
  }

  @Input()
  set lg(value: ColSize) {
    this.setSpacingClass('col-lg-', value);
  }

  @Input()
  set xl(value: ColSize) {
    this.setSpacingClass('col-xl-', value);
  }

  @Input()
  set xxl(value: ColSize) {
    this.setSpacingClass('col-xxl-', value);
  }

  /**
   * Padding properties
   */
  @Input()
  set padding(value: PaddingSize) {
    this.setSpacingClass('p-', value);
  }

  @Input()
  set paddingTop(value: PaddingSize) {
    this.setSpacingClass('pt-', value);
  }

  @Input()
  set paddingRight(value: PaddingSize) {
    this.setSpacingClass('pe-', value);
  }

  @Input()
  set paddingBottom(value: PaddingSize) {
    this.setSpacingClass('pb-', value);
  }

  @Input()
  set paddingLeft(value: PaddingSize) {
    this.setSpacingClass('ps-', value);
  }

  @Input()
  set paddingX(value: PaddingSize) {
    this.setSpacingClass('px-', value);
  }

  @Input()
  set paddingY(value: PaddingSize) {
    this.setSpacingClass('py-', value);
  }

  @Input()
  set p(value: PaddingSize) {
    this.setSpacingClass('p-', value);
  }

  @Input()
  set pt(value: PaddingSize) {
    this.setSpacingClass('pt-', value);
  }

  @Input()
  set pr(value: PaddingSize) {
    this.setSpacingClass('pr-', value);
  }

  @Input()
  set pb(value: PaddingSize) {
    this.setSpacingClass('pb-', value);
  }

  @Input()
  set pl(value: PaddingSize) {
    this.setSpacingClass('pl-', value);
  }

  @Input()
  set px(value: PaddingSize) {
    this.setSpacingClass('px-', value);
  }

  @Input()
  set py(value: PaddingSize) {
    this.setSpacingClass('py-', value);
  }

  /**
   * Gutters properties
   */
  @Input()
  set spacing(value: GuttersSize) {
    this.setSpacingClass('g-', value);
  }

  @Input()
  set spacingX(value: GuttersSize) {
    this.setSpacingClass('gx-', value);
  }

  @Input()
  set spacingY(value: GuttersSize) {
    this.setSpacingClass('gy-', value);
  }

  constructor(private elRef: ElementRef) {}

  private setSpacingClass(prefix: string, value: any) {
    overrideCssClass(this.elRef, new RegExp(prefix), `${prefix}${value}`);
  }
}
