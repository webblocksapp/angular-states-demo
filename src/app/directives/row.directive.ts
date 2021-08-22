import { Directive, ElementRef } from '@angular/core';
import { Mixin } from '@app/decorators';
import {
  DefaultCssClass,
  DefaultCssClassTrait,
} from '@app/traits/default-css-class';
import { Display } from '@app/traits/display/display';
import { DisplayTrait } from '@app/traits/display/display.trait';
import * as CSS from 'csstype';

@Directive({
  selector: '[row]',
})
@Mixin([DefaultCssClassTrait, DisplayTrait])
export class RowDirective implements DefaultCssClass, Display {
  class: string;
  display: CSS.Properties['display'];

  initDefaultCssClass: (hostElRef: ElementRef, className: string) => void;
  initDefaultDisplay: (
    hostElRef: ElementRef,
    display?: CSS.Properties['display']
  ) => void;

  constructor(elRef: ElementRef) {
    this.initDefaultCssClass(elRef, 'row');
    this.initDefaultDisplay(elRef, 'flex');
  }
}
