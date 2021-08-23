import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { Mixin } from '@app/decorators';
import {
  DefaultCssClass,
  DefaultCssClassTrait,
} from '@app/traits/default-css-class';
import { Display, DisplayTrait } from '@app/traits/display';
import { Styling, StylingTrait } from '@app/traits/styling';
import * as CSS from 'csstype';

@Component({
  selector: 'card-body',
  template: `<ng-content></ng-content>`,
})
@Mixin([StylingTrait, DefaultCssClassTrait, DisplayTrait])
export class CardBodyAtom implements Styling, DefaultCssClass, Display {
  /**
   * Declared trait properties
   */
  @HostBinding()
  @Input()
  class: string;

  @Input() style: CSS.Properties;
  @Input() display: CSS.Properties['display'];

  initElRef: (elRef: ElementRef) => void;
  initDefaultDisplay: (
    hostElRef: ElementRef,
    display?: CSS.Properties['display']
  ) => void;
  initDefaultCssClass: (hostElRef: ElementRef, className: string) => void;

  constructor(private elRef: ElementRef) {
    this.initElRef(this.elRef);
    this.initDefaultDisplay(this.elRef, 'block');
    this.initDefaultCssClass(this.elRef, 'card-body');
  }
}
