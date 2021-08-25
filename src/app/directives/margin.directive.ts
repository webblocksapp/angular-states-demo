import { Directive, ElementRef, Input } from '@angular/core';
import { MarginSize } from '@app-types';
import { overrideCssClass } from '@app/utils/functions';

@Directive({
  selector: `
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
  `,
})
export class MarginDirective {
  @Input()
  set margin(value: MarginSize) {
    this.setMarginClass('m-', value);
  }

  @Input()
  set marginTop(value: MarginSize) {
    this.setMarginClass('mt-', value);
  }

  @Input()
  set marginRight(value: MarginSize) {
    this.setMarginClass('me-', value);
  }

  @Input()
  set marginBottom(value: MarginSize) {
    this.setMarginClass('mb-', value);
  }

  @Input()
  set marginLeft(value: MarginSize) {
    this.setMarginClass('ms-', value);
  }

  @Input()
  set marginX(value: MarginSize) {
    this.setMarginClass('mx-', value);
  }

  @Input()
  set marginY(value: MarginSize) {
    this.setMarginClass('my-', value);
  }

  @Input()
  set m(value: MarginSize) {
    this.setMarginClass('m-', value);
  }

  @Input()
  set mt(value: MarginSize) {
    this.setMarginClass('mt-', value);
  }

  @Input()
  set mr(value: MarginSize) {
    this.setMarginClass('mr-', value);
  }

  @Input()
  set mb(value: MarginSize) {
    this.setMarginClass('mb-', value);
  }

  @Input()
  set ml(value: MarginSize) {
    this.setMarginClass('ml-', value);
  }

  @Input()
  set mx(value: MarginSize) {
    this.setMarginClass('mx-', value);
  }

  @Input()
  set my(value: MarginSize) {
    this.setMarginClass('my-', value);
  }

  constructor(private elRef: ElementRef) {}

  private setMarginClass(prefix: string, value: MarginSize) {
    overrideCssClass(this.elRef, new RegExp(`^${prefix}`), `${prefix}${value}`);
  }
}
