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
    [margin],
    [marginTop],
    [marginRight],
    [marginBottom],
    [marginLeft],
    [marginX],
    [marginY],
    [m],
    [mt],
    [mr],
    [mb],
    [ml],
    [mx],
    [my],
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
   * Margin properties
   */
  @Input()
  set margin(value: PaddingSize) {
    this.setSpacingClass('m-', value);
  }

  @Input()
  set marginTop(value: PaddingSize) {
    this.setSpacingClass('mt-', value);
  }

  @Input()
  set marginRight(value: PaddingSize) {
    this.setSpacingClass('me-', value);
  }

  @Input()
  set marginBottom(value: PaddingSize) {
    this.setSpacingClass('mb-', value);
  }

  @Input()
  set marginLeft(value: PaddingSize) {
    this.setSpacingClass('ms-', value);
  }

  @Input()
  set marginX(value: PaddingSize) {
    this.setSpacingClass('mx-', value);
  }

  @Input()
  set marginY(value: PaddingSize) {
    this.setSpacingClass('my-', value);
  }

  @Input()
  set m(value: PaddingSize) {
    this.setSpacingClass('m-', value);
  }

  @Input()
  set mt(value: PaddingSize) {
    this.setSpacingClass('mt-', value);
  }

  @Input()
  set mr(value: PaddingSize) {
    this.setSpacingClass('mr-', value);
  }

  @Input()
  set mb(value: PaddingSize) {
    this.setSpacingClass('mb-', value);
  }

  @Input()
  set ml(value: PaddingSize) {
    this.setSpacingClass('ml-', value);
  }

  @Input()
  set mx(value: PaddingSize) {
    this.setSpacingClass('mx-', value);
  }

  @Input()
  set my(value: PaddingSize) {
    this.setSpacingClass('my-', value);
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
