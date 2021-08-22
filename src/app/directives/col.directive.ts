import { Directive, ElementRef } from '@angular/core';
import { Mixin } from '@app/decorators';
import {
  DefaultCssClass,
  DefaultCssClassTrait,
} from '@app/traits/default-css-class';

@Directive({
  selector: '[col]',
})
@Mixin([DefaultCssClassTrait])
export class ColDirective implements DefaultCssClass {
  class: string;
  defaultCssClass: string;
  initDefaultCssClass: (hostElRef: ElementRef, className: string) => void;

  constructor(elRef: ElementRef) {
    this.initDefaultCssClass(elRef, 'col');
  }
}
