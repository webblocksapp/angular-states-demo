import { Directive, ElementRef } from '@angular/core';
import { Mixin } from '@app/decorators';
import {
  DefaultCssClass,
  DefaultCssClassTrait,
} from '@app/traits/default-css-class';
import { Display, DisplayTrait } from '@app/traits/display';
import * as CSS from 'csstype';

@Directive({
  selector: '[containerMd]',
})
@Mixin([DefaultCssClassTrait, DisplayTrait])
export class ContainerMdDirective implements DefaultCssClass, Display {
  class: string;
  display: CSS.Properties['display'];

  initDefaultCssClass: (hostElRef: ElementRef, className: string) => void;
  initDefaultDisplay: (
    hostElRef: ElementRef,
    display?: CSS.Properties['display']
  ) => void;

  constructor(elRef: ElementRef) {
    this.initDefaultCssClass(elRef, 'container-md');
    this.initDefaultDisplay(elRef, 'block');
  }
}
